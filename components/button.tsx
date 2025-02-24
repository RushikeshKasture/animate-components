"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { HTMLMotionProps, motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium min-w-[100px]",
  {
    variants: {
      variant: {
        default:
          "rounded-md bg-slate-800 hover:bg-slate-700 py-3 px-4 border border-transparent text-center text-sm text-white shadow-md",
        filled:
          "rounded-md bg-slate-800 hover:bg-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white shadow-md active:bg-slate-700 disabled:pointer-events-none",
        gradient:
          "rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent hover:border-slate-800 text-center text-sm text-white shadow-md active:bg-slate-700 disabled:pointer-events-none",
        outlined:
          "rounded-md border border-slate-300 py-2 px-4 text-center text-sm shadow-sm text-slate-600 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none",
        text: "rounded-md border border-transparent py-2 px-4 text-center text-sm text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none",

        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref">,
    VariantProps<typeof buttonVariants> {
  // asChild?: boolean;
  animationVariant?:
    | "fade"
    | "slideTop"
    | "slideBottom"
    | "slideLeft"
    | "slideRight"
    | "scale"
    | "rotate"
    | "rotateTest"
    | "none"
    | "spring"
    | "reveal"
    | "flip";
}

const getMotionProps = (animationVariant: ButtonProps["animationVariant"]) => {
  switch (animationVariant) {
    case "fade":
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 1 },
      };
    case "slideTop":
      return {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
        transition: { duration: 1 },
      };
    case "slideBottom":
      return {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 1 },
      };
    case "slideLeft":
      return {
        initial: { opacity: 0, x: 10 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 10 },
        transition: { duration: 1 },
      };
    case "slideRight":
      return {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -10 },
        transition: { duration: 1 },
      };
    case "scale":
      return {
        initial: { scale: 1 },
        whileHover: { scale: 1.15 },
        whileTap: { scale: 0.95 },
        transition: { duration: 0.2 },
      };
    case "rotate":
      return {
        whileHover: {
          scale: [1, 1.15, 1.15, 1, 1],
          rotate: 360,
        },
        transition: {
          duration: 1,
          ease: "easeInOut",
          times: 0.5,
        },
      };
    case "spring":
      return {
        initial: { scale: 0 },
        animate: { rotate: 360, scale: 1 },
        transition: { type: "spring", stiffness: 260, damping: 20 },
      };
    case "flip":
      return {
        initial: { scale: 0 },
        animate: { rotate: 360, scale: 1 },
        transition: { type: "spring", stiffness: 260, damping: 20 },
      };
    case "none":
    default:
      return {};
  }
};

const MotionButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      // asChild = false,
      animationVariant = "scale",
      ...props
    },
    ref
  ) => {
    // const Comp = asChild ? Slot : motion.button;
    // const motionProps = asChild ? {} : getMotionProps(animationVariant);
    return (
      <div>
        <motion.button
          className={cn(buttonVariants({ variant, size, className }), "")}
          ref={ref}
          {...props}
          // {...(asChild ? {} : (motionProps as any))}
          // {...(motionProps as any)}
          {...getMotionProps(animationVariant)}
        />
        <motion.div
          initial={{ boxShadow: "0px 0px #000" }}
          animate={{ boxShadow: "10px 10px #000" }}
        />
      </div>
    );
  }
);

MotionButton.displayName = "Button";

export { MotionButton as Button, buttonVariants };
