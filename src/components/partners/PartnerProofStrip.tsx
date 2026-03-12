/* ──────────────────────────────────────────────────────────────
   PartnerProofStrip
   Immediate trust signal placed directly below the hero.
   Three stats in a horizontal strip; each stat has a prominent
   value, a short label, and a required context string (e.g.
   "in first 90 days") that keeps every metric verifiable.

   Visual language: Ocoya-style proof strip, but lighter —
   white background, ink numbers, subdued dividers.
   Server component — no interactivity needed.
   ────────────────────────────────────────────────────────────── */

interface ProofStat {
  value: string;
  label: string;
  /** Timeframe or scope — e.g. "in first 90 days", "on average" */
  context: string;
}

interface PartnerProofStripProps {
  stats: [ProofStat, ProofStat, ProofStat];
}

export function PartnerProofStrip({ stats }: PartnerProofStripProps) {
  return (
    <div
      className="border-t border-b border-gray-100 bg-white px-6 sm:px-10"
      role="region"
      aria-label="Key statistics"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-10 text-center sm:px-12 sm:py-9"
            >
              {/* Value */}
              <span
                className="text-ink-900"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                  marginBottom: "0.45rem",
                }}
              >
                {stat.value}
              </span>

              {/* Label */}
              <span
                className="text-ink-900"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  lineHeight: 1.4,
                  marginBottom: "0.3rem",
                }}
              >
                {stat.label}
              </span>

              {/* Context */}
              <span
                className="text-neutral-400"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.76rem",
                  letterSpacing: "0.02em",
                  lineHeight: 1.4,
                }}
              >
                {stat.context}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
