"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const contentVariants = cva("p-6 pt-0", {
  variants: {
    padding: {
      none: "p-0",
      sm: "p-4 pt-0",
      md: "p-6 pt-0",
      lg: "p-8 pt-0",
      xl: "p-10 pt-0",
    },
    spacing: {
      tight: "space-y-2",
      normal: "space-y-4",
      loose: "space-y-6",
    },
  },
  defaultVariants: {
    padding: "md",
    spacing: "normal",
  },
});

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contentVariants> {
  animationDelay?: number;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, padding, spacing, animationDelay = 0.3, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(contentVariants({ padding, spacing }), className)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: animationDelay, duration: 0.3 }}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}
      />
    );
  }
);
CardContent.displayName = "CardContent";

export { CardContent, contentVariants };
