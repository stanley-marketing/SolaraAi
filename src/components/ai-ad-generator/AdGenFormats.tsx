"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { AD_GEN_CONTENT } from "./content";

const { comparison, checklist } = AD_GEN_CONTENT;

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AdGenFormats() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section
      className="relative overflow-hidden px-6 py-28 sm:px-10"
      style={{ background: "#f7f6ff" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 90% 10%, rgba(244,114,182,0.06) 0%, transparent 60%), radial-gradient(ellipse 55% 40% at 10% 90%, rgba(167,139,250,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl space-y-24">
        <div>
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-10"
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-900/40">
              {comparison.eyebrow}
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
              {comparison.headline}
            </h2>
          </motion.div>

          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            className="overflow-hidden rounded-2xl"
            style={{ border: "1px solid #e8e5f5" }}
          >
            <div className="hidden md:block">
              <table
                className="w-full text-left"
                style={{ borderCollapse: "collapse", tableLayout: "fixed" }}
              >
                <thead>
                  <tr style={{ background: "#f1eeff" }}>
                    <th
                      className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-900/50"
                      style={{ width: "36%", borderBottom: "1px solid #e8e5f5" }}
                    >
                      Capability
                    </th>
                    <th
                      className="px-6 py-4 text-sm font-medium text-ink-900/60"
                      style={{ width: "32%", borderBottom: "1px solid #e8e5f5" }}
                    >
                      Ad-generation-only tools
                    </th>
                    <th
                      className="px-6 py-4"
                      style={{ width: "32%", borderBottom: "1px solid #e8e5f5" }}
                    >
                      <img
                        src="/images/solara-logo-black.png"
                        alt="Solara AI"
                        style={{ height: 22, width: "auto", display: "inline-block" }}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody style={{ background: "#ffffff" }}>
                  {comparison.rows.map((row, i) => (
                    <tr
                      key={row.capability}
                      style={{
                        borderBottom: i < comparison.rows.length - 1 ? "1px solid #f0eef8" : "none",
                      }}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-ink-900">
                        {row.capability}
                      </td>
                      <td className="px-6 py-4 text-sm text-ink-700/70">
                        {row.others}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold" style={{ color: "#111111" }}>
                        {row.solara}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-0" style={{ background: "#ffffff" }}>
              {comparison.rows.map((row, i) => (
                <div
                  key={row.capability}
                  className="px-5 py-4"
                  style={{
                    borderBottom: i < comparison.rows.length - 1 ? "1px solid #f0eef8" : "none",
                  }}
                >
                  <p className="text-sm font-semibold text-ink-900 mb-2">{row.capability}</p>
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="text-ink-700/60">Others: {row.others}</span>
                    <span className="font-semibold" style={{ color: "#111111" }}>
                      Solara: {row.solara}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={noMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="mt-5 text-sm text-ink-700/70"
          >
            For deeper vendor comparisons, visit the{" "}
            <Link
              href="/alternatives"
              className="underline decoration-ink-300 underline-offset-4 hover:text-ink-900 transition-colors"
            >
              alternatives hub
            </Link>
            .
          </motion.p>
        </div>

        <div>
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-10"
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-900/40">
              {checklist.eyebrow}
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
              {checklist.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700/75" style={{ maxWidth: "52ch" }}>
              {checklist.subheadline}
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {checklist.items.map((item, i) => (
              <motion.div
                key={item.text}
                initial={noMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e8e5f5",
                }}
              >
                <span
                  className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #f472b6)",
                    minWidth: "1.25rem",
                  }}
                >
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-ink-700">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
