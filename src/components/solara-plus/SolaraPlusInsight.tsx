import { Clock, DollarSign, Wrench } from "lucide-react";
import { SOLARA_PLUS_CONTENT } from "./content";

const PAIN_POINT_ICONS = [Clock, DollarSign, Wrench] as const;

export function SolaraPlusInsight() {
  const { headline, painPoints } = SOLARA_PLUS_CONTENT.insight;

  return (
    <section className="px-6 py-28 sm:px-10 bg-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#667085]">
          The challenge
        </p>

        <h2
          className="mx-auto mt-4 max-w-2xl text-center text-3xl tracking-tight text-[#101828] sm:text-[38px] sm:leading-[1.2]"
          style={{ fontFamily: "var(--font-display)" }}
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
                className="rounded-2xl p-6 flex items-start gap-4 bg-white"
              >
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
