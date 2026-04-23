const MUTED_LABEL = "#626262";
const MUTED_BODY = "#4a4a4a";

type Capability = {
  label: string;
  description: string;
};

const CAPABILITIES: Capability[] = [
  {
    label: "Content strategy",
    description:
      "Reads your audience. Plans the week. Rewrites the plan based on what actually worked.",
  },
  {
    label: "Scripts",
    description: "Every hook, every caption, every line — written in your voice.",
  },
  {
    label: "Video editing",
    description:
      "Cuts, pacing, transitions. Raw phone clips turn into cinematic posts.",
  },
  {
    label: "Color grading",
    description: "Makes phone footage look like it came off a film set.",
  },
  {
    label: "Sound design",
    description: "Fixes messy audio, picks the music, masters the mix.",
  },
  {
    label: "Viral hooks",
    description:
      "Tests hundreds of openers weekly. Keeps what stops the scroll.",
  },
  {
    label: "Thumbnails",
    description: "Designed for each platform. Engineered to get the click.",
  },
  {
    label: "Captions & hashtags",
    description: "SEO-tuned, platform-native, on-brand — every single time.",
  },
  {
    label: "Multi-platform",
    description:
      "One shoot, every channel. Instagram, TikTok, LinkedIn, YouTube.",
  },
  {
    label: "Optimal timing",
    description:
      "Publishes when your audience is actually scrolling — not when you're free.",
  },
  {
    label: "Analytics",
    description:
      "Tracks every signal that matters. Hooks, drop-offs, conversions, ROI.",
  },
  {
    label: "Weekly strategy",
    description:
      "Rewrites your entire plan every 7 days based on real performance data.",
  },
  {
    label: "Camera coaching",
    description:
      "Helps you look better on camera. Every shoot, a little sharper.",
  },
  {
    label: "Brand voice",
    description: "Learns how you sound. Keeps you consistent across every post.",
  },
  {
    label: "Authority",
    description: "Positions you as the one everyone in your category trusts.",
  },
  {
    label: "Social SEO",
    description:
      "New customers find you when they search — not when they scroll.",
  },
  {
    label: "Repurposing",
    description:
      "One shoot becomes five pieces across five platforms. Free reach.",
  },
];

function CapabilityRow({
  number,
  capability,
}: {
  number: string;
  capability: Capability;
}) {
  return (
    <li className="grid grid-cols-[56px_1fr] items-baseline gap-x-6 border-b border-line py-6 sm:grid-cols-[80px_1fr] sm:gap-x-8 sm:py-7">
      <span
        className="tabular-nums"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
          fontWeight: 300,
          color: "#cbcbcb",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {number}
      </span>
      <div>
        <h3
          className="text-ink-900"
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.18rem)",
            fontWeight: 600,
            letterSpacing: "-0.005em",
            lineHeight: 1.2,
          }}
        >
          {capability.label}
        </h3>
        <p
          className="mt-1.5 max-w-[520px]"
          style={{
            fontSize: "0.92rem",
            color: MUTED_BODY,
            lineHeight: 1.55,
          }}
        >
          {capability.description}
        </p>
      </div>
    </li>
  );
}

export default function Section2ListPreview() {
  return (
    <main className="min-h-screen bg-white">
      <section
        className="relative overflow-x-hidden bg-white px-6 py-20 sm:px-10 sm:py-28 lg:py-32"
        aria-label="What you actually get with Solara"
      >
        <div className="mx-auto max-w-5xl">
          <div>
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

          <div className="mt-16 grid grid-cols-1 gap-x-12 sm:mt-20 lg:grid-cols-2 lg:gap-x-16">
            <ol className="border-t border-line">
              {CAPABILITIES.slice(0, 9).map((cap, i) => (
                <CapabilityRow
                  key={cap.label}
                  number={String(i + 1).padStart(2, "0")}
                  capability={cap}
                />
              ))}
            </ol>
            <ol className="border-t border-line">
              {CAPABILITIES.slice(9).map((cap, i) => (
                <CapabilityRow
                  key={cap.label}
                  number={String(i + 10).padStart(2, "0")}
                  capability={cap}
                />
              ))}
              <li className="grid grid-cols-[56px_1fr] items-baseline gap-x-6 py-6 sm:grid-cols-[80px_1fr] sm:gap-x-8 sm:py-7">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                    fontWeight: 300,
                    color: "#cbcbcb",
                    lineHeight: 1,
                  }}
                >
                  &mdash;
                </span>
                <p
                  className="italic"
                  style={{
                    fontSize: "1rem",
                    color: MUTED_BODY,
                    lineHeight: 1.55,
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                  }}
                >
                  &hellip; and everything else a creative team does.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Variant D &middot; Numbered editorial list
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          17 capabilities as a numbered vertical list, no icons. Each row has
          a large serif number, a capability name, and a one-sentence
          description. Final row is the anchor line in italic display font.
          Feels like a magazine contents page &mdash; editorial, substantial,
          not generic.
        </p>
      </div>
    </main>
  );
}
