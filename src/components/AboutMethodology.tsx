"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Cpu, Users, BarChart3, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ──────────────────────────────────────────────
   TYPES
   ────────────────────────────────────────────── */

interface MethodologyStep {
  number: string;
  icon: LucideIcon;
  label: string;
  description: string;
}

/* ──────────────────────────────────────────────
   COPY
   Each step: subject → verb → outcome, GEO-ready.
   ────────────────────────────────────────────── */

const STEPS: MethodologyStep[] = [
  {
    number: "01",
    icon: Target,
    label: "Strategy configured around your business",
    description:
      "We run a structured intake — goals, target audience, competitive position, and current marketing gaps — then configure every AI agent and human workflow around that specific brief.",
  },
  {
    number: "02",
    icon: Cpu,
    label: "AI agents execute around the clock",
    description:
      "Six specialized AI agents run your paid ads, SEO, social content, creative production, website copy, and lead outreach continuously — without the delays that come with a traditional agency.",
  },
  {
    number: "03",
    icon: Users,
    label: "Human strategists steer and correct",
    description:
      "Our marketing strategists review AI output weekly, make the brand and creative calls the AI is not qualified to make, and redirect campaigns when market conditions or your business priorities shift.",
  },
  {
    number: "04",
    icon: BarChart3,
    label: "You receive clear weekly reporting",
    description:
      "Each week you receive a plain-English summary — what ran, what performed, what changed, and what comes next. No dashboards to decode, no metrics to translate.",
  },
  {
    number: "05",
    icon: RefreshCw,
    label: "The system compounds results over time",
    description:
      "Performance data feeds back into campaign logic after every cycle. The AI learns what works for your specific audience and adjusts accordingly — so each month starts from a stronger baseline than the last.",
  },
];

/* ──────────────────────────────────────────────
   MOTION VARIANTS
   ────────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */

export function AboutMethodology() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="how-solara-works"
      aria-labelledby="methodology-heading"
      className="px-6 py-24 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-700/50">
            The Process
          </p>

          <h2
            id="methodology-heading"
            className="mt-5 text-3xl tracking-tight text-ink-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
            style={{ fontFamily: "var(--font-display-playfair)", fontWeight: 300 }}
          >
            How Solara works
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700/70">
            A full marketing department — AI-driven execution paired with human
            strategic judgment — built around your business from day one.
          </p>
        </motion.div>

        {/* ── Steps Grid ── */}
        {/*
          Layout: 2-column on sm+. Steps 1-4 fill two rows of two.
          Step 5 spans both columns as the capstone outcome.
        */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid gap-4 sm:grid-cols-2"
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === STEPS.length - 1;

            return (
              <motion.article
                key={step.number}
                variants={itemVariants}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7",
                  "transition-shadow duration-300 hover:shadow-sm",
                  isLast ? "sm:col-span-2" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* Ghost step number — purely decorative */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute select-none font-bold leading-none"
                  style={{
                    fontSize: "clamp(4.5rem, 9vw, 7rem)",
                    color: "rgba(0, 0, 0, 0.035)",
                    fontFamily: "var(--font-display-playfair)",
                    right: "1.25rem",
                    top: "0.5rem",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="text-ink-900"
                  />
                </div>

                {/* Step counter */}
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-700/40">
                  Step {step.number}
                </p>

                {/* Title */}
                <h3
                  className="mt-2 text-lg font-medium leading-snug tracking-tight text-ink-900"
                  style={{ fontFamily: "var(--font-display-playfair)" }}
                >
                  {step.label}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
