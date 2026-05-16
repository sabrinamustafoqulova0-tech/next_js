import AddTaskForm from "../components/AddTaskForm";
import { deleteTask, prisma, toggleTask, updateTask } from "../lib/prisma";
import "./globals.css"
export default async function Home() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">Tasks</h1>

      <AddTaskForm />

      <div className="mt-6 flex flex-col gap-3">
        {tasks.map((task: any) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
          >
            <p
              className={`text-base font-medium ${
                task.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {task.title}
            </p>

            <div className="flex gap-2">
              <form
                action={async () => {
                  "use server";
                  await toggleTask(task.id, task.completed);
                }}
              >
                <button
                  className={`px-3 py-1.5 rounded-lg text-white text-sm font-medium transition ${
                    task.completed
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {task.completed ? "Отменить" : "Готово"}
                </button>
              </form>
              <form
              action={async (formData) => {
                "use server";

                const title = formData.get("title") as string;

                await updateTask(task.id, title);
              }}
              className="flex-1 flex gap-2 items-center"
            >
              <input
                name="title"
                defaultValue={task.title}
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button className="px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm">
                Save
              </button>
            </form>


              <form
                action={async () => {
                  "use server";
                  await deleteTask(task.id);
                }}
              >
                <button
                  className="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition"
                >
                  Удалить
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}