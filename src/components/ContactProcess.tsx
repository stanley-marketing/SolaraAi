"use client";

import { motion } from "framer-motion";
import { Calendar, ClipboardList, Rocket } from "lucide-react";

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const STEPS = [
  {
    number: "01",
    icon: Calendar,
    label: "Book",
    body: "Pick a time that works. The call takes 45 minutes.",
  },
  {
    number: "02",
    icon: ClipboardList,
    label: "Onboard",
    body: "We audit your current marketing, define goals, and build a 90-day plan.",
  },
  {
    number: "03",
    icon: Rocket,
    label: "Launch",
    body: "Solara takes over execution. You get weekly reports and full transparency.",
  },
];

/* ──────────────────────────────────────────────
   CONTACT PROCESS
   ────────────────────────────────────────────── */

export function ContactProcess() {
  return (
    <section className="border-t border-gray-100 bg-white px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-ink-900"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontFamily: "var(--font-display-playfair)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          What happens next
        </motion.h2>

        {/* Steps */}
        <div className="mt-14 grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-0">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col"
              >
                {/* Top rule */}
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background: "linear-gradient(to right, #d1d5db 0%, transparent 80%)",
                    marginBottom: "20px",
                  }}
                />

                {/* Number + Icon row */}
                <div className="mb-4 flex items-center gap-3">
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-body)",
                      color: "#9ca3af",
                      letterSpacing: "0.1em",
                      fontWeight: 500,
                    }}
                  >
                    {step.number}
                  </span>
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    style={{ color: "#9ca3af" }}
                  />
                </div>

                {/* Step label */}
                <p
                  className="text-ink-900"
                  style={{
                    fontSize: "1rem",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.label}
                </p>

                {/* Step body */}
                <p
                  className="text-ink-700/70"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
