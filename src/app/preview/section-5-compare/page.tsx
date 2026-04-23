"use client";

import { Camera, Image as ImageIcon, Mic } from "lucide-react";
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
import type { LucideIcon } from "lucide-react";

function RawInputCard({
  icon: Icon,
  label,
  time,
  detail,
}: {
  icon: LucideIcon;
  label: string;
  time: string;
  detail: string;
}) {
  return (
    <div
      className="flex items-start gap-3 rounded-xl p-4"
      style={{
        background: "#fff",
        border: `1px solid ${HAIRLINE}`,
      }}
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ background: "rgba(10,10,10,0.06)" }}
      >
        <Icon size={16} strokeWidth={1.8} style={{ color: INK_SOFT }} />
      </div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "0.95rem",
              fontWeight: 600,
              color: INK,
              lineHeight: 1.2,
            }}
          >
            {label}
          </p>
          <span
            className="shrink-0 tabular-nums"
            style={{
              fontFamily: BODY,
              fontSize: "0.68rem",
              color: INK_FAINT,
              fontWeight: 500,
              fontFeatureSettings: '"tnum" 1',
            }}
          >
            {time}
          </span>
        </div>
        <p
          className="mt-1"
          style={{
            fontFamily: BODY,
            fontSize: "0.8rem",
            color: INK_SOFT,
            lineHeight: 1.4,
          }}
        >
          {detail}
        </p>
      </div>
    </div>
  );
}

function FinishedPieceMockup() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: "#0a0a0a",
        aspectRatio: "9 / 16",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 32%, #fff7cc 0%, #f4c77a 38%, #b86d2a 68%, #3d1a0a 100%)",
          opacity: 0.92,
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-[32%] -translate-x-1/2"
        style={{
          width: "52%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 38% 28%, #fff3b5 0%, #e7a85a 28%, #a2542c 56%, #6b3116 100%)",
          boxShadow: "0 8px 24px -6px rgba(107,49,22,0.6)",
        }}
      />

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4">
        <div
          className="flex items-center gap-1 rounded-full px-2.5 py-1"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            fontFamily: BODY,
            fontSize: "0.56rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          <span className="h-1 w-1 rounded-full bg-green-400" />
          Published
        </div>
        <span
          className="rounded-full px-2 py-0.5"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            fontFamily: BODY,
            fontSize: "0.56rem",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          0:28
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-4">
        <div
          className="flex flex-col gap-1.5 rounded-xl px-3.5 py-3"
          style={{
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(6px)",
          }}
        >
          <p
            style={{
              fontFamily: BODY,
              fontSize: "0.78rem",
              color: "#fff",
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            My grandfather taught me this recipe in 1987.
            The trick isn&rsquo;t the cheese&hellip;
          </p>

          <div className="flex items-center gap-3">
            <div className="flex flex-1 items-center gap-[2px]">
              {Array.from({ length: 32 }).map((_, i) => (
                <span
                  key={i}
                  className="rounded-full"
                  style={{
                    width: 2,
                    height: 4 + Math.random() * 12,
                    background: `rgba(255,255,255,${0.3 + Math.random() * 0.4})`,
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontFamily: BODY,
                fontSize: "0.56rem",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              ♪
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            {["#pizza", "#homemade", "#familyrecipe", "#foodie"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: BODY,
                  fontSize: "0.62rem",
                  color: "rgba(255,255,255,0.55)",
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="flex justify-center py-4">
      <svg
        width="24"
        height="32"
        viewBox="0 0 24 32"
        fill="none"
        aria-hidden
      >
        <title>Arrow down</title>
        <path
          d="M12 2 L12 26 M6 20 L12 26 L18 20"
          stroke={ROSE}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function SectionFiveComparePreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <FlickeringGrid maxOpacity={0.06} />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, transparent 15%, rgba(248,247,244,0.94) 75%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-5xl px-6 pt-20 pb-14 sm:pt-24 sm:pb-20">
          <div className="mb-10">
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
              05 &middot; The Transformation
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
              className="mt-5 leading-[1.02] tracking-[-0.04em] text-[clamp(2.2rem,5vw,3.6rem)]"
              style={{
                fontFamily: DISPLAY,
                fontWeight: 600,
                color: INK,
                maxWidth: "780px",
              }}
            >
              Four-year-old input.
              <br />
              <span style={{ color: INK_MUTED }}>Hollywood-level output.</span>
            </h1>

            <p
              className="mt-4"
              style={{
                fontFamily: BODY,
                fontSize: "1.02rem",
                lineHeight: 1.6,
                color: INK_MUTED,
                maxWidth: "560px",
              }}
            >
              Three things a toddler could do. One piece that looks like an
              agency made it.
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1px_0.9fr] lg:gap-0">
            <div className="lg:pr-10">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="h-px flex-1"
                  style={{ background: HAIRLINE_HEAVY }}
                />
                <span
                  style={{
                    fontFamily: BODY,
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: INK_FAINT,
                    fontWeight: 600,
                  }}
                >
                  What you bring &middot; 6 minutes
                </span>
                <span
                  className="h-px flex-1"
                  style={{ background: HAIRLINE_HEAVY }}
                />
              </div>

              <div className="flex flex-col gap-3">
                <RawInputCard
                  icon={ImageIcon}
                  label="One photo"
                  time="10 sec"
                  detail="Your pizza out of the oven. Straight from the camera roll."
                />
                <RawInputCard
                  icon={Mic}
                  label="10-second line"
                  time="10 sec"
                  detail='"My grandfather taught me this recipe in 1987." Teleprompter shows you the words.'
                />
                <RawInputCard
                  icon={Camera}
                  label="5-second clip"
                  time="5 sec"
                  detail="Steam rising off the espresso. Point, hold, release."
                />
              </div>

              <div
                className="mt-6 rounded-xl px-4 py-3"
                style={{
                  background: "rgba(30,58,138,0.04)",
                  border: `1px solid ${HAIRLINE}`,
                }}
              >
                <p
                  className="flex items-baseline justify-between"
                  style={{
                    fontFamily: BODY,
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: INK,
                  }}
                >
                  <span>Total effort</span>
                  <span className="tabular-nums" style={{ fontFeatureSettings: '"tnum" 1' }}>
                    6 minutes
                  </span>
                </p>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: BODY,
                    fontSize: "0.78rem",
                    color: INK_SOFT,
                  }}
                >
                  Zero skill. Zero decisions. Zero editing.
                </p>
              </div>
            </div>

            <div
              className="hidden lg:block"
              style={{ background: HAIRLINE_HEAVY }}
            />
            <div
              className="flex justify-center lg:hidden"
            >
              <ArrowDown />
            </div>

            <div className="lg:pl-10">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="h-px flex-1"
                  style={{ background: HAIRLINE_HEAVY }}
                />
                <span
                  style={{
                    fontFamily: BODY,
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: ROSE_DEEP,
                    fontWeight: 600,
                  }}
                >
                  What Solara returns
                </span>
                <span
                  className="h-px flex-1"
                  style={{ background: HAIRLINE_HEAVY }}
                />
              </div>

              <div className="mx-auto max-w-[300px]">
                <FinishedPieceMockup />
              </div>

              <p
                className="mt-4 text-center"
                style={{
                  fontFamily: BODY,
                  fontSize: "0.82rem",
                  color: INK_SOFT,
                  lineHeight: 1.5,
                }}
              >
                Color-graded. Paced. Music mixed. Captions burned.
                Thumbnail designed. Scheduled. Published.
              </p>
            </div>
          </div>

          <div
            className="mx-auto mt-16 max-w-3xl border-t pt-10 text-center"
            style={{ borderColor: HAIRLINE_HEAVY }}
          >
            <p
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1.3rem, 2.6vw, 1.85rem)",
                fontWeight: 500,
                lineHeight: 1.35,
                letterSpacing: "-0.02em",
                color: INK,
              }}
            >
              A tool hands you a kitchen and says{" "}
              <span style={{ color: INK_FAINT, fontStyle: "italic" }}>go cook.</span>
              <br />
              Solara hands you{" "}
              <span style={{ color: ROSE_DEEP, fontWeight: 600 }}>
                the plate.
              </span>
            </p>
          </div>
        </div>
      </section>

      <PreviewFooter
        label="Variant 3 · Split Comparison"
        description="Left column: three raw input cards with time stamps totaling 6 minutes. Right column: one polished Instagram Reel mockup with captions, waveform, hashtags, and 'Published' badge. Vertical hairline divider on desktop, arrow on mobile."
      />
    </main>
  );
}
