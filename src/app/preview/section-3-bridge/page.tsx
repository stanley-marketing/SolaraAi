"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Captions,
  Check,
  Clock,
  FileText,
  Film,
  Hash,
  ImageIcon,
  Maximize2,
  MessageSquare,
  Mic,
  Mic2,
  Music,
  Palette,
  Scissors,
  Send,
  Sparkles,
  Square,
  Sun,
  Target,
  Upload,
  Volume2,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  BODY,
  DISPLAY,
  FlickeringGrid,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_FAINT,
  INK_SOFT,
  ROSE_DEEP,
  ScrollReveal,
  SHELL,
} from "@/components/homepage/teardown-parts";
import { FacebookStory } from "@/components/social-previews/facebook-preview";
import { Highlighter } from "@/components/ui/highlighter";
import { PhoneMockup } from "@/components/ui/phone-mockup";

const INTER = "var(--font-blog), system-ui, -apple-system, sans-serif";

// ─── Types ─────────────────────────────────────────────────────────────────────

type SceneType = "speaking" | "action" | "image";

type Scene = {
  number: number;
  title: string;
  type: SceneType;
  typeLabel: string;
  time: string;
  instruction: string;
  miniContent: {
    teleprompter?: string;
    teleprompterImage?: string;
    actionTitle?: string;
    actionImage?: string;
    uploadTitle?: string;
    uploadImage?: string;
  };
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const SCENES: Scene[] = [
  {
    number: 1,
    title: "Speaking next to the oven",
    type: "speaking",
    typeLabel: "5-Sec Teleprompter",
    time: "5s",
    instruction: "Stand 1m from the oven, eye level. Read this line.",
    miniContent: {
      teleprompter: "My grandfather taught me this in 1987.",
      teleprompterImage: "/storyboard/bridge-scenes/scene-1.webp",
    },
  },
  {
    number: 2,
    title: "Hands on the dough",
    type: "action",
    typeLabel: "10-Sec Action",
    time: "10s",
    instruction: "Roll out the dough on your counter. Hands only, 10s.",
    miniContent: {
      actionTitle: "Hands on dough",
      actionImage: "/storyboard/scenes/scene-dough.png",
    },
  },
  {
    number: 3,
    title: "The pizza, served",
    type: "image",
    typeLabel: "Product Photo",
    time: "Photo",
    instruction: "Upload your favorite photo of the pizza out of the oven.",
    miniContent: {
      uploadTitle: "Pizza photo",
      uploadImage: "/storyboard/bridge-scenes/scene-3.webp",
    },
  },
  {
    number: 4,
    title: "Through the shop",
    type: "action",
    typeLabel: "10-Sec Action",
    time: "10s",
    instruction: "Walk through your shop with a pizza box. Smile. 10s.",
    miniContent: {
      actionTitle: "Walk through shop",
      actionImage: "/storyboard/bridge-scenes/scene-4.webp",
    },
  },
  {
    number: 5,
    title: "Come taste the difference",
    type: "speaking",
    typeLabel: "5-Sec Teleprompter",
    time: "5s",
    instruction: "From the same spot, say 'come taste the difference.'",
    miniContent: {
      teleprompter: "Come taste the difference.",
      teleprompterImage: "/storyboard/bridge-scenes/scene-2.webp",
    },
  },
];

type ProductionCredit = { icon: ReactNode; label: string };

const PILL_ICON_SIZE = 13;
const PILL_ICON_STROKE = 2;

const PRODUCTION_CREDITS_TOP: ProductionCredit[] = [
  { icon: <Target size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Strategy" },
  { icon: <FileText size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Script" },
  { icon: <Film size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Scene direction" },
  { icon: <Sun size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Relit" },
  { icon: <Palette size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Color-graded" },
  { icon: <Volume2 size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Audio cleaned" },
  { icon: <Mic2 size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Voiceover in your voice" },
  { icon: <Captions size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Subtitles" },
  { icon: <Music size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Music timed to cuts" },
];

const PRODUCTION_CREDITS_BOTTOM: ProductionCredit[] = [
  { icon: <Scissors size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Cuts" },
  { icon: <Sparkles size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Transitions" },
  { icon: <ImageIcon size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Thumbnail" },
  { icon: <Square size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Cover frame" },
  { icon: <Maximize2 size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Aspect ratio per platform" },
  { icon: <MessageSquare size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Caption" },
  { icon: <Hash size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Hashtags" },
  { icon: <Clock size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Posted at peak time" },
  { icon: <Send size={PILL_ICON_SIZE} strokeWidth={PILL_ICON_STROKE} />, label: "Auto-published" },
];

// ─── Mini Phone Components ─────────────────────────────────────────────────────

function MiniTeleprompter({
  line,
  backgroundImage,
}: {
  line: string;
  backgroundImage?: string;
}) {
  const onImage = Boolean(backgroundImage);

  return (
    <div className="relative h-full w-full">
      {onImage && (
        <>
          <img
            src={backgroundImage}
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
                "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 78%, rgba(0,0,0,0.4) 100%)",
            }}
          />
        </>
      )}

      <div className="relative z-10 flex h-full w-full flex-col px-3 pt-9 pb-3">
        <div
          className="mb-2.5 flex items-center justify-between"
          style={{
            fontFamily: INTER,
            fontSize: 7.5,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: onImage ? "rgba(255,255,255,0.92)" : INK_FAINT,
            fontWeight: 600,
            textShadow: onImage ? "0 1px 2px rgba(0,0,0,0.4)" : undefined,
          }}
        >
          <span className="flex items-center gap-1">
            <Mic size={7.5} strokeWidth={2.4} />
            Teleprompter
          </span>
          <span
            style={{
              color: onImage ? "rgba(255,255,255,0.92)" : ROSE_DEEP,
            }}
          >
            1/1
          </span>
        </div>

        <div
          className="flex flex-1 items-center justify-center rounded-sm px-2.5 py-2.5"
          style={{
            background: onImage ? "rgba(255,255,255,0.94)" : "#f3f2ee",
            border: `1px solid ${onImage ? "rgba(255,255,255,0.5)" : HAIRLINE}`,
            backdropFilter: onImage ? "blur(4px)" : undefined,
            WebkitBackdropFilter: onImage ? "blur(4px)" : undefined,
            boxShadow: onImage
              ? "0 4px 12px rgba(0,0,0,0.18)"
              : undefined,
          }}
        >
          <p
            className="text-center"
            style={{
              fontFamily: DISPLAY,
              fontSize: 10,
              fontWeight: 600,
              color: INK,
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            &ldquo;{line}&rdquo;
          </p>
        </div>

        <div
          className="mt-2.5 flex items-center justify-center"
          style={{ height: 22 }}
        >
          <span
            className="flex h-4 w-4 items-center justify-center rounded-full"
            style={{
              background: "#fff",
              border: "1.5px solid rgba(255,255,255,0.7)",
              boxShadow: `0 0 0 1.5px ${ROSE_DEEP}`,
            }}
          >
            <span
              className="h-2 w-2 rounded-sm"
              style={{ background: "#ef4444" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function MiniActionScreen({
  title,
  image,
}: {
  title: string;
  image?: string;
}) {
  return (
    <div className="relative h-full w-full">
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "linear-gradient(145deg, #2a2a2a 0%, #0a0a0a 100%)",
          }}
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div
        className="absolute left-2.5 top-12 z-20 flex items-center gap-1 rounded-full px-2 py-0.5"
        style={{
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(2px)",
        }}
      >
        <span
          className="flex h-1.5 w-1.5 animate-pulse rounded-full"
          style={{ background: "#ef4444" }}
        />
        <span
          style={{
            color: "#fff",
            fontFamily: BODY,
            fontSize: 7.5,
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          REC
        </span>
      </div>

      <div className="absolute inset-x-2.5 bottom-2.5 z-20 text-white">
        <p
          style={{
            fontFamily: BODY,
            fontSize: 7,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 700,
            opacity: 0.78,
          }}
        >
          Film
        </p>
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: 10.5,
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </p>
      </div>

      <div
        className="absolute left-1/2 z-20 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full"
        style={{
          bottom: 32,
          background: "#fff",
          boxShadow: "0 0 0 2px #fff, 0 0 0 4px rgba(255,255,255,0.4)",
        }}
      >
        <span
          className="h-2 w-2 rounded-sm"
          style={{ background: "#ef4444" }}
        />
      </div>
    </div>
  );
}

function MiniUploadScreen({
  title,
  image,
}: {
  title: string;
  image?: string;
}) {
  return (
    <div className="relative h-full w-full bg-white">
      <div
        className="flex items-center justify-between px-3 pt-9 pb-2.5"
        style={{
          fontFamily: BODY,
          fontSize: 7.5,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 700,
        }}
      >
        <span className="flex items-center gap-1">
          <Upload size={7.5} strokeWidth={2.4} />
          Upload
        </span>
        <Check size={9} strokeWidth={3} style={{ color: "#22c55e" }} />
      </div>

      <div className="px-3">
        <div
          className="relative overflow-hidden rounded-sm"
          style={{
            aspectRatio: "1 / 1",
            border: `1px solid ${HAIRLINE_HEAVY}`,
          }}
        >
          {image ? (
            <img
              src={image}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#f3f2ee]">
              <ImageIcon
                size={24}
                strokeWidth={1.5}
                style={{ color: INK_FAINT }}
              />
            </div>
          )}
        </div>

        <p
          className="mt-2.5 text-center"
          style={{
            fontFamily: BODY,
            fontSize: 8,
            color: INK,
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          {title}
        </p>
      </div>

      <div className="absolute inset-x-3 bottom-3">
        <div
          className="flex items-center justify-center rounded-full py-2"
          style={{
            background: INK,
            color: "#fff",
            fontFamily: BODY,
            fontSize: 7.5,
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          USE THIS PHOTO
        </div>
      </div>
    </div>
  );
}

// ─── Scene Carousel ───────────────────────────────────────────────────────────

const SCENE_STEP_DURATION_MS = 6500;
const SCENE_TICK_MS = 60;

function SceneSlide({ scene }: { scene: Scene }) {
  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-3xl"
      style={{
        background: "#ffffff",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        padding: 24,
        minHeight: 640,
      }}
    >
      <h3
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.5rem, 5.5vw, 1.85rem)",
          fontWeight: 700,
          color: INK,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
        }}
      >
        {scene.title}
      </h3>

      <div className="relative mx-auto mt-6 flex flex-1 items-center">
        <div className="relative">
          <SceneMiniPhone scene={scene} />
          <span
            className="absolute -right-2 -top-2 z-30 flex h-9 w-9 items-center justify-center rounded-full"
            style={{
              background: "#fff",
              color: INK,
              fontFamily: INTER,
              fontSize: "0.92rem",
              fontWeight: 600,
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06)",
            }}
          >
            {scene.number}
          </span>
        </div>
      </div>

      <p
        className="mt-6 border-l-2 pl-4"
        style={{
          borderColor: ROSE_DEEP,
          fontFamily: BODY,
          fontSize: "0.86rem",
          color: INK,
          lineHeight: 1.5,
          fontWeight: 500,
          fontStyle: "italic",
        }}
      >
        &ldquo;{scene.instruction}&rdquo;
      </p>
    </div>
  );
}

function SceneCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const total = SCENES.length;

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + (SCENE_TICK_MS / SCENE_STEP_DURATION_MS) * 100;
        if (next >= 100) {
          setActiveIndex((curr) => (curr + 1) % total);
          return 0;
        }
        return next;
      });
    }, SCENE_TICK_MS);
    return () => clearInterval(id);
  }, [total]);

  const goTo = (i: number) => {
    const wrapped = ((i % total) + total) % total;
    setActiveIndex(wrapped);
    setProgress(0);
  };

  return (
    <div className="mx-auto flex max-w-md flex-col">
      <div className="mb-3 flex items-baseline justify-end">
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
          <span style={{ color: INK_FAINT }}>/ {total}</span>
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
        <SceneSlide scene={SCENES[activeIndex]} />
      </div>

      <div className="mb-6 flex justify-center gap-2.5">
        {Array.from({ length: total }).map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to scene ${i + 1}`}
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
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous scene"
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
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next scene"
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

// ─── Scene Mini Phone ─────────────────────────────────────────────────────────

const SCENE_PHONE_WIDTH = 280;
const SCENE_CONTENT_BASE_WIDTH = 134;
const SCENE_CONTENT_BASE_HEIGHT = 285;
const SCENE_CONTENT_SCALE =
  (SCENE_PHONE_WIDTH - 2 * Math.round(SCENE_PHONE_WIDTH * 0.035)) /
  SCENE_CONTENT_BASE_WIDTH;

function SceneMiniPhone({ scene }: { scene: Scene }) {
  const inner = (() => {
    switch (scene.type) {
      case "speaking":
        return (
          <MiniTeleprompter
            line={scene.miniContent.teleprompter ?? ""}
            backgroundImage={scene.miniContent.teleprompterImage}
          />
        );
      case "action":
        return (
          <MiniActionScreen
            title={scene.miniContent.actionTitle ?? ""}
            image={scene.miniContent.actionImage}
          />
        );
      case "image":
        return (
          <MiniUploadScreen
            title={scene.miniContent.uploadTitle ?? ""}
            image={scene.miniContent.uploadImage}
          />
        );
    }
  })();

  return (
    <PhoneMockup width={SCENE_PHONE_WIDTH}>
      <div
        style={{
          width: SCENE_CONTENT_BASE_WIDTH,
          height: SCENE_CONTENT_BASE_HEIGHT,
          transform: `scale(${SCENE_CONTENT_SCALE})`,
          transformOrigin: "top left",
        }}
      >
        {inner}
      </div>
    </PhoneMockup>
  );
}

// ─── Production Credits Marquee ───────────────────────────────────────────────

function ProductionMarqueeKeys() {
  return (
    <style>{`
      @keyframes productionMarqueeLeft {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-50% - 0.5rem)); }
      }
      @keyframes productionMarqueeRight {
        from { transform: translateX(calc(-50% - 0.5rem)); }
        to { transform: translateX(0); }
      }
    `}</style>
  );
}

function ProductionPill({ icon, label }: ProductionCredit) {
  return (
    <span
      className="inline-flex shrink-0 items-center gap-2 rounded-full"
      style={{
        background: "#ffffff",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        padding: "9px 18px",
        fontFamily: INTER,
        fontSize: "0.86rem",
        fontWeight: 500,
        color: INK,
        letterSpacing: "-0.005em",
        whiteSpace: "nowrap",
        boxShadow: "0 1px 2px rgba(10, 10, 10, 0.04)",
      }}
    >
      <span style={{ color: ROSE_DEEP, display: "inline-flex" }}>{icon}</span>
      {label}
    </span>
  );
}

function ProductionMarquee() {
  return (
    <div className="space-y-3 sm:space-y-4">
      <ProductionMarqueeKeys />

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          className="flex items-center gap-2"
          style={{
            width: "max-content",
            animation: "productionMarqueeLeft 45s linear infinite",
          }}
        >
          {[...PRODUCTION_CREDITS_TOP, ...PRODUCTION_CREDITS_TOP].map((c, i) => (
            <ProductionPill
              key={`top-${i}-${c.label}`}
              icon={c.icon}
              label={c.label}
            />
          ))}
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          className="flex items-center gap-2"
          style={{
            width: "max-content",
            animation: "productionMarqueeRight 50s linear infinite",
          }}
        >
          {[...PRODUCTION_CREDITS_BOTTOM, ...PRODUCTION_CREDITS_BOTTOM].map((c, i) => (
            <ProductionPill
              key={`bottom-${i}-${c.label}`}
              icon={c.icon}
              label={c.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Finished Video Block ─────────────────────────────────────────────────────

function FinishedVideoBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 0.61, 0.36, 1],
        delay: 0.2,
      }}
      className="flex flex-col items-center"
    >
      <PhoneMockup width={280} statusBar={false}>
        <FacebookStory
          username="your.pizza.shop"
          mediaUrl="/storyboard/scenes/scene-dough.png"
          timestamp="2h"
          storyCount={5}
          currentStory={3}
        />
      </PhoneMockup>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SectionThreeBridgePreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      {/* Background flickering grid — sticky, fades via radial mask */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <FlickeringGrid />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 35%, transparent 15%, rgba(248,247,244,0.94) 70%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          TOP BAND — outside TracingBeam
          Eyebrow · 3-line headline · tagline
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-6xl px-5 pt-24 pb-14 sm:px-8 sm:pt-36 sm:pb-20">
        <ScrollReveal>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.8rem]"
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              color: INK,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            <span className="block pb-3">
              People are tired of AI junk. It doesn&rsquo;t grow businesses.
            </span>
            <span className="block">
              Solara became{" "}
              <Highlighter
                action="highlight"
                color="#c7d2fe"
                strokeWidth={2}
                animationDuration={700}
                iterations={2}
                padding={4}
                isView
              >
                the bridge
              </Highlighter>
              {" "}between AI and world-class authentic creative.
            </span>
          </h1>
        </ScrollReveal>

      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          BODY: scene carousel · production marquee · finished video
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* ── SCENE CAROUSEL ── */}
        <div className="pt-4 pb-12">
          <SceneCarousel />
        </div>

        {/* ── PRODUCTION CREDITS MARQUEE ── */}
        <div
          className="border-t py-12"
          style={{ borderColor: HAIRLINE }}
        >
          <ProductionMarquee />
        </div>

        {/* ── PART 3: What you get back ── */}
        <div
          className="flex flex-col items-center border-t py-16 text-center"
          style={{ borderColor: HAIRLINE }}
        >
          <FinishedVideoBlock />
        </div>

      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          CLOSING BAND — outside TracingBeam
          Italic ROSE_DEEP closing statement · generous breathing room
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        className="px-5 py-32 text-center xl:py-40"
        style={{ borderTop: `1px solid ${HAIRLINE}` }}
      >
        <ScrollReveal>
          <p
            className="mx-auto max-w-3xl text-2xl sm:text-3xl md:text-4xl xl:text-[2.8rem]"
            style={{
              fontFamily: DISPLAY,
              fontStyle: "italic",
              fontWeight: 500,
              color: ROSE_DEEP,
              lineHeight: 1.35,
              letterSpacing: "-0.025em",
            }}
          >
            You&rsquo;re the face. Your day is the content. Your space is the set.
            <br className="hidden sm:block" />
            {" "}Solara is the agency you finally have access to.
          </p>
        </ScrollReveal>
      </div>

    </main>
  );
}
