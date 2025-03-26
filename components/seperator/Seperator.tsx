"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

const animationVariants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  grow: {
    hidden: (isHorizontal: boolean) => ({
      width: isHorizontal ? 0 : "1px",
      height: isHorizontal ? "1px" : 0,
    }),
    visible: (isHorizontal: boolean) => ({
      width: isHorizontal ? "100%" : "1px",
      height: isHorizontal ? "1px" : "100%",
    }),
  },
  slide: {
    hidden: (isHorizontal: boolean) => ({
      x: isHorizontal ? -100 : 0,
      y: isHorizontal ? 0 : -100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  },
  pulse: {
    hidden: { opacity: 0.5, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        duration: 1.5,
      },
    },
  },
};

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  animationType?: "none" | "fade" | "grow" | "slide" | "pulse";
  animationDuration?: number;
  animationDelay?: number;
  animationEase?: string;
}

const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      animationType = "none",
      animationDuration = 0.5,
      animationDelay = 0,
      animationEase = "easeInOut",
      ...props
    },
    ref
  ) => {
    const isHorizontal = orientation === "horizontal";

    if (animationType === "none") {
      return (
        <SeparatorPrimitive.Root
          ref={ref}
          decorative={decorative}
          orientation={orientation}
          className={cn(
            "shrink-0 bg-border",
            isHorizontal ? "h-[1px] w-full" : "h-full w-[1px]",
            className
          )}
          {...props}
        />
      );
    }

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        asChild
        {...props}
      >
        <motion.div
          className={cn(
            "shrink-0 border-t-0 border-l-0",
            isHorizontal ? "border-b w-full" : "border-r h-full",
            className
          )}
          initial="hidden"
          animate="visible"
          custom={isHorizontal}
          variants={animationVariants[animationType]}
          transition={{
            duration: animationDuration,
            delay: animationDelay,
            ease: animationEase,
          }}
        />
      </SeparatorPrimitive.Root>
    );
  }
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
