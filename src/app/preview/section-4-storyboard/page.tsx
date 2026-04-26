"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Sparkles } from "lucide-react";
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

type Scene = {
  number: string;
  numeral: number;
  label: string;
  title: string;
  body: string;
  duration: string;
  instruction: string;
  image: string;
  extra?: string;
};

const SCENES: Scene[] = [
  {
    number: "01",
    numeral: 1,
    label: "Opening hook",
    title: "Speaking next to the oven",
    body: "The 3-second hook that stops the scroll. One short line, on camera, in your actual space. Solara picks the moment, you press record.",
    duration: "5s",
    instruction:
      "Stand next to the oven, look at the camera, and say your first line.",
    image: "/storyboard/scenes/scene-1.webp",
  },
  {
    number: "02",
    numeral: 2,
    label: "Value proposition",
    title: "Same location, second sentence",
    body: "Same spot, same light, second line. Solara stitches both takes back-to-back so it reads like one continuous shot — no editing skill required.",
    duration: "5s",
    instruction:
      "Stay in the same spot and deliver the second line. Use your hands naturally.",
    image: "/storyboard/scenes/scene-2.webp",
  },
  {
    number: "03",
    numeral: 3,
    label: "Photo b-roll",
    title: "Snap the pizza",
    body: "Solara doesn't need video for every shot. One still photo becomes a moving cinematic moment — camera drift, depth, color graded.",
    duration: "Photo",
    instruction: "Take a photo of the pizza being served. One clean shot.",
    image: "/storyboard/scenes/scene-3.webp",
    extra: "Solara turns this into a video",
  },
  {
    number: "04",
    numeral: 4,
    label: "Outro & CTA",
    title: "Film yourself delivering",
    body: "The line that earns the tap. Centered, soft eye contact, smiling. Solara picks the take with the most energy and cuts it to the beat.",
    duration: "7s",
    instruction:
      "Center yourself in the middle of the frame for a professional look.",
    image: "/storyboard/scenes/scene-4.webp",
  },
];

function SceneCard({ scene }: { scene: Scene }) {
  return (
    <div className="flex w-full flex-col">
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          aspectRatio: "5 / 3",
          boxShadow:
            "0 28px 60px -22px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.06) inset",
        }}
      >
        <img
          src={scene.image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        <span
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full"
          style={{
            background: "#fff",
            color: INK,
            fontFamily: BODY,
            fontSize: "0.86rem",
            fontWeight: 700,
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.06)",
          }}
        >
          {scene.numeral}
        </span>

        <div
          className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-14"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.85) 100%)",
          }}
        >
          <p
            style={{
              fontFamily: BODY,
              fontSize: "0.62rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.78)",
              fontWeight: 600,
            }}
          >
            {scene.label}
          </p>
          <p
            className="mt-1.5"
            style={{
              fontFamily: DISPLAY,
              fontSize: "1.32rem",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            {scene.title}
          </p>
        </div>
      </div>

      <div
        className="mt-4 flex gap-2.5 pl-3"
        style={{ borderLeft: `2px solid ${HAIRLINE_HEAVY}` }}
      >
        <span
          className="shrink-0"
          style={{
            fontFamily: BODY,
            fontSize: "0.84rem",
            fontWeight: 600,
            color: INK,
          }}
        >
          {scene.duration}
        </span>
        <span
          style={{
            fontFamily: BODY,
            fontSize: "0.84rem",
            color: INK_MUTED,
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          &ldquo;{scene.instruction}&rdquo;
        </span>
      </div>

      {scene.extra ? (
        <div className="mt-3 pl-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
            style={{
              background: "#fff",
              border: `1px solid ${HAIRLINE_HEAVY}`,
              fontFamily: BODY,
              fontSize: "0.78rem",
              fontWeight: 500,
              color: INK,
            }}
          >
            <Sparkles
              size={13}
              strokeWidth={2}
              style={{ color: ROSE_DEEP }}
            />
            {scene.extra}
          </span>
        </div>
      ) : null}
    </div>
  );
}

const MemoSceneCard = memo(SceneCard);

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
      <div
        className="grid lg:grid-cols-[1fr_1fr] lg:gap-16"
        style={{ minHeight: "320vh" }}
      >
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
              className="w-full"
              style={{
                rotateY,
                transformStyle: "preserve-3d",
                willChange: "transform",
                maxWidth: 540,
              }}
            >
              <div
                className="relative w-full"
                style={{ height: 470 }}
              >
                {SCENES.map((scene, i) => {
                  const offset = i - activeStep;
                  return (
                    <div
                      key={scene.number}
                      className="absolute inset-0"
                      style={{
                        transform: `translateY(${offset * 100}%)`,
                        transition:
                          "transform 620ms cubic-bezier(0.22, 0.61, 0.36, 1)",
                        willChange: "transform",
                      }}
                    >
                      <MemoSceneCard scene={scene} />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative">
          <div
            className="sticky flex items-center"
            style={{
              top: "15vh",
              height: "70vh",
            }}
          >
            <div className="flex w-full flex-col">
              {SCENES.map((scene, i) => {
                const isActive = i === activeStep;
                const isLast = i === SCENES.length - 1;
                return (
                  <div
                    key={scene.number}
                    className="py-5"
                    style={{
                      borderBottom: isLast
                        ? "none"
                        : `1px solid ${HAIRLINE}`,
                    }}
                  >
                    <div className="flex items-baseline gap-6">
                      <span
                        style={{
                          fontFamily: DISPLAY,
                          fontSize: "1.2rem",
                          fontWeight: 500,
                          color: isActive ? INK : INK_FAINT,
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                          transition: "color 400ms ease-out",
                          flexShrink: 0,
                          width: "1.5rem",
                          textAlign: "left",
                        }}
                      >
                        {scene.number}
                      </span>
                      <h3
                        style={{
                          fontFamily: DISPLAY,
                          fontSize: isActive
                            ? "clamp(1.5rem, 2.6vw, 1.95rem)"
                            : "1.1rem",
                          fontWeight: isActive ? 600 : 500,
                          letterSpacing: "-0.025em",
                          lineHeight: 1.25,
                          color: isActive ? INK : INK_MUTED,
                          transition:
                            "font-size 400ms cubic-bezier(0.22, 0.61, 0.36, 1), color 400ms ease-out, font-weight 400ms ease-out",
                        }}
                      >
                        {scene.title}
                      </h3>
                    </div>
                    <div
                      style={{
                        maxHeight: isActive ? "260px" : 0,
                        overflow: "hidden",
                        opacity: isActive ? 1 : 0,
                        transition:
                          "max-height 520ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 400ms ease-out",
                      }}
                    >
                      <p
                        className="mt-3"
                        style={{
                          fontFamily: BODY,
                          fontSize: "1rem",
                          lineHeight: 1.65,
                          color: INK_MUTED,
                          paddingLeft: "calc(1.5rem + 1.5rem)",
                          maxWidth: "440px",
                        }}
                      >
                        {scene.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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
            See how one video gets made.
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
            Solara breaks each video into small scenes. You film short clips
            &mdash; it handles everything else. Scroll to watch it build.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-24">
          <StickyStoryboard />
        </div>

        <div
          className="mx-auto max-w-3xl border-t px-6 py-16 text-center"
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
            You bring:{" "}
            <span style={{ color: INK_FAINT }}>
              short clips of your actual brand.
            </span>
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
        label="Section 04 · Storyboard (sticky scroll, image-based scenes)"
        description="Sticky-scroll left/right pattern. Left column shows one image-based scene card at a time, sliding vertically between 4 scenes (opening hook → value prop → photo b-roll → outro CTA) as you scroll. Subtle Y-axis chassis tilt per scene. Right column is a Sintra-style stacked list — all 4 scene titles always visible with hairline dividers, only the active one expands its body description. No phone mockup chrome — replaced with photographic scene cards using real downloaded images. Animation behavior preserved from previous version."
      />
    </main>
  );
}
