import { revalidatePath } from "next/cache"
import "./globals.css"
const API = "https://6994554ffade7a9ec0f50ffa.mockapi.io/TablePtoject2"

async function getTodos() {
  const res = await fetch(API, { cache: 'no-store' })
  return res.json()
}

export default async function Page() {

  async function createTodo(formData: FormData) {
    'use server'
    const name = formData.get('name')
    const age = formData.get('age')
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age })
    })
    revalidatePath('/')
  }

  async function updateTodo(formData: FormData) {
    'use server'
    const id = formData.get('id')
    const name = formData.get('name')
    const age = formData.get('age')

    await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age })
    })
    revalidatePath('/')
  }

  async function deleteTodo(formData: FormData) {
    'use server'
    const id = formData.get('id')
    await fetch(`${API}/${id}`, { method: 'DELETE' })
    revalidatePath('/')
  }

  const todos = await getTodos()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-8">

      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Todo List
      </h1>

      {/* CREATE FORM */}
      <form
        action={createTodo}
        className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md flex gap-3 mb-10"
      >
        <input
          name="name"
          placeholder="Имя"
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="age"
          placeholder="Возраст"
          className="w-32 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Добавить
        </button>
      </form>

      {/* LIST */}
      <ul className="grid gap-6 max-w-3xl mx-auto">
        {todos.map((todo: any) => (
          <li
            key={todo.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
          >
            {/* TOP INFO */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold text-gray-800">
                {todo.name}
              </p>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                {todo.age} лет
              </span>
            </div>

            {/* DELETE */}
            <form action={deleteTodo} className="mb-4">
              <input type="hidden" name="id" value={todo.id} />
              <button
                type="submit"
                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Удалить
              </button>
            </form>

            {/* UPDATE */}
            <form action={updateTodo} className="flex gap-3">
              <input type="hidden" name="id" value={todo.id} />

              <input
                name="name"
                defaultValue={todo.name}
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              <input
                name="age"
                defaultValue={todo.age}
                className="w-32 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Изменить
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  )
}