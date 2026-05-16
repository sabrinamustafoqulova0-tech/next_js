"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`px-4 py-2 rounded-lg text-white font-medium transition
        ${
          pending
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 active:scale-95"
        }`}
    >
      {pending ? "Загрузка..." : "Добавить"}
    </button>
  );
}