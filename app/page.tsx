// import LoaderAnimations from "@/components/btnAni";
// import FlipButton from "@/components/btnFlip";

// import ShinyButton from "@/components/btnShiny";
// import SlideButton from "@/components/btnSlide";
// import BtnSparkle from "@/components/btnSparkle";
// import AnimatedButton from "@/components/btnTest";
import { Button } from "@/components/modified";
// import { Button } from "@/components/button";
// import { Button } from "@/components/btnOpt";

import {
  ArrowRightIcon,
  // ChevronRightIcon,
  EnvelopeClosedIcon,
  // PlusIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
// import Link from "next/link";

export default function Home() {
  return (
    // <div className="flex flex-row items-start gap-4 justify-start">
    //   <div className="flex items-start flex-col gap-4 justify-center m-4">
    //     {[
    //       "default",
    //       "secondary",
    //       "destructive",
    //       "outline",
    //       "link",
    //       "ghost",
    //     ].map((BtnVariant, index) => (
    //       <Button
    //         key={index}
    //         variant={
    //           BtnVariant as
    //             | "default"
    //             | "secondary"
    //             | "destructive"
    //             | "outline"
    //             | "link"
    //             | "ghost"
    //         }
    //       >
    //         Click here
    //       </Button>
    //     ))}
    //     <Button variant="outline" size="icon">
    //       <ChevronRightIcon />
    //     </Button>
    //     <Button>
    //       <EnvelopeClosedIcon /> Login with Email
    //     </Button>
    //     <Button disabled>
    //       <ReloadIcon className="animate-spin" />
    //       Please wait
    //     </Button>
    //     <Button asChild>
    //       <Link href="/login">Login as child Link</Link>
    //     </Button>

    //     {/* <Button variant="secondary">fade</Button>
    //     <Button variant="outline">slideTop</Button>
    //     <Button variant="secondary">slideBottom</Button>
    //     <Button variant="ghost">slideLeft</Button>
    //     <Button variant="default">slideRight</Button>
    //     <Button variant="secondary">slideRight</Button>
    //     <Button variant="default">spring</Button> */}
    //   </div>

    //   <div className="flex items-center flex-col gap-4 justify-center m-4">
    //     <h4>on hover</h4>
    //     <Button variant="default">scale</Button>
    //     <Button variant="default">rotate</Button>
    //     <FlipButton />
    //   </div>
    //   <div className="flex items-center flex-col gap-4 justify-center m-4">
    //     <h4>complex animations</h4>
    //     <BtnSparkle>Stars</BtnSparkle>
    //     <SlideButton />
    //     <ShinyButton />
    //   </div>

    // </div>

    //  {/* <LoaderAnimations /> */}

    // <>
    //   <div className="test grid grid-cols-3 md:grid-cols-4 gap-8">
    //     {/* shadcn defaults */}
    //     {[
    //       "default",
    //       "secondary",
    //       "destructive",
    //       "outline",
    //       "link",
    //       "ghost",
    //     ].map((BtnVariant, index) => (
    //       <Button
    //         key={index}
    //         variant={
    //           BtnVariant as
    //             | "default"
    //             | "secondary"
    //             | "destructive"
    //             | "outline"
    //             | "link"
    //             | "ghost"
    //         }
    //       >
    //         Click here
    //       </Button>
    //     ))}
    //     <Button variant="outline" size="icon">
    //       <ChevronRightIcon />
    //     </Button>
    //     <Button>
    //       <EnvelopeClosedIcon /> Login with Email
    //     </Button>
    //     <Button disabled>
    //       <ReloadIcon className="animate-spin" />
    //       Please wait
    //     </Button>
    //     <Button asChild>
    //       <Link href="/login">Login as child Link</Link>
    //     </Button>
    //     {/* NEW  */}
    //     <Button
    //       variant="default"
    //       animationVariant="bounce"
    //       size="default"
    //       wrapperClassName="relative flex flex-col items-center justify-center overflow-hidden py-4"
    //       // className?: string;
    //     >
    //       Click here
    //     </Button>
    //     <Button
    //       variant="default"
    //       animationVariant="pulse"
    //       size="default"
    //       wrapperClassName="relative flex flex-col items-center justify-center overflow-hidden py-4"
    //       // className?: string;
    //     >
    //       Click here
    //     </Button>
    //     <Button
    //       variant="default"
    //       animationVariant="scale"
    //       size="default"
    //       wrapperClassName=""
    //     >
    //       Scale Button
    //     </Button>
    //     <Button
    //       variant="default"
    //       animationVariant="ping"
    //       size="default"
    //       wrapperClassName="relative flex flex-col items-center justify-center py-4"
    //       // className?: string;
    //     >
    //       Click here
    //     </Button>
    //     <Button
    //       variant="default"
    //       animationVariant="rotate"
    //       size="default"
    //       wrapperClassName="relative flex flex-col items-center justify-center py-4"
    //       // className?: string;
    //     >
    //       Click here
    //     </Button>
    //     <Button
    //       variant="default"
    //       animationVariant="slide"
    //       size="default"
    //       wrapperClassName="relative flex flex-col items-center justify-center py-4"
    //       // className?: string;
    //     >
    //       Click here
    //     </Button>
    //     <Button
    //       variant="outline"
    //       animationVariant=""
    //       size="default"
    //       wrapperClassName="relative flex flex-col items-center justify-center py-4"
    //       className="group p-5 cursor-pointer relative text-xlfont-normal border-0 flex items-center justify-center bg-white h-10 w-32 overflow-hidden transition-all duration-100 hover:bg-white rounded-none"
    //     >
    //       <span className="group-hover:w-full absolute left-0 h-full w-5 border-y-2 border-l-2 border-grey-300 transition-all duration-500"></span>
    //       <p
    //         className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
    //      duration-200"
    //       >
    //         Hover me
    //       </p>
    //       <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
    //         Thank you!
    //       </span>
    //       <span className="group-hover:w-full absolute right-0 h-full w-5  border-y-2 border-r-2  border-grey-300 transition-all duration-500"></span>
    //     </Button>
    //     <Button
    //       variant="default"
    //       animationVariant="winona"
    //       size="default"
    //       wrapperClassName=""
    //       className="p-0 bg-blue-500 hover:bg-blue-700 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest align-middle overflow-hidden"
    //     >
    //       <span className="align-middle block text-white">Flip Button</span>
    //     </Button>
    //     <Button
    //       variant="default"
    //       animationVariant="moema"
    //       size="default"
    //       wrapperClassName=""
    //       className="px-5 py-3 bg-blue-500 hover:bg-blue-700 hover:text-white text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest"
    //     >
    //       <span className="align-middle block text-white">Bg Ripple</span>
    //     </Button>
    //     <Button
    //       variant="default"
    //       animationVariant="nina"
    //       size="default"
    //       wrapperClassName=""
    //       className="px-5 py-3 bg-blue-500 hover:bg-blue-700 hover:text-white text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest"
    //     >
    //       <span className="align-middle">F</span>
    //       <span className="align-middle">i</span>
    //       <span className="align-middle">l</span>
    //       <span className="align-middle">t</span>
    //       <span className="align-middle">e</span>
    //       <span className="align-middle">r</span>
    //     </Button>
    //     <Button
    //       variant="none"
    //       animationVariant="gradientGlow"
    //       size="default"
    //       wrapperClassName=""
    //       className="text-white font-bold py-4 px-8 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-110"
    //     >
    //       Gradient glow!
    //     </Button>
    //     <Button
    //       variant="none"
    //       animationVariant=""
    //       size="default"
    //       wrapperClassName=""
    //       className="relative group px-7 py-3 bg-white text-slate-800 font-medium rounded-lg ring-1 ring-gray-900/10 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
    //     >
    //       <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-600 to-violet-600 blur opacity-25 transition duration-1000 group-hover:opacity-100 group-hover:duration-200 -z-10"></span>
    //       Glowing Button
    //     </Button>
    //     <Button
    //       variant="none"
    //       animationVariant=""
    //       size="default"
    //       wrapperClassName=""
    //       className="text-gray-500 hover:text-white font-medium py-4 px-4 shadow-lg border text-lg cursor-pointer relative before:absolute before:bg-blue-500 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500"
    //     >
    //       <span className="relative">Hover over me</span>
    //     </Button>
    //     {[
    //       "fadein",
    //       "fadeout",
    //       "fadeindown",
    //       "fadeinup",
    //       "fadeinleft",
    //       "fadeinright",
    //       "fadeoutdown",
    //       "fadeoutup",
    //       "fadeoutleft",
    //       "fadeoutright",
    //       "fadeouttopleft",
    //       "fadeouttopright",
    //       "zoomin",
    //       "zoominup",
    //       "zoomindown",
    //       "zoominleft",
    //       "zoominright",
    //       "zoomout",
    //       "zoomoutup",
    //       "zoomoutdown",
    //       "zoomoutleft",
    //       "zoomoutright",
    //       "flip",
    //       "flipup",
    //       "flipdown",
    //       "flipleft",
    //       "flipright",
    //       "fliptopleft",
    //       "fliptopright",
    //       "flipbottomleft",
    //       "flipbottomright",
    //     ].map((animation) => (
    //       <Button
    //         key={animation}
    //         variant="none"
    //         animationVariant={animation}
    //         size="default"
    //         wrapperClassName=""
    //         className="w-32 h-10 flex items-center justify-center border border-gray-300 bg-white shadow-md rounded-lg"
    //       >
    //         {animation}
    //       </Button>
    //     ))}
    //   </div>
    // </>
    <>
      {/* <LoaderAnimations /> */}
      <div className="flex flex-col gap-8 items-center justify-center">
        <p className="text-2xl font-medium text-center pt-4 pb-2">
          Button sizes
        </p>
        <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
          <Button variant="default" size={"xs"}>
            xs
          </Button>
          <Button variant="default" size={"sm"}>
            sm
          </Button>
          <Button variant="default" size={"md"}>
            md
          </Button>
          <Button variant="default" size={"lg"}>
            lg
          </Button>
          <Button variant="default" size={"xl"}>
            xl
          </Button>
          <Button variant="default" size={"compact"}>
            compact
          </Button>
          <Button variant="default" size={"wide"}>
            wide
          </Button>
          <Button variant="default" size={"icon"}>
            <EnvelopeClosedIcon />
          </Button>
          <Button variant="default" size={"pill"}>
            pill
          </Button>
          <Button variant="default" size={"block"}>
            block
          </Button>
        </div>
        <p className="text-2xl font-medium text-center pt-4 pb-2">
          Button variants
        </p>
        <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
          <Button variant="default">Default Button</Button>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="success">Success Button</Button>
          <Button variant="warning">Warning Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="subtle">Subtle Button</Button>
          <Button variant="elevated">Elevated Button</Button>
          <Button variant="glass">Glass Button</Button>
          <Button variant="neon">Neon Button</Button>
          <Button variant="pill">Pill Button</Button>
          <Button disabled>
            <ReloadIcon className="animate-spin" />
            Loading Button
          </Button>
          <Button variant="outline" size="icon">
            <ArrowRightIcon />
          </Button>
          <Button variant="outline">
            <EnvelopeClosedIcon /> Login
          </Button>
        </div>
        <p className="text-2xl font-medium text-center pt-4 pb-2">
          Flip Animations
        </p>
        <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex justify-center items-center">
          {" "}
          <Button animationVariant="flipX">FlipX</Button>
          <Button animationVariant="flipY">FliYp</Button>
          <Button animationVariant="flipCard">FlipCard</Button>
        </div>
        <p className="text-2xl font-medium text-center pt-4 pb-2">
          Scale/Zoom Animations
        </p>
        <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex justify-center items-center">
          {" "}
          <Button animationVariant="scaleUp">scaleUp Variation</Button>
          <Button animationVariant="scaleDown">scaleDown Variation</Button>
          <Button animationVariant="scalePulse">scalePulse Variation</Button>
          <Button animationVariant="scaleExpandContract">
            scaleExpandContract Variation
          </Button>
          <Button animationVariant="scaleHeartbeat">
            scaleHeartbeat Variation
          </Button>
        </div>
        <p className="text-2xl font-medium text-center pt-4 pb-2">
          Rotate Animations
        </p>
        <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex justify-center items-center">
          <Button animationVariant="rotateClockwiseSlow">
            Rotate Variation
          </Button>
          <Button animationVariant="rotateClockwiseFast">
            Rotate Variation
          </Button>
          <Button animationVariant="rotateAntiClockwiseSlow">
            Rotate Variation
          </Button>
          <Button animationVariant="rotateAntiClockwiseFast">
            Rotate Variation
          </Button>
          <Button animationVariant="rotatePingPong"> Rotate Variation</Button>
          <Button animationVariant="spinSlow">spin</Button>
          <Button animationVariant="spinFast">spin</Button>{" "}
          <Button animationVariant="spinPingPong">spin</Button>{" "}
        </div>
        <p className="text-2xl font-medium text-center pt-4 pb-2">
          Bounce Animations
        </p>
        <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex justify-center items-center">
          {" "}
          <Button animationVariant="bounceSmooth">Bounce Variation</Button>
          <Button animationVariant="bounceSlow">Bounce Variation</Button>
          <Button animationVariant="bounce">Bounce Variation</Button>
          <Button animationVariant="bounceFast">Bounce Variation</Button>
          <Button animationVariant="bounceJelly">Bounce Variation</Button>
        </div>
        <p className="text-2xl font-medium text-center pt-4 pb-2">
          Fade Animations
        </p>
        <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex justify-center items-center">
          {" "}
          <Button animationVariant="fadeBlink">Fade In/Out</Button>
          <Button animationVariant="fadeInOut">Fade In/Out</Button>
          <Button animationVariant="fadeInOutTop">Fade In/Out</Button>{" "}
          <Button animationVariant="fadeInOutBottom">Fade In/Out</Button>{" "}
          <Button animationVariant="fadeInOutLeft">Fade In/Out</Button>{" "}
          <Button animationVariant="fadeInOutRight">Fade In/Out</Button>{" "}
          <Button animationVariant="fadeInOutTopLeft">Fade In/Out</Button>
          <Button animationVariant="fadeInOutTopRight">Fade In/Out</Button>{" "}
          <Button animationVariant="fadeInOutBottomLeft">Fade In/Out</Button>{" "}
          <Button animationVariant="fadeInOutBottomRight">Fade In/Out</Button>
        </div>
        <p className="text-2xl font-medium text-center pt-4 pb-2">
          Swipe/Slide Animations
        </p>
        <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex justify-center items-center">
          {" "}
          <Button animationVariant="swipeUp">Swipe</Button>
          <Button animationVariant="swipeDown">Swipe</Button>
          <Button animationVariant="swipeLeft">Swipe</Button>
          <Button animationVariant="swipeRight">Swipe</Button>
          <Button animationVariant="slideLeftRight">Swipe</Button>
          <Button animationVariant="slideUpDown">Swipe</Button>
        </div>
        <p className="text-2xl font-medium text-center pt-4 pb-2">
          Press 3D Animations
        </p>
        <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex justify-center items-center">
          <Button animationVariant="press3D">3D Press</Button>
          <Button animationVariant="press3DSoft">3D Press</Button>
          <Button animationVariant="press3DHard">3D Press</Button>{" "}
          <Button animationVariant="press3DPop">3D Press</Button>{" "}
          <Button variant={"outline"} animationVariant="press3DDepth">
            3D Press
          </Button>
        </div>

        <p className="text-2xl font-medium text-center pt-4 pb-2">
          Other Animations
        </p>
        <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
          <Button variant={"default"} animationVariant="tilt3D">
            Tilt3D
          </Button>
          <Button variant={"default"} animationVariant="tiltCrazy">
            TiltCrazy
          </Button>
          <Button variant={"outline"} animationVariant="gradientShift">
            Gradient Shift
          </Button>

          <Button variant={"outline"} animationVariant="borderPulse">
            Border Pulse
          </Button>
          <Button variant={"outline"} animationVariant="borderPulseRainbow">
            Border Pulse
          </Button>

          <Button variant={"outline"} animationVariant="shadowGlow">
            Shadow Glow
          </Button>
          <Button variant={"outline"} animationVariant="neonGlow">
            Neon Glow
          </Button>

          <Button variant={"outline"} animationVariant="ripple" size={"pill"}>
            Ripple
          </Button>
          <Button variant={"default"} animationVariant="ping">
            Ping
          </Button>
          <Button variant={"outline"} animationVariant="shake">
            Shake
          </Button>
          <Button variant={"default"} animationVariant="wobble">
            Wobble
          </Button>
        </div>
      </div>
    </>
  );
}
