"use client";

import { stagger, useAnimate } from "framer-motion";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// type AnimationSequence = Parameters<typeof animate>[0];

const BtnSparkle = ({ children }: { children: string }) => {
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    const sparkles = Array.from({ length: 20 });

    const sparklesAnimation: [
      string,
      { x: number; y: number; scale: number; opacity: number },
      { duration: number; at: string }
    ][] = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-80, 80),
        y: randomNumberBetween(-80, 80),
        scale: randomNumberBetween(1.5, 2),
        opacity: 1,
      },
      {
        duration: 0.4,
        at: "<",
      },
    ]);

    const sparklesFadeOut: [
      string,
      { opacity: number; scale: number },
      { duration: number; at: string }
    ][] = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.3,
        at: "<",
      },
    ]);

    const sparklesReset: [
      string,
      { x: number; y: number },
      { duration: number }
    ][] = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    animate([
      ...sparklesReset,
      [".letter", { y: -16 }, { duration: 0.2, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ]);
  };

  return (
    <div ref={scope}>
      <button
        onClick={onButtonClick}
        className="min-w-[100px] relative rounded-md bg-slate-800 py-2 px-4 border border-transparent text-sm text-white transition-colors hover:bg-slate-700"
      >
        <span className="sr-only">{children}</span>
        <span className="block h-4 overflow-hidden" aria-hidden>
          {children.split("").map((letter, index) => (
            <span
              data-letter={letter}
              className="letter relative inline-block h-4 leading-4 after:absolute after:left-0 after:top-full after:h-4 after:content-[attr(data-letter)]"
              key={`${letter}-${index}`}
            >
              {letter}
            </span>
          ))}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 block"
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <svg
              className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
              key={index}
              viewBox="0 0 122 117"
              width="10"
              height="10"
            >
              <path
                className="fill-slate-800"
                d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
              />
            </svg>
          ))}
        </span>
      </button>
    </div>
  );
};

export default BtnSparkle;
