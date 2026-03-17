"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  LayoutDashboard,
  Megaphone,
  BarChart2,
  FileText,
  ClipboardList,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Megaphone, label: "Campaigns", active: true },
  { icon: BarChart2, label: "Analytics", active: false },
  { icon: FileText, label: "Content", active: false },
  { icon: ClipboardList, label: "Reports", active: false },
] as const;

const STATUS_CHIPS = [
  { label: "Active", count: 2, dot: "#10b981" },
  { label: "Paused", count: 1, dot: "#f59e0b" },
  { label: "Draft", count: 1, dot: "#9ca3af" },
] as const;

const BAR_DATA = [
  { day: "Mon", initial: "M", value: 42 },
  { day: "Tue", initial: "T", value: 58 },
  { day: "Wed", initial: "W", value: 65 },
  { day: "Thu", initial: "T", value: 53 },
  { day: "Fri", initial: "F", value: 78 },
  { day: "Sat", initial: "S", value: 71 },
  { day: "Sun", initial: "S", value: 84 },
] as const;

const BAR_MAX_PX = 64;
const BAR_COLOR = "#3b82f6";

const ACTIVITY_ITEMS = [
  { id: "q1-budget", done: true, text: "Q1 Campaign — budget optimised", time: "8m ago" },
  { id: "social-creative", done: true, text: "Social Ads — new creative launched", time: "1h ago" },
  { id: "content-schedule", done: false, text: "Content Push — scheduling next week", time: "Now" },
] as const;

export function SolaraPlusMockup() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section className="overflow-hidden bg-[#fafafa] px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <motion.h2
            initial={noMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "#040404",
              marginBottom: "1rem",
            }}
          >
            Your marketing, always visible
          </motion.h2>

          <motion.p
            initial={noMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)",
              lineHeight: 1.72,
              color: "#6b7280",
              maxWidth: "52ch",
              margin: "0 auto",
            }}
          >
            Track performance, review content, and stay in the loop &mdash;
            without doing the work yourself.
          </motion.p>
        </div>

        <div
          style={{
            transform: noMotion
              ? undefined
              : "perspective(1200px) rotateX(2deg) rotateY(-1deg)",
            transformOrigin: "center top",
          }}
        >
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-2xl"
            style={{
              border: "1px solid #eaecf0",
              boxShadow:
                "0 32px 80px -16px rgba(0,0,0,0.16), 0 8px 24px -4px rgba(0,0,0,0.06)",
            }}
          >
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ background: "#f5f5f5", borderBottom: "1px solid #e5e7eb" }}
            >
              <div className="flex items-center gap-1.5" aria-hidden>
                <div className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
                <div className="h-3 w-3 rounded-full" style={{ background: "#ffbd2e" }} />
                <div className="h-3 w-3 rounded-full" style={{ background: "#28ca41" }} />
              </div>

              <div className="flex flex-1 justify-center">
                <div
                  className="rounded-md px-5 py-1 text-xs text-gray-400"
                  style={{
                    background: "white",
                    border: "1px solid #e5e7eb",
                    minWidth: "200px",
                    textAlign: "center",
                  }}
                >
                  app.solaraai.com/campaigns
                </div>
              </div>

              <div className="w-[54px]" aria-hidden />
            </div>

            <div className="flex" style={{ background: "white", minHeight: "440px" }}>
              <div
                className="hidden flex-col sm:flex"
                style={{
                  width: "196px",
                  flexShrink: 0,
                  background: "#040404",
                  borderRight: "1px solid #181818",
                  padding: "20px 0",
                }}
              >
                <div
                  style={{
                    padding: "0 18px 18px",
                    marginBottom: "6px",
                    borderBottom: "1px solid #1c1c1c",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "white",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Solara+
                  </span>
                </div>

                <nav aria-label="Dashboard navigation">
                  {NAV_ITEMS.map(({ icon: Icon, label, active }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2.5"
                      style={{
                        padding: "9px 18px",
                        margin: "1px 8px",
                        borderRadius: "7px",
                        background: active ? "rgba(255,255,255,0.09)" : "transparent",
                        color: active ? "white" : "rgba(255,255,255,0.42)",
                        fontSize: "13px",
                        fontWeight: active ? 500 : 400,
                        cursor: "default",
                        userSelect: "none",
                      }}
                      aria-current={active ? "page" : undefined}
                    >
                      <Icon size={14} strokeWidth={active ? 2 : 1.5} aria-hidden />
                      {label}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="min-w-0 flex-1" style={{ padding: "24px 28px" }}>
                <div
                  className="flex items-center justify-between"
                  style={{ marginBottom: "20px" }}
                >
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#111827",
                      margin: 0,
                    }}
                  >
                    Campaign Overview
                  </h3>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#6b7280",
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      padding: "4px 10px",
                    }}
                  >
                    Last 7 days
                  </div>
                </div>

                <div className="flex gap-3" style={{ marginBottom: "20px" }}>
                  {STATUS_CHIPS.map(({ label, count, dot }) => (
                    <div
                      key={label}
                      style={{
                        flex: 1,
                        background: "#f9fafb",
                        border: "1px solid #eaecf0",
                        borderRadius: "10px",
                        padding: "12px 14px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          marginBottom: "6px",
                        }}
                      >
                        <div
                          aria-hidden
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: dot,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: 500,
                            color: "#9ca3af",
                            textTransform: "uppercase",
                            letterSpacing: "0.07em",
                          }}
                        >
                          {label}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          color: "#111827",
                          lineHeight: 1,
                        }}
                      >
                        {count}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <div
                    style={{
                      flex: "1 1 0%",
                      background: "#f9fafb",
                      border: "1px solid #eaecf0",
                      borderRadius: "10px",
                      padding: "14px 16px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#9ca3af",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "14px",
                      }}
                    >
                      Weekly Performance
                    </div>

                    <div
                      className="flex items-end gap-1"
                      style={{ height: `${BAR_MAX_PX}px` }}
                      role="img"
                      aria-label="Bar chart showing weekly campaign performance"
                    >
                      {BAR_DATA.map(({ day, value }, idx) => (
                        <div
                          key={day}
                          style={{
                            flex: 1,
                            height: `${(value / 100) * BAR_MAX_PX}px`,
                            backgroundColor: BAR_COLOR,
                            borderRadius: "3px 3px 0 0",
                            opacity: 0.55 + (idx / (BAR_DATA.length - 1)) * 0.45,
                          }}
                        />
                      ))}
                    </div>

                    <div className="mt-2 flex gap-1" aria-hidden>
                      {BAR_DATA.map(({ day, initial }) => (
                        <div
                          key={day}
                          style={{
                            flex: 1,
                            textAlign: "center",
                            fontSize: "9px",
                            color: "#d1d5db",
                          }}
                        >
                          {initial}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      flex: "1 1 0%",
                      background: "#f9fafb",
                      border: "1px solid #eaecf0",
                      borderRadius: "10px",
                      padding: "14px 16px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#9ca3af",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "14px",
                      }}
                    >
                      Recent Activity
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {ACTIVITY_ITEMS.map(({ id, done, text, time }) => (
                        <div
                          key={id}
                          style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}
                        >
                          {done ? (
                            <span
                              role="img"
                              aria-label="Completed"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "15px",
                                height: "15px",
                                borderRadius: "50%",
                                background: "#ecfdf5",
                                flexShrink: 0,
                                marginTop: "1px",
                              }}
                            >
                              <svg
                                width="9"
                                height="9"
                                viewBox="0 0 9 9"
                                fill="none"
                                aria-hidden="true"
                              >
                                <title>Completed</title>
                                <path
                                  d="M1.5 4.5L3.5 6.5L7.5 2.5"
                                  stroke="#10b981"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span
                              role="img"
                              aria-label="In progress"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "15px",
                                height: "15px",
                                borderRadius: "50%",
                                border: "1.5px solid #93c5fd",
                                flexShrink: 0,
                                marginTop: "1px",
                              }}
                            >
                              <span
                                aria-hidden
                                style={{
                                  width: "5px",
                                  height: "5px",
                                  borderRadius: "50%",
                                  background: "#3b82f6",
                                }}
                              />
                            </span>
                          )}

                          <span
                            style={{
                              flex: 1,
                              fontSize: "12px",
                              color: done ? "#374151" : "#9ca3af",
                              lineHeight: 1.45,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {text}
                          </span>

                          <span
                            style={{
                              fontSize: "10px",
                              color: "#d1d5db",
                              flexShrink: 0,
                            }}
                          >
                            {time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
