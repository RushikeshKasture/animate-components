// "use client";

// import * as React from "react";
// import { cva, type VariantProps } from "class-variance-authority";
// import { cn } from "@/utils/cn";
// import { HTMLMotionProps, motion } from "framer-motion";
// import { Slot } from "@radix-ui/react-slot";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );

// export interface ButtonProps
//   extends Omit<HTMLMotionProps<"button">, "ref">,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
//   animationVariant?:
//     | "fade"
//     | "slideTop"
//     | "slideBottom"
//     | "slideLeft"
//     | "slideRight"
//     | "scale"
//     | "rotate"
//     | "rotateTest"
//     | "none"
//     | "spring"
//     | "reveal"
//     | "flip";
// }

// const getMotionProps = (animationVariant: ButtonProps["animationVariant"]) => {
//   switch (animationVariant) {
//     case "fade":
//       return {
//         initial: { opacity: 0 },
//         animate: { opacity: 1 },
//         exit: { opacity: 0 },
//         transition: { duration: 1 },
//       };
//     case "slideTop":
//       return {
//         initial: { opacity: 0, y: 10 },
//         animate: { opacity: 1, y: 0 },
//         exit: { opacity: 0, y: 10 },
//         transition: { duration: 1 },
//       };
//     case "slideBottom":
//       return {
//         initial: { opacity: 0, y: -10 },
//         animate: { opacity: 1, y: 0 },
//         exit: { opacity: 0, y: -10 },
//         transition: { duration: 1 },
//       };
//     case "slideLeft":
//       return {
//         initial: { opacity: 0, x: 10 },
//         animate: { opacity: 1, x: 0 },
//         exit: { opacity: 0, x: 10 },
//         transition: { duration: 1 },
//       };
//     case "slideRight":
//       return {
//         initial: { opacity: 0, x: -10 },
//         animate: { opacity: 1, x: 0 },
//         exit: { opacity: 0, x: -10 },
//         transition: { duration: 1 },
//       };
//     case "scale":
//       return {
//         initial: { scale: 1 },
//         whileHover: { scale: 1.15 },
//         whileTap: { scale: 0.95 },
//         transition: { duration: 0.2 },
//       };
//     case "rotate":
//       return {
//         whileHover: {
//           scale: [1, 1.15, 1.15, 1, 1],
//           rotate: 360,
//         },
//         transition: {
//           duration: 1,
//           ease: "easeInOut",
//           times: 0.5,
//         },
//       };
//     case "spring":
//       return {
//         initial: { scale: 0 },
//         animate: { rotate: 360, scale: 1 },
//         transition: { type: "spring", stiffness: 260, damping: 20 },
//       };
//     case "flip":
//       return {
//         initial: { scale: 0 },
//         animate: { rotate: 360, scale: 1 },
//         transition: { type: "spring", stiffness: 260, damping: 20 },
//       };
//     case "none":
//     default:
//       return {};
//   }
// };

// const MotionButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   (
//     {
//       className,
//       variant,
//       size,
//       asChild = false,
//       animationVariant = "none",
//       ...props
//     },
//     ref
//   ) => {
//     const isAnimate = animationVariant && animationVariant !== "none";
//     const motionProps = isAnimate ? getMotionProps(animationVariant) : {};

//     return isAnimate ? (
//       <motion.button {...motionProps}></motion.button>
//     ) : (
//       <Slot
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref as React.Ref<HTMLButtonElement>}
//         {...(props as React.ComponentPropsWithoutRef<"button">)}
//       />
//     );
//   }
// );

// MotionButton.displayName = "Button";

// export { MotionButton as Button, buttonVariants };

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
