"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { PLATFORM_CONTENT } from "./content";

const { hero } = PLATFORM_CONTENT;

export function PlatformHero() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  const parts = hero.headline.split(hero.headlineEmphasis);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#040404] px-6 pb-24 pt-36 text-white sm:px-10 sm:pt-44">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes ph-slideup {
            from { transform: translateY(14px); }
            to   { transform: translateY(0); }
          }
          .ph-badge    { animation: ph-slideup 0.55s cubic-bezier(0.16,1,0.3,1); }
          .ph-headline { animation: ph-slideup 0.72s cubic-bezier(0.16,1,0.3,1); }
          .ph-sub      { animation: ph-slideup 0.65s cubic-bezier(0.16,1,0.3,1) 0.12s both; }
          .ph-cta      { animation: ph-slideup 0.60s cubic-bezier(0.16,1,0.3,1) 0.22s both; }
          .ph-stats    { animation: ph-slideup 0.70s cubic-bezier(0.16,1,0.3,1) 0.38s both; }
        }
      `}</style>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/grow/hero-constellation.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.35,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 58% at 50% 4%, rgba(16,185,129,0.24) 0%, rgba(56,96,255,0.14) 32%, rgba(4,4,4,0.88) 70%), linear-gradient(180deg, rgba(10,10,16,0.5) 0%, rgba(4,4,4,0.97) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.06,
        }}
      />

      {!noMotion && (
        <>
          <span className="absolute left-[14%] top-36 h-2 w-2 animate-ping rounded-full bg-emerald-300/80" />
          <span
            className="absolute right-[12%] top-56 h-1.5 w-1.5 animate-ping rounded-full bg-cyan-300/70"
            style={{ animationDelay: "0.8s" }}
          />
          <span
            className="absolute left-[26%] top-[22rem] h-1.5 w-1.5 animate-ping rounded-full bg-white/75"
            style={{ animationDelay: "1.3s" }}
          />
          <span
            className="absolute right-[30%] top-[17rem] h-1 w-1 animate-ping rounded-full bg-emerald-200/60"
            style={{ animationDelay: "0.5s" }}
          />
        </>
      )}

      <div className="relative mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center text-center">
        <div className="ph-badge mb-7">
          <div
            className="shimmer-pill"
            style={{
              position: "relative",
              overflow: "hidden",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "13px",
              fontWeight: 500,
              color: "#e6edf7",
              borderRadius: 999,
              padding: "7px 16px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.24)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              aria-hidden
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#34d399",
                boxShadow: "0 0 6px #34d399",
              }}
            />
            {hero.badge}
          </div>
        </div>

        <h1
          className="ph-headline text-white"
          style={{
            fontFamily: "var(--font-display-playfair)",
            fontSize: "clamp(2.5rem, 7vw, 90px)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.06,
            marginBottom: "1.5rem",
            maxWidth: "20ch",
            textWrap: "balance",
          }}
        >
          {parts[0]}
          <em style={{ fontStyle: "italic", color: "#6ee7b7" }}>
            {hero.headlineEmphasis}
          </em>
          {parts[1]}
        </h1>

        <p
          className="ph-sub text-white/72"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            lineHeight: 1.72,
            maxWidth: "52ch",
            marginBottom: "2.5rem",
          }}
        >
          {hero.subheadline}
        </p>

        <div className="ph-cta mb-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={hero.cta.href}
            className="group inline-flex items-center gap-2 rounded-[999px] bg-white px-6 py-3 text-[14px] font-medium tracking-[0.5px] text-[#040404] transition-all duration-200 hover:bg-white/90 hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {hero.cta.label}
            <svg
              className="h-3.5 w-0 opacity-0 transition-all duration-200 group-hover:w-3.5 group-hover:opacity-100"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 7h12m0 0L8.5 2.5M13 7l-4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href={hero.ctaSecondary.href}
            className="inline-flex items-center rounded-[999px] border border-white/20 px-6 py-3 text-[14px] font-medium text-white/75 transition-all duration-200 hover:border-white/40 hover:text-white"
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>

        <div className="ph-stats grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          {hero.stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl p-5 text-center"
              style={{
                border: "1px solid rgba(255,255,255,0.13)",
                background:
                  "linear-gradient(150deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.03) 55%, rgba(16,185,129,0.1) 100%)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="text-[clamp(1.1rem,2.4vw,1.55rem)] font-semibold leading-tight text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                {stat.value}
              </p>
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.15em] text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
