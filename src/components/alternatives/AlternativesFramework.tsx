"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FRAMEWORK_CRITERIA } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AlternativesFramework() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "88px 0",
        borderTop: "1px solid #eaecf0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "56px",
            alignItems: "start",
          }}
        >
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
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
              Comparison framework
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#111111",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              How to evaluate alternatives
              <br />
              without guesswork
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#667085",
                lineHeight: 1.65,
                maxWidth: "52ch",
              }}
            >
              Most teams evaluate alternatives based on visible features. The better method is
              operational impact — does it reduce time-to-launch, improve optimization cycles, and
              tie activity to pipeline?
            </p>
          </motion.div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {FRAMEWORK_CRITERIA.map((item, i) => (
              <motion.div
                key={item.dimension}
                initial={noMotion ? false : { opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-32px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr",
                  gap: "16px",
                  alignItems: "start",
                  background: "#fafafa",
                  border: "1px solid #eaecf0",
                  borderRadius: "12px",
                  padding: "18px 20px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#d0d5dd";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#eaecf0";
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    style={{ color: "#6366f1" }}
                  >
                    <path
                      d={item.icon}
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#111111",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.dimension}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "#344054",
                      lineHeight: 1.5,
                      marginBottom: "4px",
                    }}
                  >
                    {item.question}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#98a2b3", lineHeight: 1.45 }}>
                    {item.why}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
