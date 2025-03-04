"use client";

import { Switch } from "./Switch";

export default function SwitchDemo() {
  const variantOptions = [
    "default",
    "large",
    "small",
    "pill",
    "square",
    "slim",
    "ios",
    "material",
  ];

  const animationOptions = [
    "default",
    "bounce",
    "scale",
    "rotate",
    "fade",
    "elastic",
    "pulse",
    "shake",
    "flip",
    "jelly",
    "glow",
  ];

  return (
    <div className="flex flex-col items-center space-y-8 p-8 bg-gray-50 rounded-lg">
      <h1 className="text-2xl font-bold">Switch Component</h1>
      <div className="w-full max-w-3xl space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <span>Default</span>
            <Switch />
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <span>Large Bounce</span>
            <Switch variant="large" animation="bounce" />
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <span>Small Scale</span>
            <Switch variant="small" animation="scale" />
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <span>iOS Elastic</span>
            <Switch variant="ios" animation="elastic" />
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <span>Material Pulse</span>
            <Switch variant="material" animation="pulse" />
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <span>Pill Jelly</span>
            <Switch variant="pill" animation="jelly" />
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <span>Square Flip</span>
            <Switch variant="square" animation="flip" />
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <span>Slim Shake</span>
            <Switch variant="slim" animation="shake" />
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <span>Custom Glow</span>
            <Switch
              className="bg-purple-100 data-[state=checked]:bg-purple-600"
              thumbClassName="bg-white"
              animation="glow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
