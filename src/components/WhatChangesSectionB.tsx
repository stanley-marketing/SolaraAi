"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const rows = [
  {
    watermark: "Found",
    headline: "Your invisible brand becomes the one people search for.",
    detail: "Across every platform, every day, on brand.",
  },
  {
    watermark: "Smarter",
    headline: "Every dollar watched. Every campaign optimized.",
    detail: "What bleeds gets killed. What converts gets scaled. Automatically.",
  },
  {
    watermark: "Less",
    headline: "One person, operating like a team of ten.",
    detail: "Less effort, more output, total clarity.",
  },
];

function LedgerRow({ row, index }: { row: (typeof rows)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
      className="relative"
    >
      {/* Top rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{
          duration: 1.2,
          delay: 0.05,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className="h-px w-full origin-left bg-black/[0.08]"
      />

      <div className="relative py-16 sm:py-24">
        {/* Giant watermark behind */}
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none text-[clamp(5rem,16vw,13rem)] font-[200] uppercase leading-none tracking-[-0.04em] text-black/[0.03]"
          style={{ fontFamily: "var(--font-display-playfair)" }}
        >
          {row.watermark}
        </motion.span>

        {/* Content overlay */}
        <div className="relative grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_minmax(280px,400px)]">
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15 + index * 0.05,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="max-w-2xl text-[clamp(1.6rem,3.8vw,2.8rem)] leading-[1.08] tracking-[-0.02em] text-black"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            {row.headline}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3 + index * 0.05,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="text-[0.88rem] leading-[1.7] text-black/40 font-[family-name:var(--font-body)] font-light lg:text-right"
          >
            {row.detail}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export function WhatChangesSectionB() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(sectionRef, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-32 sm:py-44">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Section header */}
        <div className="mb-16 sm:mb-24">
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
            className="mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1] tracking-[-0.025em] text-black"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            Three shifts that change
            <br />
            <span className="italic text-black/40">everything.</span>
          </motion.h2>
        </div>

        {/* Ledger rows */}
        <div className="flex flex-col">
          {rows.map((row, i) => (
            <LedgerRow key={row.watermark} row={row} index={i} />
          ))}
          {/* Final bottom rule */}
          <div className="h-px w-full bg-black/[0.08]" />
        </div>
      </div>
    </section>
  );
}
