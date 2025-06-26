"use client";

import { useState } from "react";

export default function TextInput({ onSubmit }: { onSubmit: (text: string) => void }) {
  const [input, setInput] = useState("");

  return (
    <div className="mb-4">
      <textarea
        className="w-full border rounded p-2"
        placeholder="Type your question in Hindi or Marathi..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
      />
      <button
        onClick={() => onSubmit(input)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Solve
      </button>
    </div>
  );
}
