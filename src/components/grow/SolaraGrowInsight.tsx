import { Clock, DollarSign, Wrench } from "lucide-react";
import { GROW_CONTENT } from "./content";

const PAIN_POINT_ICONS = [Clock, DollarSign, Wrench] as const;

export function SolaraGrowInsight() {
  const { headline, painPoints } = GROW_CONTENT.insight;

  return (
    <section className="relative overflow-hidden bg-white px-6 py-28 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(152,162,179,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(152,162,179,0.18) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 82%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 10% 20%, rgba(16,185,129,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 95% 80%, rgba(59,130,246,0.08) 0%, transparent 75%)",
        }}
      />
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-900/40">
          The challenge
        </p>

        <h2
          className="mx-auto mt-4 max-w-2xl text-center text-[#101828]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          {headline}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {painPoints.map((point, i) => {
            const Icon = PAIN_POINT_ICONS[i];
            return (
              <div
                key={point.text}
                style={{ border: "1px solid #eaecf0" }}
                className="relative flex items-start gap-4 rounded-2xl bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.45) 50%, transparent 100%)",
                  }}
                />
                <Icon className="w-5 h-5 text-[#667085] mt-0.5 flex-shrink-0" />
                <p className="text-[15px] leading-snug text-[#344054]">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
