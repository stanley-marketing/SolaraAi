"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SOLARA_PLUS_CONTENT } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function StepCard({
  number,
  title,
  description,
  index,
}: {
  number: number;
  title: string;
  description: string;
  index: number;
}) {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <motion.div
      initial={noMotion ? false : { opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.08 + index * 0.1, ease: EASE }}
      className="relative flex h-full flex-col rounded-2xl bg-white p-6"
      style={{ border: "1px solid #eaecf0" }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-4 select-none text-6xl font-black leading-none text-gray-100"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {number}
      </span>

      <div className="relative z-10 mb-5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#040404] text-sm font-medium text-white">
        {number}
      </div>

      <h3
        className="relative z-10 mb-2 text-[1rem] font-semibold leading-snug text-ink-900"
        style={{ fontFamily: "var(--font-body)", letterSpacing: "-0.01em" }}
      >
        {title}
      </h3>

      <p
        className="relative z-10 text-[0.875rem] leading-relaxed text-ink-700/70"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {description}
      </p>
    </motion.div>
  );
}

function ConnectorArrow({ index }: { index: number }) {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <motion.div
      aria-hidden="true"
      initial={noMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: EASE }}
      className="hidden shrink-0 items-center justify-center px-1 lg:flex"
    >
      <div className="flex items-center">
        <div className="h-px w-5 bg-[#d1d5db]" />
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1 1L7 6L1 11"
            stroke="#d1d5db"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}

export function SolaraPlusProcess() {
  const { headline, steps } = SOLARA_PLUS_CONTENT.process;
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section className="border-t border-gray-100 bg-[#fafafa] px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-900/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
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

        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:flex-row lg:items-stretch lg:gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-stretch lg:flex-1">
              <div className="w-full">
                <StepCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  index={i}
                />
              </div>
              {i < steps.length - 1 && <ConnectorArrow index={i} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
