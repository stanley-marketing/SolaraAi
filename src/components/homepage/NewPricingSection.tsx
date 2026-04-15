import Link from "next/link";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import { CheckIcon } from "lucide-react";

const alternatives = [
  {
    label: "A part-time social media manager",
    price: "$1,500–3,000/month",
  },
  {
    label: "A content agency",
    price: "$2,000–6,000/month",
  },
  {
    label: "A freelancer who disappears",
    price: "still too much",
  },
];

const features = [
  "Strategy",
  "Scripts",
  "Production",
  "Publishing",
  "Performance reporting",
  "Growth loop that compounds every month",
];

export default function NewPricingSection() {
  return (
    <section
      className="bg-shell px-6 py-24 sm:px-10 sm:py-32"
      aria-label="Pricing"
    >
      <div className="mx-auto max-w-4xl">
        <BlurFade delay={0}>
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.2]">
            What a real social media manager costs.
            <br />
            <span className="text-ink-700">And what Solara costs.</span>
          </h2>
        </BlurFade>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <BlurFade delay={0.1}>
            <div
              className="rounded-2xl border border-line bg-white p-8"
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-ink-700">
                The alternatives
              </p>

              <div className="space-y-5">
                {alternatives.map((alt) => (
                  <div key={alt.label} className="flex items-start justify-between gap-4">
                    <span className="text-sm leading-relaxed text-ink-700 line-through opacity-50">
                      {alt.label}
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-ink-700 line-through opacity-50">
                      {alt.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="text-xs text-ink-700 opacity-60">
                  Plus management overhead, onboarding time, and turnover.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.18}>
            <div
              className="relative flex flex-col rounded-2xl bg-ink-900 p-8 text-white"
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white opacity-60">
                Solara
              </p>

              <div className="mb-1 flex items-end gap-1">
                <span className="text-5xl font-bold leading-none tracking-tight text-white sm:text-6xl">
                  $<NumberTicker value={69} className="text-white" />
                </span>
                <span className="mb-1.5 text-base font-normal text-white opacity-60">
                  /month
                </span>
              </div>

              <p className="mb-8 text-sm text-white opacity-50">
                After your 7-day free trial
              </p>

              <ul className="mb-8 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon
                      size={14}
                      strokeWidth={2.5}
                      className="flex-shrink-0 text-white opacity-60"
                    />
                    <span className="text-sm text-white opacity-80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-auto flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 transition-opacity hover:opacity-90"
              >
                Start free — $69/month after your trial
              </Link>

              <p className="mt-4 text-center text-xs text-white opacity-40">
                Card required. Cancel anytime.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
