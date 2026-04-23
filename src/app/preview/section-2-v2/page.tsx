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
const RULE_COLOR = "rgba(0,0,0,0.08)";

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

function MatrixCell({ capability }: { capability: Capability }) {
  const Icon = capability.icon;
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-4 py-10 sm:px-6 sm:py-12">
      <Icon
        size={28}
        strokeWidth={1.25}
        style={{ color: "#1c1c1e" }}
      />
      <span
        className="text-center"
        style={{
          fontSize: "0.78rem",
          fontWeight: 500,
          letterSpacing: "0.005em",
          color: "#2a2a2a",
          lineHeight: 1.3,
        }}
      >
        {capability.label}
      </span>
    </div>
  );
}

export default function Section2V2Preview() {
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

          <div
            className="mt-14 grid grid-cols-3 sm:mt-20 sm:grid-cols-4 lg:grid-cols-6"
            style={{
              borderTop: `1px solid ${RULE_COLOR}`,
              borderLeft: `1px solid ${RULE_COLOR}`,
            }}
          >
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.label}
                style={{
                  borderRight: `1px solid ${RULE_COLOR}`,
                  borderBottom: `1px solid ${RULE_COLOR}`,
                }}
              >
                <MatrixCell capability={cap} />
              </div>
            ))}
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
          Variation 2 &middot; Ruled Matrix
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          No cell backgrounds, no individual borders. Just a single hairline
          grid (8%-opacity lines) dividing all cells into a proper matrix.
          Icons get thinner strokes (1.25 weight) and more space to breathe.
          Feels like a technical inventory sheet or a Swiss museum label
          system.
        </p>
      </div>
    </main>
  );
}
