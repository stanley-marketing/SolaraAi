"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import {
  BODY,
  DISPLAY,
  FlickeringGrid,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_FAINT,
  INK_MUTED,
  INK_SOFT,
  PreviewFooter,
  ROSE,
  ROSE_DEEP,
  SHELL,
} from "@/components/homepage/teardown-parts";

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 300,
        padding: 6,
        borderRadius: 40,
        background: "linear-gradient(145deg, #1a1a1a, #0a0a0a)",
        boxShadow:
          "0 30px 60px -30px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(0,0,0,0.2)",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 34,
          background: "#fff",
          aspectRatio: "9 / 19.5",
        }}
      >
        <div
          aria-hidden
          className="absolute left-1/2 top-2 z-20 -translate-x-1/2"
          style={{
            width: 96,
            height: 24,
            borderRadius: 16,
            background: "#0a0a0a",
          }}
        />
        {children}
      </div>
    </div>
  );
}

function PhoneContent() {
  return (
    <div className="relative flex h-full w-full flex-col px-4 pb-4 pt-11">
      <div className="flex items-center gap-2.5 border-b pb-2.5"
        style={{ borderColor: HAIRLINE }}>
        <div
          className="flex h-7 w-7 items-center justify-center rounded-full"
          style={{
            background: `linear-gradient(145deg, ${ROSE}, ${ROSE_DEEP})`,
            color: "#fff",
            fontFamily: DISPLAY,
            fontSize: "0.72rem",
            fontWeight: 700,
          }}
        >
          S
        </div>
        <div className="flex-1">
          <p
            style={{
              fontFamily: BODY,
              fontSize: "0.76rem",
              fontWeight: 600,
              color: INK,
              lineHeight: 1,
            }}
          >
            Solara
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "0.6rem",
              color: INK_FAINT,
              lineHeight: 1.3,
            }}
          >
            directing · now
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <div
          className="max-w-[90%] rounded-2xl rounded-bl-md px-3 py-2"
          style={{
            background: "#f3f2ee",
            border: `1px solid ${HAIRLINE}`,
          }}
        >
          <p
            style={{
              fontFamily: BODY,
              fontSize: "0.74rem",
              color: INK,
              lineHeight: 1.45,
            }}
          >
            Pizza shot tonight. Here&rsquo;s where to stand 👇
          </p>
        </div>

        <div
          className="rounded-2xl rounded-bl-md p-2.5"
          style={{
            background: "#f3f2ee",
            border: `1px solid ${HAIRLINE}`,
          }}
        >
          <div
            className="aspect-square overflow-hidden rounded-lg"
            style={{
              background: "#f8f6f0",
              border: `1px solid ${HAIRLINE}`,
            }}
          >
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
              aria-hidden
            >
              <title>Mini kitchen plan</title>
              <rect x="12" y="12" width="76" height="30" rx="1.5" fill="rgba(10,10,10,0.85)" />
              <text x="50" y="31" textAnchor="middle" fontSize="4.5" fill="#fff" fontFamily="var(--font-body)" fontWeight="600" letterSpacing="0.1em">OVEN</text>
              <rect x="12" y="78" width="76" height="10" rx="1.5" fill="rgba(10,10,10,0.08)" stroke="rgba(10,10,10,0.3)" strokeWidth="0.4" />
              <circle cx="55" cy="55" r="4" fill={ROSE} />
              <circle cx="55" cy="55" r="7" fill="none" stroke={ROSE} strokeWidth="0.6" strokeDasharray="1.5 1.5" />
              <text x="55" y="70" textAnchor="middle" fontSize="4" fill={ROSE_DEEP} fontFamily="var(--font-body)" fontWeight="700" letterSpacing="0.06em">YOU</text>
              <path d="M 55 50 L 45 42" stroke={INK} strokeWidth="0.7" fill="none" markerEnd="url(#miniarrow)" />
              <defs>
                <marker id="miniarrow" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
                  <polygon points="0 0, 4 2, 0 4" fill={INK} />
                </marker>
              </defs>
            </svg>
          </div>
          <p
            className="mt-2"
            style={{
              fontFamily: BODY,
              fontSize: "0.72rem",
              color: INK,
              lineHeight: 1.45,
            }}
          >
            <strong>Right of the oven, 1m back.</strong> Phone vertical, chest
            height. Tilt down slowly, 5 seconds.
          </p>
        </div>
      </div>

      <div className="mt-auto">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-full py-2.5"
          style={{
            background: INK,
            color: "#fff",
            fontFamily: BODY,
            fontSize: "0.76rem",
            fontWeight: 600,
          }}
        >
          <Camera size={13} strokeWidth={2} />
          Tap when ready
        </button>
      </div>
    </div>
  );
}

function ShopFloorPlan() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: "#ffffff",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        aspectRatio: "1 / 1",
        boxShadow:
          "0 1px 2px rgba(0,0,0,0.03), 0 10px 30px -16px rgba(0,0,0,0.1)",
      }}
    >
      <div
        className="absolute left-4 top-4 flex items-center gap-2 rounded-full px-3 py-1"
        style={{
          background: SHELL,
          border: `1px solid ${HAIRLINE_HEAVY}`,
          fontFamily: BODY,
          fontSize: "0.58rem",
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          color: INK_SOFT,
          fontWeight: 600,
        }}
      >
        <span
          className="h-1 w-1 rounded-full"
          style={{ background: ROSE }}
        />
        Your kitchen · captured during onboarding
      </div>

      <svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <title>Kitchen floor plan</title>
        <defs>
          <pattern
            id="floorDots"
            x="0"
            y="0"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.2" cy="1.2" r="0.7" fill="rgba(10,10,10,0.15)" />
          </pattern>
          <marker
            id="bigArrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
          >
            <polygon points="0 0, 10 5, 0 10" fill={INK} />
          </marker>
        </defs>

        <rect
          x="40"
          y="40"
          width="320"
          height="320"
          rx="4"
          fill="url(#floorDots)"
          stroke="rgba(10,10,10,0.2)"
          strokeWidth="1"
        />

        <g>
          <rect
            x="60"
            y="60"
            width="130"
            height="90"
            rx="3"
            fill="rgba(10,10,10,0.9)"
          />
          <rect
            x="75"
            y="95"
            width="100"
            height="45"
            rx="2"
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.6"
          />
          <circle cx="125" cy="85" r="3" fill="rgba(255,255,255,0.3)" />
          <circle cx="155" cy="85" r="3" fill="rgba(255,255,255,0.3)" />
          <text
            x="125"
            y="175"
            textAnchor="middle"
            fontSize="10"
            fill={INK}
            fontFamily="var(--font-body)"
            fontWeight="600"
            letterSpacing="0.2em"
          >
            OVEN
          </text>
        </g>

        <g>
          <rect
            x="60"
            y="290"
            width="280"
            height="50"
            rx="3"
            fill="rgba(10,10,10,0.08)"
            stroke="rgba(10,10,10,0.35)"
            strokeWidth="0.8"
          />
          <text
            x="200"
            y="322"
            textAnchor="middle"
            fontSize="10"
            fill={INK_SOFT}
            fontFamily="var(--font-body)"
            fontWeight="500"
            letterSpacing="0.2em"
          >
            COUNTER
          </text>
        </g>

        <g>
          <rect
            x="330"
            y="65"
            width="14"
            height="80"
            rx="2"
            fill="rgba(30,58,138,0.12)"
            stroke={ROSE}
            strokeWidth="1.2"
          />
          <line
            x1="330"
            y1="80"
            x2="310"
            y2="100"
            stroke={ROSE}
            strokeWidth="1.5"
            strokeDasharray="5 3"
          />
          <line
            x1="330"
            y1="100"
            x2="308"
            y2="120"
            stroke={ROSE}
            strokeWidth="1.5"
            strokeDasharray="5 3"
          />
          <line
            x1="330"
            y1="120"
            x2="310"
            y2="140"
            stroke={ROSE}
            strokeWidth="1.5"
            strokeDasharray="5 3"
          />
          <text
            x="340"
            y="55"
            textAnchor="end"
            fontSize="9"
            fill={ROSE_DEEP}
            fontFamily="var(--font-body)"
            fontWeight="700"
            letterSpacing="0.18em"
          >
            WINDOW · KEY LIGHT
          </text>
        </g>

        <g>
          <circle cx="230" cy="220" r="26" fill="none" stroke={ROSE} strokeWidth="1.4" strokeDasharray="4 3" opacity="0.6" />
          <circle cx="230" cy="220" r="16" fill={ROSE} />
          <circle cx="230" cy="220" r="7" fill="#fff" />
          <text
            x="230"
            y="264"
            textAnchor="middle"
            fontSize="11"
            fill={ROSE_DEEP}
            fontFamily="var(--font-body)"
            fontWeight="700"
            letterSpacing="0.16em"
          >
            YOU · 1m BACK
          </text>
        </g>

        <g>
          <path
            d="M 230 210 L 170 160"
            stroke={INK}
            strokeWidth="2"
            fill="none"
            markerEnd="url(#bigArrow)"
          />
          <text
            x="178"
            y="190"
            fontSize="9"
            fill={INK}
            fontFamily="var(--font-body)"
            fontWeight="600"
            letterSpacing="0.06em"
          >
            phone vertical
          </text>
          <text
            x="178"
            y="202"
            fontSize="9"
            fill={INK}
            fontFamily="var(--font-body)"
            fontWeight="600"
            letterSpacing="0.06em"
          >
            tilt down 5s
          </text>
        </g>

        <g opacity="0.6">
          <line x1="230" y1="60" x2="230" y2="190" stroke={INK_FAINT} strokeWidth="0.8" strokeDasharray="2 3" />
          <text
            x="236"
            y="140"
            fontSize="7.5"
            fill={INK_FAINT}
            fontFamily="var(--font-body)"
            fontWeight="500"
            letterSpacing="0.1em"
          >
            1.0 m
          </text>
        </g>
      </svg>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[57.5%] top-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          scale: [1, 2.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
        }}
        style={{
          width: 40,
          height: 40,
          background: ROSE,
          opacity: 0.3,
        }}
      />
    </div>
  );
}

export default function SectionFourDiagramPreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <FlickeringGrid />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, transparent 15%, rgba(248,247,244,0.92) 75%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-20 pb-14 sm:pt-24 sm:pb-20">
          <div className="mb-10 sm:mb-12">
            <div
              className="inline-flex items-center gap-3"
              style={{
                fontFamily: BODY,
                fontSize: "0.66rem",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: INK_SOFT,
                fontWeight: 600,
              }}
            >
              <span className="h-px w-6 bg-current opacity-60" />
              04 &middot; The Directing
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inset-0 animate-ping rounded-full"
                  style={{ background: ROSE, opacity: 0.6 }}
                />
                <span
                  className="relative h-2 w-2 rounded-full"
                  style={{ background: ROSE }}
                />
              </span>
            </div>

            <h1
              className="mt-5 leading-[1.02] tracking-[-0.04em] text-[clamp(2.4rem,5.6vw,4rem)]"
              style={{
                fontFamily: DISPLAY,
                fontWeight: 600,
                color: INK,
                maxWidth: "820px",
              }}
            >
              Solara knows your shop.
              <br />
              <span style={{ color: INK_MUTED, fontWeight: 500 }}>
                Then it directs you through it.
              </span>
            </h1>

            <p
              className="mt-5"
              style={{
                fontFamily: BODY,
                fontSize: "1.06rem",
                lineHeight: 1.55,
                color: INK_MUTED,
                maxWidth: "620px",
              }}
            >
              Onboarding walked Solara through your space &mdash; the oven,
              the counter, the window the light comes from. Every direction
              you get is personalized to your actual room.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
            <div>
              <PhoneFrame>
                <PhoneContent />
              </PhoneFrame>
            </div>

            <div className="relative">
              <ShopFloorPlan />

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <LegendDot
                  color={ROSE}
                  label="You"
                  detail="positioned"
                />
                <LegendDot
                  color={INK}
                  label="Oven"
                  detail="matte black"
                />
                <LegendDot
                  color="rgba(10,10,10,0.35)"
                  label="Counter"
                  detail="working area"
                />
                <LegendDot
                  color={ROSE}
                  label="Window"
                  detail="key light, 4pm"
                />
              </div>
            </div>
          </div>

          <div
            className="mx-auto mt-20 max-w-3xl border-t pt-10 text-center"
            style={{ borderColor: HAIRLINE_HEAVY }}
          >
            <p
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1.3rem, 2.6vw, 1.85rem)",
                fontWeight: 500,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                color: INK,
              }}
            >
              You bring: <span style={{ color: INK_FAINT }}>pressing a button.</span>
              <br />
              Solara brings:{" "}
              <span
                className="relative inline-block"
                style={{ color: ROSE_DEEP, fontWeight: 600 }}
              >
                everything else.
              </span>
            </p>
          </div>
        </div>
      </section>

      <PreviewFooter
        label="Variant 3 · Diagram (spatial awareness)"
        description="Left: phone with Solara's directing message + a mini plan. Right: full top-down floor plan of the owner's kitchen — oven, counter, window (key light), position marker. Hits the 'Solara knows your actual space' differentiator hardest. Legend row under the plan."
      />
    </main>
  );
}

function LegendDot({
  color,
  label,
  detail,
}: {
  color: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="h-2.5 w-2.5 shrink-0 rounded-full"
        style={{ background: color }}
      />
      <div className="flex flex-col">
        <span
          style={{
            fontFamily: BODY,
            fontSize: "0.82rem",
            fontWeight: 600,
            color: INK,
            lineHeight: 1.15,
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: BODY,
            fontSize: "0.7rem",
            color: INK_FAINT,
            lineHeight: 1.15,
          }}
        >
          {detail}
        </span>
      </div>
    </div>
  );
}
