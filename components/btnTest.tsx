"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReloadIcon } from "@radix-ui/react-icons";

interface AnimatedButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "icon"
    | "gradient"
    | "glassmorphism"
    | "pill";
  animation?:
    | "hoverScale"
    | "clickBounce"
    | "fade"
    | "neonGlow"
    | "ripple"
    | "gradientShift"
    | "press3D";
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const buttonVariants = {
  primary:
    "bg-blue-600 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-700",
  secondary:
    "border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white",
  tertiary: "text-blue-600 underline px-4 py-2 hover:text-blue-700",
  icon: "p-2 rounded-full hover:bg-gray-200",
  gradient:
    "bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-md hover:from-blue-500 hover:to-purple-500",
  glassmorphism:
    "bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-md",
  pill: "px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700",
};

const animations = {
  hoverScale: { whileHover: { scale: 1.1 } },
  clickBounce: { whileTap: { scale: 0.9 } },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
  },
  neonGlow: {
    whileHover: { boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.7)" },
  },
  ripple: {},
  gradientShift: {},
  press3D: {
    whileTap: { scale: 0.95, boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)" },
  },
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = "primary",
  animation,
  isLoading,
  isDisabled,
  icon,
  children,
  className,
  onClick,
}) => {
  const [rippleStyle, setRippleStyle] = useState({});

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (animation === "ripple") {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setRippleStyle({
        top: y,
        left: x,
        animation: "rippleEffect 0.6s linear",
      });
      setTimeout(() => setRippleStyle({}), 600);
    }
    if (onClick) onClick();
  };

  return (
    <motion.button
      className={`${buttonVariants[variant]} relative overflow-hidden flex items-center justify-center gap-2 ${className}`}
      disabled={isLoading || isDisabled}
      onClick={handleClick}
      {...(animation ? animations[animation] : {})}
    >
      {isLoading ? (
        <ReloadIcon className="animate-spin" />
      ) : (
        <>
          {icon && <span className="flex items-center">{icon}</span>}
          {children}
        </>
      )}
      {animation === "ripple" && (
        <span
          className="absolute w-12 h-12 bg-white/30 rounded-full"
          style={rippleStyle}
        />
      )}
    </motion.button>
  );
};

export default AnimatedButton;
