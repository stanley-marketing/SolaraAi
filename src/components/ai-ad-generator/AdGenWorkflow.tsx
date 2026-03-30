"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Pencil, Zap, Rocket, TrendingUp } from "lucide-react";
import { AD_GEN_CONTENT } from "./content";

const { workflow } = AD_GEN_CONTENT;

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const STEP_ICONS = [Pencil, Zap, Rocket, TrendingUp] as const;

export function AdGenWorkflow() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section
      className="relative overflow-hidden px-6 py-28 sm:px-10"
      style={{ background: "#faf8ff" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 5% 15%, rgba(167,139,250,0.08) 0%, transparent 65%), radial-gradient(ellipse 60% 40% at 95% 85%, rgba(244,114,182,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-900/40">
            {workflow.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "#111111",
            }}
          >
            {workflow.headline}
          </h2>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "#626262", maxWidth: "52ch" }}
          >
            {workflow.subheadline}
          </p>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[2.375rem] top-8 hidden h-[calc(100%-3rem)] w-px sm:block"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(167,139,250,0.3) 15%, rgba(244,114,182,0.4) 40%, rgba(251,146,60,0.35) 65%, rgba(52,211,153,0.3) 85%, transparent 100%)",
            }}
          />

          <div className="space-y-6">
            {workflow.steps.map((step, i) => (
              <motion.article
                key={step.number}
                initial={noMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                className="relative flex gap-6 sm:pl-0"
              >
                <div
                   className="relative z-10 hidden h-[4.75rem] w-[4.75rem] flex-shrink-0 flex-col items-center justify-center rounded-2xl sm:flex"
                   style={{
                     background: `linear-gradient(135deg, ${step.accentColor}18 0%, ${step.accentColor}08 100%)`,
                     border: `1.5px solid ${step.accentColor}30`,
                   }}
                 >
                   {(() => {
                     const IconComponent = STEP_ICONS[i];
                     return <IconComponent className="h-6 w-6" style={{ color: step.accentColor }} />;
                   })()}
                   <span
                     className="mt-0.5 text-[10px] font-bold tracking-[0.08em] uppercase"
                     style={{ color: step.accentColor }}
                   >
                     {step.label}
                   </span>
                 </div>

                <div
                  className="flex-1 rounded-2xl p-6 sm:p-7"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #ece9f5",
                    boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      background: `linear-gradient(120deg, ${step.accentColor}06 0%, transparent 50%)`,
                    }}
                    aria-hidden
                  />

                  <div className="relative flex items-start gap-4">
                    <div className="sm:hidden flex-shrink-0">
                       <div
                         className="flex h-10 w-10 items-center justify-center rounded-xl"
                         style={{
                           background: `${step.accentColor}18`,
                           border: `1px solid ${step.accentColor}30`,
                         }}
                       >
                         {(() => {
                           const IconComponent = STEP_ICONS[i];
                           return <IconComponent className="h-5 w-5" style={{ color: step.accentColor }} />;
                         })()}
                       </div>
                     </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span
                          className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]"
                          style={{
                            background: `${step.accentColor}15`,
                            color: step.accentColor,
                            border: `1px solid ${step.accentColor}30`,
                          }}
                        >
                          Step {step.number}
                        </span>
                      </div>
                      <h3
                        className="text-[1rem] font-semibold text-ink-900"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-700/75">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
