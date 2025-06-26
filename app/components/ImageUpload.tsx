"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageUpload({ onExtractedText }: { onExtractedText: (text: string) => void }) {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    const res = await fetch("/api/solve", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    onExtractedText(data.answer);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: { "image/*": [] } });

  return (
    <div {...getRootProps()} className="border border-dashed rounded p-4 text-center cursor-pointer">
      <input {...getInputProps()} />
      <p>📷 Upload handwritten image</p>
    </div>
  );
}
