"use client";

import { createTask } from "../app/actions/task.actions";
import SubmitButton from "./SubmitButton";

export default function AddTaskForm() {
  return (
    <form
      action={createTask}
      className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-xl shadow-sm"
    >
      <input
        name="title"
        placeholder="Новая задача"
        className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      />

      <SubmitButton />
    </form>
  );
}