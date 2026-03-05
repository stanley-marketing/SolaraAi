"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const transformations = [
  {
    before: "An invisible brand",
    after: "The brand people find",
    detail: "Across every platform, every day, on brand.",
  },
  {
    before: "A wasted ad budget",
    after: "Your growth engine",
    detail: "Every dollar watched. What bleeds gets killed. What converts gets scaled.",
  },
  {
    before: "45 minutes a week",
    after: "A full team, 24/7",
    detail: "One person operating like ten. Less effort, total clarity.",
  },
];

function TransformRow({
  item,
  index,
}: {
  item: (typeof transformations)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <div ref={ref} className="relative flex items-stretch gap-0">
      {/* Timeline connector */}
      <div className="relative mr-8 hidden w-8 flex-shrink-0 flex-col items-center sm:flex md:mr-12">
        {/* Vertical line */}
        {index > 0 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="absolute -top-16 left-1/2 h-16 w-px origin-top -translate-x-1/2 bg-black/[0.08]"
          />
        )}

        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="relative z-10 mt-3 flex h-5 w-5 items-center justify-center"
        >
          <span className="absolute h-5 w-5 rounded-full bg-black/[0.04]" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/30" />
        </motion.div>

        {/* Line below (except last) */}
        {index < transformations.length - 1 && (
          <div className="flex-1 w-px bg-black/[0.06]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-20 sm:pb-24">
        {/* Before — struck through */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          <span className="relative inline-block text-[clamp(1.1rem,2.2vw,1.5rem)] font-light tracking-[-0.01em] text-black/25 font-[family-name:var(--font-body)]">
            {item.before}
            {/* Strikethrough line — animates across */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="absolute left-0 top-1/2 h-px w-full origin-left bg-black/20"
            />
          </span>
        </motion.div>

        {/* Arrow + After */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="mt-3 flex items-baseline gap-3"
        >
          <svg
            className="mt-1 h-4 w-4 flex-shrink-0 text-black/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-4-4m4 4l4-4" />
          </svg>
          <h3
            className="text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.02] tracking-[-0.025em] text-black"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            {item.after}
          </h3>
        </motion.div>

        {/* Detail */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-4 max-w-md text-[0.86rem] leading-[1.7] text-black/38 font-[family-name:var(--font-body)] font-light sm:ml-7"
        >
          {item.detail}
        </motion.p>
      </div>
    </div>
  );
}

export function WhatChangesSectionC() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(sectionRef, { once: true, margin: "-8% 0px -8% 0px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-32 sm:py-44">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        {/* Section header */}
        <div className="mb-20 sm:mb-28">
          <motion.span
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/30 font-[family-name:var(--font-body)]"
          >
            What changes
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="mt-4 max-w-lg text-[clamp(2.2rem,5vw,3.8rem)] leading-[1] tracking-[-0.025em] text-black"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            The old way
            <span className="italic text-black/40">&ensp;vs.&ensp;</span>
            yours.
          </motion.h2>
        </div>

        {/* Transformation rows */}
        <div className="flex flex-col">
          {transformations.map((item, i) => (
            <TransformRow key={item.before} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
