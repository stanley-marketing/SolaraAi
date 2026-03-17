"use client";

import { motion } from "framer-motion";
import { Layers, TrendingDown, TrendingUp } from "lucide-react";
import { SOLARA_PLUS_CONTENT } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const CARD_ICONS = [TrendingDown, TrendingUp, Layers] as const;

export function SolaraPlusProof() {
  const { headline, sub, cards } = SOLARA_PLUS_CONTENT.proof;

  return (
    <section className="border-t border-gray-100 bg-white px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 text-center"
        >
          <p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-900/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            What clients experience
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

          <p
            className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-700/70"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {sub}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = CARD_ICONS[i];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.12 + i * 0.1,
                  ease: EASE,
                }}
                className="flex flex-col gap-4 rounded-2xl bg-white p-8"
                style={{ border: "1px solid #eaecf0" }}
              >
                <Icon className="h-6 w-6" style={{ color: "#22c55e" }} />

                <h3
                  className="text-[1rem] font-semibold leading-snug text-ink-900"
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className="text-[15px] leading-relaxed text-[#667085]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
