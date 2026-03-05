"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/* ─── Copy broken into styled fragments ─── */
const fragments: { text: string; accent?: boolean }[] = [
  { text: "Marketing" },
  { text: "is" },
  { text: "more" },
  { text: "important" },
  { text: "now" },
  { text: "than" },
  { text: "ever." },
  { text: "It's" },
  { text: "what" },
  { text: "turns" },
  { text: "a" },
  { text: "business", accent: true },
  { text: "into" },
  { text: "a" },
  { text: "brand.", accent: true },
  { text: "It's" },
  { text: "what" },
  { text: "makes" },
  { text: "people" },
  { text: "know", accent: true },
  { text: "you" },
  { text: "exist.", accent: true },
];

function Word({
  fragment,
  index,
  total,
  progress,
}: {
  fragment: (typeof fragments)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;

  const opacity = useTransform(progress, [start, Math.min(end, start + 0.6 / total)], [0.08, 1]);
  const y = useTransform(progress, [start, Math.min(end, start + 0.5 / total)], [12, 0]);
  const blurVal = useTransform(progress, [start, Math.min(end, start + 0.5 / total)], [4, 0]);
  const filterStr = useTransform(blurVal, (v: number) => `blur(${v}px)`);

  return (
    <motion.span
      style={{
        opacity,
        y,
        filter: filterStr,
        display: "inline-block",
      }}
      className={`mr-[0.3em] ${
        fragment.accent
          ? "italic font-[family-name:var(--font-display-playfair)] text-[1.12em]"
          : ""
      }`}
    >
      {fragment.text}
    </motion.span>
  );
}

export function WhyNowSectionA() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const progress = useTransform(scrollYProgress, [0.08, 0.65], [0, 1]);
  const labelOpacity = useTransform(scrollYProgress, [0, 0.06, 0.7, 0.85], [0, 1, 1, 0]);
  const blockOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);
  const blockY = useTransform(scrollYProgress, [0.7, 0.9], [0, -40]);

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: "280vh" }}
    >
      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 sm:px-10">
        {/* Thin decorative top line */}
        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute left-1/2 top-[12vh] h-12 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-black/[0.06] to-transparent"
        />

        <motion.div
          style={{ opacity: blockOpacity, y: blockY }}
          className="max-w-3xl text-center"
        >
          {/* Overline */}
          <motion.span
            style={{ opacity: labelOpacity }}
            className="mb-10 inline-block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/30"
          >
            Why now
          </motion.span>

          {/* Word-by-word text */}
          <p className="text-[clamp(1.5rem,3.8vw,2.8rem)] leading-[1.35] tracking-[-0.015em] text-black font-[family-name:var(--font-body)] font-light">
            {fragments.map((frag, i) => (
              <Word
                key={i}
                fragment={frag}
                index={i}
                total={fragments.length}
                progress={progress}
              />
            ))}
          </p>
        </motion.div>

        {/* Scroll hint dot */}
        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute bottom-[8vh] left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-px bg-gradient-to-b from-black/[0.06] to-transparent" />
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-black/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
