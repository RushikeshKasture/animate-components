"use client";

import { useState } from "react";
import { Separator } from "./Seperator";
import { Button } from "@/components/button/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Slider } from "@/src/components/ui/slider";
import { Star } from "lucide-react";

export default function SeparatorDemo() {
  const [animationType, setAnimationType] = useState<
    "none" | "fade" | "grow" | "slide" | "pulse"
  >("fade");
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
    "horizontal"
  );
  const [variant, setVariant] = useState<string>("solid");
  const [duration, setDuration] = useState(0.5);
  const [delay, setDelay] = useState(0);
  const [thickness, setThickness] = useState(1);
  const [key, setKey] = useState(0);

  const resetAnimation = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-8 p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Animated Separator Demo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <p>Animation Type</p>
            <Select
              value={animationType}
              onValueChange={(value) => setAnimationType(value as any)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select animation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="fade">Fade</SelectItem>
                <SelectItem value="grow">Grow</SelectItem>
                <SelectItem value="slide">Slide</SelectItem>
                <SelectItem value="pulse">Pulse</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <p>Orientation</p>
            <Select
              value={orientation}
              onValueChange={(value) => setOrientation(value as any)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select orientation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="horizontal">Horizontal</SelectItem>
                <SelectItem value="vertical">Vertical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <p>Duration: {duration.toFixed(1)}s</p>
            <Slider
              value={[duration]}
              min={0.1}
              max={2}
              step={0.1}
              onValueChange={(value) => setDuration(value[0])}
            />
          </div>

          <div className="space-y-2">
            <p>Delay: {delay.toFixed(1)}s</p>
            <Slider
              value={[delay]}
              min={0}
              max={1}
              step={0.1}
              onValueChange={(value) => setDelay(value[0])}
            />
          </div>

          <Button onClick={resetAnimation} className="w-full">
            Reset Animation
          </Button>
        </div>

        <div className="flex items-center justify-center">
          <div
            className={`${
              orientation === "horizontal" ? "w-full" : "h-64"
            } flex items-center justify-center`}
          >
            <Separator
              key={key}
              orientation={orientation}
              animationType={animationType}
              animationDuration={duration}
              animationDelay={delay}
              className={`border border-b-2 border-gray-400 ${
                orientation === "horizontal" ? "" : "h-full"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Examples</h2>

        <div className="space-y-6">
          {["border-solid", "border-dashed", "border-dotted"].map(
            (variantBorderClass, index) => (
              <div className="space-y-2" key={index}>
                <p className="text-sm text-muted-foreground capitalize">
                  {variantBorderClass}
                </p>
                <Separator
                  key={`example-fade-${key}`}
                  animationType="fade"
                  className={`border-b-2 border-gray-400 ${variantBorderClass}`}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
