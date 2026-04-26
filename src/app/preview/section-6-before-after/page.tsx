"use client";

import { Check, ImageIcon, MessageSquareText, Video } from "lucide-react";
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

type InputCard = {
  index: string;
  kind: string;
  detail: string;
  when: string;
  thumbnail:
    | { type: "image"; src: string; objectPosition?: string }
    | { type: "text"; lines: string[] }
    | { type: "icon"; icon: typeof Check };
};

const INPUT_CARDS: InputCard[] = [
  {
    index: "01",
    kind: "Photo",
    detail: "One photo of the pizza out of the oven",
    when: "Tuesday, 4:30 PM",
    thumbnail: {
      type: "image",
      src: "/storyboard/pizza-thumbnail.png",
      objectPosition: "center",
    },
  },
  {
    index: "02",
    kind: "Video",
    detail: "8 seconds of dough stretching",
    when: "Wednesday, 6:15 PM",
    thumbnail: {
      type: "image",
      src: "/storyboard/pizza-viewfinder.png",
      objectPosition: "center 30%",
    },
  },
  {
    index: "03",
    kind: "Teleprompter",
    detail: "Two sentences on camera",
    when: "Thursday, 9:00 AM",
    thumbnail: {
      type: "text",
      lines: [
        "The trick isn't the cheese.",
        "It's the 24-hour cold rise.",
      ],
    },
  },
  {
    index: "04",
    kind: "Approval",
    detail: "Reviewed and approved the draft",
    when: "Thursday, 2:15 PM",
    thumbnail: { type: "icon", icon: Check },
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
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
      {number} &middot; {label}
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

function InputThumbnail({ input }: { input: InputCard["thumbnail"] }) {
  if (input.type === "image") {
    return (
      <div
        className="relative overflow-hidden"
        style={{
          width: 92,
          height: 92,
          borderRadius: 4,
          border: `1px solid ${HAIRLINE_HEAVY}`,
          flexShrink: 0,
        }}
      >
        <img
          src={input.src}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full"
          style={{ objectFit: "cover", objectPosition: input.objectPosition }}
          draggable={false}
        />
      </div>
    );
  }

  if (input.type === "text") {
    return (
      <div
        className="relative flex flex-col justify-center px-3"
        style={{
          width: 92,
          height: 92,
          borderRadius: 4,
          border: `1px solid ${HAIRLINE_HEAVY}`,
          background: "#f3f2ee",
          flexShrink: 0,
          fontFamily: BODY,
          fontSize: "0.62rem",
          color: INK,
          lineHeight: 1.3,
        }}
      >
        {input.lines.map((line, i) => (
          <span
            key={line}
            style={{
              fontStyle: "italic",
              color: i === 0 ? INK : INK_MUTED,
              marginBottom: i === 0 ? 4 : 0,
            }}
          >
            &ldquo;{line}&rdquo;
          </span>
        ))}
      </div>
    );
  }

  const Icon = input.icon;
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: 92,
        height: 92,
        borderRadius: 4,
        border: `1px solid ${HAIRLINE_HEAVY}`,
        background: "#f3f2ee",
        flexShrink: 0,
      }}
    >
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          background: `linear-gradient(145deg, #22c55e, #15803d)`,
          color: "#fff",
        }}
      >
        <Icon size={20} strokeWidth={2.8} />
      </div>
    </div>
  );
}

function InputRow({ card }: { card: InputCard }) {
  return (
    <div
      className="flex items-start gap-4 py-4"
      style={{ borderTop: `1px solid ${HAIRLINE}` }}
    >
      <InputThumbnail input={card.thumbnail} />
      <div className="flex flex-1 flex-col pt-1">
        <div
          className="mb-1 flex items-center gap-2"
          style={{
            fontFamily: BODY,
            fontSize: "0.58rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: INK_FAINT,
            fontWeight: 700,
          }}
        >
          <span style={{ color: ROSE_DEEP }}>{card.index}</span>
          <span className="h-px flex-1" style={{ background: HAIRLINE }} />
          {card.kind}
        </div>
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "1.02rem",
            fontWeight: 500,
            color: INK,
            letterSpacing: "-0.015em",
            lineHeight: 1.3,
          }}
        >
          {card.detail}
        </p>
        <p
          className="mt-1"
          style={{
            fontFamily: BODY,
            fontSize: "0.78rem",
            color: INK_SOFT,
            fontWeight: 500,
          }}
        >
          {card.when}
        </p>
      </div>
    </div>
  );
}

function WhatYouDidColumn() {
  return (
    <div className="flex flex-col">
      <div
        className="mb-1 inline-flex items-center gap-2"
        style={{
          fontFamily: BODY,
          fontSize: "0.62rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 700,
        }}
      >
        <span className="h-1 w-1 rounded-full" style={{ background: INK }} />
        What you did
      </div>
      <h3
        className="mb-6"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
          fontWeight: 600,
          color: INK,
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        Four tiny moves.
      </h3>

      <div style={{ borderBottom: `1px solid ${HAIRLINE}` }}>
        {INPUT_CARDS.map((card) => (
          <InputRow key={card.index} card={card} />
        ))}
      </div>

      <div
        className="mt-5 inline-flex items-baseline gap-2"
        style={{ alignSelf: "flex-start" }}
      >
        <span
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(2rem, 3.4vw, 2.6rem)",
            fontWeight: 600,
            color: ROSE_DEEP,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          8 min
        </span>
        <span
          style={{
            fontFamily: BODY,
            fontSize: "0.86rem",
            color: INK_MUTED,
            fontWeight: 500,
          }}
        >
          total, across the week
        </span>
      </div>
    </div>
  );
}

function FinishedReelCard() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative overflow-hidden"
        style={{
          width: 280,
          aspectRatio: "9 / 16",
          borderRadius: 4,
          border: `1px solid ${HAIRLINE_HEAVY}`,
          background: "#0a0a0a",
        }}
      >
        <img
          src="/storyboard/pizza-viewfinder.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full"
          style={{ objectFit: "cover" }}
          draggable={false}
        />

        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        <div
          className="absolute left-3 right-3 top-3 flex gap-1"
          style={{ height: 2 }}
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className="flex-1 rounded-full"
              style={{
                background: i <= 2 ? "#ffffff" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>

        <div className="absolute left-3 right-3 bottom-3 text-white">
          <p
            className="mb-1"
            style={{
              fontFamily: BODY,
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              opacity: 0.75,
            }}
          >
            @your.pizza.shop
          </p>
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "0.86rem",
              lineHeight: 1.35,
              fontWeight: 500,
              letterSpacing: "-0.015em",
            }}
          >
            Some things don&rsquo;t need a recipe. Just time. &mdash; 24-hour
            cold rise, every day.
          </p>
          <p
            className="mt-1.5"
            style={{
              fontFamily: BODY,
              fontSize: "0.62rem",
              opacity: 0.7,
            }}
          >
            #pizza #familyrecipe #smallshop
          </p>
        </div>
      </div>

      <div
        className="mt-5 flex flex-col items-center gap-2 text-center"
        style={{ width: 280 }}
      >
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1"
          style={{
            background: "#f0efe9",
            border: `1px solid ${HAIRLINE_HEAVY}`,
            fontFamily: BODY,
            fontSize: "0.7rem",
            color: INK,
            fontWeight: 600,
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "#22c55e" }}
          />
          Scheduled Thursday, 8:00 AM
        </div>
        <div
          style={{
            fontFamily: BODY,
            fontSize: "0.78rem",
            color: INK_MUTED,
            fontWeight: 500,
          }}
        >
          Instagram + TikTok &middot; 25 sec &middot; 6 scenes
        </div>
      </div>
    </div>
  );
}

function WhatSolaraProducedColumn() {
  const produced = [
    { icon: Video, label: "6 scenes stitched" },
    { icon: MessageSquareText, label: "Captions burned in" },
    { icon: ImageIcon, label: "Thumbnail designed" },
    { icon: Check, label: "Scheduled + published" },
  ];

  return (
    <div className="flex flex-col">
      <div
        className="mb-1 inline-flex items-center gap-2"
        style={{
          fontFamily: BODY,
          fontSize: "0.62rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 700,
        }}
      >
        <span
          className="h-1 w-1 rounded-full"
          style={{ background: ROSE_DEEP }}
        />
        What Solara produced
      </div>
      <h3
        className="mb-6"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
          fontWeight: 600,
          color: ROSE_DEEP,
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        One finished piece.
      </h3>

      <FinishedReelCard />

      <ul
        className="mx-auto mt-7 grid grid-cols-2 gap-x-5 gap-y-3"
        style={{ maxWidth: 320 }}
      >
        {produced.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-2"
            style={{
              fontFamily: BODY,
              fontSize: "0.82rem",
              color: INK,
              fontWeight: 500,
            }}
          >
            <Icon
              size={14}
              strokeWidth={1.8}
              style={{ color: ROSE_DEEP, flexShrink: 0 }}
            />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HorizontalityCallout() {
  const examples = [
    {
      label: "Fitness coach",
      recipe: "Form breakdown + client moment + founder cue.",
    },
    {
      label: "Ecommerce brand",
      recipe: "Unboxing + product detail + founder speaking.",
    },
    {
      label: "SaaS founder",
      recipe: "Problem frame + screen capture + one-line insight.",
    },
  ];

  return (
    <div
      className="mt-20 rounded-sm px-6 py-6 sm:px-8"
      style={{
        background: "#f0efe9",
        border: `1px solid ${HAIRLINE_HEAVY}`,
      }}
    >
      <p
        className="mb-4 inline-flex items-center gap-2"
        style={{
          fontFamily: BODY,
          fontSize: "0.6rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: ROSE_DEEP,
          fontWeight: 700,
        }}
      >
        <span
          className="h-1 w-1 rounded-full"
          style={{ background: ROSE_DEEP }}
        />
        Not just for restaurants
      </p>
      <p
        className="mb-5"
        style={{
          fontFamily: DISPLAY,
          fontSize: "1.24rem",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          color: INK,
          lineHeight: 1.3,
          maxWidth: "720px",
        }}
      >
        Same structure, any SMB. The ingredients change. The recipe
        doesn&rsquo;t.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {examples.map(({ label, recipe }) => (
          <div
            key={label}
            className="flex flex-col gap-1"
            style={{
              borderLeft: `2px solid ${ROSE}`,
              paddingLeft: 14,
            }}
          >
            <p
              style={{
                fontFamily: BODY,
                fontSize: "0.64rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: INK_FAINT,
                fontWeight: 700,
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "0.92rem",
                color: INK,
                lineHeight: 1.45,
                fontWeight: 500,
              }}
            >
              {recipe}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionSix() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-10 sm:pt-28">
        <SectionEyebrow number="06" label="The math of one piece" />

        <h2
          className="mt-5 leading-[1.03] tracking-[-0.038em] text-[clamp(2.2rem,4.8vw,3.4rem)]"
          style={{
            fontFamily: DISPLAY,
            fontWeight: 600,
            color: INK,
            maxWidth: "860px",
          }}
        >
          Tiny inputs.{" "}
          <span style={{ color: ROSE_DEEP, fontWeight: 600 }}>
            One finished post.
          </span>
        </h2>

        <p
          className="mt-4"
          style={{
            fontFamily: BODY,
            fontSize: "1.06rem",
            lineHeight: 1.55,
            color: INK_MUTED,
            maxWidth: "620px",
          }}
        >
          Here&rsquo;s one piece, published Thursday morning. Filmed across
          three short sessions totaling eight minutes. Left: what you did.
          Right: what Solara produced.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-12 md:grid-cols-[1.15fr_1fr] md:gap-16">
          <WhatYouDidColumn />
          <WhatSolaraProducedColumn />
        </div>

        <HorizontalityCallout />

        <div className="mt-16 text-center">
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
            One finished piece.{" "}
            <span style={{ color: INK_FAINT }}>Tiny inputs.</span>{" "}
            <span style={{ color: ROSE_DEEP, fontWeight: 600 }}>
              Every week.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function SectionSixBeforeAfterPreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <SectionSix />

      <PreviewFooter
        label="Section 06 · Tiny inputs → one finished piece"
        description="Before/after proof block. Left column lists 4 input moves (photo, clip, teleprompter read, approval tap) with timestamps summing to ~8 min across the week. Right column shows a finished 9:16 Reel card with burned-in captions, scene-segmented progress bar, and a scheduled publish badge. Horizontality callout below translates the recipe to fitness coach / ecommerce / SaaS so the section doesn't read as restaurant-only. No phone mockup — fully replaces the 4 stale section-5-* variants."
      />
    </main>
  );
}
