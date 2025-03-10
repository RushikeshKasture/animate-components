"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/utils/cn";

const animationVariants = {
  bounce: {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
      },
    },
  },
  flip: {
    initial: { rotateY: 0 },
    animate: {
      rotateY: 360,
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
  },
  scale: {
    initial: { scale: 1 },
    whileHover: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  },
  rotate: {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
        ease: "linear",
      },
    },
  },
  pulse: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
      },
    },
  },
  shake: {
    initial: { x: 0 },
    animate: {
      x: [-2, 2, -2, 2, 0],
      transition: {
        duration: 0.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
        repeatDelay: 2,
      },
    },
  },
  gradientBorder: {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
        ease: "linear",
      },
    },
    style: {
      background:
        "linear-gradient(90deg, #3b82f6, #10b981, #f59e0b, #ef4444, #8b5cf6, #3b82f6)",
      backgroundSize: "400% 100%",
      padding: "2px",
    },
  },
  rippleCircle: {
    initial: {
      boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.7)",
    },
    animate: {
      boxShadow: [
        "0 0 0 0 rgba(255, 255, 255, 0.7)",
        "0 0 0 10px rgba(255, 255, 255, 0)",
      ],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
      },
    },
  },
  rippleSquare: {
    initial: {
      boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.7)",
    },
    animate: {
      boxShadow: [
        "0 0 0 0 rgba(255, 255, 255, 0.7)",
        "0 0 0 10px rgba(255, 255, 255, 0)",
      ],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
      },
    },
    style: {
      borderRadius: "0.375rem", // rounded-md
    },
  },
  colorBorder: {
    initial: { borderColor: "#3b82f6" },
    animate: {
      borderColor: [
        "#3b82f6", // blue
        "#10b981", // green
        "#f59e0b", // amber
        "#ef4444", // red
        "#8b5cf6", // purple
        "#3b82f6", // back to blue
      ],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
      },
    },
    style: {
      borderWidth: "2px",
      borderStyle: "solid",
    },
  },
  bounceAndColorBorder: {
    initial: { y: 0, borderColor: "#3b82f6" },
    animate: {
      y: [0, -10, 0],
      borderColor: [
        "#3b82f6", // blue
        "#10b981", // green
        "#f59e0b", // amber
        "#ef4444", // red
        "#8b5cf6", // purple
        "#3b82f6", // back to blue
      ],
      transition: {
        y: {
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
        },
        borderColor: {
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
        },
      },
    },
    style: {
      borderWidth: "2px",
      borderStyle: "solid",
    },
  },
  rotateAndGradient: {
    initial: { rotate: 0, backgroundPosition: "0% 50%" },
    borderColor: [
      "#3b82f6", // blue
      "#10b981", // green
      "#f59e0b", // amber
      "#ef4444", // red
      "#8b5cf6", // purple
      "#3b82f6", // back to blue
    ],
    animate: {
      rotate: 360,
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        rotate: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
          ease: "linear",
        },
        backgroundPosition: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
          ease: "linear",
        },
      },
    },
    style: {
      background:
        "linear-gradient(90deg, #3b82f6, #10b981, #f59e0b, #ef4444, #8b5cf6, #3b82f6)",
      backgroundSize: "400% 100%",
      padding: "2px",
    },
  },
  pulseAndRipple: {
    initial: {
      scale: 1,
      boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.7)",
    },
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(255, 255, 255, 0.7)",
        "0 0 0 10px rgba(255, 255, 255, 0)",
      ],
      transition: {
        scale: {
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
        },
        boxShadow: {
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
        },
      },
    },
  },
  flipAndColorBorder: {
    initial: { rotateY: 0, borderColor: "#3b82f6" },
    animate: {
      rotateY: 360,
      borderColor: [
        "#3b82f6", // blue
        "#10b981", // green
        "#f59e0b", // amber
        "#ef4444", // red
        "#8b5cf6", // purple
        "#3b82f6", // back to blue
      ],
      transition: {
        rotateY: {
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
          ease: "easeInOut",
        },
        borderColor: {
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
        },
      },
    },
    style: {
      borderWidth: "2px",
      borderStyle: "solid",
    },
  },
};

const avatarVariants = {
  default: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
  square: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md",
  circle: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
  bordered:
    "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-primary",
  gradient:
    "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
  shadow:
    "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-lg",
  outline:
    "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full outline outline-2 outline-offset-2 outline-primary",
};

type AvatarVariant = keyof typeof avatarVariants;
type AnimationType = keyof typeof animationVariants;

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  variant?: AvatarVariant;
  animation?: AnimationType | null;
}

const MotionAvatarRoot = motion(AvatarPrimitive.Root as React.ElementType);

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, variant = "default", animation = null, ...props }, ref) => {
    const animationConfig = animation ? animationVariants[animation] : null;

    const motionProps: HTMLMotionProps<"div"> = {
      ...(animationConfig?.initial && { initial: animationConfig.initial }),
      ...(animationConfig &&
        "animate" in animationConfig && { animate: animationConfig.animate }),
      ...(animationConfig &&
        "whileHover" in animationConfig && {
          whileHover: animationConfig.whileHover,
        }),
    };

    return (
      <MotionAvatarRoot
        ref={ref}
        className={cn(avatarVariants[variant], className)}
        {...motionProps}
        {...props}
      />
    );
  }
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// Inner container for gradient variant
const AvatarInner = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex h-full w-full rounded-[inherit] overflow-hidden bg-background",
      className
    )}
    {...props}
  />
));
AvatarInner.displayName = "AvatarInner";

export { Avatar, AvatarImage, AvatarFallback, AvatarInner };
