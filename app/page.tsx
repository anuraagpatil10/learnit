"use client";

import { useState } from "react";
import TextInput from "./components/TextInput";
import ImageUpload from "./components/ImageUpload";
import axios from "axios";

export default function Home() {
  const [answer, setAnswer] = useState("");

  const handleSolve = async (input: string) => {
    const res = await axios.post("/api/solve", { input });
    setAnswer(res.data.answer);
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Tutor</h1>
      <TextInput onSubmit={handleSolve} />
      <ImageUpload onExtractedText={handleSolve} />
      {answer && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold mb-2">Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </main>
  );
}
