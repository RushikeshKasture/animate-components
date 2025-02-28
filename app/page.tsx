"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-row gap-5 justify-center items-center">
      <button
        className="p-4 text-md bg-blue-500 hover:bg-blue-300 rounded"
        onClick={() => router.push("/button")}
      >
        Button
      </button>
      <button
        className="p-4 text-md bg-blue-500 hover:bg-blue-300 rounded"
        onClick={() => router.push("/slider")}
      >
        Slider
      </button>
    </div>
  );
}
