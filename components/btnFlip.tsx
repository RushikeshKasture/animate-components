"use client";

import { motion } from "framer-motion";

export default function FlipButton() {
  return (
    <div className="flex flex-col gap-4">
      <motion.button
        className="min-w-[100px] relative rounded-md bg-slate-800 py-2 px-4 border border-transparent text-sm text-white transition-colors hover:bg-slate-700"
        initial={false}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        flip horizontal
      </motion.button>
      <motion.button
        className="min-w-[100px] relative rounded-md bg-slate-800 py-2 px-4 border border-transparent text-sm text-white transition-colors hover:bg-slate-700"
        initial={false}
        whileHover={{ rotateX: 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        flip vertical
      </motion.button>
      {/* <motion.button
        className="relative w-32 h-12 bg-blue-600 text-white font-bold rounded-xl shadow-lg overflow-hidden"
        initial={false}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Hover Me
      </motion.button> */}

      {/* <motion.div className="relative w-32 h-12 perspective-1000">
        <motion.button
          className="relative w-full h-full bg-blue-600 text-white font-bold rounded-xl shadow-lg transform-style-preserve-3d"
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="absolute w-full h-full flex items-center justify-center backface-hidden">
            Front
          </span>
          <span className="absolute w-full h-full flex items-center justify-center backface-hidden rotate-y-180">
            Back
          </span>
        </motion.button>
      </motion.div> */}
    </div>
  );
}
