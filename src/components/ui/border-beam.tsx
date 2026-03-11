"use client";

import { type Transition, motion } from "framer-motion";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: Transition;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}

export function BorderBeam({
  size = 50,
  duration = 6,
  delay = 0,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) {
  return (
    <div
      style={{
        pointerEvents: "none",
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        border: `${borderWidth}px solid transparent`,
        mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0) border-box",
        maskComposite: "intersect",
        WebkitMaskComposite: "destination-in",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          width: size,
          height: size / 5,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
          borderRadius: 999,
        }}
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 + initialOffset}%`, `${initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={
          transition ?? {
            repeat: Infinity,
            duration,
            delay,
            ease: "linear",
          }
        }
      />
    </div>
  );
}
