"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import { AGENCY_CONTENT } from "./content";
import type { ComparisonValue } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const { comparison } = AGENCY_CONTENT;

function renderValue(value: ComparisonValue, isSolara?: boolean) {
  if (value === "check") {
    return (
      <Check
        className="inline-block align-middle"
        style={{ color: "#6366f1", width: isSolara ? 22 : 18, height: isSolara ? 22 : 18 }}
      />
    );
  }
  if (value === "cross") {
    return <X className="inline-block align-middle h-4 w-4" style={{ color: "#d0d5dd" }} />;
  }
  return (
    <span
      className="inline-block align-middle"
      style={{
        fontSize: "0.82rem",
        color: isSolara ? "#111111" : "#9ba3af",
        fontWeight: isSolara ? 600 : 400,
      }}
    >
      {value}
    </span>
  );
}

export function AgencyComparison() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section
      className="px-6 py-28 sm:px-10"
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
            {comparison.eyebrow}
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
            {comparison.headline}
          </h2>
        </motion.div>

        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="hidden overflow-hidden rounded-2xl md:block"
          style={{ border: "1px solid #e3e3e3", background: "#ffffff" }}
        >
          <table className="w-full" style={{ borderCollapse: "collapse", tableLayout: "fixed" }}>
            <thead>
              <tr style={{ background: "#fafafa" }}>
                <th
                  style={{
                    width: "36%",
                    padding: "18px 24px",
                    textAlign: "left",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#9ba3af",
                    borderBottom: "1px solid #e3e3e3",
                  }}
                >
                  Feature
                </th>
                <th
                  style={{
                    width: "21%",
                    padding: "18px 20px",
                    textAlign: "center",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#9ba3af",
                    borderBottom: "1px solid #e3e3e3",
                  }}
                >
                  {comparison.columns.diy}
                </th>
                <th
                  style={{
                    width: "21%",
                    padding: "18px 20px",
                    textAlign: "center",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#9ba3af",
                    borderBottom: "1px solid #e3e3e3",
                  }}
                >
                  {comparison.columns.tools}
                </th>
                 <th
                   style={{
                     width: "22%",
                     padding: "18px 20px",
                     textAlign: "center",
                     borderBottom: "1px solid #e3e3e3",
                     background: "#eef2ff",
                   }}
                >
                  <img
                    src="/images/solara-logo-black.png"
                    alt="Solara AI"
                    style={{ height: 22, width: "auto", display: "inline-block" }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className="transition-colors duration-150 hover:!bg-[#f5f6f8]"
                  style={{ background: i % 2 === 0 ? "#ffffff" : "#fafbfc" }}
                >
                  <td
                    style={{
                      padding: "15px 24px",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      color: "#111111",
                    }}
                  >
                    {row.feature}
                  </td>
                  <td style={{ padding: "15px 20px", textAlign: "center" }}>
                    {renderValue(row.diy)}
                  </td>
                  <td style={{ padding: "15px 20px", textAlign: "center" }}>
                    {renderValue(row.tools)}
                  </td>
                   <td
                     style={{
                       padding: "15px 20px",
                       textAlign: "center",
                       background: i % 2 === 0 ? "#eef2ff" : "#f5f3ff",
                     }}
                  >
                    {renderValue(row.agency, true)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="space-y-3 md:hidden">
          {comparison.rows.map((row) => (
            <div
              key={row.feature}
              className="rounded-xl p-4"
              style={{ border: "1px solid #e3e3e3", background: "#ffffff" }}
            >
              <p className="mb-2 text-sm font-medium" style={{ color: "#111111" }}>
                {row.feature}
              </p>
              <div className="flex gap-5 text-sm">
                <span style={{ color: "#9ba3af" }}>DIY: {renderValue(row.diy)}</span>
                <span className="font-medium" style={{ color: "#111111" }}>
                  Solara: {renderValue(row.agency, true)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
