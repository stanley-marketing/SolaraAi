"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────
   Data — only approved milestone facts
   ───────────────────────────────────────────────────────────────── */

const MILESTONES = [
  {
    label: "2024",
    title: "Solara AI is founded",
  },
  {
    label: ".2M pre-seed",
    title:
      "Solara AI raises $1.2M in pre-seed funding",
  },
] as const;

/* Shared cubic-bezier for all entrance transitions */
const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─────────────────────────────────────────────────────────────────
   Gradient dot accent
   ───────────────────────────────────────────────────────────────── */

function TimelineDot({ delay }: { delay: number }) {
  return (
    <motion.div
      className="relative z-10 mt-[3px] h-3.5 w-3.5 flex-shrink-0 rounded-full"
      style={{
        background:
          "linear-gradient(135deg, #a855f7 0%, #ec4899 55%, #f97316 100%)",
        boxShadow:
          "0 0 0 3px rgba(168,85,247,0.10), 0 0 12px rgba(168,85,247,0.18)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{
        duration: 0.42,
        delay,
        ease: [0.34, 1.56, 0.64, 1], /* spring-pop */
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────
   Single milestone entry
   ───────────────────────────────────────────────────────────────── */

function TimelineEntry({
  label,
  title,
  index,
  isLast,
}: {
  label: string;
  title: string;
  index: number;
  isLast: boolean;
}) {
  const delay = index * 0.1;

  return (
    <div className="relative flex gap-7 sm:gap-10">
      {/* ── Left rail: dot + connector ── */}
      <div className="relative flex flex-col items-center">
        <TimelineDot delay={delay} />

        {/* Gradient connector — only between entries, not after last */}
        {!isLast && (
          <div
            className="mt-3 w-px flex-1"
            style={{
              minHeight: 96,
              background:
                "linear-gradient(to bottom, rgba(168,85,247,0.22) 0%, rgba(236,72,153,0.14) 55%, rgba(251,146,60,0.07) 100%)",
            }}
          />
        )}
      </div>

      {/* ── Content ── */}
      <motion.div
        className={isLast ? "pb-2" : "pb-14 sm:pb-16"}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.65, delay: delay + 0.1, ease: EASE_SMOOTH }}
      >
        {/* Label — year or funding milestone */}
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.24em]"
          style={{
            fontFamily: "var(--font-display-playfair)",
            background:
              "linear-gradient(90deg, #a855f7 0%, #ec4899 52%, #f97316 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {label}
        </p>

        {/* Title */}
        <h3
          className="mt-2 max-w-[28rem] text-xl leading-[1.3] text-ink-900 sm:text-[1.625rem] sm:leading-[1.25]"
          style={{ fontFamily: "var(--font-display-playfair)", fontWeight: 300 }}
        >
          {title}
        </h3>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Trailing open marker — signals the journey continues
   ───────────────────────────────────────────────────────────────── */

function TrailingMarker() {
  return (
    <motion.div
      className="flex gap-7 sm:gap-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px 0px" }}
      transition={{ duration: 0.5, delay: 0.35, ease: EASE_SMOOTH }}
    >
      {/* Open dashed circle — "dot not yet filled" */}
      <div className="flex flex-col items-center">
        <div
          className="mt-[3px] h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-dashed"
          style={{ borderColor: "rgba(168,85,247,0.25)" }}
        />
      </div>

      <p
        className="mt-[3px] text-[13px] tracking-[0.14em] text-ink-900/28"
        style={{ fontFamily: "var(--font-body)" }}
      >
        More ahead.
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Section
   ───────────────────────────────────────────────────────────────── */

export function AboutTimeline() {
  return (
    <section className="px-6 sm:px-10 py-24 sm:py-28">
      <div className="mx-auto max-w-2xl">
        {/* ── Heading block ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        >
          <p
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-ink-900/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our story
          </p>

          <h2
            className="text-4xl leading-[1.1] tracking-[-0.02em] text-ink-900 sm:text-5xl"
            style={{ fontFamily: "var(--font-display-playfair)", fontWeight: 300 }}
          >
            Milestones so far
          </h2>

          {/* Brand gradient accent line */}
          <div
            className="mt-5 h-px w-12"
            style={{
              background:
                "linear-gradient(to right, rgba(168,85,247,0.9), rgba(236,72,153,0.72), rgba(251,146,60,0.45))",
            }}
          />
        </motion.div>

        {/* ── Timeline ── */}
        <div className="mt-14 sm:mt-16">
          {MILESTONES.map((m, i) => (
            <TimelineEntry
              key={m.label}
              label={m.label}
              title={m.title}
              index={i}
              isLast={i === MILESTONES.length - 1}
            />
          ))}

          <TrailingMarker />
        </div>
      </div>
    </section>
  );
}
