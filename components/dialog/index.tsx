"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui";
import {
  AnimationType,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  ModalVariant,
} from "./Dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

export default function Home() {
  const [animationType, setAnimationType] = useState<AnimationType>("fade");
  const [modalVariant, setModalVariant] = useState<ModalVariant>("modal");
  const [open, setOpen] = useState(false);

  const animationTypes: AnimationType[] = [
    "fade",
    "scale",
    "slideUp",
    "slideDown",
    "slideLeft",
    "slideRight",
    "rotate",
    "flip",
    "bounce",
  ];

  const modalVariants: ModalVariant[] = [
    "modal",
    "fullscreen",
    "bottom",
    "top",
    "right",
    "left",
  ];

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-8 p-4">
      <h1 className="text-3xl font-bold">Dialog Animation Demo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Animation Type
          </label>
          <Select
            value={animationType}
            onValueChange={(value) => setAnimationType(value as AnimationType)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select animation" />
            </SelectTrigger>
            <SelectContent>
              {animationTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type.charAt(0).toUpperCase() +
                    type.slice(1).replace("-", " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">
            Modal Variant
          </label>
          <Select
            value={modalVariant}
            onValueChange={(value) => setModalVariant(value as ModalVariant)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {modalVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Dialog
        open={open}
        onOpenChange={setOpen}
        animationType={animationType}
        modalVariant={modalVariant}
      >
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="border bg-sky-100">
          <DialogHeader>
            <DialogTitle>
              Modal Variant:{" "}
              <span className="text-yellow-600">{modalVariant}</span> |
              Animation: <span className="text-green-600">{animationType}</span>
            </DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum luctus odio ornare, dapibus nunc ut, auctor dui. Etiam
              ullamcorper nisl vel mi ullamcorper luctus. Sed cursus rhoncus
              dolor.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
