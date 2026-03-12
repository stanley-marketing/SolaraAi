"use client";

import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS
   ────────────────────────────────────────────── */

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  }),
};

/* ──────────────────────────────────────────────
   COPY
   ────────────────────────────────────────────── */

const LABEL = "Pre-seed · 2024";
const STAT = "$1M";
const HEADING = "Backed by $1M in pre-seed funding";

const BODY_1 =
  "Solara AI raised $1 million in pre-seed funding in 2024. The investment reflects a shared conviction: that the gap between enterprise-grade marketing capabilities and what is available to most businesses is a problem worth solving properly.";

const BODY_2 =
  "Solara AI was built to close that gap — not with complexity or AI buzzwords, but with a system that runs marketing end-to-end, making the best available technology genuinely accessible to every business that needs it.";

/* ──────────────────────────────────────────────
   ABOUT FUNDING SECTION
   ────────────────────────────────────────────── */

export function AboutFunding() {
  return (
    <section
      className="px-6 sm:px-10 py-24 sm:py-28"
      style={{ background: "#fafafa" }}
      aria-labelledby="about-funding-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[200px_1fr] lg:gap-20 lg:items-start">

          {/* ── Left: typographic stat anchor ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" as const }}
            className="lg:pt-1"
          >
            {/* Large dollar figure */}
            <p
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-display-playfair)",
                fontSize: "clamp(4rem, 10vw, 7.5rem)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                color: "#111111",
              }}
            >
              {STAT}
            </p>

            {/* Year / round label */}
            <p
              className="mt-3 text-xs uppercase tracking-[0.28em]"
              style={{
                fontFamily: "var(--font-body)",
                color: "#9a9a9a",
              }}
            >
              {LABEL}
            </p>

            {/* Gradient accent rule */}
            <div
              style={{
                marginTop: "20px",
                width: "40px",
                height: "2px",
                borderRadius: "2px",
                background:
                  "linear-gradient(to right, rgba(168,85,247,0.85), rgba(236,72,153,0.65), rgba(251,146,60,0.45))",
              }}
            />
          </motion.div>

          {/* ── Right: heading + body ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Heading */}
            <motion.h2
              id="about-funding-heading"
              custom={0}
              variants={FADE_UP}
              className="text-ink-900"
              style={{
                fontFamily: "var(--font-display-playfair)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.625rem)",
                fontWeight: 500,
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
              }}
            >
              {HEADING}
            </motion.h2>

            {/* Divider */}
            <motion.div
              custom={0.1}
              variants={FADE_UP}
              style={{
                marginTop: "24px",
                marginBottom: "24px",
                height: "1px",
                background:
                  "linear-gradient(to right, #e3e3e3, transparent)",
              }}
            />

            {/* Body paragraph 1 */}
            <motion.p
              custom={0.2}
              variants={FADE_UP}
              className="text-base leading-[1.75]"
              style={{
                fontFamily: "var(--font-body)",
                color: "#626262",
              }}
            >
              {BODY_1}
            </motion.p>

            {/* Body paragraph 2 */}
            <motion.p
              custom={0.3}
              variants={FADE_UP}
              className="mt-5 text-base leading-[1.75]"
              style={{
                fontFamily: "var(--font-body)",
                color: "#626262",
              }}
            >
              {BODY_2}
            </motion.p>

            {/* Milestones */}
            <motion.div
              custom={0.42}
              variants={FADE_UP}
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-10"
            >
              {/* Milestone 1 */}
              <div className="flex items-baseline gap-3">
                <span
                  style={{
                    fontFamily: "var(--font-display-playfair)",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#111111",
                    lineHeight: 1,
                  }}
                >
                  2024
                </span>
                <span
                  className="text-xs uppercase tracking-[0.22em]"
                  style={{ fontFamily: "var(--font-body)", color: "#9a9a9a" }}
                >
                  Founded
                </span>
              </div>

              {/* Milestone 2 */}
              <div className="flex items-baseline gap-3">
                <span
                  style={{
                    fontFamily: "var(--font-display-playfair)",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#111111",
                    lineHeight: 1,
                  }}
                >
                  $1M
                </span>
                <span
                  className="text-xs uppercase tracking-[0.22em]"
                  style={{ fontFamily: "var(--font-body)", color: "#9a9a9a" }}
                >
                  Pre-seed raised
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
