import { Check } from "lucide-react";

/* ──────────────────────────────────────────────────────────────
   PartnerTierCards
   4-column (desktop) / 2-column (tablet) / 1-column (mobile) grid.
   Displays referral program reward tiers with fine print.
   Server component — no interactivity needed.
   ────────────────────────────────────────────────────────────── */

export interface PartnerTier {
  tier: string;
  threshold: string;
  revenueShare: string;
  cashBonus?: string;
  perks: string[];
  /** Explicitly marks this as the featured/highlighted tier.
   *  Falls back to index-based detection (i >= 2) if omitted. */
  featured?: boolean;
}

interface PartnerTierCardsProps {
  headline: string;
  tiers: PartnerTier[];
  finePrint: string;
}

export function PartnerTierCards({
  headline,
  tiers,
  finePrint,
}: PartnerTierCardsProps) {
  return (
    <section
      id="rewards"
      className="border-t border-gray-100 bg-white px-6 py-28 sm:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <h2
          className="text-ink-900"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "3.5rem",
            maxWidth: "52ch",
          }}
        >
          {headline}
        </h2>

        {/* Tier grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => {
            const isHighlighted = tier.featured ?? (i === 2 || i === 3);
            const cardStyle = isHighlighted
              ? {
                  background:
                    "linear-gradient(#faf5ff, #faf5ff) padding-box, linear-gradient(to bottom right, #a855f7, #ec4899, #f97316) border-box",
                  border: "1.5px solid transparent",
                  boxShadow:
                    "0 4px 24px rgba(168,85,247,0.10), 0 1px 4px rgba(0,0,0,0.04)",
                }
              : {
                  border: "1px solid #eaecf0",
                  background: "#fafafa",
                };
            return (
              <div
                key={tier.tier}
                className="relative flex flex-col overflow-hidden rounded-2xl"
                style={cardStyle}
              >
                {/* Top accent bar */}
                <div
                  aria-hidden
                  className="h-1 w-full"
                  style={{
                    background: isHighlighted
                      ? "linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #f97316 100%)"
                      : "linear-gradient(90deg, #d1d5db 0%, transparent 100%)",
                  }}
                />

                <div className="flex flex-1 flex-col p-6">
                  {/* Tier label */}
                  <span
                    className="mb-1 text-neutral-400"
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "var(--font-body)",
                      letterSpacing: "0.14em",
                      fontWeight: 500,
                      textTransform: "uppercase",
                    }}
                  >
                    {tier.tier}
                  </span>

                  {/* Threshold */}
                  <p
                    className="text-ink-900"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      letterSpacing: "-0.015em",
                      lineHeight: 1.3,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {tier.threshold}
                  </p>

                  {/* Revenue share — primary number */}
                  <div className="mb-4">
                    <span
                      className="text-ink-900"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2rem, 3vw, 2.5rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                      }}
                    >
                      {tier.revenueShare}
                    </span>
                    <span
                      className="ml-1.5 text-neutral-500"
                      style={{
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      rev share / 12 mo
                    </span>
                  </div>

                  {/* Cash bonus badge */}
                  {tier.cashBonus && (
                    <div
                      className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1"
                      style={{
                        background: isHighlighted ? "#f3e8ff" : "#f3f4f6",
                        border: isHighlighted
                          ? "1px solid #e9d5ff"
                          : "1px solid #e5e7eb",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-body)",
                          fontWeight: 600,
                          color: isHighlighted ? "#7c3aed" : "#374151",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {tier.cashBonus} cash bonus
                      </span>
                    </div>
                  )}

                  {/* Divider */}
                  <div
                    aria-hidden
                    className="mb-4 mt-auto"
                    style={{ height: "1px", background: "#eaecf0" }}
                  />

                  {/* Perks list */}
                  <ul className="flex flex-col gap-2.5">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2">
                        <Check
                          aria-hidden
                          className="mt-0.5 shrink-0 text-purple-500"
                          size={14}
                          strokeWidth={2.5}
                        />
                        <span
                          className="text-neutral-600"
                          style={{
                            fontSize: "0.825rem",
                            fontFamily: "var(--font-body)",
                            lineHeight: 1.5,
                          }}
                        >
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fine print */}
        <p
          className="mt-6 text-neutral-400"
          style={{
            fontSize: "0.775rem",
            fontFamily: "var(--font-body)",
            lineHeight: 1.6,
          }}
        >
          {finePrint}
        </p>
      </div>
    </section>
  );
}
