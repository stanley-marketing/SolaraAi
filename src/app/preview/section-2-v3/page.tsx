"use client";

import {
  Award,
  BarChart3,
  Clock,
  FileText,
  Film,
  Hash,
  Image as ImageIcon,
  Layers,
  type LucideIcon,
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

type Capability = {
  icon: LucideIcon;
  label: string;
};

const CAPABILITIES: Capability[] = [
  { icon: Target, label: "Content strategy" },
  { icon: FileText, label: "Scripts" },
  { icon: Film, label: "Video editing" },
  { icon: Palette, label: "Color grading" },
  { icon: Music, label: "Sound design" },
  { icon: Zap, label: "Viral hooks" },
  { icon: ImageIcon, label: "Thumbnails" },
  { icon: Hash, label: "Captions & hashtags" },
  { icon: Share2, label: "Multi-platform" },
  { icon: Clock, label: "Optimal timing" },
  { icon: BarChart3, label: "Analytics" },
  { icon: RefreshCw, label: "Weekly strategy" },
  { icon: Video, label: "Camera coaching" },
  { icon: Mic, label: "Brand voice" },
  { icon: Award, label: "Authority" },
  { icon: Search, label: "Social SEO" },
  { icon: Layers, label: "Repurposing" },
];

function DirectoryRow({ capability }: { capability: Capability }) {
  const Icon = capability.icon;
  return (
    <div
      className="flex items-center gap-4 border-b py-4"
      style={{ borderColor: "rgba(0,0,0,0.06)" }}
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center"
        style={{
          background: "rgba(0,0,0,0.025)",
          borderRadius: 8,
        }}
      >
        <Icon size={18} strokeWidth={1.6} style={{ color: "#1c1c1e" }} />
      </div>
      <span
        style={{
          fontSize: "0.92rem",
          fontWeight: 500,
          color: "#1c1c1e",
          letterSpacing: "-0.005em",
        }}
      >
        {capability.label}
      </span>
    </div>
  );
}

export default function Section2V3Preview() {
  const col1 = CAPABILITIES.slice(0, 6);
  const col2 = CAPABILITIES.slice(6, 12);
  const col3 = CAPABILITIES.slice(12);

  return (
    <main className="min-h-screen bg-white">
      <section
        className="relative overflow-x-hidden bg-white px-6 py-20 sm:px-10 sm:py-28 lg:py-32"
        aria-label="What you actually get with Solara"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl">
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase" as const,
                color: MUTED_LABEL,
              }}
            >
              02 &middot; What you get
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
              className="mt-6 max-w-[640px]"
              style={{
                fontSize: "clamp(0.98rem, 1.2vw, 1.08rem)",
                color: MUTED_BODY,
                lineHeight: 1.6,
              }}
            >
              A human team costs $2,000+ a month: a content strategist, a
              scriptwriter, a video editor, a creative director. Solara does
              all of it. Autonomously.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-12 sm:mt-20 md:grid-cols-2 md:gap-x-14 lg:grid-cols-3 lg:gap-x-20">
            <div>
              {col1.map((cap) => (
                <DirectoryRow key={cap.label} capability={cap} />
              ))}
            </div>
            <div>
              {col2.map((cap) => (
                <DirectoryRow key={cap.label} capability={cap} />
              ))}
            </div>
            <div>
              {col3.map((cap) => (
                <DirectoryRow key={cap.label} capability={cap} />
              ))}
            </div>
          </div>

          <p
            className="mx-auto mt-12 max-w-md text-center italic sm:mt-16"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              color: MUTED_BODY,
              fontWeight: 400,
            }}
          >
            &hellip; and everything else a creative team does.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Variation 3 &middot; Directory rows
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          Three columns of horizontal rows. Each row has a small icon in a
          soft gray badge on the left, label on the right. Thin hairline
          dividers between rows. Reads like the table of contents of a
          directory or annual report. Most minimal &mdash; no tiles, no grid
          lines, just typography and icons in controlled rhythm.
        </p>
      </div>
    </main>
  );
}
