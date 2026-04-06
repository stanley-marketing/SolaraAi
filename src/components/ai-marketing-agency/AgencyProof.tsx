"use client";

import Image from "next/image";
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
      style={{ background: "#fafafa", borderTop: "1px solid #eaecf0" }}
    >
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "#98a2b3" }}
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

        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {proof.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={noMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              style={{
                background: "#ffffff",
                border: "1px solid #eaecf0",
                borderRadius: "14px",
                padding: "24px 20px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display-playfair), Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "#111111",
                  marginBottom: "4px",
                }}
              >
                {stat.value}
                {"unit" in stat && stat.unit && (
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(0.7rem, 1.3vw, 0.9rem)",
                      fontWeight: 400,
                      letterSpacing: "0",
                      color: "#667085",
                      marginLeft: "0.2em",
                    }}
                  >
                    {stat.unit}
                  </span>
                )}
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#98a2b3",
                  letterSpacing: "0.02em",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          style={{
            background: "#ffffff",
            border: "1px solid #eaecf0",
            borderRadius: "16px",
            padding: "32px",
          }}
        >
          <div className="mb-5 flex items-center gap-4">
            <Image
              src="/images/omer.webp"
              alt="Omer — Maison Remodeling"
              width={44}
              height={44}
              className="rounded-full"
              style={{ border: "2px solid #eaecf0" }}
            />
            <div>
              <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#111111" }}>Omer</p>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#667085",
                }}
              >
                {proof.client} · {proof.clientDescriptor}
              </span>
            </div>
          </div>

          <p
            className="max-w-prose text-[0.95rem] leading-relaxed"
            style={{ color: "#444444" }}
          >
            {proof.narrative}
          </p>

          <p
            className="mt-5 text-[0.8rem] leading-relaxed"
            style={{ color: "#98a2b3" }}
          >
            {proof.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
