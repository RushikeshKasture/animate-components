"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import type { Variants } from "framer-motion";

export type AnimationType =
  | "fade"
  | "scale"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "rotate"
  | "flip"
  | "bounce";

export type ModalVariant =
  | "modal"
  | "fullscreen"
  | "bottom"
  | "top"
  | "right"
  | "left";

export const animationVariants: Record<AnimationType, Variants> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  "slide-down": {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  "slide-left": {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  "slide-right": {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: -10 },
  },
  flip: {
    initial: { opacity: 0, rotateX: 90 },
    animate: { opacity: 1, rotateX: 0 },
    exit: { opacity: 0, rotateX: 90 },
  },
  bounce: {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.5,
      },
    },
  },
};

export const getModalVariantStyles = (variant: ModalVariant): string => {
  switch (variant) {
    case "modal":
      return "w-full max-w-lg rounded-lg";
    case "fullscreen":
      return "w-screen h-screen max-w-none m-0 rounded-none inset-0 left-0 top-0 translate-x-0 translate-y-0";
    case "bottom":
      return "w-full h-[50vh] max-w-none m-0 rounded-t-lg rounded-b-none fixed bottom-0 left-0";
    case "top":
      return "w-full h-[50vh] max-w-none m-0 rounded-b-lg rounded-t-none fixed top-0 left-0";
    case "right":
      return "w-[50vw] h-screen max-w-none m-0 rounded-l-lg rounded-r-none fixed top-0 right-0";
    case "left":
      return "w-[50vw] h-screen max-w-none m-0 rounded-r-lg rounded-l-none fixed top-0 left-0";
    default:
      return "w-full max-w-lg rounded-lg";
  }
};

interface DialogProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  animationType?: AnimationType;
  modalVariant?: ModalVariant;
}

const Dialog = ({
  children,
  animationType = "fade",
  modalVariant = "modal",
  ...props
}: DialogProps) => {
  return (
    <DialogContextProvider value={{ animationType, modalVariant }}>
      <AnimatePresence>
        <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
      </AnimatePresence>
    </DialogContextProvider>
  );
};

interface DialogContextValue {
  animationType: AnimationType;
  modalVariant: ModalVariant;
}

const DialogContext = React.createContext<DialogContextValue>({
  animationType: "fade",
  modalVariant: "modal",
});

const DialogContextProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: DialogContextValue;
}) => {
  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
};

const useDialogContext = () => {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error(
      "useDialogContext must be used within a DialogContextProvider"
    );
  }
  return context;
};

Dialog.displayName = DialogPrimitive.Root.displayName;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  isShowClose?: boolean;
}

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, isShowClose = true, children, ...props }, ref) => {
  const { animationType, modalVariant } = useDialogContext();
  const modalStyles = getModalVariantStyles(modalVariant);

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 grid gap-4 bg-background p-6 shadow-lg",
          "duration-200",
          modalStyles,
          modalVariant === "modal" &&
            "left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]",
          className
        )}
        {...props}
        asChild
      >
        <motion.div
          variants={animationVariants[animationType]}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
          {isShowClose && (
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
