"use client";

import Image from "next/image";
import { Check, X } from "lucide-react";

const COLUMNS = [
  { key: "solara",     label: "Solara",     icon: "/solara-icon.svg",    iconSize: 28, badge: "Best for Business" },
  { key: "freelancer", label: "Freelancer", icon: null,                  iconSize: 0  },
  { key: "agency",     label: "Agency",     icon: null,                  iconSize: 0  },
  { key: "chatgpt",    label: "ChatGPT",    icon: "/icons/openai.svg",   iconSize: 26 },
  { key: "claude",     label: "Claude",     icon: "/icons/claude.svg",   iconSize: 20 },
  { key: "gemini",     label: "Gemini",     icon: "/icons/gemini.svg",   iconSize: 20 },
] as const;

type ColKey = (typeof COLUMNS)[number]["key"];

interface Row {
  feature: string;
  solara: boolean;
  freelancer: boolean;
  chatgpt: boolean;
  claude: boolean;
  gemini: boolean;
  agency: boolean;
}

const ROWS: Row[] = [
  { feature: "Builds content strategy weekly",       solara: true, freelancer: false, agency: true,  chatgpt: false, claude: false, gemini: false },
  { feature: "Writes scripts in your voice",         solara: true, freelancer: true,  agency: false, chatgpt: false, claude: false, gemini: false },
  { feature: "Directs what to film, scene by scene", solara: true, freelancer: false, agency: false, chatgpt: false, claude: false, gemini: false },
  { feature: "Edits videos with B-roll & captions",  solara: true, freelancer: true,  agency: true,  chatgpt: false, claude: false, gemini: false },
  { feature: "Publishes at optimal times",            solara: true, freelancer: false, agency: true,  chatgpt: false, claude: false, gemini: false },
  { feature: "Learns and improves every month",       solara: true, freelancer: false, agency: false, chatgpt: false, claude: false, gemini: false },
  { feature: "Works via WhatsApp",                    solara: true, freelancer: false, agency: false, chatgpt: false, claude: false, gemini: false },
];

function CellIcon({ value, isSolara }: { value: boolean; isSolara: boolean }) {
  if (value && isSolara) {
    return (
      <span
        className="inline-flex items-center justify-center rounded-full"
        style={{ width: 28, height: 28, background: "#d1fae5" }}
      >
        <Check style={{ width: 15, height: 15, color: "#059669", strokeWidth: 2.5 }} />
      </span>
    );
  }

  if (value) {
    return (
      <span className="inline-flex items-center justify-center" style={{ width: 28, height: 28 }}>
        <Check style={{ width: 15, height: 15, color: "#9ca3af", strokeWidth: 2 }} />
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center" style={{ width: 28, height: 28 }}>
      <X style={{ width: 14, height: 14, color: "#c0c5cc", strokeWidth: 1.8 }} />
    </span>
  );
}

function FreelancerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="#6b7280" strokeWidth="1.5" />
      <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AgencyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="14" rx="2" stroke="#6b7280" strokeWidth="1.5" />
      <path d="M8 7V5a4 4 0 018 0v2" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="14" r="2" stroke="#6b7280" strokeWidth="1.5" />
    </svg>
  );
}

function ColumnHeader({ col }: { col: (typeof COLUMNS)[number] }) {
  const isSolara = col.key === "solara";

  return (
    <div className="flex flex-col items-center gap-2">
      {"badge" in col && col.badge && (
        <span
          style={{
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: "#059669",
            background: "#d1fae5",
            borderRadius: 999,
            padding: "4px 14px",
          }}
        >
          {col.badge}
        </span>
      )}

      <div className="flex items-center justify-center" style={{ height: 32 }}>
        {col.key === "freelancer" && <FreelancerIcon />}
        {col.key === "agency" && <AgencyIcon />}
        {col.icon && (
          <Image
            src={col.icon}
            alt={`${col.label} icon`}
            width={col.iconSize}
            height={col.iconSize}
            className="object-contain"
          />
        )}
      </div>

      <span
        style={{
          fontSize: isSolara ? "1rem" : "0.85rem",
          fontWeight: isSolara ? 700 : 600,
          color: isSolara ? "#111111" : "#4b5563",
          letterSpacing: "-0.01em",
        }}
      >
        {col.label}
      </span>
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section
      className="relative w-full px-6 py-24 sm:px-10 sm:py-32"
      style={{ background: "#fafafa" }}
      aria-label="Comparison"
    >
      <div className="mx-auto max-w-5xl">
        <p
          className="text-center"
          style={{
            fontSize: "0.74rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#059669",
            marginBottom: 18,
          }}
        >
          Comparison
        </p>

        <h2
          className="text-center"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.8vw, 2.75rem)",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: "#111111",
            marginBottom: 14,
          }}
        >
          Not all solutions are created equal.
        </h2>

        <p
          className="mx-auto text-center"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.95rem, 1.5vw, 1.06rem)",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#4b5563",
            maxWidth: 520,
            marginBottom: 52,
          }}
        >
          They create individual pieces and call it a presence.{" "}
          Solara actually manages your social media.
        </p>

        <div className="hidden md:block overflow-x-auto">
          <table
            className="w-full"
            style={{ borderCollapse: "separate", borderSpacing: 0, tableLayout: "fixed", minWidth: 720 }}
          >
            <thead>
              <tr>
                <th style={{ width: "30%", padding: "0 0 0 8px" }} />
                {COLUMNS.map((col) => {
                  const isSolara = col.key === "solara";
                  return (
                    <th
                      key={col.key}
                      style={{
                        width: `${70 / COLUMNS.length}%`,
                        padding: "20px 8px 16px",
                        textAlign: "center",
                        verticalAlign: "bottom",
                        ...(isSolara
                          ? {
                              background: "#ffffff",
                              borderTopLeftRadius: 16,
                              borderTopRightRadius: 16,
                              border: "1px solid #e5e7eb",
                              borderBottom: "none",
                              boxShadow: "0 -4px 24px rgba(0,0,0,0.04)",
                            }
                          : {}),
                      }}
                    >
                      <ColumnHeader col={col} />
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {ROWS.map((row, i) => {
                const isLast = i === ROWS.length - 1;
                return (
                  <tr key={row.feature}>
                    <td
                      style={{
                        padding: "17px 8px",
                        fontSize: "0.92rem",
                        fontWeight: 500,
                        color: "#1f2937",
                        fontFamily: "var(--font-body)",
                        borderBottom: isLast ? "none" : "1px solid #f0f1f3",
                      }}
                    >
                      {row.feature}
                    </td>

                    {COLUMNS.map((col) => {
                      const isSolara = col.key === "solara";
                      return (
                        <td
                          key={col.key}
                          style={{
                            padding: "17px 8px",
                            textAlign: "center",
                            borderBottom: isLast ? "none" : "1px solid #f0f1f3",
                            ...(isSolara
                              ? {
                                  background: "#ffffff",
                                  borderLeft: "1px solid #e5e7eb",
                                  borderRight: "1px solid #e5e7eb",
                                  ...(isLast
                                    ? {
                                        borderBottomLeftRadius: 16,
                                        borderBottomRightRadius: 16,
                                        borderBottom: "1px solid #e5e7eb",
                                      }
                                    : {}),
                                }
                              : {}),
                          }}
                        >
                          <div className="flex items-center justify-center">
                            <CellIcon value={row[col.key as ColKey]} isSolara={isSolara} />
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="md:hidden">
          <div
            className="grid gap-1"
            style={{
              gridTemplateColumns: `repeat(${COLUMNS.length}, 1fr)`,
              padding: "14px 0",
              borderBottom: "1px solid #e5e7eb",
              marginBottom: 4,
            }}
          >
            {COLUMNS.map((col) => {
              const isSolara = col.key === "solara";
              return (
                <div key={col.key} className="flex flex-col items-center gap-1">
                  {isSolara && (
                    <span
                      style={{
                        fontSize: "0.52rem",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        color: "#059669",
                        background: "#d1fae5",
                        borderRadius: 999,
                        padding: "2px 6px",
                      }}
                    >
                      Best
                    </span>
                  )}
                  {col.icon && (
                    <Image
                      src={col.icon}
                      alt={col.label}
                      width={isSolara ? 20 : 16}
                      height={isSolara ? 20 : 16}
                      className="object-contain"
                    />
                  )}
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: isSolara ? 700 : 500,
                      color: isSolara ? "#111111" : "#6b7280",
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {col.label}
                  </span>
                </div>
              );
            })}
          </div>

          {ROWS.map((row, i) => (
            <div
              key={row.feature}
              style={{
                padding: "14px 0",
                borderBottom: i < ROWS.length - 1 ? "1px solid #f0f1f3" : "none",
              }}
            >
              <p
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  color: "#1f2937",
                  marginBottom: 10,
                  fontFamily: "var(--font-body)",
                }}
              >
                {row.feature}
              </p>
              <div
                className="grid gap-1"
                style={{ gridTemplateColumns: `repeat(${COLUMNS.length}, 1fr)` }}
              >
                {COLUMNS.map((col) => (
                  <div key={col.key} className="flex justify-center">
                    <CellIcon value={row[col.key as ColKey]} isSolara={col.key === "solara"} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 transition-all duration-300 hover:bg-[#2a2a2a] hover:shadow-lg hover:shadow-black/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
            style={{
              background: "#111111",
              color: "#ffffff",
              fontSize: "0.88rem",
              fontWeight: 600,
              letterSpacing: "0.01em",
            }}
          >
            Start free trial
            <svg
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
