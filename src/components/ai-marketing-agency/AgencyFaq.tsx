"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { AGENCY_CONTENT } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AgencyFaq() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="px-6 py-28 sm:px-10"
      style={{ background: "#ffffff", borderTop: "1px solid #e3e3e3" }}
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "#626262" }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display-playfair), Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#111111",
            }}
          >
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {AGENCY_CONTENT.faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.question}
                initial={noMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.05 * i, ease: EASE }}
                 className="overflow-hidden rounded-2xl"
                 style={{ border: `1px solid ${isOpen ? "#c7d2fe" : "#e3e3e3"}`, transition: "border-color 0.2s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-150"
                   style={{ background: isOpen ? "#eef2ff" : "#ffffff" }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[0.975rem] font-semibold leading-snug"
                    style={{ color: "#111111", letterSpacing: "-0.01em" }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                     style={{ background: isOpen ? "#e0e7ff" : "#f1f1f1" }}
                    aria-hidden="true"
                  >
                     {isOpen ? (
                       <Minus className="h-3.5 w-3.5" style={{ color: "#6366f1" }} />
                     ) : (
                       <Plus className="h-3.5 w-3.5" style={{ color: "#626262" }} />
                     )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={noMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="px-6 pb-6 pt-1 text-[0.925rem] leading-relaxed"
                        style={{ color: "#626262" }}
                      >
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
