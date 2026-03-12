import { Clock } from "lucide-react";

/* ──────────────────────────────────────────────────────────────
   PartnerBenefitsGrid
   What-you-get section: headline + auto-responsive grid of cards.
   Server component — no interactivity needed.
   ────────────────────────────────────────────────────────────── */

interface BenefitItem {
  title: string;
  body: string;
  comingSoon?: boolean;
}

interface PartnerBenefitsGridProps {
  headline: string;
  items: BenefitItem[];
}

export function PartnerBenefitsGrid({
  headline,
  items,
}: PartnerBenefitsGridProps) {
  return (
    <section className="border-t border-gray-100 bg-[#fafafa] px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section headline */}
        <h2
          className="text-ink-900"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "3.5rem",
            maxWidth: "22ch",
          }}
        >
          {headline}
        </h2>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-2xl bg-white p-7 transition-shadow hover:shadow-md"
              style={{ border: "1px solid #eaecf0" }}
            >
              {/* Coming soon badge */}
              {item.comingSoon && (
                <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-medium tracking-wide text-amber-600"
                  style={{ border: "1px solid #fde68a" }}
                >
                  <Clock size={11} strokeWidth={2} />
                  Coming soon
                </div>
              )}

              <h3
                className="text-ink-900"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.3,
                  marginBottom: "0.6rem",
                }}
              >
                {item.title}
              </h3>

              <p
                className="text-neutral-500"
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-body)",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
