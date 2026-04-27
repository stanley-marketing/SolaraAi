"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ImageIcon,
  Mic,
  Upload,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  BODY,
  DISPLAY,
  FlickeringGrid,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_FAINT,
  INK_MUTED,
  PreviewFooter,
  ROSE,
  ROSE_DEEP,
  SHELL,
} from "@/components/homepage/teardown-parts";
import { PhoneFrame } from "@/components/homepage/WebAppMockup";

type SceneType = "speaking" | "action" | "image";

type Scene = {
  number: number;
  label: string;
  title: string;
  image: string;
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
    label: "Opening hook",
    title: "Speaking next to the oven",
    image: "/storyboard/scenes/scene-1.webp",
    ask: "Stand 1m from the oven, eye level. Read this line:",
    type: "speaking",
    typeLabel: "Speaking + teleprompter",
    time: "8s",
    miniContent: {
      teleprompter: "My grandfather taught me this recipe in 1987.",
    },
  },
  {
    number: 2,
    label: "Process moment",
    title: "Hands on the dough",
    image: "/storyboard/scenes/scene-dough.png",
    ask: "Roll out the dough on your counter. Hands only, 30s.",
    type: "action",
    typeLabel: "Action scene",
    time: "30s",
    miniContent: {
      actionTitle: "Flour on counter",
      actionImage: "/storyboard/scenes/scene-dough.png",
    },
  },
  {
    number: 3,
    label: "Hero shot",
    title: "The pizza, served",
    image: "/storyboard/scenes/scene-3.webp",
    ask: "Upload your favorite photo of the pizza out of the oven.",
    type: "image",
    typeLabel: "Image-to-video",
    time: "Photo",
    miniContent: {
      uploadTitle: "Pizza photo",
      uploadImage: "/storyboard/scenes/scene-3.webp",
    },
  },
  {
    number: 4,
    label: "Brand walk",
    title: "Through the shop",
    image: "/storyboard/scenes/scene-4.webp",
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
    label: "Outro & CTA",
    title: "Come taste the difference",
    image: "/storyboard/scenes/scene-2.webp",
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
  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-3xl"
      style={{
        background: "#f4eee2",
        padding: 24,
        minHeight: 640,
      }}
    >
      <p
        className="mb-2.5"
        style={{
          fontFamily: BODY,
          fontSize: "0.7rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: INK_MUTED,
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

      <div className="relative mx-auto" style={{ width: 180 }}>
        <PhoneFrame width={180}>
          <img
            src={scene.image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
        </PhoneFrame>
        <span
          className="absolute -right-2 -top-2 z-30 flex h-9 w-9 items-center justify-center rounded-full"
          style={{
            background: "#fff",
            color: INK,
            fontFamily: BODY,
            fontSize: "0.92rem",
            fontWeight: 700,
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06)",
          }}
        >
          {scene.number}
        </span>
      </div>

      <div
        className="mt-6 flex gap-2.5 pl-3"
        style={{ borderLeft: "2px solid rgba(0,0,0,0.18)" }}
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
          {scene.time}
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
          &ldquo;{scene.ask}&rdquo;
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

function ScreenplayRow({ scene, index }: { scene: Scene; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: [0.22, 0.61, 0.36, 1],
        delay: index * 0.08,
      }}
      className="grid items-start gap-x-10 border-t py-8 lg:grid-cols-12"
      style={{ borderColor: HAIRLINE }}
    >
      <div className="lg:col-span-1">
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(2.4rem, 4.4vw, 3.4rem)",
            fontWeight: 600,
            color: INK,
            letterSpacing: "-0.045em",
            lineHeight: 0.85,
          }}
        >
          {scene.number}
        </p>
      </div>

      <div className="lg:col-span-7">
        <p
          className="mb-3"
          style={{
            fontFamily: BODY,
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: INK_FAINT,
            fontWeight: 700,
          }}
        >
          Solara asked
        </p>
        <p
          className="mb-6"
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
            fontWeight: 500,
            color: INK,
            letterSpacing: "-0.02em",
            lineHeight: 1.35,
            maxWidth: "32ch",
          }}
        >
          &ldquo;{scene.ask}&rdquo;
        </p>
        <p
          style={{
            fontFamily: BODY,
            fontSize: 13,
            color: INK_MUTED,
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          {scene.typeLabel} &middot; {scene.time}
        </p>
      </div>

      <div className="flex justify-center lg:col-span-4 lg:justify-end">
        <SceneMiniPhone scene={scene} />
      </div>
    </motion.div>
  );
}

function ScreenplayList() {
  return (
    <div
      className="border-b"
      style={{ borderColor: HAIRLINE }}
    >
      {SCENES.map((scene, i) => (
        <ScreenplayRow key={scene.number} scene={scene} index={i} />
      ))}
    </div>
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
        delay: 0.2,
      }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="mb-6"
          style={{
            fontFamily: BODY,
            fontSize: 11,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: INK_FAINT,
          }}
        >
          Chapter 02 &middot; What Solara does next
        </p>
        <h3
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(1.85rem, 3.4vw, 2.6rem)",
            fontWeight: 600,
            color: INK,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
          }}
        >
          Then Solara takes over &mdash; ten jobs, one workflow.
        </h3>
        <p
          className="mx-auto mt-5"
          style={{
            fontFamily: BODY,
            fontSize: "clamp(0.96rem, 1.2vw, 1.04rem)",
            lineHeight: 1.6,
            color: INK_MUTED,
            maxWidth: "48ch",
          }}
        >
          The expensive part of hiring a creative team, refined across
          thousands of pieces and run for you on autopilot.
        </p>
      </div>

      <ul
        className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-12 sm:grid-cols-2"
      >
        {PRODUCTION_PILLS.map((pill, i) => (
          <motion.li
            key={pill}
            initial={{ opacity: 0, x: -4 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.4 + i * 0.05,
            }}
            className="flex items-baseline gap-5 py-3.5"
            style={{
              borderBottom: `1px solid ${HAIRLINE}`,
              fontFamily: BODY,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: ROSE_DEEP,
                letterSpacing: "0.16em",
                width: 28,
                display: "inline-block",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: INK,
                letterSpacing: "-0.005em",
              }}
            >
              {pill}
            </span>
          </motion.li>
        ))}
      </ul>
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
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 0.61, 0.36, 1],
        delay: 0.3,
      }}
      className="flex flex-col items-center"
    >
      <p
        className="mb-10 text-center"
        style={{
          fontFamily: BODY,
          fontSize: 11,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          fontWeight: 700,
          color: INK_FAINT,
        }}
      >
        The result
      </p>

      <div className="hidden lg:block">
        <PhoneFrame width={280}>
          <FinishedReelScreen />
        </PhoneFrame>
      </div>
      <div className="lg:hidden">
        <PhoneFrame width={220}>
          <FinishedReelScreen />
        </PhoneFrame>
      </div>

      <p
        className="mt-12 text-center"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 500,
          color: INK,
          letterSpacing: "-0.03em",
          lineHeight: 1.2,
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
    <div className="mt-20 flex flex-col items-center text-center sm:mt-24">
      <p
        className="mb-6"
        style={{
          fontFamily: BODY,
          fontSize: 11,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 700,
        }}
      >
        Your time becomes their time
      </p>

      <p
        className="flex flex-wrap items-baseline justify-center gap-x-5 gap-y-2 leading-none"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(2.6rem, 7vw, 5rem)",
          fontWeight: 700,
          color: INK,
          letterSpacing: "-0.045em",
        }}
      >
        <span>
          <CountUpNumber target={5} delay={0.0} />
          <span
            style={{
              fontSize: "0.4em",
              fontWeight: 500,
              color: INK_FAINT,
              fontStyle: "italic",
              marginLeft: "0.18em",
              letterSpacing: "0.01em",
            }}
          >
            min
          </span>{" "}
          <CountUpNumber target={21} delay={0.3} />
          <span
            style={{
              fontSize: "0.4em",
              fontWeight: 500,
              color: INK_FAINT,
              fontStyle: "italic",
              marginLeft: "0.18em",
              letterSpacing: "0.01em",
            }}
          >
            sec
          </span>
        </span>
        <span
          aria-hidden
          style={{
            fontWeight: 400,
            color: INK_FAINT,
            fontSize: "0.7em",
            letterSpacing: "-0.02em",
          }}
        >
          &rarr;
        </span>
        <span style={{ color: ROSE_DEEP }}>
          ~<CountUpNumber target={3} delay={0.6} />
          <span
            style={{
              fontSize: "0.4em",
              fontWeight: 500,
              color: INK_FAINT,
              fontStyle: "italic",
              marginLeft: "0.18em",
              letterSpacing: "0.01em",
            }}
          >
            hours
          </span>
        </span>
      </p>

      <p
        className="mt-6 max-w-[44ch]"
        style={{
          fontFamily: BODY,
          fontSize: "clamp(0.92rem, 1.2vw, 1rem)",
          lineHeight: 1.55,
          color: INK_MUTED,
        }}
      >
        Your filming time, on the left. The agency-grade work Solara does in
        the background, on the right.
      </p>
    </div>
  );
}

function HonestPartCallout() {
  return (
    <div className="mx-auto max-w-6xl">
      <div
        className="border-t pt-12"
        style={{ borderColor: INK, borderTopWidth: 2 }}
      >
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
          <p
            className="lg:col-span-3"
            style={{
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: INK_FAINT,
            }}
          >
            Director&rsquo;s note
          </p>

          <div className="lg:col-span-9 lg:col-start-4">
            <p
              className="mb-10"
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1.4rem, 2.8vw, 1.95rem)",
                fontWeight: 500,
                color: INK,
                lineHeight: 1.35,
                letterSpacing: "-0.022em",
                maxWidth: "44ch",
              }}
            >
              The only real difference between a $2,000-a-month social media
              manager and Solara is that sometimes a human will physically
              come to your shop and hold the phone for you.
            </p>

            <p
              className="max-w-[58ch]"
              style={{
                fontFamily: BODY,
                fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
                lineHeight: 1.65,
                color: INK_MUTED,
              }}
            >
              The strategy, the script, the directing, the editing, the
              publishing, the analytics, the weekly adjustment &mdash; all
              Solara. Every part of the job that used to need a creative team
              is compressed into one workflow.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32 sm:mt-40">
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(2.4rem, 6.5vw, 4.8rem)",
            fontWeight: 700,
            color: INK,
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
            maxWidth: "16ch",
          }}
        >
          You already have everything except the part{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              color: ROSE_DEEP,
            }}
          >
            Solara replaces.
          </span>
        </p>
      </div>
    </div>
  );
}

export default function SectionFourBridgePreview() {
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

        <div className="mx-auto max-w-6xl px-5 pt-24 pb-12 sm:px-8 sm:pt-36 sm:pb-16">
          <p
            className="mb-10"
            style={{
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: INK_FAINT,
            }}
          >
            04 &middot; The Bridge
          </p>

          <h1
            className="leading-[0.95] tracking-[-0.04em]"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2.4rem, 8vw, 5.2rem)",
              fontWeight: 700,
              color: INK,
              maxWidth: "16ch",
            }}
          >
            The bridge between AI and authentic content.{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: ROSE_DEEP,
              }}
            >
              Finally.
            </span>
          </h1>

          <div className="mt-10 grid gap-x-16 gap-y-8 lg:grid-cols-12">
            <p
              className="lg:col-span-6"
              style={{
                fontFamily: BODY,
                fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
                lineHeight: 1.5,
                color: INK,
                fontWeight: 500,
              }}
            >
              AI was fast but fake. Authentic was real but impossible. Solara
              is the first to bridge the two.
            </p>

            <p
              className="lg:col-span-6 lg:col-start-7"
              style={{
                fontFamily: BODY,
                fontSize: "clamp(0.96rem, 1.2vw, 1.04rem)",
                lineHeight: 1.65,
                color: INK_MUTED,
                maxWidth: "44ch",
              }}
            >
              You bring one thing AI can&rsquo;t fake:{" "}
              <strong style={{ fontWeight: 600, color: INK }}>
                you, in your real space.
              </strong>{" "}
              Solara directs a multi-scene piece &mdash; telling you what to
              film, where to stand, what to say &mdash; in plain words a
              12-year-old could follow.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 pt-32 pb-12 sm:px-8 sm:pt-40 sm:pb-16">
          <div
            className="grid items-baseline gap-x-12 gap-y-4 border-t pt-10 lg:grid-cols-12"
            style={{ borderColor: INK, borderTopWidth: 2 }}
          >
            <div className="lg:col-span-2">
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: 10,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: INK_FAINT,
                }}
              >
                Chapter 01
              </p>
              <p
                className="mt-2"
                style={{
                  fontFamily: BODY,
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: ROSE_DEEP,
                }}
              >
                The walkthrough
              </p>
            </div>
            <h2
              className="lg:col-span-10"
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                fontWeight: 600,
                color: INK,
                letterSpacing: "-0.028em",
                lineHeight: 1.15,
                maxWidth: "30ch",
              }}
            >
              One 25-second post for a pizza shop. Built from five short
              takes.
            </h2>
          </div>

          <div className="mt-14 hidden lg:block">
            <ScreenplayList />
          </div>

          <div className="mx-auto mt-12 max-w-md lg:hidden">
            <MobileSceneSlideshow />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 pt-24 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
          <ProductionBand />
        </div>

        <div className="mx-auto max-w-6xl px-5 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-28">
          <FinishedVideoBlock />
          <TimeTotalsBlock />
        </div>

        <div className="px-5 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-28">
          <HonestPartCallout />
        </div>
      </section>

      <PreviewFooter
        label="Section 04 (alt) · The bridge — editorial redesign"
        description="Editorial walkthrough of how Solara directs a multi-scene piece. Canonical SHELL background with FlickeringGrid + radial mask. Hero opens with '04 · The Bridge' eyebrow, display headline with italic-navy 'Finally.' accent, and a two-column body grid (lede left, plain-words explanation right). Chapter 01 (The Walkthrough) sits below a 2px ink top border with a 2+10 grid header. Desktop renders 5 screenplay rows (large display number / 'Solara asked' eyebrow + ask + type·time / mini-phone preview) separated by hairline dividers. Mobile renders a 6-second auto-advance carousel with progress bar, dots, and matched arrow buttons. Each mini-phone shows a teleprompter, action-record, or upload UI based on scene type. Chapter 02 (What Solara does next) is a centered headline + 10-credit two-column list with navy index numbers. The result is revealed in a poster phone mockup — finished Reel screen with 'Looks like a crew shot it.' caption. Time totals collapse to a single dramatic equation: '5 min 21 sec → ~3 hours' with black filming time / navy Solara work / italic gray units. Director's note is a 3+9 grid under a 2px ink border with a pull quote and supporting body. Closer is isolated on its own line: 'You already have everything except the part Solara replaces.' with the italic-navy accent only on the final two words. Two italic-navy accents total ('Finally.' and 'Solara replaces.'). Pure cream + ink + navy execution."
      />
    </main>
  );
}
