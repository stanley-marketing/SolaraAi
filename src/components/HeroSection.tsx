"use client";

import { motion } from "framer-motion";
import AuroraBackground from "@/components/AuroraBackground";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.1, ease: "easeOut" as const },
  },
};

const rankings = [
  "#1 in bake-offs",
  "#1 in benchmarks",
  "#1 for complex workflows",
  "#1 on G2",
];

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-white">
      <AuroraBackground />

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-24 text-center sm:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="max-w-5xl font-[family-name:var(--font-display)] text-ink-900 leading-[0.88] tracking-[-0.02em]"
          style={{ fontSize: "clamp(3.15rem, 9vw, 8.4rem)" }}
          variants={fadeUp}
        >
          The #1 AI Agent for
          <span className="relative block">
            <span className="relative z-10">autonomous marketing</span>
            <span className="absolute -bottom-[0.08em] left-1/2 h-[0.07em] w-[58%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          </span>
        </motion.h1>

        <motion.div
          className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-ink-700"
          variants={fadeIn}
        >
          {rankings.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          variants={fadeUp}
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-black px-7 py-3.5 font-[family-name:var(--font-body)] text-[0.95rem] font-semibold tracking-[0.01em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(13,11,8,0.2)]"
          >
            <span className="relative z-10">Start free trial</span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <span className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                style={{ animation: "shimmer-sweep 1.8s linear infinite" }}
              />
            </span>
          </a>

          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/75 px-7 py-3.5 font-[family-name:var(--font-body)] text-[0.95rem] font-semibold tracking-[0.01em] text-ink-900 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-700/30 hover:bg-white hover:shadow-[0_14px_28px_rgba(55,49,40,0.1)]"
          >
            <svg
              className="h-4 w-4 text-ink-700 transition-colors duration-300 group-hover:text-ink-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Watch demo
          </a>
        </motion.div>

      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  );
}
