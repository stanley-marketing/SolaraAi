"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "acts as your marketing manager",
  "optimizes your ads",
  "creates your content",
  "manages your social",
  "grows your business",
];

export function RotatingText() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleNext = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2800);
  }, []);

  useEffect(() => {
    scheduleNext();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, scheduleNext]);

  return (
    <span className="flex flex-col items-center mt-5">
      <span>Meet the AI Agent that</span>
      <span className="relative mt-1 inline-flex h-[1.4em] items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={phrases[index]}
            initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="inline-block whitespace-nowrap"
          >
            {phrases[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
