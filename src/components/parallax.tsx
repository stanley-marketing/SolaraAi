"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  mobileSpeed?: number;
  className?: string;
}

export function Parallax({
  children,
  speed = 0.3,
  mobileSpeed = 0,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const effectiveSpeed = prefersReducedMotion ? 0 : isMobile ? mobileSpeed : speed;
  const y = useTransform(scrollYProgress, [0, 1], [effectiveSpeed * -120, effectiveSpeed * 120]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
