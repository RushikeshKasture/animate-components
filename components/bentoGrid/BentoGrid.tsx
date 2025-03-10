"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { cn } from "@/utils/cn";

// Types
export type BentoGridItem = {
  id: string | number;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  content?: React.ReactNode;
  href?: string;
  image?: string;
  size?: "small" | "medium" | "large" | "wide" | "tall" | "featured";
  imagePosition?: "top" | "center" | "bottom";
  imageFit?: "cover" | "contain" | "fill";
  hideImage?: boolean;
  customAspectRatio?: string;
  gridArea?: string;
};

export type BentoGridProps = {
  items: BentoGridItem[];
  className?: string;
  itemClassName?: string;
  variant?:
    | "default"
    | "featured"
    | "masonry"
    | "compact"
    | "wide"
    | "mosaic"
    | "pinterest"
    | "dashboard"
    | "hero"
    | "asymmetric"
    | "magazine"
    | "gallery"
    | "custom";
  animationType?: AnimationType;
  animationDelay?: number;
  animationDuration?: number;
  animationStaggerChildren?: number;
  hoverEffect?:
    | "none"
    | "scale"
    | "glow"
    | "border"
    | "lift"
    | "rippleBorder"
    | "wobble"
    | "shake";
  gridClassName?: string;
  gap?: "none" | "sm" | "md" | "lg";
  borderRadius?: "none" | "sm" | "md" | "lg" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
  darkMode?: boolean;
  showImages?: boolean;
  customGridAreas?: string;
  customGridTemplateColumns?: string;
  customGridTemplateRows?: string;
  aspectRatio?:
    | "auto"
    | "square"
    | "video"
    | "portrait"
    | "ultrawide"
    | "panoramic"
    | "golden"
    | "custom";
};

export type AnimationType =
  | "fade"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "stagger"
  | "bounce"
  | "flip"
  | "rotate";

// Animation variants
const animations: Record<AnimationType, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideDown: {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideLeft: {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  slideRight: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  scale: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  stagger: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  bounce: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  },
  flip: {
    hidden: { rotateX: 90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  rotate: {
    hidden: { rotate: -15, opacity: 0, scale: 0.9 },
    visible: { rotate: 0, opacity: 1, scale: 1 },
  },
};

const getHoverEffect = (effect: BentoGridProps["hoverEffect"]) => {
  switch (effect) {
    case "scale":
      return { scale: 1.03, transition: { duration: 0.2 } };
    case "glow":
      return {
        boxShadow: "0 0 15px rgba(108, 122, 137,0.8)",
        transition: { duration: 0.2 },
      };
    case "border":
      return {
        borderWidth: "3px",
        borderColor: "rgba(108, 122, 137, 0.8)",
        transition: { duration: 0.1 },
      };
    case "lift":
      return {
        y: -5,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 },
      };
    case "rippleBorder":
      return {
        whileHover: {
          scale: 1.1,
          boxShadow: "0 0 0 10px rgba(0, 255, 0, 0.2)",
        },
        transition: { duration: 0.5 },
      };
    case "shake":
      return {
        animate: { x: [0, -5, 5, -5, 5, 0] },
        transition: { repeat: Infinity, duration: 0.5 },
      };
    case "wobble":
      return {
        animate: { rotate: [0, -5, 5, -5, 5, 0] },
        transition: { repeat: Infinity, duration: 0.8 },
      };
    default:
      return {};
  }
};

const gridVariants = {
  default: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  featured: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto",
  masonry: "columns-1 md:columns-2 lg:columns-3 space-y-4",
  compact: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  wide: "grid grid-cols-1 md:grid-cols-2",
  mosaic: "grid grid-cols-1 md:grid-cols-4 auto-rows-auto",
  pinterest: "columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-4",
  dashboard: "grid grid-cols-1 md:grid-cols-6 auto-rows-auto",
  hero: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto",
  asymmetric: "grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 auto-rows-auto",
  magazine: "grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 auto-rows-auto",
  gallery: "grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 auto-rows-auto",
  custom: "grid",
};

const aspectRatioVariants = {
  auto: "",
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  ultrawide: "aspect-[21/9]",
  panoramic: "aspect-[3/1]",
  golden: "aspect-[1.618/1]",
  custom: "",
};

const gapVariants = {
  none: "gap-0",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

const borderRadiusVariants = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const paddingVariants = {
  none: "p-0",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
};

const shadowVariants = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

const BentoItem = ({
  item,
  className,
  animationType = "fade",
  animationDelay = 0,
  animationDuration = 0.5,
  hoverEffect = "none",
  index = 0,
  staggerDelay = 0.1,
  borderRadius = "md",
  padding = "md",
  shadow = "md",
  isFeatured = false,
  isMasonry = false,
  variant = "default",
  showImages = true,
  aspectRatio = "auto",
}: {
  item: BentoGridItem;
  className?: string;
  animationType?: AnimationType;
  animationDelay?: number;
  animationDuration?: number;
  hoverEffect?: BentoGridProps["hoverEffect"];
  index?: number;
  staggerDelay?: number;
  borderRadius?: BentoGridProps["borderRadius"];
  padding?: BentoGridProps["padding"];
  shadow?: BentoGridProps["shadow"];
  isFeatured?: boolean;
  isMasonry?: boolean;
  variant?: BentoGridProps["variant"];
  showImages?: boolean;
  aspectRatio?: BentoGridProps["aspectRatio"];
}) => {
  const delay =
    animationType === "stagger"
      ? animationDelay + index * staggerDelay
      : animationDelay;

  const itemVariant = animations[animationType];

  // Apply custom aspect ratio if specified
  const aspectRatioClass = item.customAspectRatio
    ? `aspect-[${item.customAspectRatio}]`
    : aspectRatioVariants[aspectRatio];

  // Determine grid area based on variant and item size or custom grid area
  let gridArea = item.gridArea || "";

  if (!gridArea) {
    if (variant === "asymmetric") {
      if (index === 0) {
        gridArea = "1 / 1 / 3 / 3"; // Large item spanning 2x2
      } else if (index === 1) {
        gridArea = "1 / 3 / 2 / 5"; // Wide item on top right
      } else if (index === 2) {
        gridArea = "2 / 3 / 3 / 4"; // Small item middle right
      } else if (index === 3) {
        gridArea = "2 / 4 / 3 / 5"; // Small item middle right
      } else if (index === 4) {
        gridArea = "3 / 1 / 4 / 2"; // Small item bottom left
      } else if (index === 5) {
        gridArea = "3 / 2 / 4 / 4"; // Wide item bottom middle
      } else if (index === 6) {
        gridArea = "3 / 4 / 5 / 5"; // Tall item bottom right
      } else if (index === 7) {
        gridArea = "4 / 1 / 5 / 4"; // Wide item spanning bottom
      }
    } else if (variant === "magazine") {
      if (index === 0) {
        gridArea = "1 / 1 / 4 / 4"; // Feature article
      } else if (index === 1) {
        gridArea = "1 / 4 / 3 / 7"; // Secondary feature
      } else if (index === 2) {
        gridArea = "3 / 4 / 4 / 7"; // Banner
      } else if (index === 3) {
        gridArea = "4 / 1 / 7 / 3"; // Sidebar
      } else if (index === 4) {
        gridArea = "4 / 3 / 6 / 5"; // Content block
      } else if (index === 5) {
        gridArea = "4 / 5 / 6 / 7"; // Content block
      } else if (index === 6) {
        gridArea = "6 / 3 / 7 / 7"; // Footer banner
      }
    } else if (variant === "gallery") {
      if (index === 0) {
        gridArea = "1 / 1 / 2 / 4"; // Header image
      } else if (index === 1) {
        gridArea = "2 / 1 / 4 / 2"; // Left column
      } else if (index === 2) {
        gridArea = "2 / 2 / 3 / 3"; // Middle top
      } else if (index === 3) {
        gridArea = "2 / 3 / 3 / 4"; // Right top
      } else if (index === 4) {
        gridArea = "3 / 2 / 4 / 4"; // Bottom wide
      }
    } else if (variant === "mosaic") {
      if (item.size === "large" || item.size === "featured") {
        gridArea = "span 2 / span 2";
      } else if (item.size === "wide") {
        gridArea = "span 1 / span 2";
      } else if (item.size === "tall") {
        gridArea = "span 2 / span 1";
      }
    } else if (variant === "dashboard") {
      if (item.size === "large" || item.size === "featured") {
        gridArea = "span 2 / span 3";
      } else if (item.size === "wide") {
        gridArea = "span 1 / span 3";
      } else if (item.size === "medium") {
        gridArea = "span 1 / span 2";
      } else if (item.size === "tall") {
        gridArea = "span 2 / span 1";
      }
    } else if (variant === "hero" && index === 0) {
      gridArea = "span 2 / span 2";
    } else if (isFeatured && index === 0) {
      gridArea = "span 2 / span 2";
    }
  }

  const containerClasses = cn(
    "relative overflow-hidden transition-all duration-300 flex flex-col",
    borderRadiusVariants[borderRadius],
    paddingVariants[padding],
    shadowVariants[shadow],
    "border border-border bg-card text-card-foreground",
    isMasonry ? "mb-4 break-inside-avoid" : "h-full",
    gridArea ? "" : "",
    aspectRatioClass,
    item.className,
    className
  );

  const style: React.CSSProperties = {};
  if (gridArea) {
    style.gridArea = gridArea;
  }

  return (
    <motion.div
      className={containerClasses}
      style={style}
      initial="hidden"
      animate="visible"
      whileHover={getHoverEffect(hoverEffect)}
      variants={itemVariant}
      transition={{
        duration: animationDuration,
        delay,
      }}
    >
      {item.href ? (
        <a
          href={item.href}
          className="absolute inset-0 z-10"
          aria-label={item.title}
        />
      ) : null}

      {item.image && showImages && !item.hideImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background/100 to-background/5 z-10" />
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className={cn(
              "w-full h-full object-cover",
              item.imageFit === "contain" ? "object-contain" : "object-cover",
              item.imagePosition === "top"
                ? "object-top"
                : item.imagePosition === "bottom"
                ? "object-bottom"
                : "object-center"
            )}
          />
        </div>
      )}

      <div
        className={cn(
          "flex flex-col z-20",
          item.image && showImages && !item.hideImage ? "mt-auto" : ""
        )}
      >
        {item.icon && <div className="mb-2 text-primary">{item.icon}</div>}

        <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>

        {item.description && (
          <p className="text-sm text-muted-foreground mt-1">
            {item.description}
          </p>
        )}

        {item.content && <div className="mt-2">{item.content}</div>}
      </div>
    </motion.div>
  );
};

export function BentoGrid({
  items,
  className,
  itemClassName,
  variant = "default",
  animationType = "fade",
  animationDelay = 0,
  animationDuration = 0.5,
  animationStaggerChildren = 0.1,
  hoverEffect = "none",
  gridClassName,
  gap = "md",
  borderRadius = "md",
  padding = "md",
  shadow = "md",
  darkMode = false,
  showImages = true,
  customGridAreas,
  aspectRatio = "auto",
  customGridTemplateColumns,
  customGridTemplateRows,
}: BentoGridProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerClasses = cn(
    gridVariants[variant],
    gapVariants[gap],
    gridClassName,
    className
  );

  const isMasonry = variant === "masonry" || variant === "pinterest";

  // Apply custom grid template if provided
  const style: React.CSSProperties = {};
  if (customGridAreas && variant === "custom") {
    style.gridTemplateAreas = customGridAreas;
  }
  if (customGridTemplateColumns) {
    style.gridTemplateColumns = customGridTemplateColumns;
  }
  if (customGridTemplateRows) {
    style.gridTemplateRows = customGridTemplateRows;
  }

  // For asymmetric layouts, add default grid templates if not custom
  if (variant === "asymmetric" && !customGridTemplateColumns) {
    style.gridTemplateColumns = "repeat(4, 1fr)";
    style.gridTemplateRows = "repeat(4, minmax(100px, auto))";
  }
  if (variant === "magazine" && !customGridTemplateColumns) {
    style.gridTemplateColumns = "repeat(6, 1fr)";
    style.gridTemplateRows = "repeat(6, minmax(80px, auto))";
  }
  if (variant === "gallery" && !customGridTemplateColumns) {
    style.gridTemplateColumns = "repeat(3, 1fr)";
    style.gridTemplateRows = "repeat(3, minmax(120px, auto))";
  }

  return (
    <div className={cn(darkMode ? "dark" : "", "w-full")}>
      <div className={containerClasses} style={style}>
        <AnimatePresence>
          {mounted &&
            items.map((item, index) => (
              <BentoItem
                key={item.id}
                item={item}
                className={itemClassName}
                animationType={animationType}
                animationDelay={animationDelay}
                animationDuration={animationDuration}
                hoverEffect={hoverEffect}
                index={index}
                staggerDelay={animationStaggerChildren}
                borderRadius={borderRadius}
                padding={padding}
                shadow={shadow}
                isFeatured={variant === "featured"}
                isMasonry={isMasonry}
                variant={variant}
                showImages={showImages}
                aspectRatio={aspectRatio}
              />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
