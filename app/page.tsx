"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className=" p-10 m-10 bg-slate-100 flex flex-col gap-6 justify-center items-center ">
        <p>
          Click on button to check different variantion of respective component
        </p>
        <div className="flex flex-row gap-5 justify-center items-center text-white ">
          <button
            className="px-4 py-2 text-md bg-blue-500 hover:bg-blue-300 rounded"
            onClick={() => router.push("/button")}
          >
            Button
          </button>
          <button
            className="px-4 py-2 text-md bg-blue-500 hover:bg-blue-300 rounded"
            onClick={() => router.push("/slider")}
          >
            Slider
          </button>
          <button
            className="px-4 py-2 text-md bg-blue-500 hover:bg-blue-300 rounded"
            onClick={() => router.push("/avatar")}
          >
            Avatar
          </button>
          <button
            className="px-4 py-2 text-md bg-blue-500 hover:bg-blue-300 rounded"
            onClick={() => router.push("/switch")}
          >
            Switch
          </button>
          <button
            className="px-4 py-2 text-md bg-blue-500 hover:bg-blue-300 rounded"
            onClick={() => router.push("/bentoGrid")}
          >
            Bneto Grid
          </button>
        </div>
      </div>
    </>
  );
}
