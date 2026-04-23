"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Camera, Check, Sparkles } from "lucide-react";
import { memo, useRef, useState } from "react";
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
import { cn } from "@/lib/utils";

type StepDef = {
  number: string;
  title: string;
  body: string;
};

const STEPS: StepDef[] = [
  {
    number: "01",
    title: "Solara sends the ask.",
    body: "One short message — what to film tonight. No long brief, no creative brainstorm. It tells you exactly which shot it needs.",
  },
  {
    number: "02",
    title: "It tells you where to stand.",
    body: "Because onboarding walked through your space. It knows where the oven is, where the light comes from, and which counter makes the dough look best.",
  },
  {
    number: "03",
    title: "You press record.",
    body: "Five seconds. One take, usually. A teleprompter or reference visual is right there in case you forget what the shot should look like.",
  },
  {
    number: "04",
    title: "Solara reviews it.",
    body: "If the take is clean, it's in the edit queue. If not, it asks for one more. You're out in under a minute. The thinking happens on Solara's side.",
  },
];

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 320,
        padding: 6,
        borderRadius: 44,
        background: "linear-gradient(145deg, #1a1a1a, #0a0a0a)",
        boxShadow:
          "0 30px 60px -30px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(0,0,0,0.2)",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 38,
          background: "#fff",
          aspectRatio: "9 / 19.5",
        }}
      >
        <div
          aria-hidden
          className="absolute left-1/2 top-2 z-30 -translate-x-1/2"
          style={{
            width: 100,
            height: 26,
            borderRadius: 18,
            background: "#0a0a0a",
          }}
        />
        {children}
      </div>
    </div>
  );
}

function PhoneStep1() {
  return (
    <div className="relative flex h-full w-full flex-col px-4 pb-4 pt-12">
      <div
        className="mb-3 flex items-center gap-2"
        style={{
          fontFamily: BODY,
          fontSize: "0.62rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 600,
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "#22c55e" }}
        />
        New ask &middot; Just now
      </div>

      <div className="flex items-start gap-2">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
          style={{
            background: `linear-gradient(145deg, ${ROSE}, ${ROSE_DEEP})`,
            color: "#fff",
            fontFamily: DISPLAY,
            fontSize: "0.82rem",
            fontWeight: 700,
          }}
        >
          S
        </div>
        <div
          className="max-w-[85%] rounded-2xl rounded-bl-md px-3 py-2.5"
          style={{
            background: "#f3f2ee",
            border: `1px solid ${HAIRLINE}`,
          }}
        >
          <p
            style={{
              fontFamily: BODY,
              fontSize: "0.82rem",
              color: INK,
              lineHeight: 1.45,
            }}
          >
            Quick ask for tonight&rsquo;s pizza. 5-second shot of it coming
            out of the oven. Tap when you can film.
          </p>
        </div>
      </div>

      <div className="mt-auto">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-full py-3"
          style={{
            background: INK,
            color: "#fff",
            fontFamily: BODY,
            fontSize: "0.82rem",
            fontWeight: 600,
          }}
        >
          <Camera size={14} strokeWidth={2} />
          Tap when ready
        </button>
      </div>
    </div>
  );
}

function PhoneStep2() {
  return (
    <div className="relative flex h-full w-full flex-col px-4 pb-4 pt-12">
      <div
        className="mb-3 flex items-center justify-between"
        style={{
          fontFamily: BODY,
          fontSize: "0.62rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 600,
        }}
      >
        <span>Your kitchen</span>
        <span>Top view</span>
      </div>

      <div
        className="relative flex-1 overflow-hidden rounded-2xl"
        style={{
          background: "#f8f6f0",
          border: `1px solid ${HAIRLINE_HEAVY}`,
        }}
      >
        <svg
          viewBox="0 0 200 280"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <title>Kitchen floor plan</title>
          <defs>
            <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="rgba(10,10,10,0.18)" />
            </pattern>
          </defs>
          <rect
            x="15"
            y="15"
            width="170"
            height="250"
            rx="4"
            fill="url(#dots)"
            stroke="rgba(10,10,10,0.25)"
            strokeWidth="0.8"
          />

          <rect
            x="30"
            y="30"
            width="55"
            height="50"
            rx="3"
            fill="rgba(10,10,10,0.85)"
          />
          <text
            x="57.5"
            y="58"
            textAnchor="middle"
            fontSize="7"
            fill="#fff"
            fontFamily="var(--font-body)"
            fontWeight="600"
            letterSpacing="0.1em"
          >
            OVEN
          </text>

          <rect
            x="30"
            y="190"
            width="140"
            height="30"
            rx="3"
            fill="rgba(10,10,10,0.1)"
            stroke="rgba(10,10,10,0.35)"
            strokeWidth="0.8"
          />
          <text
            x="100"
            y="208"
            textAnchor="middle"
            fontSize="7"
            fill={INK_SOFT}
            fontFamily="var(--font-body)"
            fontWeight="500"
            letterSpacing="0.1em"
          >
            COUNTER
          </text>

          <line
            x1="175"
            y1="25"
            x2="158"
            y2="40"
            stroke={ROSE}
            strokeWidth="1.2"
            strokeDasharray="3 2"
          />
          <line
            x1="185"
            y1="25"
            x2="168"
            y2="40"
            stroke={ROSE}
            strokeWidth="1.2"
            strokeDasharray="3 2"
          />
          <text
            x="178"
            y="20"
            textAnchor="middle"
            fontSize="5.6"
            fill={ROSE}
            fontFamily="var(--font-body)"
            fontWeight="600"
            letterSpacing="0.1em"
          >
            LIGHT
          </text>

          <circle cx="110" cy="110" r="8" fill={ROSE} />
          <circle cx="110" cy="110" r="14" fill="none" stroke={ROSE} strokeWidth="1" strokeDasharray="2 2" />
          <text
            x="110"
            y="135"
            textAnchor="middle"
            fontSize="6.2"
            fill={ROSE_DEEP}
            fontFamily="var(--font-body)"
            fontWeight="700"
            letterSpacing="0.1em"
          >
            YOU
          </text>

          <path
            d="M 110 104 L 85 82"
            stroke={INK}
            strokeWidth="1.4"
            fill="none"
            markerEnd="url(#arrow)"
          />
          <defs>
            <marker
              id="arrow"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 6 3, 0 6" fill={INK} />
            </marker>
          </defs>
          <text
            x="95"
            y="95"
            fontSize="5.6"
            fill={INK}
            fontFamily="var(--font-body)"
            fontWeight="600"
            letterSpacing="0.06em"
          >
            phone tilts
          </text>
          <text
            x="95"
            y="102"
            fontSize="5.6"
            fill={INK}
            fontFamily="var(--font-body)"
            fontWeight="600"
            letterSpacing="0.06em"
          >
            down, 5s
          </text>
        </svg>
      </div>

      <div
        className="mt-3 rounded-xl px-3 py-2.5"
        style={{
          background: "#f3f2ee",
          border: `1px solid ${HAIRLINE}`,
        }}
      >
        <p
          style={{
            fontFamily: BODY,
            fontSize: "0.76rem",
            color: INK,
            lineHeight: 1.5,
            fontWeight: 500,
          }}
        >
          Right of the oven, 1m back. Phone vertical, chest height.
        </p>
      </div>
    </div>
  );
}

function PhoneStep3() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, #fff7cc 0%, #f4c77a 45%, #b86d2a 90%)",
          opacity: 0.9,
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-[38%] -translate-x-1/2"
        style={{
          width: "60%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 30%, #fff3b5 0%, #e7a85a 30%, #a2542c 60%, #6b3116 100%)",
          boxShadow: "0 8px 22px -6px rgba(107,49,22,0.5)",
        }}
      />

      <div className="relative z-10 flex items-center justify-between px-4 pt-12">
        <div
          className="flex items-center gap-1.5 rounded-full bg-black/65 px-2.5 py-1 backdrop-blur-sm"
          style={{
            fontFamily: BODY,
            fontSize: "0.62rem",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
          REC 0:03
        </div>
        <span
          className="rounded-full bg-black/65 px-2.5 py-1 backdrop-blur-sm"
          style={{
            fontFamily: BODY,
            fontSize: "0.62rem",
            color: "#fff",
            fontWeight: 600,
            letterSpacing: "0.1em",
          }}
        >
          4K · 60
        </span>
      </div>

      <div className="relative z-10 mt-auto flex flex-col items-center px-4 pb-6">
        <div
          className="mb-4 rounded-full bg-black/70 px-3 py-1.5 backdrop-blur-sm"
          style={{
            fontFamily: BODY,
            fontSize: "0.7rem",
            color: "#fff",
            fontWeight: 500,
          }}
        >
          Tilt down slowly &middot; 2s left
        </div>
        <button
          type="button"
          className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{
            background: "#fff",
            border: "4px solid rgba(255,255,255,0.7)",
            boxShadow: "0 0 0 3px #fff, 0 0 0 6px rgba(255,255,255,0.4)",
          }}
          aria-label="Recording"
        >
          <span
            className="h-6 w-6 rounded-md"
            style={{ background: "#ef4444" }}
          />
        </button>
      </div>
    </div>
  );
}

function PhoneStep4() {
  return (
    <div className="relative flex h-full w-full flex-col px-4 pb-4 pt-12">
      <div
        className="mb-3 flex items-center gap-2"
        style={{
          fontFamily: BODY,
          fontSize: "0.62rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 600,
        }}
      >
        <Sparkles size={10} strokeWidth={2.4} />
        Ready in your queue
      </div>

      <div
        className="mb-3 flex items-center gap-3 rounded-2xl px-3 py-3"
        style={{
          background: "#f3f2ee",
          border: `1px solid ${HAIRLINE}`,
        }}
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          style={{
            background: `linear-gradient(145deg, #22c55e, #15803d)`,
            color: "#fff",
          }}
        >
          <Check size={18} strokeWidth={2.8} />
        </div>
        <div className="flex-1">
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "0.88rem",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.01em",
            }}
          >
            Take looks clean.
          </p>
          <p
            className="mt-0.5"
            style={{
              fontFamily: BODY,
              fontSize: "0.72rem",
              color: INK_SOFT,
              lineHeight: 1.3,
            }}
          >
            I&rsquo;m cutting it with the oven clip from Monday.
          </p>
        </div>
      </div>

      <div
        className="relative aspect-video overflow-hidden rounded-xl"
        style={{ background: "#0a0a0a" }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, #b86d2a 0%, #6b3116 60%, #0a0a0a 100%)",
            opacity: 0.9,
          }}
        />
        <div
          className="absolute left-3 top-3 flex items-center gap-1 rounded-full px-2 py-0.5"
          style={{
            background: "rgba(10,10,10,0.7)",
            backdropFilter: "blur(4px)",
            color: "#fff",
            fontFamily: BODY,
            fontSize: "0.58rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Final cut
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between pt-3">
        <p
          style={{
            fontFamily: BODY,
            fontSize: "0.7rem",
            color: INK_FAINT,
          }}
        >
          Publishing tonight, 7:42 PM.
        </p>
        <button
          type="button"
          className="rounded-full px-3 py-1.5"
          style={{
            background: INK,
            color: "#fff",
            fontFamily: BODY,
            fontSize: "0.7rem",
            fontWeight: 600,
          }}
        >
          Review
        </button>
      </div>
    </div>
  );
}

const MemoPhoneStep1 = memo(PhoneStep1);
const MemoPhoneStep2 = memo(PhoneStep2);
const MemoPhoneStep3 = memo(PhoneStep3);
const MemoPhoneStep4 = memo(PhoneStep4);

const STEP_COMPONENTS = [
  MemoPhoneStep1,
  MemoPhoneStep2,
  MemoPhoneStep3,
  MemoPhoneStep4,
];

function StickyStoryboard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [-2, 2, -3, 4],
  );

  const [activeStep, setActiveStep] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.max(0, Math.min(3, Math.floor(v * 4)));
    if (idx !== activeStep) setActiveStep(idx);
  });

  return (
    <div ref={ref} className="relative" style={{ minHeight: "320vh" }}>
      <div className="grid lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="relative">
          <div
            className="sticky flex items-center justify-center"
            style={{
              top: "15vh",
              height: "70vh",
              perspective: 1400,
            }}
          >
            <motion.div
              style={{
                rotateY,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <PhoneShell>
                <div className="absolute inset-0 z-10 overflow-hidden">
                  {STEP_COMPONENTS.map((StepComp, i) => {
                    const offset = i - activeStep;
                    return (
                      <div
                        key={i}
                        className="absolute inset-0"
                        style={{
                          transform: `translateY(${offset * 100}%)`,
                          transition: "transform 620ms cubic-bezier(0.22, 0.61, 0.36, 1)",
                          willChange: "transform",
                        }}
                      >
                        <StepComp />
                      </div>
                    );
                  })}
                </div>
              </PhoneShell>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col pt-[15vh]">
          {STEPS.map((step, i) => {
            const isActive = i === activeStep;
            return (
              <div
                key={step.number}
                className="flex items-center"
                style={{
                  minHeight: "80vh",
                  contentVisibility: "auto",
                  containIntrinsicSize: "auto 80vh",
                }}
              >
                <div
                  className={cn(
                    "transition-all duration-500 ease-out",
                    isActive ? "opacity-100" : "opacity-35",
                  )}
                  style={{
                    transform: isActive ? "translateX(0)" : "translateX(-8px)",
                  }}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: "1.35rem",
                        fontWeight: 500,
                        color: isActive ? ROSE_DEEP : INK_FAINT,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        transition: "color 400ms ease-out",
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                        fontWeight: 600,
                        letterSpacing: "-0.025em",
                        lineHeight: 1.15,
                        color: INK,
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="mt-4 max-w-[440px]"
                    style={{
                      fontFamily: BODY,
                      fontSize: "1rem",
                      lineHeight: 1.65,
                      color: INK_MUTED,
                      marginLeft: 52,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function SectionFourStoryboardPreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10"
          style={{ height: "100%" }}
        >
          <div
            className="sticky top-0"
            style={{
              height: "100vh",
              width: "100%",
            }}
          >
            <FlickeringGrid />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 35%, transparent 15%, rgba(248,247,244,0.92) 75%)",
              }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-20 pb-10 sm:pt-24">
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
            Solara directs. You press record.
          </h1>

          <p
            className="mt-4"
            style={{
              fontFamily: BODY,
              fontSize: "1.06rem",
              lineHeight: 1.55,
              color: INK_MUTED,
              maxWidth: "560px",
            }}
          >
            Four steps, one per ask. Scroll to watch it.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-24">
          <StickyStoryboard />
        </div>

        <div className="mx-auto max-w-3xl border-t px-6 py-16 text-center"
          style={{ borderColor: HAIRLINE_HEAVY }}>
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
      </section>

      <PreviewFooter
        label="Variant 2 · Storyboard (sticky scroll)"
        description="Phone stays pinned while four numbered steps scroll past on the right. The phone's screen slides through each corresponding UI (ask, position diagram, recording, review). Subtle Y-axis chassis rotation per step. Pattern inspired by the reference screencast. Cream aesthetic, navy accent."
      />
    </main>
  );
}
