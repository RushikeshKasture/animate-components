"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  animationDelay?: number;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, animationDelay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: animationDelay, duration: 0.3 }}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}
      />
    );
  }
);
CardHeader.displayName = "CardHeader";

export { CardHeader };
