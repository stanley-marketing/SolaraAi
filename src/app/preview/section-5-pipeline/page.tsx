"use client";

import {
  Camera,
  Check,
  Clock,
  Hash,
  Image as ImageIcon,
  Mic,
  Monitor,
  Music,
  Palette,
  Play,
  Scissors,
  Send,
  Type,
} from "lucide-react";
import { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
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
import type { LucideIcon } from "lucide-react";

function PipelineNode({
  icon: Icon,
  label,
  nodeRef,
  variant = "process",
  className,
}: {
  icon: LucideIcon;
  label: string;
  nodeRef: React.RefObject<HTMLDivElement | null>;
  variant?: "input" | "process" | "output";
  className?: string;
}) {
  const bg =
    variant === "input"
      ? "#fff"
      : variant === "output"
        ? INK
        : "rgba(30,58,138,0.06)";
  const iconColor =
    variant === "output" ? "#fff" : variant === "input" ? ROSE_DEEP : INK;
  const textColor =
    variant === "output" ? "#fff" : INK;
  const borderColor =
    variant === "input"
      ? HAIRLINE_HEAVY
      : variant === "output"
        ? "transparent"
        : HAIRLINE;
  const size = variant === "output" ? "h-14 w-14" : "h-11 w-11";

  return (
    <div
      ref={nodeRef}
      className={cn("flex flex-col items-center gap-2", className)}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-xl",
          size,
        )}
        style={{
          background: bg,
          border: `1px solid ${borderColor}`,
          boxShadow:
            variant === "output"
              ? "0 4px 16px -4px rgba(10,10,10,0.4)"
              : "0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        <Icon
          size={variant === "output" ? 22 : 17}
          strokeWidth={1.8}
          style={{ color: iconColor }}
        />
      </div>
      <span
        className="text-center"
        style={{
          fontFamily: BODY,
          fontSize: "0.68rem",
          fontWeight: 500,
          color: variant === "output" ? INK : INK_SOFT,
          lineHeight: 1.2,
          maxWidth: 80,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function PipelineDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);

  const photoRef = useRef<HTMLDivElement>(null);
  const voiceRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);

  const colorRef = useRef<HTMLDivElement>(null);
  const cutRef = useRef<HTMLDivElement>(null);
  const musicRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const publishRef = useRef<HTMLDivElement>(null);

  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(6px)",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        boxShadow:
          "0 2px 4px rgba(0,0,0,0.03), 0 16px 40px -16px rgba(0,0,0,0.12)",
        padding: "clamp(24px, 4vw, 48px)",
      }}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col items-center gap-10 pt-8">
          <span
            style={{
              fontFamily: BODY,
              fontSize: "0.58rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: INK_FAINT,
              fontWeight: 600,
            }}
          >
            You bring
          </span>
          <PipelineNode icon={ImageIcon} label="Photo" nodeRef={photoRef} variant="input" />
          <PipelineNode icon={Mic} label="10s voice" nodeRef={voiceRef} variant="input" />
          <PipelineNode icon={Camera} label="5s clip" nodeRef={clipRef} variant="input" />
        </div>

        <div className="flex flex-1 flex-col items-center gap-4 pt-4">
          <span
            style={{
              fontFamily: BODY,
              fontSize: "0.58rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: ROSE_DEEP,
              fontWeight: 600,
            }}
          >
            Solara runs
          </span>
          <div className="grid grid-cols-4 gap-x-6 gap-y-5 sm:gap-x-10">
            <PipelineNode icon={Palette} label="Color grade" nodeRef={colorRef} />
            <PipelineNode icon={Scissors} label="Cut & pace" nodeRef={cutRef} />
            <PipelineNode icon={Music} label="Music" nodeRef={musicRef} />
            <PipelineNode icon={Type} label="Captions" nodeRef={captionRef} />
            <PipelineNode icon={ImageIcon} label="Thumbnail" nodeRef={thumbRef} />
            <PipelineNode icon={Monitor} label="Export" nodeRef={exportRef} />
            <PipelineNode icon={Clock} label="Schedule" nodeRef={scheduleRef} />
            <PipelineNode icon={Send} label="Publish" nodeRef={publishRef} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 pt-8">
          <span
            style={{
              fontFamily: BODY,
              fontSize: "0.58rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: INK_FAINT,
              fontWeight: 600,
            }}
          >
            Output
          </span>
          <PipelineNode
            icon={Play}
            label="Published piece"
            nodeRef={outputRef}
            variant="output"
          />
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={photoRef} toRef={colorRef} gradientStartColor={ROSE} gradientStopColor={ROSE_DEEP} pathColor={HAIRLINE} duration={3} curvature={-20} />
      <AnimatedBeam containerRef={containerRef} fromRef={voiceRef} toRef={cutRef} gradientStartColor={ROSE} gradientStopColor={ROSE_DEEP} pathColor={HAIRLINE} duration={3.2} curvature={10} delay={0.3} />
      <AnimatedBeam containerRef={containerRef} fromRef={clipRef} toRef={musicRef} gradientStartColor={ROSE} gradientStopColor={ROSE_DEEP} pathColor={HAIRLINE} duration={3.5} curvature={20} delay={0.6} />

      <AnimatedBeam containerRef={containerRef} fromRef={publishRef} toRef={outputRef} gradientStartColor={ROSE} gradientStopColor={ROSE_DEEP} pathColor={HAIRLINE} duration={2.8} curvature={-15} delay={1} />
      <AnimatedBeam containerRef={containerRef} fromRef={scheduleRef} toRef={outputRef} gradientStartColor={ROSE} gradientStopColor={ROSE_DEEP} pathColor={HAIRLINE} duration={3} curvature={15} delay={1.2} />
    </div>
  );
}

export default function SectionFivePipelinePreview() {
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

        <div className="mx-auto max-w-6xl px-6 pt-20 pb-14 sm:pt-24 sm:pb-20">
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
              05 &middot; The Pipeline
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
                maxWidth: "620px",
              }}
            >
              Solara orchestrates the best AI models on the market inside
              a workflow refined across thousands of pieces. You never see
              any of it. You never touch it.
            </p>
          </div>

          <PipelineDiagram />

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
        label="Variant 2 · Pipeline Diagram"
        description="Animated beam node graph. Three input nodes (photo, voice, clip) on the left beam into eight processing nodes (color grade, cut, music, captions, thumbnail, export, schedule, publish) then converge into one output node. Shows the invisible orchestration under the hood."
      />
    </main>
  );
}
