"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const descriptionVariants = cva("text-sm text-muted-foreground", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    textColor: {
      default: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      white: "text-white/80",
    },
  },
  defaultVariants: {
    size: "sm",
    weight: "normal",
    align: "left",
    textColor: "default",
  },
});

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof descriptionVariants> {
  animationDelay?: number;
}

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(
  (
    {
      className,
      size,
      weight,
      align,
      textColor = "default",
      animationDelay = 0.2,
      ...props
    },
    ref
  ) => {
    return (
      <motion.p
        ref={ref}
        className={cn(
          descriptionVariants({ size, weight, align, textColor }),
          className
        )}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: animationDelay, duration: 0.3 }}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.p>)}
      />
    );
  }
);
CardDescription.displayName = "CardDescription";

export { CardDescription, descriptionVariants };
