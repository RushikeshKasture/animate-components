"use client";
import "./btnAni.css";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "px-4 py-2 bg-blue-500 text-white hover:bg-blue-600",
        destructive: "bg-red-500 text-destructive-foreground hover:bg-red-600",
        outline:
          "border blue-500 bg-white hover:bg-blue-300 hover:text-grey-900",
        secondary: "bg-blue-300 text-white hover:bg-blue-500",
        ghost: "hover:bg-blue-300 hover:text-white",
        link: "text-grey-900 underline-offset-4 hover:underline",
        none: "",
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

const getAnimationProps = (
  animationVariant: ButtonProps["animationVariant"]
) => {
  switch (animationVariant) {
    case "bounce":
      return "animate-bounce";
    case "pulse":
      return "animate-pulse";
    case "ping":
      return "animate-ping";
    case "scale":
      return "transform transition duration-300 hover:scale-125";
    case "rotate":
      return "transform transition duration-300 hover:rotate-180";
    case "slide":
      return "transform transition duration-300 hover:translate-x-4";
    case "winona":
      return "button--winona";
    case "moema":
      return "button--moema";
    case "nina":
      return "button--nina";
    case "gradientGlow":
      return "gradient-glow-button";
    case "fadein":
      return "fadein";
    case "fadeout":
      return "fadeout";
    case "fadeindown":
      return "fadeindown";
    case "fadeinup":
      return "fadeinup";
    case "fadeinleft":
      return "fadeinleft";
    case "fadeinright":
      return "fadeinright";
    case "fadeoutdown":
      return "fadeoutdown";
    case "fadeoutup":
      return "fadeoutup";
    case "fadeoutleft":
      return "fadeoutleft";
    case "fadeoutright":
      return "fadeoutright";
    case "fadeouttopleft":
      return "fadeouttopleft";
    case "fadeouttopright":
      return "fadeouttopright";
    case "zoomin":
      return "zoomin";
    case "zoomout":
      return "zoomout";
    case "zoominup":
      return "zoominup";
    case "zoomindown":
      return "zoomindown";
    case "zoominleft":
      return "zoominleft";
    case "zoominright":
      return "zoominright";
    case "zoomoutup":
      return "zoomoutup";
    case "zoomoutdown":
      return "zoomoutdown";
    case "zoomoutleft":
      return "zoomoutleft";
    case "zoomoutright":
      return "zoomoutright";
    case "flip":
      return "flip";
    case "flipup":
      return "flipup";
    case "flipdown":
      return "flipdown";
    case "flipleft":
      return "flipleft";
    case "flipright":
      return "flipright";
    case "fliptopleft":
      return "fliptopleft";
    case "fliptopright":
      return "fliptopright";
    case "flipbottomleft":
      return "flipbottomleft";
    case "flipbottomright":
      return "flipbottomright";

    default:
      return "";
  }
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: React.ReactNode;
  animationVariant?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "none";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  wrapperClassName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size,
      asChild = false,
      animationVariant,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className={cn(wrapperClassName)}>
          <Comp
            className={cn(
              buttonVariants({ variant, size, className }),
              getAnimationProps(animationVariant)
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

// const Button: React.FC<ButtonProps> = ({
//   children,
//   className = "",
//   animation = "",
//   ...props
// }) => {
//   return (
//     <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
//       <button
//         className={`px-4 py-2 text-white rounded-lg transition ${className} ${animation}`}
//         {...props}
//       >
//         {children}
//       </button>
//     </div>
//   );
// };

// export default function OptBtn() {
//   return (
//     <div className="test grid grid-cols-3 md:grid-cols-4 gap-8">
//       <Button
//         title="Circle Spinner"
//         buttonText="Loading..."
//         buttonClass="bg-blue-500 hover:bg-blue-600"
//       >
//         <div className="border-4 border-blue-500 rounded-full w-12 h-12 spinner-circle"></div>
//       </Button>

//       <Button
//         title="Dots Spinner"
//         buttonText="Processing..."
//         buttonClass="bg-purple-500 hover:bg-purple-600"
//       >
//         <div className="dots-container">
//           <div className="dot bg-purple-500"></div>
//           <div className="dot bg-purple-500"></div>
//           <div className="dot bg-purple-500"></div>
//         </div>
//       </Button>

//       <Button
//         title="Pulse Spinner"
//         buttonText="Updating..."
//         buttonClass="bg-green-500 hover:bg-green-600"
//       >
//         <div className="w-12 h-12 rounded-full bg-green-500 pulse"></div>
//       </Button>

//       <Button
//         title="Wave Spinner"
//         buttonText="Syncing..."
//         buttonClass="bg-red-500 hover:bg-red-600"
//       >
//         <div className="wave-container">
//           <div className="wave-bar bg-red-500"></div>
//           <div className="wave-bar bg-red-500"></div>
//           <div className="wave-bar bg-red-500"></div>
//           <div className="wave-bar bg-red-500"></div>
//           <div className="wave-bar bg-red-500"></div>
//         </div>
//       </Button>

//       {["bounce", "pulse", "ping"].map((animation) => (
//         <Button
//           key={animation}
//           title={`${animation} Button`}
//           buttonText={`${animation} button`}
//           buttonClass={`bg-blue-500 hover:bg-blue-700 animate-${animation}`}
//         />
//       ))}

//       {["scale", "rotate", "slide"].map((effect) => (
//         <Button key={effect} title={`${effect} Button`}>
//           <div
//             className={`transform rounded bg-blue-500 px-4 py-2 shadow-xl transition duration-300 hover:${
//               effect === "scale"
//                 ? "scale-125"
//                 : effect === "rotate"
//                 ? "rotate-180"
//                 : "translate-x-4"
//             }`}
//           >
//             <div className="flex h-full justify-center items-center">
//               <span className="font-bold text-white">{effect} Button</span>
//             </div>
//           </div>
//         </Button>
//       ))}

//       {/* {["fadein", "fadeout", "zoomin", "zoomout", "flip"].map((animationType) =>
//         ["", "up", "down", "left", "right"].map((direction) => {
//           const animation = `${animationType}${direction ? direction : ""}`;
//           return (
//             <Button key={animation} title={`${animation} Button`}>
//               <div
//                 className={`w-32 h-10 flex items-center justify-center border border-gray-300 bg-white shadow-md rounded-lg ${animation}`}
//               >
//                 {animation}
//               </div>
//             </Button>
//           );
//         })
//       )} */}
//     </div>
//   );
// }
