"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GROW_CONTENT } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function SolaraPlusProcess() {
  const { headline, steps } = GROW_CONTENT.process;
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section className="relative overflow-hidden border-y border-gray-100 bg-[#f8fafc] px-6 py-28 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 80% 8%, rgba(34,197,94,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 45% at 20% 88%, rgba(59,130,246,0.08) 0%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-900/40">
            The process
          </p>
          <h2
            className="text-ink-900"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {headline}
          </h2>
        </motion.div>

        <div className="relative pl-0 sm:pl-7">
          <div
            aria-hidden
            className="absolute bottom-0 left-4 top-2 hidden w-px bg-gradient-to-b from-[#10b981]/10 via-[#10b981]/50 to-[#10b981]/10 sm:block"
          />

          <div className="space-y-5">
            {steps.map((step, i) => (
              <motion.article
                key={step.number}
                initial={noMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 + i * 0.1, ease: EASE }}
                className="relative rounded-2xl bg-white p-6 sm:ml-8 sm:p-7"
                style={{ border: "1px solid #eaecf0" }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(16,185,129,0.07) 0%, rgba(255,255,255,0) 38%)",
                  }}
                />

                <span
                  className="mb-4 inline-flex rounded-full bg-[#ecfdf3] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#047857]"
                  style={{ border: "1px solid #a7f3d0" }}
                >
                  Step {step.number}
                </span>

                <h3
                  className="relative mb-2 text-[1rem] font-semibold leading-snug text-ink-900"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {step.title}
                </h3>

                <p className="relative text-[0.9rem] leading-relaxed text-ink-700/75">
                  {step.description}
                </p>

                <span
                  aria-hidden
                  className="absolute left-4 top-8 hidden h-4 w-4 -translate-x-[2.625rem] rounded-full bg-white shadow-[0_0_0_5px_rgba(16,185,129,0.16)] sm:block"
                  style={{ border: "1px solid #6ee7b7" }}
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
