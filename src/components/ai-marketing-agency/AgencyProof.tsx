"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AGENCY_CONTENT } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const { proof } = AGENCY_CONTENT;

export function AgencyProof() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section
      className="relative overflow-hidden px-6 py-28 sm:px-10"
      style={{ background: "#ffffff", borderTop: "1px solid #e3e3e3" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(99,102,241,0.06) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(99,102,241,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10"
        >
          <p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "#626262" }}
          >
            {proof.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display-playfair), Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1.08,
              color: "#111111",
              maxWidth: "30ch",
            }}
          >
            {proof.headline}
          </h2>
        </motion.div>

        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="overflow-hidden rounded-3xl"
           style={{ background: "#0f0f1a", border: "1px solid rgba(99,102,241,0.2)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 20% 30%, rgba(99,102,241,0.18) 0%, transparent 65%), radial-gradient(ellipse 50% 45% at 85% 75%, rgba(67,56,202,0.15) 0%, transparent 65%)",
              }}
          />

          <div className="relative px-8 pb-8 pt-8 sm:px-12 sm:pt-10">
            <div className="mb-8 flex items-center gap-3">
              <span
                className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
                style={{
                   background: "rgba(99,102,241,0.18)",
                   border: "1px solid rgba(99,102,241,0.35)",
                   color: "#818cf8",
                 }}
              >
                {proof.client}
              </span>
              <span
                className="text-[0.8rem]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {proof.clientDescriptor}
              </span>
            </div>

            <p
              className="mb-10 max-w-prose text-[0.975rem] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {proof.narrative}
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
              {proof.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={noMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.12 + i * 0.07, ease: EASE }}
                  className="flex flex-col gap-2"
                >
                  <p
                    style={{
                       fontFamily: "var(--font-display-playfair), Georgia, serif",
                       fontSize: "clamp(2rem, 4vw, 3rem)",
                       fontWeight: 700,
                       letterSpacing: "-0.04em",
                       lineHeight: 1,
                       color: "#818cf8",
                     }}
                  >
                    {stat.value}
                    {"unit" in stat && stat.unit && (
                      <span
                        style={{
                           fontFamily: "var(--font-display)",
                           fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
                           fontWeight: 400,
                           letterSpacing: "0",
                           color: "#c7d2fe",
                           marginLeft: "0.25em",
                         }}
                      >
                        {stat.unit}
                      </span>
                    )}
                  </p>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.5)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div
            className="px-8 py-5 sm:px-12"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p
              className="text-[0.8rem] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {proof.disclaimer}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
