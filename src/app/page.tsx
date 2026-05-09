'use client'

import "./globals.css"
import { useState } from "react"
import { useFormik } from "formik"

import {
  useAddTodoMutation,
  useCheckTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodoQuery,
} from "../services/todo.api"

import { IUsers } from "../services/todo.types"

export default function Home() {
  const { data, isLoading } = useGetTodoQuery()

  const [addTodo] = useAddTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()
  const [editTodo] = useEditTodoMutation()
  const [chekout] = useCheckTodoMutation()

  const [open, setOpen] = useState(false)
  const [editUser, setEditUser] = useState<IUsers | null>(null)

  const formik = useFormik({
    initialValues: {
      name: "",
      about: "",
      img: "",
      job: "",
      status: true,
    },

    enableReinitialize: true,

    onSubmit: async (values, { resetForm }) => {
      if (editUser) {
        await editTodo({
          ...values,
          id: editUser.id,
        })
      } else {
        await addTodo(values)
      }

      resetForm()

      setOpen(false)
      setEditUser(null)
    },
  })

  function openAddModal() {
    setEditUser(null)

    formik.setValues({
      name: "",
      about: "",
      img: "",
      job: "",
      status: true,
    })

    setOpen(true)
  }

  function openEditModal(user: IUsers) {
    setEditUser(user)

    formik.setValues({
      name: user.name,
      about: user.about,
      img: user.img,
      job: user.job,
      status: user.status,
    })

    setOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 px-[100px] py-[40px]">
      {/* TOP */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-[40px] font-bold text-gray-800">
          Users
        </h1>

        <button
          onClick={openAddModal}
          className="rounded-full bg-black px-7 py-3 text-white transition hover:scale-105"
        >
          + Add User
        </button>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-[500px] rounded-[30px] bg-white p-8 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-[28px] font-bold">
                {editUser ? "Edit User" : "Add User"}
              </h1>

              <button
                onClick={() => setOpen(false)}
                className="text-[24px]"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-5"
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="rounded-xl border p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Image URL"
                name="img"
                value={formik.values.img}
                onChange={formik.handleChange}
                className="rounded-xl border p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Job"
                name="job"
                value={formik.values.job}
                onChange={formik.handleChange}
                className="rounded-xl border p-4 outline-none"
              />

              <textarea
                placeholder="About"
                name="about"
                value={formik.values.about}
                onChange={formik.handleChange}
                className="h-[120px] rounded-xl border p-4 outline-none"
              />

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="status"
                  checked={formik.values.status}
                  onChange={formik.handleChange}
                />

                <p>Active Status</p>
              </div>

              <button
                type="submit"
                className="mt-3 rounded-xl bg-black py-4 text-white transition hover:opacity-80"
              >
                {editUser ? "Save Changes" : "Add User"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-8">
        {isLoading ? (
          <h1 className="text-[32px] font-bold text-gray-700">
            Loading.....
          </h1>
        ) : (
          data?.map((e: IUsers) => {
            return (
              <div
                className="group w-[280px] overflow-hidden rounded-[28px] border border-white/30 bg-white/80 p-[18px] shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                key={e.id}
              >
                <div className="overflow-hidden rounded-[22px]">
                  <img
                    className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-110"
                    src={e.img}
                    alt=""
                  />
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[22px] font-bold text-gray-800">
                      {e.name}
                    </p>

                    <span
                      className={`rounded-full px-3 py-1 text-[12px] font-semibold ${
                        e.status
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {e.status ? "Active" : "Unactive"}
                    </span>
                  </div>
                  <input checked={e.status} onChange={()=>chekout(e)} type="checkbox" />

                  <p className="line-clamp-3 text-[15px] leading-[24px] text-gray-500">
                    {e.about}
                  </p>

                  <p className="text-[15px] text-gray-600">
                    {e.job}
                  </p>

                  <div className="mt-2 flex items-center justify-between">
                    <button
                      onClick={() => deleteTodo(e.id)}
                      className="rounded-full bg-gradient-to-r from-red-600 to-[#ff6a6a] px-5 py-2 text-[14px] font-semibold text-white transition duration-300 hover:scale-105"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => openEditModal(e)}
                      className="rounded-full bg-gradient-to-r from-blue-600 to-[#507fddc7] px-5 py-2 text-[14px] font-semibold text-white transition duration-300 hover:scale-105"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}