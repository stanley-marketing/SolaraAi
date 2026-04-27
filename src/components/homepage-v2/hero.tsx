"use client";

import {
  V2Section,
  V2SectionInner,
  FlickeringGrid,
  INK,
  INK_MUTED,
  INK_SOFT,
  SHELL,
  ROSE_DEEP,
  HAIRLINE,
  HAIRLINE_HEAVY,
  DISPLAY,
  BODY,
} from "@/components/homepage-v2";
import { TESTIDS, CTA_MAP, LOCKED_COPY, SAMPLE_DISCLAIMER } from "@/app/home-v2/content";

function HeroProofTile() {
  return (
    <div
      id={TESTIDS.heroProof}
      data-testid={TESTIDS.heroProof}
      className="relative overflow-hidden rounded-xl"
      style={{
        border: `1px solid ${HAIRLINE_HEAVY}`,
        background: "#ffffff",
        maxWidth: 480,
      }}
    >
      <div
        className="absolute right-3 top-3 z-10"
        style={{
          fontFamily: BODY,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: ROSE_DEEP,
          background: "rgba(23,37,84,0.07)",
          padding: "3px 8px",
          borderRadius: 4,
        }}
      >
        Sample
      </div>

      <div
        className="flex items-center justify-center"
        style={{
          width: "100%",
          aspectRatio: "16/9",
          background: "linear-gradient(135deg, #1e3a8a 0%, #172554 100%)",
          position: "relative",
        }}
        aria-label="Sample reel thumbnail placeholder"
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.18)",
            border: "1.5px solid rgba(255,255,255,0.35)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="white"
            aria-hidden="true"
          >
            <path d="M5 3.5l12 6.5-12 6.5V3.5z" />
          </svg>
        </div>
        <span
          className="absolute bottom-3 left-3"
          style={{
            fontFamily: BODY,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Illustration · not a real campaign
        </span>
      </div>

      <div className="p-5">
        <p
          style={{
            fontFamily: BODY,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: ROSE_DEEP,
            marginBottom: 8,
          }}
        >
          Example — Pizza Shop
        </p>

        <p
          style={{
            fontFamily: BODY,
            fontSize: "0.9rem",
            lineHeight: 1.55,
            color: INK_MUTED,
            marginBottom: 14,
          }}
        >
          5 scenes filmed Saturday morning · finished post published Tuesday at
          5:47 PM
        </p>

        <a
          href={CTA_MAP.heroSecondary}
          className="inline-flex items-center gap-2"
          style={{
            fontFamily: BODY,
            fontSize: "0.875rem",
            fontWeight: 600,
            color: ROSE_DEEP,
            textDecoration: "none",
          }}
        >
          ▶ Watch the 60-second walkthrough
        </a>

        <p
          className="mt-4"
          style={{
            fontFamily: BODY,
            fontSize: 11,
            lineHeight: 1.55,
            color: INK_SOFT,
            borderTop: `1px solid ${HAIRLINE}`,
            paddingTop: 10,
          }}
        >
          {SAMPLE_DISCLAIMER}
        </p>
      </div>
    </div>
  );
}

export function HeroV2() {
  return (
    <V2Section
      id={TESTIDS.hero}
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <FlickeringGrid />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 35%, transparent 15%, rgba(248,247,244,0.92) 75%)",
          }}
        />
      </div>

      <V2SectionInner>
        <p
          className="mb-6"
          style={{
            fontFamily: BODY,
            fontSize: 11,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: ROSE_DEEP,
          }}
        >
          SOLARA · THE DIRECTOR FOR SMB SOCIAL
        </p>

        <h1
          className="mb-6"
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            color: INK,
            maxWidth: "18ch",
          }}
        >
          Your business has a{" "}
          {/*
           * Design constraint: budget = 1 italic-navy accent per section.
           * This span IS that accent for the Hero. Do not add another.
           */}
          <span style={{ fontStyle: "italic", fontWeight: 400, color: ROSE_DEEP }}>
            director now.
          </span>
        </h1>

        <p
          className="mb-10 max-w-[60ch]"
          style={{
            fontFamily: BODY,
            fontSize: "clamp(0.96rem, 1.4vw, 1.1rem)",
            lineHeight: 1.65,
            color: INK_MUTED,
          }}
        >
          Solara writes the brief. You film 5 scenes on your phone in 10
          minutes. We cut, caption, schedule, and publish across Instagram,
          TikTok, Facebook, and Google Business — every week, automatically.
        </p>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={CTA_MAP.heroPrimary}
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold"
                style={{
                  fontFamily: BODY,
                  background: INK,
                  color: SHELL,
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "opacity 150ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                See your first scene →
              </a>

              <a
                href={CTA_MAP.heroSecondary}
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold"
                style={{
                  fontFamily: BODY,
                  background: "transparent",
                  color: INK,
                  textDecoration: "none",
                  border: `1.5px solid ${HAIRLINE_HEAVY}`,
                  letterSpacing: "0.01em",
                  transition: "border-color 150ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = INK;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    HAIRLINE_HEAVY;
                }}
              >
                Watch a 60-second demo ▶
              </a>
            </div>

            <p
              style={{
                fontFamily: BODY,
                fontSize: "0.8rem",
                color: INK_SOFT,
                letterSpacing: "0.01em",
              }}
            >
              {LOCKED_COPY.noCreditCard} · {LOCKED_COPY.setupTime} ·{" "}
              {LOCKED_COPY.cancelAnytime}
            </p>
          </div>

          <div className="w-full lg:max-w-sm xl:max-w-md">
            <HeroProofTile />
          </div>
        </div>
      </V2SectionInner>
    </V2Section>
  );
}
