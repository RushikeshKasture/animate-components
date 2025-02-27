import { Button } from "@/components/button";

import {
  ArrowRightIcon,
  EnvelopeClosedIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <p className="text-2xl font-medium text-center pt-4 pb-2">Button sizes</p>
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
        <Button variant="secondary" size="icon" className="rounded-full">
          <EnvelopeClosedIcon />
        </Button>
        <Button variant="outline">
          <EnvelopeClosedIcon /> Login
        </Button>
        <Button variant="outline" size={"pill"}>
          Next
          <ArrowRightIcon />
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
        <Button animationVariant="rotateClockwiseSlow">Rotate Variation</Button>
        <Button animationVariant="rotateClockwiseFast">Rotate Variation</Button>
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
        <Button variant={"default"} animationVariant="tilt3D">
          Tilt3D
        </Button>
        <Button variant={"default"} animationVariant="tiltCrazy">
          TiltCrazy
        </Button>
      </div>

      <p className="text-2xl font-medium text-center pt-4 pb-2">
        Other Animations
      </p>
      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
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
        <Button variant={"outline"} animationVariant="rippleBorder">
          Ripple Border
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
        <Button variant={"default"} animationVariant="reveal">
          Reveal
        </Button>
        <Button
          variant={"default"}
          animationVariant="nina"
          className="relative"
        >
          Nina
        </Button>
      </div>
    </div>
  );
}
