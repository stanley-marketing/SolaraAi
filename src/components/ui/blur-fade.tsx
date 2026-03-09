"use client";

import { motion } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  blur?: string;
  offset?: number;
}

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.5,
  blur = "6px",
  offset = 24,
}: BlurFadeProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: offset, filter: `blur(${blur})` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
