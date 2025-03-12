"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const footerVariants = cva("flex items-center p-6 pt-0", {
  variants: {
    padding: {
      none: "p-0",
      sm: "p-4 pt-0",
      md: "p-6 pt-0",
      lg: "p-8 pt-0",
      xl: "p-10 pt-0",
    },
    align: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    border: {
      none: "",
      top: "border-t pt-4",
    },
  },
  defaultVariants: {
    padding: "md",
    align: "between",
    border: "none",
  },
});

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof footerVariants> {
  animationDelay?: number;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  (
    { className, padding, align, border, animationDelay = 0.4, ...props },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(footerVariants({ padding, align, border }), className)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: animationDelay, duration: 0.3 }}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}
      />
    );
  }
);
CardFooter.displayName = "CardFooter";

export { CardFooter, footerVariants };
