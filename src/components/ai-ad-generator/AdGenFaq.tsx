"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { AD_GEN_CONTENT } from "./content";

const { faq } = AD_GEN_CONTENT;

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AdGenFaq() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="relative overflow-hidden px-6 py-28 sm:px-10"
      style={{ background: "#0d1017" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% -5%, rgba(167,139,250,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
            {faq.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            {faq.headline}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.article
                key={item.question}
                initial={noMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
                className="overflow-hidden rounded-2xl"
                style={{
                  background: isOpen
                    ? "linear-gradient(145deg, rgba(167,139,250,0.12) 0%, rgba(255,255,255,0.04) 100%)"
                    : "rgba(255,255,255,0.04)",
                  border: isOpen
                    ? "1px solid rgba(167,139,250,0.25)"
                    : "1px solid rgba(255,255,255,0.09)",
                  transition: "background 0.25s ease, border-color 0.25s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[0.9375rem] font-semibold leading-snug text-white"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "linear-gradient(135deg, #a78bfa, #f472b6)"
                        : "rgba(255,255,255,0.1)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M5 1v8M1 5h8"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={noMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-white/65">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
