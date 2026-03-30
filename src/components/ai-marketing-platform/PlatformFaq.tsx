"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { PLATFORM_CONTENT } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const VIEW_ONCE = { once: true, margin: "-60px" };

const { faq } = PLATFORM_CONTENT;

export function PlatformFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-[#f8fafc] px-6 py-28 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 85% 15%, rgba(16,185,129,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW_ONCE}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-900/40">
            Questions & answers
          </p>
          <h2
            className="text-ink-900"
            style={{
              fontFamily: "var(--font-display-playfair)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.question}
                initial={noMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW_ONCE}
                transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
                className="overflow-hidden rounded-2xl bg-white"
                style={{ border: "1px solid #eaecf0" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  style={{ cursor: "pointer" }}
                >
                  <span
                    className="pr-4 text-[0.95rem] font-semibold text-ink-900"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200"
                    style={{
                      border: "1px solid #e5e7eb",
                      background: isOpen ? "#040404" : "#f8fafc",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      width={12}
                      height={12}
                    >
                      <path
                        d="M7 2v10M2 7h10"
                        stroke={isOpen ? "#ffffff" : "#667085"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="px-6 pb-5 text-[0.9rem] leading-relaxed text-ink-700/72">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
