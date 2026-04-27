"use client";

import { Check, ImageIcon, Mic, Upload } from "lucide-react";
import {
  BODY,
  DISPLAY,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_FAINT,
  INK_MUTED,
  ROSE_DEEP,
  ScrollReveal,
  V2Section,
  V2SectionInner,
} from "./primitives";

type SceneType = "speaking" | "action" | "image";

type Scene = {
  number: number;
  label: string;
  title: string;
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
      className="relative mx-auto flex-shrink-0"
      style={{
        width: 120,
        padding: 4,
        borderRadius: 20,
        background: "linear-gradient(145deg, #1a1a1a, #0a0a0a)",
        boxShadow:
          "0 14px 28px -10px rgba(0,0,0,0.42), 0 0 0 1px rgba(0,0,0,0.18) inset",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 16,
          background: "#fff",
          aspectRatio: "9 / 19.5",
        }}
      >
        <div
          aria-hidden
          className="absolute left-1/2 top-1.5 z-30 -translate-x-1/2"
          style={{
            width: 38,
            height: 10,
            borderRadius: 6,
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
    <div className="relative flex h-full w-full flex-col px-2.5 pt-6 pb-2.5">
      <div
        className="mb-2 flex items-center justify-between"
        style={{
          fontFamily: BODY,
          fontSize: 6.5,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 700,
        }}
      >
        <span className="flex items-center gap-0.5">
          <Mic size={6.5} strokeWidth={2.4} />
          Teleprompter
        </span>
        <span style={{ color: ROSE_DEEP }}>1/1</span>
      </div>

      <div
        className="flex flex-1 items-center justify-center rounded-sm px-2 py-2"
        style={{
          background: "#f3f2ee",
          border: `1px solid ${HAIRLINE}`,
        }}
      >
        <p
          className="text-center"
          style={{
            fontFamily: DISPLAY,
            fontSize: 9,
            fontWeight: 600,
            color: INK,
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          &ldquo;{line}&rdquo;
        </p>
      </div>

      <div className="mt-2 flex items-center justify-center" style={{ height: 18 }}>
        <span
          className="flex h-3.5 w-3.5 items-center justify-center rounded-full"
          style={{
            background: "#fff",
            border: "1.5px solid rgba(255,255,255,0.7)",
            boxShadow: `0 0 0 1.5px ${ROSE_DEEP}`,
          }}
        >
          <span className="h-1.5 w-1.5 rounded-sm" style={{ background: "#ef4444" }} />
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
          style={{ background: "linear-gradient(145deg, #2a2a2a 0%, #0a0a0a 100%)" }}
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
        className="absolute left-2 top-5 z-20 flex items-center gap-0.5 rounded-full px-1.5 py-0.5"
        style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(2px)" }}
      >
        <span className="flex h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: "#ef4444" }} />
        <span
          style={{
            color: "#fff",
            fontFamily: BODY,
            fontSize: 6.5,
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          REC
        </span>
      </div>

      <div className="absolute inset-x-2 bottom-2 z-20 text-white">
        <p
          style={{
            fontFamily: BODY,
            fontSize: 6,
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
            fontSize: 9,
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

function MiniUploadScreen({ title, image }: { title: string; image?: string }) {
  return (
    <div className="relative h-full w-full bg-white">
      <div
        className="flex items-center justify-between px-2.5 pt-6 pb-2"
        style={{
          fontFamily: BODY,
          fontSize: 6.5,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 700,
        }}
      >
        <span className="flex items-center gap-0.5">
          <Upload size={6.5} strokeWidth={2.4} />
          Upload
        </span>
        <Check size={8} strokeWidth={3} style={{ color: "#22c55e" }} />
      </div>

      <div className="px-2.5">
        <div
          className="relative overflow-hidden rounded-sm"
          style={{ aspectRatio: "1 / 1", border: `1px solid ${HAIRLINE_HEAVY}` }}
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
              <ImageIcon size={20} strokeWidth={1.5} style={{ color: INK_FAINT }} />
            </div>
          )}
        </div>

        <p
          className="mt-2 text-center"
          style={{ fontFamily: BODY, fontSize: 7, color: INK, fontWeight: 500, lineHeight: 1.3 }}
        >
          {title}
        </p>
      </div>

      <div className="absolute inset-x-2.5 bottom-2.5">
        <div
          className="flex items-center justify-center rounded-full py-1.5"
          style={{
            background: INK,
            color: "#fff",
            fontFamily: BODY,
            fontSize: 6.5,
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
  switch (scene.type) {
    case "speaking":
      return (
        <MiniPhoneShell>
          <MiniTeleprompter line={scene.miniContent.teleprompter ?? ""} />
        </MiniPhoneShell>
      );
    case "action":
      return (
        <MiniPhoneShell>
          <MiniActionScreen
            title={scene.miniContent.actionTitle ?? ""}
            image={scene.miniContent.actionImage}
          />
        </MiniPhoneShell>
      );
    case "image":
      return (
        <MiniPhoneShell>
          <MiniUploadScreen
            title={scene.miniContent.uploadTitle ?? ""}
            image={scene.miniContent.uploadImage}
          />
        </MiniPhoneShell>
      );
  }
}

function SceneRow({ scene }: { scene: Scene }) {
  return (
    <ScrollReveal>
      <div
        className="grid items-center gap-x-8 gap-y-6 border-t py-7 sm:grid-cols-12"
        style={{ borderColor: HAIRLINE }}
      >
        <div className="flex items-center sm:col-span-1">
          <span
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.045em",
              lineHeight: 0.85,
            }}
          >
            {String(scene.number).padStart(2, "0")}
          </span>
        </div>

        <div className="sm:col-span-7">
          <p
            className="mb-1"
            style={{
              fontFamily: BODY,
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: INK_FAINT,
              fontWeight: 700,
            }}
          >
            {scene.label}
          </p>
          <p
            className="mb-3"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
            }}
          >
            {scene.title}
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: 12,
              color: INK_MUTED,
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            {scene.typeLabel} &middot; {scene.time}
          </p>
        </div>

        <div className="flex justify-start sm:col-span-4 sm:justify-end">
          <SceneMiniPhone scene={scene} />
        </div>
      </div>
    </ScrollReveal>
  );
}

export function BridgeV2() {
  return (
    <V2Section id="home-v2-bridge">
      <V2SectionInner>
        <ScrollReveal>
          <p
            style={{
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: ROSE_DEEP,
            }}
          >
            04 · THE BRIDGE
          </p>

          <h2
            className="mt-6"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: INK,
              maxWidth: "16ch",
            }}
          >
            The bridge between AI and authentic content.{" "}
            <span style={{ fontWeight: 400 }}>Finally.</span>
          </h2>

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
              AI was fast but fake. Authentic was real but impossible. Solara is the
              first to bridge the two.
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
              You bring one thing AI can&rsquo;t fake: you, in your real space. Solara
              directs a multi-scene piece — telling you what to film, where to stand,
              what to say — in plain words anyone can follow.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-24 sm:mt-32">
          <ScrollReveal>
            <div
              className="grid items-baseline gap-x-12 gap-y-4 border-t pt-10 sm:grid-cols-12"
              style={{ borderColor: INK, borderTopWidth: 2 }}
            >
              <div className="sm:col-span-2">
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
                  className="mt-1.5"
                  style={{
                    fontFamily: BODY,
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: ROSE_DEEP,
                  }}
                >
                  The Walkthrough
                </p>
              </div>
              <h3
                className="sm:col-span-10"
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                  fontWeight: 600,
                  color: INK,
                  letterSpacing: "-0.028em",
                  lineHeight: 1.15,
                  maxWidth: "30ch",
                }}
              >
                One 25-second post for a pizza shop. Built from five short takes.
              </h3>
            </div>
          </ScrollReveal>

          <div className="mt-10 border-b" style={{ borderColor: HAIRLINE }}>
            {SCENES.map((scene) => (
              <SceneRow key={scene.number} scene={scene} />
            ))}
          </div>
        </div>

        <div className="mt-24 sm:mt-32">
          <ScrollReveal>
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
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-12 sm:grid-cols-2">
              {PRODUCTION_PILLS.map((pill, i) => (
                <li
                  key={pill}
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
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-20 flex flex-col items-center text-center sm:mt-24">
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
                5
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
                21
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
                ~3
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
              Your filming time, on the left. The agency-grade work Solara does in the
              background, on the right.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="mx-auto mt-20 max-w-4xl border-t pt-12 sm:mt-28"
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

              <p
                className="lg:col-span-9 lg:col-start-4"
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: INK_MUTED,
                  lineHeight: 1.65,
                  letterSpacing: "-0.01em",
                  maxWidth: "58ch",
                }}
              >
                The only real difference between a $2,000-a-month social media manager
                and Solara is that sometimes a human will physically come to your shop
                and hold the phone for you. The strategy, the script, the directing,
                the editing, the publishing, the analytics, the weekly adjustment &mdash;
                all Solara.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-24 sm:mt-32">
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
              <span style={{ fontStyle: "italic", fontWeight: 400, color: ROSE_DEEP }}>
                Solara replaces.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </V2SectionInner>
    </V2Section>
  );
}
