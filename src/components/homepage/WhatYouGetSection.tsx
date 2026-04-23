"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  Clock,
  FileText,
  Film,
  Hash,
  Image as ImageIcon,
  Layers,
  Mic,
  Music,
  Palette,
  RefreshCw,
  Search,
  Share2,
  Target,
  Video,
  Zap,
} from "lucide-react";

const MUTED_LABEL = "#626262";
const MUTED_BODY = "#4a4a4a";
const MUTED_WHISPER = "rgba(98,98,98,0.75)";

function useInView<T extends Element = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

type Capability = {
  icon: LucideIcon;
  label: string;
  tone: "amber" | "cream" | "coffee" | "rose" | "neutral";
  featured?: boolean;
};

const CAPABILITIES: Capability[] = [
  { icon: Target, label: "Content strategy", tone: "amber", featured: true },
  { icon: FileText, label: "Scripts", tone: "cream" },
  { icon: Film, label: "Video editing", tone: "coffee", featured: true },
  { icon: Palette, label: "Color grading", tone: "rose" },
  { icon: Music, label: "Sound design", tone: "neutral" },
  { icon: Zap, label: "Viral hooks", tone: "amber" },
  { icon: ImageIcon, label: "Thumbnails", tone: "cream" },
  { icon: Hash, label: "Captions & hashtags", tone: "coffee" },
  { icon: Share2, label: "Multi-platform", tone: "rose", featured: true },
  { icon: Clock, label: "Optimal timing", tone: "neutral" },
  { icon: BarChart3, label: "Analytics", tone: "amber" },
  { icon: RefreshCw, label: "Weekly strategy", tone: "cream" },
  { icon: Video, label: "Camera coaching", tone: "coffee" },
  { icon: Mic, label: "Brand voice", tone: "rose", featured: true },
  { icon: Award, label: "Authority", tone: "neutral" },
  { icon: Search, label: "Social SEO", tone: "amber" },
  { icon: Layers, label: "Repurposing", tone: "cream", featured: true },
];

const TONE_BG: Record<Capability["tone"], string> = {
  amber: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
  cream: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
  coffee: "linear-gradient(135deg, #e7e0d6 0%, #d4c9ba 100%)",
  rose: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
  neutral: "linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)",
};

const STRIPE_OVERLAY =
  "repeating-linear-gradient(135deg, transparent 0px, transparent 10px, rgba(0,0,0,0.02) 10px, rgba(0,0,0,0.02) 11px)";

const MARQUEE_CSS = `
@keyframes capability-marquee-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes capability-marquee-right {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}
.capability-row-left { animation: capability-marquee-left var(--dur, 70s) linear infinite; }
.capability-row-right { animation: capability-marquee-right var(--dur, 70s) linear infinite; }
@media (prefers-reduced-motion: reduce) {
  .capability-row-left,
  .capability-row-right { animation: none !important; }
}
`;

type MarqueeVariant = "rainbow" | "monochrome" | "cream" | "static";

const CREAM_BG = "#fbf6ea";
const FEATURED_BG = "#e0f2fe";

function StaticCapabilityCell({
  capability,
  featured,
}: {
  capability: Capability;
  featured: boolean;
}) {
  const Icon = capability.icon;
  return (
    <div
      className="flex flex-col items-center justify-center gap-2.5 px-4 py-6 transition-transform duration-200 ease-out"
      style={{
        borderRadius: 14,
        background: featured ? FEATURED_BG : "transparent",
        boxShadow: featured
          ? "0 1px 2px rgba(0,0,0,0.04), 0 10px 24px -12px rgba(59, 130, 246, 0.18)"
          : "none",
      }}
    >
      <Icon
        size={26}
        strokeWidth={1.75}
        style={{ color: featured ? "#1c1c1e" : "#b0b0b5" }}
      />
      <span
        className="text-center"
        style={{
          fontSize: "0.78rem",
          fontWeight: featured ? 600 : 500,
          letterSpacing: "-0.005em",
          color: featured ? "#1c1c1e" : "#8a8a8e",
          lineHeight: 1.25,
        }}
      >
        {capability.label}
      </span>
    </div>
  );
}

function CapabilitiesGrid({
  featuredLabels,
}: {
  featuredLabels?: string[];
}) {
  const override = featuredLabels ? new Set(featuredLabels) : null;
  return (
    <div className="mx-auto grid w-full max-w-4xl grid-cols-3 gap-2 sm:gap-3 md:grid-cols-5 lg:grid-cols-6">
      {CAPABILITIES.map((cap) => {
        const featured = override
          ? override.has(cap.label)
          : (cap.featured ?? false);
        return (
          <StaticCapabilityCell
            key={cap.label}
            capability={cap}
            featured={featured}
          />
        );
      })}
    </div>
  );
}

function CapabilityCell({
  capability,
  variant,
}: {
  capability: Capability;
  variant: MarqueeVariant;
}) {
  const Icon = capability.icon;
  const cellBackground =
    variant === "cream" ? CREAM_BG : "#ffffff";
  return (
    <div
      className="relative flex shrink-0 flex-col items-center justify-center gap-2 overflow-hidden border border-line"
      style={{ width: 144, height: 128, background: cellBackground }}
    >
      {variant === "rainbow" && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: TONE_BG[capability.tone] }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: STRIPE_OVERLAY }}
          />
        </>
      )}
      <div className="relative flex flex-col items-center gap-2">
        <Icon size={26} className="text-ink-900" />
        <span
          className="text-center"
          style={{
            fontSize: "0.66rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: "#2a2a2a",
            lineHeight: 1.2,
            padding: "0 8px",
          }}
        >
          {capability.label}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  durationSec,
  offsetPct,
  variant,
}: {
  items: Capability[];
  direction: "left" | "right";
  durationSec: number;
  offsetPct: number;
  variant: MarqueeVariant;
}) {
  const animClass =
    direction === "left" ? "capability-row-left" : "capability-row-right";
  return (
    <div
      className="flex w-full overflow-hidden"
      style={{ marginLeft: `${offsetPct}%` }}
    >
      <div
        className={`${animClass} flex shrink-0 flex-nowrap`}
        style={{ ["--dur" as string]: `${durationSec}s` }}
      >
        {[...items, ...items].map((cap, i) => (
          <CapabilityCell
            key={`${cap.label}-${i}`}
            capability={cap}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}

function CapabilitiesMarquee({ variant }: { variant: MarqueeVariant }) {
  const row1 = CAPABILITIES.slice(0, 6);
  const row2 = CAPABILITIES.slice(6, 12);
  const row3 = CAPABILITIES.slice(12, 17);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <style>{MARQUEE_CSS}</style>

      <div className="flex flex-col gap-0">
        <MarqueeRow
          items={row1}
          direction="left"
          durationSec={75}
          offsetPct={0}
          variant={variant}
        />
        <MarqueeRow
          items={row2}
          direction="right"
          durationSec={90}
          offsetPct={-4}
          variant={variant}
        />
        <MarqueeRow
          items={row3}
          direction="left"
          durationSec={60}
          offsetPct={3}
          variant={variant}
        />
      </div>
    </div>
  );
}

function BeforeAfterPlaceholder() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      <div className="flex flex-col gap-3">
        <span
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.26em",
            textTransform: "uppercase" as const,
            color: MUTED_LABEL,
          }}
        >
          Before
        </span>
        <div
          className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line"
          style={{
            background:
              "linear-gradient(135deg, #e5e7eb 0%, #9ca3af 100%), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 3px)",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="rounded-full border border-white/60 bg-black/30 px-3 py-1 text-white backdrop-blur-sm"
              style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}
            >
              Raw phone clip
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.26em",
            textTransform: "uppercase" as const,
            color: MUTED_LABEL,
          }}
        >
          After
        </span>
        <div
          className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line"
          style={{
            background:
              "linear-gradient(135deg, #fde68a 0%, #fb923c 50%, #9a3412 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.4) 0%, transparent 50%)",
            }}
          />
          <div className="absolute left-4 top-4">
            <span
              className="rounded-full bg-ink-900/70 px-2.5 py-1 text-white backdrop-blur-sm"
              style={{ fontSize: "0.62rem", letterSpacing: "0.2em" }}
            >
              HOOK
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div
              className="rounded-lg bg-black/40 px-3 py-2 text-white backdrop-blur-sm"
              style={{ fontSize: "0.82rem", fontWeight: 500, lineHeight: 1.35 }}
            >
              How we pull every espresso
            </div>
          </div>
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M8 5v14l11-7z"
                fill="#111111"
                stroke="#111111"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const REVEAL_BASE =
  "transition-[transform,opacity] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:!transition-none motion-reduce:!opacity-100 motion-reduce:!translate-y-0";
const HIDDEN_Y = "opacity-0 translate-y-5";
const VISIBLE = "opacity-100 translate-y-0";

type WhatYouGetSectionProps = {
  variant?: MarqueeVariant;
  featuredLabels?: string[];
};

export function WhatYouGetSection({
  variant = "rainbow",
  featuredLabels,
}: WhatYouGetSectionProps = {}) {
  const headerRef = useInView(0.2);
  const marqueeRef = useInView(0.15);
  const mediaRef = useInView(0.2);
  const closingRef = useInView(0.3);

  return (
    <section
      className="relative overflow-x-hidden bg-white px-6 py-20 sm:px-10 sm:py-28 lg:py-32"
      aria-label="What you actually get with Solara"
    >
      <div className="mx-auto max-w-5xl">
        <div
          ref={headerRef.ref}
          className={`${REVEAL_BASE} ${headerRef.visible ? VISIBLE : HIDDEN_Y}`}
        >
          <div className="h-px bg-line" />

          <p
            className="mt-6"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase" as const,
              color: MUTED_LABEL,
            }}
          >
            02 &middot; WHAT YOU GET
          </p>

          <h2
            className="mt-4 max-w-[760px] leading-[1.08] tracking-[-0.02em] text-ink-900"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
            }}
          >
            A full creative production team. In your pocket.
          </h2>

          <p
            className="mt-6 max-w-[620px]"
            style={{
              fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
              lineHeight: 1.65,
              color: MUTED_BODY,
            }}
          >
            A human team costs $2,000+ a month: a content strategist, a
            scriptwriter, a video editor, a creative director. Solara does all
            of it. Autonomously.
          </p>
        </div>

        <div
          ref={marqueeRef.ref}
          className={`mt-12 sm:mt-16 ${REVEAL_BASE} ${marqueeRef.visible ? VISIBLE : HIDDEN_Y}`}
        >
          {variant === "static" ? (
            <CapabilitiesGrid featuredLabels={featuredLabels} />
          ) : (
            <CapabilitiesMarquee variant={variant} />
          )}

          <p
            className="mt-8 text-center italic sm:mt-10"
            style={{ fontSize: "0.82rem", color: MUTED_WHISPER }}
          >
            &hellip;and everything else a creative team does.
          </p>
        </div>

        <div
          ref={mediaRef.ref}
          className={`mt-20 border-t border-line pt-14 sm:mt-24 sm:pt-16 ${REVEAL_BASE} ${mediaRef.visible ? VISIBLE : HIDDEN_Y}`}
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase" as const,
              color: MUTED_LABEL,
              marginBottom: 10,
            }}
          >
            THE TRANSFORMATION
          </p>

          <h3
            className="max-w-[560px] leading-[1.15] tracking-[-0.015em] text-ink-900"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
              fontWeight: 600,
            }}
          >
            Your phone footage. Cinematic output.
          </h3>

          <p
            className="mt-4 max-w-[540px]"
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: MUTED_BODY,
            }}
          >
            Send a raw 5-second clip. Solara runs it through color grading,
            sound design, captions, hooks, and thumbnails. Out comes content
            that looks like a Hollywood crew filmed it.
          </p>

          <div className="mt-10 sm:mt-12">
            <BeforeAfterPlaceholder />
          </div>
        </div>

        <div
          ref={closingRef.ref}
          className={`mt-16 max-w-[680px] border-t border-line pt-8 sm:mt-20 ${REVEAL_BASE} ${closingRef.visible ? VISIBLE : HIDDEN_Y}`}
        >
          <p
            className="text-ink-900"
            style={{
              fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
              lineHeight: 1.55,
              fontWeight: 500,
              fontFamily: "var(--font-display)",
            }}
          >
            This is what a $2,000/month creative team delivers. Solara does it
            for a fraction &mdash; and never takes a day off.
          </p>
        </div>
      </div>
    </section>
  );
}
