"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion, HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const titleVariants = cva(
  "text-2xl font-semibold leading-none tracking-tight",
  {
    variants: {
      size: {
        xs: "text-lg",
        sm: "text-xl",
        md: "text-2xl",
        lg: "text-3xl",
        xl: "text-4xl",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      textColor: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
        white: "text-white",
      },
    },
    defaultVariants: {
      size: "md",
      weight: "semibold",
      align: "left",
      textColor: "default",
    },
  }
);

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  asChild?: boolean;
  animationDelay?: number;
}

const CardTitle = React.forwardRef<HTMLElement, CardTitleProps>(
  (
    {
      className,
      size,
      weight,
      align,
      textColor,
      asChild = false,
      animationDelay = 0.1,
      children,
      ...props
    },
    ref
  ) => {
    const Comp: React.ElementType = asChild ? Slot : motion.div;

    const motionProps: HTMLMotionProps<"div"> = {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: animationDelay, duration: 0.3 },
    };

    return (
      <Comp
        ref={ref}
        className={cn(
          titleVariants({ size, weight, align, textColor }),
          className
        )}
        {...(asChild ? props : { ...motionProps, ...props })}
      >
        {children}
      </Comp>
    );
  }
);
CardTitle.displayName = "CardTitle";

export { CardTitle, titleVariants };
