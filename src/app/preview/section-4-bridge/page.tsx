"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  ChevronDown,
  ImageIcon,
  Mic,
  Sparkles,
  Upload,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  BODY,
  DISPLAY,
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

type SceneType = "speaking" | "action" | "image";

type Scene = {
  number: number;
  ask: string;
  type: SceneType;
  typeLabel: string;
  time: string;
  miniContent: {
    teleprompter?: string;
    actionTitle?: string;
    actionImage?: string;
    uploadTitle?: string;
    uploadImage?: string;
  };
};

const SCENES: Scene[] = [
  {
    number: 1,
    ask: "Stand 1m from the oven, eye level. Read this line.",
    type: "speaking",
    typeLabel: "Speaking + teleprompter",
    time: "8s",
    miniContent: {
      teleprompter:
        "My grandfather taught me this recipe in 1987.",
    },
  },
  {
    number: 2,
    ask: "Roll out the dough on your counter. Hands only, 30s.",
    type: "action",
    typeLabel: "Action scene",
    time: "30s",
    miniContent: {
      actionTitle: "Flour on counter",
      actionImage: "/storyboard/scenes/scene-1.webp",
    },
  },
  {
    number: 3,
    ask: "Upload your favorite photo of the pizza out of the oven.",
    type: "image",
    typeLabel: "Image-to-video",
    time: "5s",
    miniContent: {
      uploadTitle: "Pizza photo",
      uploadImage: "/storyboard/scenes/scene-3.webp",
    },
  },
  {
    number: 4,
    ask: "Walk through your shop with a pizza box. Smile. 30s.",
    type: "action",
    typeLabel: "Action scene",
    time: "30s",
    miniContent: {
      actionTitle: "Walk through shop",
      actionImage: "/storyboard/scenes/scene-4.webp",
    },
  },
  {
    number: 5,
    ask: "From the same spot, say \u201Ccome taste the difference.\u201D",
    type: "speaking",
    typeLabel: "Speaking + teleprompter",
    time: "8s",
    miniContent: {
      teleprompter: "Come taste the difference.",
    },
  },
];

const PRODUCTION_PILLS = [
  "Relight",
  "Color grade",
  "Audio cleanup",
  "Voiceover",
  "Cuts",
  "Transitions",
  "Subtitles",
  "Music timing",
  "Thumbnail",
  "Platform exports",
];

function MiniPhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 144,
        padding: 5,
        borderRadius: 22,
        background: "linear-gradient(145deg, #1a1a1a, #0a0a0a)",
        boxShadow:
          "0 14px 28px -10px rgba(0,0,0,0.42), 0 0 0 1px rgba(0,0,0,0.18) inset",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 17,
          background: "#fff",
          aspectRatio: "9 / 19.5",
        }}
      >
        <div
          aria-hidden
          className="absolute left-1/2 top-2 z-30 -translate-x-1/2"
          style={{
            width: 48,
            height: 13,
            borderRadius: 8,
            background: "#0a0a0a",
          }}
        />
        {children}
      </div>
    </div>
  );
}

function MiniTeleprompter({ line }: { line: string }) {
  return (
    <div className="relative flex h-full w-full flex-col px-3 pt-7 pb-3">
      <div
        className="mb-2.5 flex items-center justify-between"
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
          <Mic size={7.5} strokeWidth={2.4} />
          Teleprompter
        </span>
        <span style={{ color: ROSE_DEEP }}>1/1</span>
      </div>

      <div
        className="flex flex-1 items-center justify-center rounded-sm px-2.5 py-2.5"
        style={{
          background: "#f3f2ee",
          border: `1px solid ${HAIRLINE}`,
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
  );
}

function MiniActionScreen({ title, image }: { title: string; image?: string }) {
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
            background:
              "linear-gradient(145deg, #2a2a2a 0%, #0a0a0a 100%)",
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
        className="absolute left-2.5 top-6 z-20 flex items-center gap-1 rounded-full px-2 py-0.5"
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
        className="absolute left-1/2 -translate-x-1/2 z-20 flex h-5 w-5 items-center justify-center rounded-full"
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
        className="flex items-center justify-between px-3 pt-7 pb-2.5"
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

function SceneMiniPhone({ scene }: { scene: Scene }) {
  const inner = (() => {
    switch (scene.type) {
      case "speaking":
        return (
          <MiniTeleprompter line={scene.miniContent.teleprompter ?? ""} />
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

  return <MiniPhoneShell>{inner}</MiniPhoneShell>;
}

function MobileSceneCard({ scene }: { scene: Scene }) {
  const typeIcon = (() => {
    switch (scene.type) {
      case "speaking":
        return <Mic size={13} strokeWidth={2.2} />;
      case "action":
        return <Camera size={13} strokeWidth={2.2} />;
      case "image":
        return <ImageIcon size={13} strokeWidth={2.2} />;
    }
  })();

  return (
    <div
      className="relative flex flex-col rounded-sm"
      style={{
        background: "#fdfcf8",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        padding: 22,
        minHeight: 560,
      }}
    >
      <div
        className="mb-4 flex items-center gap-2.5"
        style={{
          fontFamily: BODY,
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: ROSE_DEEP,
          fontWeight: 700,
        }}
      >
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full"
          style={{
            background: ROSE_DEEP,
            color: "#fff",
            fontFamily: DISPLAY,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0,
          }}
        >
          {scene.number}
        </span>
        Scene {scene.number}
      </div>

      <div className="mb-5">
        <p
          className="mb-1.5"
          style={{
            fontFamily: BODY,
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: INK_FAINT,
            fontWeight: 700,
          }}
        >
          Solara asked:
        </p>
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: 16,
            fontWeight: 500,
            color: INK,
            letterSpacing: "-0.012em",
            lineHeight: 1.4,
          }}
        >
          &ldquo;{scene.ask}&rdquo;
        </p>
      </div>

      <div className="mb-5 flex flex-1 items-center justify-center">
        <SceneMiniPhone scene={scene} />
      </div>

      <div
        className="flex items-center justify-between gap-2 pt-4"
        style={{ borderTop: `1px dashed ${HAIRLINE_HEAVY}` }}
      >
        <span
          className="flex items-center gap-1.5"
          style={{
            fontFamily: BODY,
            fontSize: 12,
            color: INK_MUTED,
            fontWeight: 600,
          }}
        >
          {typeIcon}
          {scene.typeLabel}
        </span>
        <span
          className="rounded-full px-2.5 py-1"
          style={{
            background: ROSE_DEEP,
            color: "#fff",
            fontFamily: BODY,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          {scene.time}
        </span>
      </div>
    </div>
  );
}

const BRIDGE_STEP_DURATION_MS = 6000;
const BRIDGE_TICK_MS = 50;

function MobileSceneSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const totalSteps = SCENES.length;

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + (BRIDGE_TICK_MS / BRIDGE_STEP_DURATION_MS) * 100;
        if (next >= 100) {
          setActiveIndex((curr) => (curr + 1) % totalSteps);
          return 0;
        }
        return next;
      });
    }, BRIDGE_TICK_MS);
    return () => clearInterval(id);
  }, [totalSteps]);

  const goTo = (i: number) => {
    const wrapped = ((i % totalSteps) + totalSteps) % totalSteps;
    setActiveIndex(wrapped);
    setProgress(0);
  };

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
          The walkthrough
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
        <MobileSceneCard scene={SCENES[activeIndex]} />
      </div>

      <div className="mb-6 flex justify-center gap-2.5">
        {Array.from({ length: totalSteps }).map((_, i) => {
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

function SceneCard({ scene, index }: { scene: Scene; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  const typeIcon = (() => {
    switch (scene.type) {
      case "speaking":
        return <Mic size={13} strokeWidth={2.2} />;
      case "action":
        return <Camera size={13} strokeWidth={2.2} />;
      case "image":
        return <ImageIcon size={13} strokeWidth={2.2} />;
    }
  })();

  const bigTypeIcon = (() => {
    switch (scene.type) {
      case "speaking":
        return <Mic size={32} strokeWidth={1.6} />;
      case "action":
        return <Camera size={32} strokeWidth={1.6} />;
      case "image":
        return <ImageIcon size={32} strokeWidth={1.6} />;
    }
  })();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: [0.22, 0.61, 0.36, 1],
        delay: index * 0.15,
      }}
      className="group relative flex cursor-pointer flex-col self-start rounded-sm transition-shadow duration-300 hover:shadow-lg"
      style={{
        background: "#fdfcf8",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        padding: 22,
      }}
    >
      <div
        className="mb-4 flex items-center gap-2.5"
        style={{
          fontFamily: BODY,
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: ROSE_DEEP,
          fontWeight: 700,
        }}
      >
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full"
          style={{
            background: ROSE_DEEP,
            color: "#fff",
            fontFamily: DISPLAY,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0,
          }}
        >
          {scene.number}
        </span>
        Scene {scene.number}
      </div>

      <div className="flex max-h-[180px] flex-col items-center justify-center gap-2.5 overflow-hidden py-6 opacity-100 transition-[max-height,padding,opacity] duration-500 ease-out group-hover:max-h-0 group-hover:py-0 group-hover:opacity-0">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-500 ease-out group-hover:scale-90"
          style={{
            background: `${ROSE_DEEP}14`,
            color: ROSE_DEEP,
          }}
        >
          {bigTypeIcon}
        </div>
        <span
          className="inline-flex items-center gap-1"
          style={{
            fontFamily: BODY,
            fontSize: 9.5,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: INK_FAINT,
            fontWeight: 600,
          }}
        >
          Hover to open
          <ChevronDown size={11} strokeWidth={2.2} />
        </span>
      </div>

      <div className="max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-500 ease-out group-hover:max-h-[640px] group-hover:opacity-100">
        <div className="mb-5">
          <p
            className="mb-1.5"
            style={{
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: INK_FAINT,
              fontWeight: 700,
            }}
          >
            Solara asked:
          </p>
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: 16,
              fontWeight: 500,
              color: INK,
              letterSpacing: "-0.012em",
              lineHeight: 1.4,
            }}
          >
            &ldquo;{scene.ask}&rdquo;
          </p>
        </div>

        <div className="mb-5 flex items-center justify-center">
          <SceneMiniPhone scene={scene} />
        </div>
      </div>

      <div
        className="flex items-center justify-between gap-2 pt-4"
        style={{ borderTop: `1px dashed ${HAIRLINE_HEAVY}` }}
      >
        <span
          className="flex items-center gap-1.5"
          style={{
            fontFamily: BODY,
            fontSize: 12,
            color: INK_MUTED,
            fontWeight: 600,
          }}
        >
          {typeIcon}
          {scene.typeLabel}
        </span>
        <span
          className="rounded-full px-2.5 py-1"
          style={{
            background: ROSE_DEEP,
            color: "#fff",
            fontFamily: BODY,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          {scene.time}
        </span>
      </div>
    </motion.div>
  );
}

function ProductionBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
        delay: SCENES.length * 0.15 + 0.2,
      }}
      className="relative rounded-sm px-6 py-7 text-center"
      style={{
        background: INK,
        color: "#fff",
      }}
    >
      <p
        className="mb-3 inline-flex items-center justify-center gap-2"
        style={{
          fontFamily: BODY,
          fontSize: 10,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          fontWeight: 700,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        <Sparkles size={12} strokeWidth={2.2} />
        Solara edits, mixes, and produces
      </p>

      <div className="grid grid-cols-2 justify-items-center gap-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:items-center lg:justify-center">
        {PRODUCTION_PILLS.map((pill, i) => (
          <motion.span
            key={pill}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.32,
              ease: "easeOut",
              delay: SCENES.length * 0.15 + 0.5 + i * 0.05,
            }}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              fontFamily: BODY,
              fontSize: 12,
              fontWeight: 500,
              color: "rgba(255,255,255,0.94)",
              letterSpacing: "-0.005em",
            }}
          >
            <span
              className="h-1 w-1 rounded-full"
              style={{ background: ROSE }}
            />
            {pill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

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
        style={{ left: "8%", right: "8%", top: "9%", height: 2.5 }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="flex-1 rounded-full"
            style={{
              background:
                i <= 2 ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.32)",
            }}
          />
        ))}
      </div>

      <div
        className="absolute z-20 flex items-center gap-1.5"
        style={{ left: "6%", top: "13%" }}
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
          Live · 25s
        </span>
      </div>

      <div
        className="absolute z-20 px-4 pb-5 text-white"
        style={{ left: 0, right: 0, bottom: "8%" }}
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
          My grandfather taught me this in 1987.
        </p>
        <p
          className="mt-1.5"
          style={{ fontFamily: BODY, fontSize: 10, opacity: 0.72 }}
        >
          #pizza · #familyrecipe
        </p>
      </div>

      <div
        className="absolute z-20 flex flex-col items-center gap-3"
        style={{ right: "5%", bottom: "30%", color: "#fff" }}
      >
        {[
          { label: "♡", num: "12k" },
          { label: "💬", num: "284" },
          { label: "↗", num: "Share" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-0.5"
          >
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

function FinishedVideoBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 0.61, 0.36, 1],
        delay: SCENES.length * 0.15 + 1.0,
      }}
      className="flex flex-col items-center"
    >
      <div className="hidden lg:block">
        <PhoneFrame width={260}>
          <FinishedReelScreen />
        </PhoneFrame>
      </div>

      <div className="lg:hidden">
        <PhoneFrame width={210}>
          <FinishedReelScreen />
        </PhoneFrame>
      </div>

      <p
        className="mt-6 text-center"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
          fontWeight: 600,
          color: INK,
          letterSpacing: "-0.02em",
          lineHeight: 1.25,
        }}
      >
        Looks like a crew shot it.
      </p>
    </motion.div>
  );
}

function CountUpNumber({
  target,
  duration = 1.4,
  delay = 0,
  suffix,
}: {
  target: number;
  duration?: number;
  delay?: number;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now() + delay * 1000;
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

function TimeTotalsBlock() {
  return (
    <div className="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-12">
      <div className="flex flex-col items-center gap-1">
        <p
          style={{
            fontFamily: BODY,
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: INK_FAINT,
            fontWeight: 700,
          }}
        >
          Total user time
        </p>
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 600,
            color: INK,
            letterSpacing: "-0.025em",
            lineHeight: 1,
          }}
        >
          <CountUpNumber target={5} delay={0.0} />
          <span style={{ color: INK_FAINT }}> min </span>
          <CountUpNumber target={21} delay={0.4} />
          <span style={{ color: INK_FAINT }}> sec</span>
        </p>
      </div>

      <div
        className="hidden sm:block"
        style={{
          width: 1,
          height: 48,
          background: HAIRLINE_HEAVY,
        }}
      />

      <div className="flex flex-col items-center gap-1">
        <p
          style={{
            fontFamily: BODY,
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: ROSE_DEEP,
            fontWeight: 700,
          }}
        >
          Total Solara time
        </p>
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 600,
            color: ROSE_DEEP,
            letterSpacing: "-0.025em",
            lineHeight: 1,
          }}
        >
          ~<CountUpNumber target={3} delay={0.6} /> hours{" "}
          <span style={{ color: INK_FAINT, fontSize: "0.7em" }}>
            of agency-grade work
          </span>
        </p>
      </div>
    </div>
  );
}

function FlowArrow({ direction = "down" }: { direction?: "down" | "right" }) {
  const Icon = direction === "down" ? ArrowDown : ArrowRight;
  return (
    <div className="flex h-10 items-center justify-center sm:h-14">
      <div className="relative flex h-full flex-col items-center">
        <div
          className="flex-1"
          style={{
            width: 1,
            background: `linear-gradient(180deg, transparent, ${HAIRLINE_HEAVY})`,
            minHeight: 12,
          }}
        />
        <span
          className="my-1 flex h-7 w-7 items-center justify-center rounded-full"
          style={{
            background: "#fff",
            border: `1px solid ${HAIRLINE_HEAVY}`,
            color: ROSE_DEEP,
          }}
        >
          <Icon size={13} strokeWidth={2.2} />
        </span>
        <div
          className="flex-1"
          style={{
            width: 1,
            background: `linear-gradient(0deg, transparent, ${HAIRLINE_HEAVY})`,
            minHeight: 12,
          }}
        />
      </div>
    </div>
  );
}

function HonestPartCallout() {
  return (
    <div
      className="mx-auto mt-16 max-w-3xl rounded-sm px-6 py-9 text-center sm:mt-24 sm:px-12 sm:py-12"
      style={{
        background: "#f8f3e7",
        border: `1px solid #e8dcc0`,
      }}
    >
      <p
        className="mb-4"
        style={{
          fontFamily: BODY,
          fontSize: 11,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          fontStyle: "italic",
          color: "#a67c00",
          fontWeight: 600,
        }}
      >
        The honest part
      </p>

      <p
        className="mb-5"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
          fontWeight: 500,
          color: INK,
          lineHeight: 1.4,
          letterSpacing: "-0.015em",
        }}
      >
        The only real difference between a $2,000-a-month social media manager
        and Solara is that sometimes a human will physically come to your shop
        and hold the phone for you.
      </p>

      <p
        className="mb-6"
        style={{
          fontFamily: BODY,
          fontSize: "1rem",
          color: INK_MUTED,
          lineHeight: 1.65,
          maxWidth: 620,
          marginInline: "auto",
        }}
      >
        The strategy? Solara does it. The script? Solara writes it. The
        directing? Solara directs you, with a visual, in your own space. The
        editing, the publishing, the analytics, the weekly adjustment? All
        Solara.
      </p>

      <p
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.4rem, 2.8vw, 1.85rem)",
          fontWeight: 700,
          color: ROSE_DEEP,
          letterSpacing: "-0.025em",
          lineHeight: 1.25,
        }}
      >
        You already have everything except the part Solara replaces.
      </p>
    </div>
  );
}

function SectionEyebrow() {
  return (
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
      04 &middot; Feature 2 + 3 combined
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
  );
}

export default function SectionFourBridgePreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <section className="relative">
        <div className="mx-auto max-w-3xl px-5 pt-16 pb-10 text-center sm:px-6 sm:pt-24 sm:pb-12 lg:pt-28">
          <div className="flex justify-center">
            <SectionEyebrow />
          </div>

          <h1
            className="mt-5 leading-[1.05] tracking-[-0.035em] text-[clamp(2rem,7vw,4rem)] sm:mt-6 sm:leading-[1.02] sm:tracking-[-0.04em]"
            style={{
              fontFamily: DISPLAY,
              fontWeight: 600,
              color: INK,
            }}
          >
            The bridge between AI and authentic content.{" "}
            <span style={{ color: ROSE_DEEP }}>Finally.</span>
          </h1>

          <p
            className="mx-auto mt-5 sm:mt-6"
            style={{
              fontFamily: BODY,
              fontSize: "clamp(0.96rem, 2.4vw, 1.1rem)",
              lineHeight: 1.55,
              color: INK_MUTED,
              maxWidth: 640,
              fontStyle: "italic",
            }}
          >
            AI was fast but fake. Authentic was real but impossible. Solara is
            the first to bridge the two.
          </p>
        </div>

        <div className="mx-auto max-w-3xl px-5 pb-10 sm:px-6 sm:pb-12">
          <p
            className="mb-4 sm:mb-5"
            style={{
              fontFamily: BODY,
              fontSize: "clamp(0.96rem, 2.4vw, 1.06rem)",
              lineHeight: 1.65,
              color: INK,
            }}
          >
            You bring one thing AI can&rsquo;t fake:{" "}
            <strong style={{ fontWeight: 600 }}>you, in your real space.</strong>{" "}
            Solara directs, films, and produces everything around you.
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "clamp(0.96rem, 2.4vw, 1.06rem)",
              lineHeight: 1.65,
              color: INK_MUTED,
            }}
          >
            Solara isn&rsquo;t asking you for &ldquo;a video.&rdquo; It&rsquo;s
            directing a multi-scene piece &mdash; telling you what to film,
            where to stand, what posture, what to say &mdash; in plain words a
            12-year-old could follow. (We tested this. They did.)
          </p>
        </div>

        <div className="mx-auto px-5 pb-12 sm:px-6 sm:pb-16" style={{ maxWidth: 1600 }}>
          <div
            className="mb-7 text-center sm:mb-10"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.05rem, 2.2vw, 1.55rem)",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.02em",
            }}
          >
            How Solara built this 25-second post for a pizza shop owner.
          </div>

          <div className="hidden gap-5 lg:grid lg:grid-cols-5">
            {SCENES.map((scene, i) => (
              <SceneCard key={scene.number} scene={scene} index={i} />
            ))}
          </div>

          <div className="mx-auto max-w-md lg:hidden">
            <MobileSceneSlideshow />
          </div>

          <div className="mx-auto" style={{ maxWidth: 1200 }}>
            <FlowArrow direction="down" />
          </div>

          <ProductionBand />

          <div className="mx-auto" style={{ maxWidth: 1200 }}>
            <FlowArrow direction="down" />
          </div>

          <FinishedVideoBlock />

          <TimeTotalsBlock />
        </div>

        <div className="mx-auto max-w-3xl px-5 pb-10 sm:px-6 sm:pb-12">
          <p
            className="mb-4 sm:mb-5"
            style={{
              fontFamily: BODY,
              fontSize: "clamp(0.96rem, 2.4vw, 1.06rem)",
              lineHeight: 1.65,
              color: INK_MUTED,
            }}
          >
            Then Solara produces it like an agency. Relights your shots.
            Color-grades your space. Cleans the audio. Adds voiceover in your
            cloned voice. Subtitles. Cuts dead air. Times music to the cuts.
            Designs transitions. Builds the thumbnail.
          </p>
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.15rem, 2.1vw, 1.45rem)",
              fontWeight: 500,
              color: INK,
              lineHeight: 1.45,
              letterSpacing: "-0.02em",
            }}
          >
            Your part:{" "}
            <span style={{ color: INK_FAINT }}>
              5&ndash;8 minutes of simple actions a kid could do.
            </span>
            <br />
            Solara&rsquo;s part:{" "}
            <span style={{ color: ROSE_DEEP, fontWeight: 600 }}>
              a video that looks like a crew shot it.
            </span>
          </p>
        </div>

        <div className="px-5 pb-20 sm:px-6 sm:pb-24">
          <HonestPartCallout />
        </div>
      </section>

      <PreviewFooter
        label="Section 04 (alt) · The bridge between AI and authentic content"
        description="Full multi-scene walkthrough variant. Eyebrow + headline + tagline + intro body, then a 5-scene horizontal walkthrough showing Solara's ask + a mini phone for each scene type (teleprompter / action / image-upload), arrows flowing into the production band (10 task pills), arrow into the finished video phone showing the polished pizza Reel, and time totals counting up on view (5min 21sec / ~3 hours). After-walkthrough body copy + The Honest Part callout in warm-tinted box. Cards stagger in left-to-right (150ms each), production pills wave in (50ms each), finished video lifts in last. Pure cream + black + navy aesthetic — no phone mockup chrome anywhere except the finished video and the 5 mini phones."
      />
    </main>
  );
}
