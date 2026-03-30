"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AlternativesFaq() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "88px 0",
        borderTop: "1px solid #eaecf0",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ marginBottom: "48px" }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(17,17,17,0.4)",
              marginBottom: "12px",
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "#111111",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Frequently asked questions
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.question}
                initial={noMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-24px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                style={{
                  borderRadius: "14px",
                  border: `1px solid ${isOpen ? "#d0d5dd" : "#eaecf0"}`,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "18px 22px",
                    background: isOpen ? "#f9fafb" : "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 0.15s",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "#111111",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      height: "28px",
                      width: "28px",
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      background: isOpen ? "#e5e7eb" : "#f1f1f1",
                    }}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus style={{ width: 14, height: 14, color: "#111111" }} />
                    ) : (
                      <Plus style={{ width: 14, height: 14, color: "#667085" }} />
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
                        style={{
                          padding: "4px 22px 20px",
                          fontSize: "0.875rem",
                          color: "#667085",
                          lineHeight: 1.65,
                        }}
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
