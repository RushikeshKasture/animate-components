"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, DotFilledIcon } from "@radix-ui/react-icons";

const SlideButton = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="">
      <div
        className="flex items-center justify-center py-3 px-4 bg-white rounded-md relative overflow-clip border-2 border-blue-700"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.div
          className="absolute left-[1px]"
          animate={{
            scale: isHover ? 45 : 1,
            backgroundColor: isHover ? "#000" : "#fff",
          }}
          transition={{ ease: "easeIn", duration: 0.2 }}
        >
          <DotFilledIcon className="rounded-full w-6 h-6 text-blue-700" />
        </motion.div>
        <motion.div
          className="text-white z-1"
          animate={{
            x: isHover ? -8 : 8,
            color: isHover ? "#FFF" : "blue",
          }}
        >
          <p className="text-sm font-medium">About US</p>
        </motion.div>
        <motion.div
          className="flex items-center justify-center absolute right-[4px]"
          animate={{ x: isHover ? 0 : 24 }}
        >
          <ArrowRightIcon className="text-white" />
        </motion.div>
      </div>
    </div>
  );
};
export default SlideButton;
