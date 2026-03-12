"use client";

import { motion, type Variants } from "framer-motion";
import { Shield, Zap, Key, IterationCcw } from "lucide-react";

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

interface Principle {
  index: string;
  icon: React.ElementType;
  title: string;
  body: string;
}

const PRINCIPLES: Principle[] = [
  {
    index: "01",
    icon: Shield,
    title: "Honesty over hype",
    body: "We tell clients exactly what AI handles well and where human judgment makes the difference. No inflated promises, no performance theatre, no vague claims about what's possible.",
  },
  {
    index: "02",
    icon: Zap,
    title: "Speed without shortcuts",
    body: "Automation compresses timelines — it doesn't eliminate review. Every campaign still passes through experienced eyes before it goes live, because fast and sloppy costs more to fix.",
  },
  {
    index: "03",
    icon: Key,
    title: "Clients own the results",
    body: "Every asset, audience list, ad account, and data set built for a client belongs to that client — not to us, and not locked inside a proprietary system they'd lose access to on the day they leave.",
  },
  {
    index: "04",
    icon: IterationCcw,
    title: "Campaigns are feedback loops, not launches",
    body: "We treat every week of live data as a new brief. Iteration isn't a phase at the end of a project — it is the work, because the market doesn't sit still and neither do we.",
  },
];

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS
   ────────────────────────────────────────────── */

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */

export function AboutValues() {
  return (
    <section className="px-6 sm:px-10 py-24 sm:py-28 bg-white">
      <div className="mx-auto max-w-5xl">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "#9ca3af" }}
          >
            How we work
          </p>
          <h2
            className="max-w-md text-3xl font-light tracking-tight text-ink-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            Principles we operate by
          </h2>
        </motion.div>

        {/* ── Principle list ── */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="divide-y divide-gray-100 border-t border-gray-100"
        >
          {PRINCIPLES.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.index}
                variants={rowVariants}
                className="group relative grid grid-cols-[56px_1fr] gap-6 py-8 sm:grid-cols-[80px_1fr] sm:gap-10"
              >
                {/* Left accent bar — appears on hover */}
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 rounded-full transition-transform duration-300 group-hover:scale-y-100"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(168,85,247,0.8), rgba(236,72,153,0.6), rgba(251,146,60,0.4))",
                  }}
                />

                {/* Index + icon column */}
                <div className="flex flex-col items-start gap-3 pt-1">
                  <span
                    className="font-mono text-xs tabular-nums text-gray-300"
                    aria-hidden="true"
                  >
                    {p.index}
                  </span>
                  <Icon
                    size={15}
                    className="text-gray-300 transition-colors duration-300 group-hover:text-ink-900"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Text column */}
                <div>
                  <h3
                    className="mb-2.5 text-base font-semibold leading-snug text-ink-900 sm:text-[17px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed text-ink-700/70"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {p.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
