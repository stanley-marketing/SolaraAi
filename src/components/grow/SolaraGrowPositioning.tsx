"use client";

import { Sparkles, TimerReset, Wrench } from "lucide-react";
import { useReducedMotion } from "framer-motion";

import { GROW_CONTENT } from "./content";

const RAINBOW_COLORS = "#f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ec4899, #f97316";

export function SolaraGrowPositioning() {
  const { headline, columns } = GROW_CONTENT.positioning;
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section className="relative overflow-hidden bg-white px-6 py-28 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 55% at 0% 0%, rgba(249,115,22,0.08) 0%, transparent 70%), radial-gradient(ellipse 45% 55% at 100% 100%, rgba(14,165,233,0.09) 0%, transparent 70%)",
        }}
      />
      {!noMotion && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes sp-border-spin {
                to { --sp-angle: 360deg; }
              }
              @property --sp-angle {
                syntax: "<angle>";
                initial-value: 0deg;
                inherits: false;
              }
              .sp-rainbow-border {
                --sp-angle: 0deg;
                background: conic-gradient(from var(--sp-angle), ${RAINBOW_COLORS});
                animation: sp-border-spin 6s linear infinite;
              }
              @keyframes sp-soft-float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-4px); }
              }
              .sp-soft-float {
                animation: sp-soft-float 4.5s ease-in-out infinite;
              }
            `,
          }}
        />
      )}

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-[#111111]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            {headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#667085]">
            Compare doing everything yourself, outsourcing to a traditional agency,
            or choosing a managed AI + expert team.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {columns.map((column, index) => {
            const isHighlighted = column.highlighted;
            const Icon = isHighlighted
              ? Sparkles
              : index === 0
                ? Wrench
                : TimerReset;

            if (isHighlighted) {
              return (
                <article
                  key={column.label}
                  className={`h-full rounded-3xl ${noMotion ? "" : "sp-rainbow-border"}`}
                  style={{
                    background: noMotion
                      ? `linear-gradient(135deg, ${RAINBOW_COLORS})`
                      : undefined,
                    padding: "1.5px",
                  }}
                >
                  <div className="relative flex h-full flex-col rounded-[calc(1.5rem-1.5px)] bg-[#040404] p-6 sm:p-7">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[calc(1.5rem-1.5px)] opacity-[0.045]"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "repeat",
                      }}
                    />

                    <span className="relative mb-4 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                      Best choice
                    </span>

                    <div className="relative flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white">
                        <Icon size={18} />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{column.label}</h3>
                      </div>
                    </div>

                    <p className="relative mt-5 text-sm leading-7 text-white/75">
                      {column.description}
                    </p>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={column.label}
                className={`relative flex h-full flex-col rounded-3xl p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${noMotion ? "" : "sp-soft-float"}`}
                style={{ border: "1px solid #eaecf0" }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      index === 0
                        ? "linear-gradient(155deg, rgba(249,115,22,0.08) 0%, rgba(255,255,255,1) 42%, rgba(255,255,255,1) 100%)"
                        : "linear-gradient(155deg, rgba(6,182,212,0.1) 0%, rgba(255,255,255,1) 42%, rgba(255,255,255,1) 100%)",
                  }}
                />
                <div className="flex items-start gap-3">
                  <span
                    className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#98a2b3]"
                    style={{ border: "1px solid #eaecf0" }}
                  >
                    <Icon size={18} />
                  </span>
                  <h3 className="relative text-xl font-semibold text-[#344054]">{column.label}</h3>
                </div>

                <p className="relative mt-5 text-sm leading-7 text-[#667085]">{column.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
