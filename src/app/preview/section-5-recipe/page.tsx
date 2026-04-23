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

type Ingredient = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

const INGREDIENTS: Ingredient[] = [
  {
    icon: ImageIcon,
    label: "One photo of your pizza.",
    detail: "Straight from your phone. No editing.",
  },
  {
    icon: Mic,
    label: "10 seconds of talking.",
    detail: 'Stand. Read. "My grandfather taught me this in 1987."',
  },
  {
    icon: Camera,
    label: "5 seconds of steam.",
    detail: "Point at the espresso. Hold. Release.",
  },
];

const PREPARATION = [
  "Enhance and color-grade your photo",
  "Add cinematic camera motion to the still",
  "Clean and pace your 10-second clip",
  "Slow and color-match the steam footage",
  "Intercut your voice with b-roll",
  "Pick music matching the energy",
  "Mix sound under your voice",
  "Time cuts to the beat",
  "Burn captions in this week\u2019s winning format",
  "Design the thumbnail",
  "Export platform-specific versions",
  "Write the caption and pick hashtags",
  "Choose the post time for your audience",
  "Publish to Instagram and TikTok",
  "Report back Thursday with the numbers",
];

function IngredientCard({ ingredient }: { ingredient: Ingredient }) {
  const Icon = ingredient.icon;
  return (
    <div
      className="flex items-start gap-4 rounded-xl p-4"
      style={{
        background: "#fff",
        border: `1px solid ${HAIRLINE}`,
      }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
        style={{ background: "rgba(30,58,138,0.08)" }}
      >
        <Icon size={18} strokeWidth={1.8} style={{ color: ROSE_DEEP }} />
      </div>
      <div className="flex-1">
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "1rem",
            fontWeight: 600,
            color: INK,
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          {ingredient.label}
        </p>
        <p
          className="mt-1"
          style={{
            fontFamily: BODY,
            fontSize: "0.85rem",
            color: INK_SOFT,
            lineHeight: 1.45,
          }}
        >
          {ingredient.detail}
        </p>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 py-4">
      <span
        className="h-px flex-1"
        style={{ background: HAIRLINE_HEAVY }}
      />
      <span
        style={{
          fontFamily: BODY,
          fontSize: "0.6rem",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: INK_SOFT,
          fontWeight: 600,
        }}
      >
        {children}
      </span>
      <span
        className="h-px flex-1"
        style={{ background: HAIRLINE_HEAVY }}
      />
    </div>
  );
}

function PrepStep({ number, text }: { number: number; text: string }) {
  return (
    <div
      className="flex items-baseline gap-4 py-2"
      style={{
        borderBottom: `1px dashed ${HAIRLINE}`,
      }}
    >
      <span
        className="shrink-0 tabular-nums"
        style={{
          fontFamily: BODY,
          fontSize: "0.72rem",
          fontWeight: 600,
          color: INK_FAINT,
          width: 22,
          textAlign: "right",
          fontFeatureSettings: '"tnum" 1',
        }}
      >
        {String(number).padStart(2, "0")}
      </span>
      <span
        style={{
          fontFamily: BODY,
          fontSize: "0.92rem",
          color: INK_MUTED,
          lineHeight: 1.5,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function PlatedMockup() {
  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{
        background: "#0a0a0a",
        aspectRatio: "9 / 16",
        maxWidth: 280,
        margin: "0 auto",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, #fff7cc 0%, #f4c77a 40%, #b86d2a 75%, #3d1a0a 100%)",
          opacity: 0.92,
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-[35%] -translate-x-1/2"
        style={{
          width: "55%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 38% 28%, #fff3b5 0%, #e7a85a 28%, #a2542c 58%, #6b3116 100%)",
          boxShadow: "0 8px 24px -6px rgba(107,49,22,0.6)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 z-10 p-4">
        <div
          className="rounded-lg px-3 py-2"
          style={{
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(6px)",
          }}
        >
          <p
            style={{
              fontFamily: BODY,
              fontSize: "0.72rem",
              color: "#fff",
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            &ldquo;My grandfather taught me this recipe in 1987.
            The trick isn&rsquo;t the cheese&hellip;&rdquo;
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span
              style={{
                fontFamily: BODY,
                fontSize: "0.58rem",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Captions &middot; Music &middot; Thumbnail
            </span>
            <span
              className="rounded-full px-2 py-0.5"
              style={{
                background: "rgba(255,255,255,0.15)",
                fontFamily: BODY,
                fontSize: "0.56rem",
                color: "#fff",
                fontWeight: 600,
              }}
            >
              0:28
            </span>
          </div>
        </div>
      </div>

      <div
        className="absolute right-3 top-3 flex items-center gap-1 rounded-full px-2 py-0.5"
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          fontFamily: BODY,
          fontSize: "0.56rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#fff",
          fontWeight: 600,
        }}
      >
        Ready to publish
      </div>
    </div>
  );
}

export default function SectionFiveRecipePreview() {
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
              05 &middot; The Recipe
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
              Drop in the ingredients. Solara cooks the meal.
            </p>
          </div>

          <div
            className="overflow-hidden rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(6px)",
              border: `1px solid ${HAIRLINE_HEAVY}`,
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.03), 0 16px 40px -16px rgba(0,0,0,0.12)",
            }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-baseline justify-between">
                <span
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: INK,
                  }}
                >
                  Tonight&rsquo;s content
                </span>
                <span
                  style={{
                    fontFamily: BODY,
                    fontSize: "0.66rem",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: INK_FAINT,
                    fontWeight: 600,
                  }}
                >
                  Yield: 1 published piece
                </span>
              </div>

              <SectionLabel>Your ingredients &middot; 6 minutes total</SectionLabel>

              <div className="grid gap-3 sm:grid-cols-3">
                {INGREDIENTS.map((ing) => (
                  <IngredientCard key={ing.label} ingredient={ing} />
                ))}
              </div>

              <SectionLabel>Solara&rsquo;s preparation &middot; automatic</SectionLabel>

              <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-10">
                {PREPARATION.map((step, i) => (
                  <PrepStep key={step} number={i + 1} text={step} />
                ))}
              </div>

              <SectionLabel>Plated</SectionLabel>

              <PlatedMockup />
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
        label="Variant 1 · Recipe Card"
        description="Magazine recipe metaphor. Three ingredient cards (the tiny asks), 15-step preparation list (Solara's invisible work), one plated mockup (the finished piece). The density of the prep list IS the visual argument."
      />
    </main>
  );
}
