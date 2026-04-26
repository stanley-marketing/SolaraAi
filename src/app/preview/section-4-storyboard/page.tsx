"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
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
import { PhoneFrame } from "@/components/homepage/WebAppMockup";

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

function FinishedReelScreen() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ backgroundColor: "#000" }}
    >
      <img
        src="/storyboard/scenes/scene-3.webp"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 18%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div
        className="absolute z-20 flex gap-1"
        style={{
          left: "8%",
          right: "8%",
          top: "9%",
          height: 2.5,
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className="flex-1 rounded-full"
            style={{
              background:
                i <= 3 ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.32)",
            }}
          />
        ))}
      </div>

      <div
        className="absolute z-20 flex items-center gap-1.5"
        style={{
          left: "6%",
          top: "13%",
        }}
      >
        <span
          className="flex h-1.5 w-1.5 rounded-full"
          style={{ background: "#22c55e" }}
        />
        <span
          style={{
            color: "#fff",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: BODY,
          }}
        >
          Live · Thursday 8:00 AM
        </span>
      </div>

      <div
        className="absolute z-20 px-4 pb-5 text-white"
        style={{
          left: 0,
          right: 0,
          bottom: "8%",
        }}
      >
        <p
          style={{
            fontFamily: BODY,
            fontSize: 9,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 600,
            opacity: 0.78,
          }}
        >
          @your.pizza.shop
        </p>
        <p
          className="mt-1.5"
          style={{
            fontFamily: DISPLAY,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            textShadow: "0 1px 3px rgba(0,0,0,0.45)",
          }}
        >
          Some things don&rsquo;t need a recipe. Just time.
        </p>
        <p
          className="mt-1.5"
          style={{
            fontFamily: BODY,
            fontSize: 10,
            opacity: 0.72,
          }}
        >
          #pizza · #familyrecipe · #smallshop
        </p>
      </div>

      <div
        className="absolute z-20 flex flex-col items-center gap-3"
        style={{
          right: "5%",
          bottom: "30%",
          color: "#fff",
        }}
      >
        {[
          { label: "♡", num: "12k" },
          { label: "💬", num: "284" },
          { label: "↗", num: "Share" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <span style={{ fontSize: 16, lineHeight: 1 }}>{item.label}</span>
            <span
              style={{
                fontFamily: BODY,
                fontSize: 9,
                fontWeight: 600,
                opacity: 0.85,
              }}
            >
              {item.num}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureThreePhone() {
  return (
    <div className="flex flex-col items-center">
      <p
        className="mb-6 text-center"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.45rem, 2.5vw, 1.95rem)",
          fontWeight: 600,
          color: INK,
          letterSpacing: "-0.025em",
          lineHeight: 1.2,
          maxWidth: 420,
        }}
      >
        Your 5 minutes{" "}
        <span style={{ color: ROSE_DEEP }}>&rarr;</span>{" "}
        agency-grade content
      </p>
      <PhoneFrame width={300}>
        <FinishedReelScreen />
      </PhoneFrame>
    </div>
  );
}

function MobileSceneCard({ scene }: { scene: Scene }) {
  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-3xl"
      style={{
        background: "#f4eee2",
        padding: 24,
        minHeight: 580,
      }}
    >
      <p
        className="mb-2.5"
        style={{
          fontFamily: BODY,
          fontSize: "0.7rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: INK_SOFT,
          fontWeight: 600,
        }}
      >
        {scene.label}
      </p>

      <h3
        className="mb-6"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.65rem, 6vw, 2rem)",
          fontWeight: 700,
          color: INK,
          letterSpacing: "-0.025em",
          lineHeight: 1.2,
        }}
      >
        {scene.title}
      </h3>

      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          aspectRatio: "5 / 3.6",
          border: `1px solid rgba(0,0,0,0.08)`,
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
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full"
          style={{
            background: "#fff",
            color: INK,
            fontFamily: BODY,
            fontSize: "0.86rem",
            fontWeight: 700,
            boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
          }}
        >
          {scene.numeral}
        </span>
      </div>

      <div
        className="mt-5 flex gap-2.5 pl-3"
        style={{ borderLeft: `2px solid rgba(0,0,0,0.18)` }}
      >
        <span
          className="shrink-0"
          style={{
            fontFamily: BODY,
            fontSize: "0.84rem",
            fontWeight: 700,
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
        <div className="mt-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
            style={{
              background: "#fff",
              border: `1px solid rgba(0,0,0,0.1)`,
              fontFamily: BODY,
              fontSize: "0.78rem",
              fontWeight: 500,
              color: INK,
            }}
          >
            <Sparkles size={13} strokeWidth={2} style={{ color: ROSE_DEEP }} />
            {scene.extra}
          </span>
        </div>
      ) : null}
    </div>
  );
}

function MobilePhoneCard() {
  return (
    <div
      className="relative flex flex-col items-center overflow-hidden rounded-3xl"
      style={{
        background: "#f4eee2",
        padding: 24,
        minHeight: 580,
      }}
    >
      <p
        className="mb-2.5 self-start"
        style={{
          fontFamily: BODY,
          fontSize: "0.7rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: ROSE_DEEP,
          fontWeight: 700,
        }}
      >
        The result
      </p>

      <h3
        className="mb-7 self-start"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.65rem, 6vw, 2rem)",
          fontWeight: 700,
          color: INK,
          letterSpacing: "-0.025em",
          lineHeight: 1.2,
        }}
      >
        Your 5 minutes{" "}
        <span style={{ color: ROSE_DEEP }}>&rarr;</span> agency-grade content
      </h3>

      <PhoneFrame width={200}>
        <FinishedReelScreen />
      </PhoneFrame>
    </div>
  );
}

const MOBILE_STEP_DURATION_MS = 6000;
const MOBILE_TICK_MS = 50;

function MobileStoryboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const totalSteps = SCENES.length + 1;
  const isPhoneStep = activeIndex === SCENES.length;
  const currentScene = isPhoneStep ? null : SCENES[activeIndex];

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + (MOBILE_TICK_MS / MOBILE_STEP_DURATION_MS) * 100;
        if (next >= 100) {
          setActiveIndex((curr) => (curr + 1) % totalSteps);
          return 0;
        }
        return next;
      });
    }, MOBILE_TICK_MS);
    return () => clearInterval(id);
  }, [totalSteps]);

  const goTo = (i: number) => {
    const wrapped = ((i % totalSteps) + totalSteps) % totalSteps;
    setActiveIndex(wrapped);
    setProgress(0);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  return (
    <div className="flex flex-col">
      <div className="mb-3 flex items-baseline justify-between">
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "1.06rem",
            fontWeight: 600,
            color: INK,
            letterSpacing: "-0.02em",
          }}
        >
          The Directing
        </p>
        <p
          style={{
            fontFamily: BODY,
            fontSize: "0.78rem",
            color: INK_FAINT,
            fontWeight: 600,
            letterSpacing: "0.04em",
          }}
        >
          {activeIndex + 1}{" "}
          <span style={{ color: INK_FAINT }}>/ {totalSteps}</span>
        </p>
      </div>

      <div
        className="mb-7 h-px w-full overflow-hidden"
        style={{ background: HAIRLINE_HEAVY }}
      >
        <div
          key={activeIndex}
          className="h-full"
          style={{
            width: `${progress}%`,
            background: INK,
            transition: "width 80ms linear",
          }}
        />
      </div>

      <div className="relative mb-7">
        {currentScene ? (
          <MobileSceneCard scene={currentScene} />
        ) : (
          <MobilePhoneCard />
        )}
      </div>

      <div className="mb-6 flex justify-center gap-2.5">
        {Array.from({ length: totalSteps }).map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to step ${i + 1}`}
              className="rounded-full transition-colors duration-300"
              style={{
                width: 8,
                height: 8,
                background: isActive ? "#9c9c9c" : "#dcd8cd",
              }}
            />
          );
        })}
      </div>

      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous step"
          className="flex h-11 w-11 items-center justify-center rounded-full transition-colors"
          style={{
            background: "#ebe6d6",
            color: INK,
          }}
        >
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next step"
          className="flex h-11 w-11 items-center justify-center rounded-full transition-colors"
          style={{
            background: "#ebe6d6",
            color: INK,
          }}
        >
          <ArrowRight size={17} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

function StickyStoryboard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-2, 2, -3, 4, 0],
  );

  const [activeStep, setActiveStep] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.max(0, Math.min(4, Math.floor(v * 5)));
    if (idx !== activeStep) setActiveStep(idx);
  });

  const isPhoneActive = activeStep === 4;

  return (
    <div ref={ref} className="relative" style={{ minHeight: "400vh" }}>
      <div
        className="grid lg:grid-cols-[1fr_1fr] lg:gap-16"
        style={{ minHeight: "400vh" }}
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
                className="relative w-full overflow-hidden"
                style={{ height: 720 }}
              >
                {SCENES.map((scene, i) => {
                  const offset = i - activeStep;
                  return (
                    <div
                      key={scene.number}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        transform: `translateY(${offset * 100}%)`,
                        transition:
                          "transform 620ms cubic-bezier(0.22, 0.61, 0.36, 1)",
                        willChange: "transform",
                      }}
                    >
                      <div className="w-full">
                        <MemoSceneCard scene={scene} />
                      </div>
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
            <div
              className="flex w-full flex-col"
              style={{
                opacity: isPhoneActive ? 0 : 1,
                pointerEvents: isPhoneActive ? "none" : "auto",
                transition: "opacity 420ms ease-out",
              }}
            >
              {SCENES.map((scene, i) => {
                const isActive = i === activeStep && !isPhoneActive;
                const isLast = i === SCENES.length - 1;
                return (
                  <div
                    key={scene.number}
                    className="py-5"
                    style={{
                      borderBottom: isLast ? "none" : `1px solid ${HAIRLINE}`,
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

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden={!isPhoneActive}
      >
        <div
          className="sticky flex items-center justify-center"
          style={{
            top: "15vh",
            height: "70vh",
          }}
        >
          <div
            style={{
              transform: isPhoneActive
                ? "translateX(0)"
                : "translateX(120%)",
              opacity: isPhoneActive ? 1 : 0,
              transition:
                "transform 720ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 360ms ease-out",
              willChange: "transform, opacity",
              pointerEvents: isPhoneActive ? "auto" : "none",
            }}
          >
            <FeatureThreePhone />
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

        <div className="mx-auto hidden max-w-6xl px-6 pb-24 lg:block">
          <StickyStoryboard />
        </div>

        <div className="mx-auto max-w-md px-5 pb-24 lg:hidden">
          <MobileStoryboard />
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
