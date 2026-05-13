'use client'

import { useFormik } from 'formik'
import { useState } from 'react'
import "./globals.css"

import {
  Todo,
  useAddTodo,
  useDeleteTodo,
  useTodos,
  useUpdateTodo,
} from './hooks/useTodos'

export default function Page() {
  const { data, isLoading } = useTodos()

  const addTodo = useAddTodo()
  const deleteTodo = useDeleteTodo()
  const updateTodo = useUpdateTodo()

  const [editId, setEditId] = useState<string | null>(null)

  // ONE FORMIK FOR ADD + EDIT

  const formik = useFormik({
    initialValues: {
      name: '',
    },

    onSubmit: (values, { resetForm }) => {
      if (!values.name.trim()) return

      // EDIT

      if (editId) {
        const currentTodo = data?.find(
          (todo) => todo.id === editId
        )

        if (!currentTodo) return

        updateTodo.mutate({
          ...currentTodo,
          name: values.name,
        })

        setEditId(null)
      }

      // ADD

      else {
        addTodo.mutate(values.name)
      }

      resetForm()
    },
  })

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-900">
        <h1 className="text-white text-4xl font-bold">
          Loading...
        </h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] p-10">
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}

        <div className="text-center mb-10">
          <h1 className="text-6xl font-black text-white mb-3">
            Todo App
          </h1>

          <p className="text-slate-400 text-lg">
            Formik + React Query
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={formik.handleSubmit}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 flex gap-4 shadow-2xl mb-8"
        >
          <input
            type="text"
            name="name"
            placeholder={
              editId
                ? 'Edit todo...'
                : 'Write your task...'
            }
            value={formik.values.name}
            onChange={formik.handleChange}
            className="flex-1 bg-transparent border border-slate-600 text-white placeholder:text-slate-400 p-4 rounded-2xl outline-none focus:border-cyan-400 transition"
          />

          <button
            type="submit"
            className={`px-8 rounded-2xl font-bold transition-all duration-300 hover:scale-105 ${
              editId
                ? 'bg-yellow-500 hover:bg-yellow-400 text-black'
                : 'bg-cyan-500 hover:bg-cyan-400 text-black'
            }`}
          >
            {editId ? 'Save' : 'Add'}
          </button>
        </form>

        {/* TODOS */}

        <div className="space-y-5">
          {data?.map((todo: Todo) => (
            <div
              key={todo.id}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-xl hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-5">
                {/* LEFT */}

                <div className="flex items-center gap-5 flex-1">
                  <input
                    type="checkbox"
                    checked={todo.status}
                    onChange={() =>
                      updateTodo.mutate({
                        ...todo,
                        status: !todo.status,
                      })
                    }
                    className="w-6 h-6 accent-cyan-400"
                  />

                  <div className="flex-1">
                    <h2
                      className={`text-2xl font-bold text-gray-500`}
                    >
                      {todo.name}
                    </h2>

                    <p
                      className={`mt-1 font-medium ${
                        todo.status
                          ? 'text-green-400'
                          : 'text-yellow-400'
                      }`}
                    >
                      {todo.status
                        ? 'Completed'
                        : 'In Progress'}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setEditId(todo.id)

                      formik.setValues({
                        name: todo.name,
                      })
                    }}
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-3 rounded-2xl transition hover:scale-105"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTodo.mutate(todo.id)}
                    className="bg-red-500 hover:bg-red-400 text-white font-bold px-5 py-3 rounded-2xl transition hover:scale-105"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}