"use client";

import { motion } from "framer-motion";
import { Clock, Cpu, Shield } from "lucide-react";

import { SOLARA_PLUS_CONTENT } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const STATEMENT_ICONS = [Shield, Cpu, Clock] as const;

export function SolaraPlusTrust() {
  const { statements } = SOLARA_PLUS_CONTENT.trust;

  return (
    <section className="border-t border-gray-100 bg-white px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
          className="mb-10 text-center"
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-900/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Why teams choose Solara+
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
        >
          {statements.map((statement, i) => {
            const Icon = STATEMENT_ICONS[i % STATEMENT_ICONS.length];
            return (
              <motion.div
                key={statement}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 + i * 0.08, ease: EASE }}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#344054]"
                style={{ border: "1px solid #eaecf0", background: "#fafafa" }}
              >
                <Icon className="h-4 w-4 text-[#667085]" aria-hidden="true" />
                <span>{statement}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
