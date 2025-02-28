"use client";

import {
  Slider,
  type SliderVariant,
  type SliderAnimationType,
} from "@/components/slider/Slider";

export default function SliderDemo() {
  const variants: SliderVariant[] = [
    "default",
    "neon",
    "material",
    "neumorphic",
    "retro",
    "cyberpunk",
    "brutalist",
    "skeuomorphic",
    "minimal",
    "rounded",
    "gradient",
    "glass",
    "outline",
    "shadow",
  ];

  const animationTypes: SliderAnimationType[] = [
    "slide",
    "fade",
    "zoom",
    "elastic",
    "parallax",
    "flip",
    "morph",
    "pulse",
    "breathe",
    "wave",
    "rainbow",
    "bounce",
  ];

  return (
    <div className="container mx-auto p-10 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Slider Component</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {variants.map((v) => (
          <div key={v}>
            <h3 className="font-medium">
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </h3>
            <div className={"py-8 px-4 rounded-lg bg-sky-100"}>
              <Slider
                variant={v}
                showValue={true}
                defaultValue={[20]}
                className={""}
                animationType="none"
                animationDuration={2}
                valuePrefix="Value : "
                valueSuffix="%"
                trackClassName={""}
                rangeClassName={""}
                thumbClassName={""}
                valueClassName={""}
              />
            </div>
          </div>
        ))}
        {animationTypes.map((a) => (
          <div key={a}>
            <h3 className="font-medium">
              Animation : {a.charAt(0).toUpperCase() + a.slice(1)}
            </h3>
            <div className={"py-8 px-4 rounded-lg bg-sky-100"}>
              <Slider
                variant={"default"}
                showValue={true}
                defaultValue={[40]}
                className={""}
                animationType={a}
                animationDuration={2}
                valuePrefix="Value : "
                valueSuffix="%"
                trackClassName={""}
                rangeClassName={""}
                thumbClassName={""}
                valueClassName={""}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
