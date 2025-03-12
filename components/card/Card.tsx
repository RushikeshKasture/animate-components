"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type Variants } from "framer-motion";

import { cn } from "@/utils/cn";

// Define animation variants
export const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.5 } },
  },
  flip: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 0.7 } },
  },
  bounce: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  },
};

// Define card variants using class-variance-authority (cva)
const cardVariants = cva("rounded-lg border text-card-foreground shadow-sm", {
  variants: {
    variant: {
      default: "bg-card",
      outline: "bg-transparent",
      filled: "border-none bg-primary shadow-md",
      elevated: "border-none shadow-lg bg-card",
      glass: "border border-opacity-20 bg-white/10 backdrop-blur-md",
      destructive: "bg-destructive text-destructive-foreground",
      success: "bg-green-500 text-white",
      info: "bg-blue-500 text-white",
      warning: "bg-yellow-500 text-black",
    },
    size: {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    },
    hover: {
      none: "",
      scale: "transition-transform duration-300 hover:scale-105",
      elevate: "transition-shadow duration-300 hover:shadow-xl",
      glow: "transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(255,105,180,0.6)]",
      border: "hover:border-primary hover:border-2",
      background: "hover:bg-muted",
      rotate: "transition-transform duration-300 hover:rotate-3",
      tilt: "transform transition-transform duration-300 hover:rotate-1 hover:rotate-y-1",
      slideUp:
        "transform transition-transform duration-300 hover:-translate-y-2",
      pulse: "hover:animate-pulse",
      gradient:
        "text-white hover:bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]",
      textColor: "hover:text-primary",
      borderGlow:
        "hover:shadow-[0_0_10px_2px_rgba(var(--primary-rgb),0.7)] hover:border-primary",
      zoom: "transition-transform duration-300 hover:scale-110",
      shadowPop:
        "transition-shadow duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]",
      swing: "hover:animate-swing",
      neon: "transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(0,255,255,0.7)]",
      bounce: "hover:animate-bounce",
      shake: "hover:animate-shake",
      invert: "hover:invert",
      slideBorderBottom:
        "relative hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:w-full hover:before:h-1 hover:before:rounded-b-sm hover:before:bg-primary hover:before:animate-slide-in",
      slideBorderTop:
        "relative hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-1 hover:before:rounded-t-sm hover:before:bg-primary hover:before:animate-slide-in",
      slideBorderLeft:
        "relative hover:before:absolute hover:before:left-0 hover:before:rounded-l-sm  hover:before:top-0 hover:before:w-1 hover:before:h-full hover:before:bg-primary hover:before:animate-slide-in-vertical",
      slideBorderRight:
        "relative hover:before:absolute hover:before:right-0 hover:before:rounded-r-sm hover:before:top-0 hover:before:w-1 hover:before:h-full hover:before:bg-primary hover:before:animate-slide-in-vertical",
      fadeText: "opacity-100 hover:opacity-0 transition-opacity duration-300",
      slideLeft:
        "transform transition-transform duration-300 hover:-translate-x-4",
      slideRight:
        "transform transition-transform duration-300 hover:translate-x-4",
      slideDown:
        "transform transition-transform duration-300 hover:translate-y-4",
      flicker: "hover:animate-flicker",
      wave: "hover:animate-wave",
      colorShift:
        "transition-colors duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500",
    },
    interactive: {
      true: "cursor-pointer",
      false: "",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-3xl",
    },
    border: {
      none: "border-0",
      thin: "border",
      medium: "border-2",
      thick: "border-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    hover: "none",
    interactive: false,
    rounded: "lg",
    border: "thin",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
  animationVariant?: keyof typeof animationVariants;
  initiallyVisible?: boolean;
  whileHover?: object;
  whileTap?: object;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant,
      size,
      hover,
      interactive,
      rounded,
      border,
      asChild = false,
      animationVariant,
      initiallyVisible = false,
      whileHover,
      whileTap = { scale: 0.98 },
      ...props
    },
    ref
  ) => {
    const Comp = asChild
      ? Slot
      : (motion.div as React.ComponentType<
          React.HTMLAttributes<HTMLDivElement> & {
            ref: React.Ref<HTMLDivElement>;
          }
        >);

    const motionProps = animationVariant
      ? {
          initial: initiallyVisible ? "visible" : "hidden",
          animate: "visible",
          variants: animationVariants[animationVariant],
          ...(interactive && { whileHover, whileTap }),
        }
      : {};

    return (
      <Comp
        ref={ref}
        className={cn(
          cardVariants({ variant, size, hover, interactive, rounded, border }),
          className
        )}
        {...motionProps}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card, cardVariants };
