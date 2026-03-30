"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { AD_GEN_CONTENT } from "./content";

const { hero } = AD_GEN_CONTENT;

const MOCK_CARDS = [
  {
    id: "card-a",
    label: "Meta · Story",
    hook: "Stop scrolling — this deal ends tonight",
    tag: "Hook A",
    palette: ["#f472b6", "#fb923c"],
    rotate: "-6deg",
    translateY: "0px",
    zIndex: 1,
  },
  {
    id: "card-b",
    label: "Google · Search",
    hook: "Rated #1 for small teams | Try free",
    tag: "Hook B",
    palette: ["#a78bfa", "#60a5fa"],
    rotate: "2deg",
    translateY: "-24px",
    zIndex: 2,
  },
  {
    id: "card-c",
    label: "UGC · Reel",
    hook: "I tried it for 30 days — here's what happened",
    tag: "Hook C",
    palette: ["#34d399", "#fbbf24"],
    rotate: "8deg",
    translateY: "12px",
    zIndex: 1,
  },
] as const;

export function AdGenHero() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-24 pt-36 sm:px-10 sm:pt-44"
      style={{
        background:
          "linear-gradient(155deg, #0a0f1e 0%, #110a1f 28%, #160d1a 52%, #1a0e12 72%, #130a0a 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(244,114,182,0.18) 0%, rgba(167,139,250,0.12) 35%, transparent 70%), radial-gradient(ellipse 55% 45% at 85% 85%, rgba(251,146,60,0.12) 0%, transparent 65%), radial-gradient(ellipse 40% 35% at 10% 70%, rgba(52,211,153,0.08) 0%, transparent 60%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.05,
        }}
      />

      {!noMotion && (
        <>
          <span
            className="absolute left-[8%] top-32 h-2 w-2 animate-ping rounded-full"
            style={{ background: "#f472b6", opacity: 0.7 }}
          />
          <span
            className="absolute right-[15%] top-52 h-1.5 w-1.5 animate-ping rounded-full"
            style={{ background: "#a78bfa", opacity: 0.6, animationDelay: "0.9s" }}
          />
          <span
            className="absolute left-[22%] bottom-1/3 h-1.5 w-1.5 animate-ping rounded-full"
            style={{ background: "#34d399", opacity: 0.5, animationDelay: "1.6s" }}
          />
          <span
            className="absolute right-[8%] bottom-1/4 h-2 w-2 animate-ping rounded-full"
            style={{ background: "#fbbf24", opacity: 0.5, animationDelay: "2.1s" }}
          />
        </>
      )}

      <div className="relative mx-auto flex max-w-6xl w-full flex-1 flex-col items-center justify-center gap-16 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-[52%]">
          <div
            className="shimmer-pill mb-7 inline-flex items-center gap-2"
            style={{
              position: "relative",
              overflow: "hidden",
              fontSize: "13px",
              fontWeight: 500,
              color: "#f9c5e6",
              borderRadius: 999,
              padding: "7px 16px",
              background: "rgba(244,114,182,0.12)",
              border: "1px solid rgba(244,114,182,0.35)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#f472b6",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {hero.pillLabel}
          </div>

          <h1
            className="text-white"
            style={{
              fontFamily: "var(--font-display-playfair), Georgia, serif",
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              marginBottom: "0.5rem",
              textWrap: "balance",
            }}
          >
            {hero.headline}
            <br />
            <span
              style={{
                background: "linear-gradient(120deg, #f472b6 0%, #a78bfa 50%, #fb923c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {hero.headlineAccent}
            </span>
          </h1>

          <p
            className="text-white/65"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.75,
              maxWidth: "50ch",
              marginTop: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {hero.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={hero.cta.href}
              aria-label="Start generating AI ads"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium tracking-[0.5px] text-white transition-all duration-200 hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{
                background: "linear-gradient(120deg, #f472b6 0%, #a78bfa 100%)",
                boxShadow: "0 0 24px rgba(244,114,182,0.35)",
              }}
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
              href={hero.secondaryCta.href}
              className="inline-flex items-center rounded-full px-6 py-3 text-[14px] font-medium text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
              style={{
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
              }}
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div
            className="mt-10 grid grid-cols-2 gap-3 w-full sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
          >
            {hero.statsBar.map((stat) => (
              <div
                key={stat.value}
                className="rounded-xl p-4 text-center"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p
                  className="text-sm font-semibold leading-tight text-white"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.13em] text-white/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative flex h-80 w-full items-center justify-center lg:h-[480px] lg:w-[44%] lg:flex-shrink-0"
          aria-hidden
        >
          {!noMotion && (
            <>
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(167,139,250,0.15) 0%, transparent 70%)",
                }}
              />
            </>
          )}

          <div className="relative flex items-center justify-center w-full h-full">
            {MOCK_CARDS.map((card, i) => (
              <div
                key={card.id}
                className="absolute rounded-2xl p-5"
                style={{
                  width: 220,
                  transform: `rotate(${card.rotate}) translateY(${card.translateY}) translateX(${i === 0 ? "-90px" : i === 2 ? "90px" : "0px"})`,
                  zIndex: card.zIndex,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 100%)",
                  backdropFilter: "blur(16px)",
                  boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.1), 0 0 40px rgba(${card.palette[0] === "#f472b6" ? "244,114,182" : card.palette[0] === "#a78bfa" ? "167,139,250" : "52,211,153"},0.1)`,
                  animation: noMotion
                    ? undefined
                    : `adcard-float-${i} ${4 + i * 0.8}s ease-in-out infinite`,
                }}
              >
                <div
                  className="mb-3 h-1.5 w-12 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${card.palette[0]}, ${card.palette[1]})`,
                  }}
                />
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-2"
                  style={{ color: card.palette[0] }}
                >
                  {card.label}
                </p>
                <p
                  className="text-white text-[13px] leading-snug font-medium mb-3"
                  style={{ lineHeight: 1.45 }}
                >
                  {card.hook}
                </p>
                <div
                  className="mt-auto inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold"
                  style={{
                    background: `linear-gradient(120deg, ${card.palette[0]}22, ${card.palette[1]}22)`,
                    border: `1px solid ${card.palette[0]}44`,
                    color: card.palette[0],
                  }}
                >
                  {card.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!noMotion && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes adcard-float-0 {
                0%, 100% { transform: rotate(-6deg) translateY(0px) translateX(-90px); }
                50% { transform: rotate(-5deg) translateY(-10px) translateX(-90px); }
              }
              @keyframes adcard-float-1 {
                0%, 100% { transform: rotate(2deg) translateY(-24px) translateX(0px); }
                50% { transform: rotate(3deg) translateY(-34px) translateX(0px); }
              }
              @keyframes adcard-float-2 {
                0%, 100% { transform: rotate(8deg) translateY(12px) translateX(90px); }
                50% { transform: rotate(7deg) translateY(2px) translateX(90px); }
              }
            `,
          }}
        />
      )}
    </section>
  );
}
