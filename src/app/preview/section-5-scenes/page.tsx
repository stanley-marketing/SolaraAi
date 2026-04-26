"use client";

import { Sparkles } from "lucide-react";
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
import type { ReactNode } from "react";

type Scene = {
  number: number;
  label: string;
  title: string;
  time: string;
  instruction: string;
  visual: ReactNode;
  extra?: string;
};

function OvenVisual() {
  return (
    <div className="absolute inset-0">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 55%, #fff4b0 0%, #f4a23a 18%, #d1541c 38%, #7a2609 68%, #2d0e05 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-[18%] top-[38%]"
        style={{
          width: "28%",
          aspectRatio: "1.2 / 1",
          borderRadius: "50% 50% 12% 12%",
          background:
            "radial-gradient(ellipse at 50% 40%, #fff6c4 0%, #fdbb4b 30%, #c25410 70%, #3f1806 100%)",
          boxShadow: "0 0 40px rgba(255,180,80,0.6)",
        }}
      />
      <div
        aria-hidden
        className="absolute right-[15%] bottom-0 top-[20%]"
        style={{
          width: "32%",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.35) 55%, rgba(10,10,10,0.82) 100%)",
          maskImage:
            "linear-gradient(180deg, transparent 10%, black 60%, black 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute right-[20%] bottom-[6%]"
        style={{
          width: "22%",
          height: "62%",
          background: "rgba(20,14,10,0.65)",
          clipPath:
            "polygon(30% 0%, 70% 0%, 80% 14%, 85% 40%, 80% 70%, 90% 100%, 10% 100%, 20% 70%, 15% 40%, 20% 14%)",
        }}
      />
    </div>
  );
}

function StudioVisual() {
  return (
    <div className="absolute inset-0">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 18%, #fde9c3 0%, #d9b58a 22%, #6e4a33 52%, #2b1a12 95%)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-[-10%] h-[70%] w-[65%] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,230,160,0.55) 0%, rgba(255,230,160,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 bottom-0 top-[30%] w-[28%] -translate-x-1/2"
        style={{
          background: "rgba(20,14,10,0.55)",
          clipPath:
            "polygon(35% 0%, 65% 0%, 75% 16%, 80% 38%, 78% 62%, 90% 100%, 10% 100%, 22% 62%, 20% 38%, 25% 16%)",
        }}
      />
    </div>
  );
}

function PizzaVisual() {
  return (
    <div className="absolute inset-0">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, #1a0d08 0%, #0a0605 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "62%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 32%, #fff3b5 0%, #e7a85a 28%, #a2542c 58%, #6b3116 100%)",
          boxShadow:
            "0 0 60px rgba(255,200,100,0.25), 0 12px 30px -8px rgba(107,49,22,0.7)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-[48%] top-[26%]"
        style={{
          width: 6,
          height: 26,
          background: "linear-gradient(180deg, #6a8f3a, transparent)",
          borderRadius: 3,
          transform: "rotate(-12deg)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-[52%] top-[22%]"
        style={{
          width: 5,
          height: 22,
          background: "linear-gradient(180deg, #7fa845, transparent)",
          borderRadius: 3,
          transform: "rotate(8deg)",
        }}
      />
    </div>
  );
}

function DeliveryVisual() {
  return (
    <div className="absolute inset-0">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 65% 30%, #f4a23a 0%, #8a4818 18%, #1a1438 48%, #0a0a1f 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-[12%] top-[22%]"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#ffd78a",
          boxShadow:
            "0 0 16px 4px rgba(255,215,138,0.6), 22px 18px 0 0 rgba(255,215,138,0.9), 22px 18px 14px 4px rgba(255,215,138,0.45), 48px 6px 0 0 rgba(255,200,100,0.7), 48px 6px 14px 4px rgba(255,200,100,0.35)",
        }}
      />
      <div
        aria-hidden
        className="absolute right-[22%] bottom-0 top-[32%]"
        style={{
          width: "22%",
          background: "rgba(15,10,8,0.75)",
          clipPath:
            "polygon(35% 0%, 65% 0%, 75% 14%, 80% 36%, 76% 60%, 92% 100%, 8% 100%, 24% 60%, 20% 36%, 25% 14%)",
        }}
      />
      <div
        aria-hidden
        className="absolute right-[18%] bottom-[30%]"
        style={{
          width: "24%",
          height: "18%",
          background: "rgba(250,195,120,0.85)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: 3,
        }}
      />
    </div>
  );
}

const SCENES: Scene[] = [
  {
    number: 1,
    label: "Opening hook",
    title: "Speaking next to the oven",
    time: "5s",
    instruction:
      "Stand next to the oven, look at the camera, and say your first line.",
    visual: <OvenVisual />,
  },
  {
    number: 2,
    label: "Value proposition",
    title: "Same location, second sentence",
    time: "5s",
    instruction:
      "Stay in the same spot and deliver the second line. Use your hands naturally.",
    visual: <StudioVisual />,
  },
  {
    number: 3,
    label: "Photo b-roll",
    title: "Snap the pizza",
    time: "Photo",
    instruction:
      "Take a photo of the pizza being served. One clean shot.",
    visual: <PizzaVisual />,
    extra: "Solara turns this into a video",
  },
  {
    number: 4,
    label: "Outro & CTA",
    title: "Film yourself delivering",
    time: "7s",
    instruction:
      "Center yourself in the middle of the frame for a professional look.",
    visual: <DeliveryVisual />,
  },
];

function NumberBadge({ n }: { n: number }) {
  return (
    <span
      className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full"
      style={{
        background: "#fff",
        color: INK,
        fontFamily: BODY,
        fontSize: "0.78rem",
        fontWeight: 700,
        boxShadow:
          "0 2px 6px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.06)",
      }}
    >
      {n}
    </span>
  );
}

function SceneCard({ scene }: { scene: Scene }) {
  return (
    <div className="flex flex-col">
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          aspectRatio: "4 / 3",
          boxShadow: "0 10px 30px -14px rgba(0,0,0,0.25)",
        }}
      >
        {scene.visual}
        <NumberBadge n={scene.number} />

        <div
          className="absolute inset-x-0 bottom-0 z-10 p-4"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.75) 100%)",
          }}
        >
          <p
            style={{
              fontFamily: BODY,
              fontSize: "0.58rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.72)",
              fontWeight: 600,
            }}
          >
            {scene.label}
          </p>
          <p
            className="mt-1"
            style={{
              fontFamily: DISPLAY,
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
            }}
          >
            {scene.title}
          </p>
        </div>
      </div>

      <div
        className="mt-3 flex gap-2.5 pl-3"
        style={{ borderLeft: `2px solid ${HAIRLINE_HEAVY}` }}
      >
        <span
          className="shrink-0"
          style={{
            fontFamily: BODY,
            fontSize: "0.76rem",
            fontWeight: 600,
            color: INK,
          }}
        >
          {scene.time}
        </span>
        <span
          style={{
            fontFamily: BODY,
            fontSize: "0.76rem",
            color: INK_MUTED,
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          &ldquo;{scene.instruction}&rdquo;
        </span>
      </div>

      {scene.extra && (
        <div className="mt-2.5 pl-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
            style={{
              background: "#fff",
              border: `1px solid ${HAIRLINE_HEAVY}`,
              fontFamily: BODY,
              fontSize: "0.72rem",
              fontWeight: 500,
              color: INK,
            }}
          >
            <Sparkles size={12} strokeWidth={2} style={{ color: ROSE_DEEP }} />
            {scene.extra}
          </span>
        </div>
      )}
    </div>
  );
}

function DashedConnector({ direction }: { direction: "toRight" | "toLeft" }) {
  const d =
    direction === "toRight"
      ? "M 8 0 C 40 0, 60 40, 92 40"
      : "M 92 0 C 60 0, 40 40, 8 40";
  return (
    <div
      aria-hidden
      className="relative mx-auto"
      style={{ height: 40, width: "70%", maxWidth: 520 }}
    >
      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <title>Scene connector</title>
        <path
          d={d}
          fill="none"
          stroke={HAIRLINE_HEAVY}
          strokeWidth="0.4"
          strokeDasharray="1.2 1"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{
            strokeWidth: 1.5,
          }}
        />
      </svg>
    </div>
  );
}

export default function SectionFiveScenesPreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <FlickeringGrid maxOpacity={0.05} />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 25%, transparent 15%, rgba(248,247,244,0.95) 70%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-3xl px-6 pt-16 pb-10 sm:pt-20">
          <div
            className="inline-flex items-center gap-3"
            style={{
              fontFamily: BODY,
              fontSize: "0.64rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: INK_SOFT,
              fontWeight: 600,
            }}
          >
            <span className="h-px w-6 bg-current opacity-60" />
            05 &middot; How one video gets made
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
            className="mt-4 leading-[1.02] tracking-[-0.035em] text-[clamp(2rem,4.4vw,3.2rem)]"
            style={{
              fontFamily: DISPLAY,
              fontWeight: 600,
              color: INK,
            }}
          >
            See how one video gets made.
          </h1>

          <p
            className="mt-3"
            style={{
              fontFamily: BODY,
              fontSize: "1rem",
              lineHeight: 1.55,
              color: INK_MUTED,
              maxWidth: 540,
            }}
          >
            Solara breaks each video into small scenes. You film short clips
            &mdash; it handles everything else.
          </p>
        </div>

        <div className="mx-auto max-w-3xl px-6 pb-12">
          <div className="flex flex-col">
            <div className="flex">
              <div className="w-[58%] sm:w-[55%]">
                <SceneCard scene={SCENES[0]} />
              </div>
              <div className="flex-1" />
            </div>

            <DashedConnector direction="toRight" />

            <div className="flex">
              <div className="flex-1" />
              <div className="w-[58%] sm:w-[55%]">
                <SceneCard scene={SCENES[1]} />
              </div>
            </div>

            <DashedConnector direction="toLeft" />

            <div className="flex">
              <div className="w-[58%] sm:w-[55%]">
                <SceneCard scene={SCENES[2]} />
              </div>
              <div className="flex-1" />
            </div>

            <DashedConnector direction="toRight" />

            <div className="flex">
              <div className="flex-1" />
              <div className="w-[58%] sm:w-[55%]">
                <SceneCard scene={SCENES[3]} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="mx-auto max-w-3xl border-t px-6 py-10 text-center"
          style={{ borderColor: HAIRLINE_HEAVY }}
        >
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.2rem, 2.4vw, 1.7rem)",
              fontWeight: 500,
              lineHeight: 1.35,
              letterSpacing: "-0.02em",
              color: INK,
            }}
          >
            Four short clips.{" "}
            <span style={{ color: ROSE_DEEP, fontWeight: 600 }}>
              One finished piece.
            </span>
          </p>
          <p
            className="mt-3"
            style={{
              fontFamily: BODY,
              fontSize: "0.88rem",
              lineHeight: 1.55,
              color: INK_SOFT,
            }}
          >
            Solara stitches your scenes together with music, captions, and
            pacing. You never touch the edit.
          </p>
        </div>
      </section>

      <PreviewFooter
        label="Variant 4 · Scenes (zigzag with connectors)"
        description="Matches the app's scene-breakdown pattern: four numbered scene cards in an alternating left-right zigzag with dashed diagonal connectors between them. Each card has a scene-appropriate visual, label, title, time, and italic instruction. Card 3 includes the 'Solara turns this into a video' chip. Compact vertical spacing — entire section fits in ~1.5 viewports."
      />
    </main>
  );
}
