"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, PenLine, Share2, Zap, BarChart2, ShieldCheck } from "lucide-react";
import { AGENCY_CONTENT } from "./content";

const SCOPE_ICONS = [Target, PenLine, Share2, Zap, BarChart2, ShieldCheck] as const;
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const { scope } = AGENCY_CONTENT;

export function AgencyScope() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section
      className="relative overflow-hidden px-6 py-28 sm:px-10"
      style={{ background: "#fafafa", borderTop: "1px solid #e3e3e3" }}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "#626262" }}
          >
            {scope.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display-playfair), Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#111111",
              maxWidth: "32ch",
            }}
          >
            {scope.headline}
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {scope.items.map((item, i) => {
            const Icon = SCOPE_ICONS[i];
            return (
              <motion.article
                key={item.title}
                initial={noMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.06 * i, ease: EASE }}
                className="relative flex flex-col gap-4 rounded-2xl bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                style={{ border: "1px solid #e3e3e3" }}
              >
                 <div
                   className="flex h-10 w-10 items-center justify-center rounded-xl"
                   style={{ background: "#eef2ff", border: "1px solid #c7d2fe" }}
                 >
                   <Icon className="h-5 w-5" style={{ color: "#6366f1" }} />
                </div>
                <h3
                  className="text-[1rem] font-semibold leading-snug"
                  style={{ color: "#111111", letterSpacing: "-0.01em" }}
                >
                  {item.title}
                </h3>
                <p className="text-[0.9rem] leading-relaxed" style={{ color: "#626262" }}>
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
