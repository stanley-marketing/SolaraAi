"use client";

import Link from "next/link";
import Image from "next/image";

// No props needed for this section
type CaseStudySectionProps = Record<string, never>;

const METRICS = [
  {
    value: "131",
    label: "Tracked Leads",
    context: "in 27 tracked days",
  },
  {
    value: "5",
    label: "Signed Contracts",
    context: "from tracked leads",
  },
  {
    value: "$800k+",
    label: "Pipeline Value",
    context: "in active project value",
  },
  {
    value: "10,400+",
    label: "Organic Impressions",
    context: "in first 90 days",
  },
] as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CaseStudySection(_props?: CaseStudySectionProps) {
  return (
    <section className="px-6 py-28 sm:px-10" style={{ backgroundColor: "#fafafa" }}>
      <div className="mx-auto max-w-6xl">
        {/* Contained proof block */}
        <div
          className="overflow-hidden rounded-2xl bg-white"
          style={{ border: "1px solid #eaecf0" }}
        >
          <div className="p-8 sm:p-12">
            {/* Two-column layout: copy left, metrics right */}
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Left: narrative copy + CTA */}
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/maison-logo.jpeg"
                    alt="Maison Remodeling Group logo"
                    width={36}
                    height={36}
                    className="rounded-lg object-contain"
                  />
                  <p
                    className="text-sm font-semibold uppercase tracking-[2px] text-gray-400"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Case Study
                  </p>
                </div>

                <h2
                  className="mt-4 text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  How Maison Remodeling Group generated{" "}
                  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                    131 leads in 27 days
                  </span>{" "}
                  — starting from nothing.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-gray-500">
                  Maison Remodeling Group had no website, no SEO footprint, and no
                  digital lead generation. Solara AI built their entire growth
                  engine from scratch and started delivering results within weeks.
                </p>

                <div className="mt-10">
                  <Link
                    href="/case-study/maison-remodeling-group"
                    className="inline-block rounded-[999px] bg-black px-6 py-3 text-[14px] font-medium tracking-[1px] text-white transition-opacity hover:opacity-80"
                  >
                    View the full case study
                  </Link>
                </div>
              </div>

              {/* Right: 2×2 metric grid */}
              <div className="grid grid-cols-2 gap-4">
                {METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl p-5 sm:p-6"
                    style={{ backgroundColor: "#fafafa" }}
                  >
                    <p
                      className="text-5xl font-normal tracking-tight text-gray-900 sm:text-6xl"
                    >
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-gray-900">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-gray-500">
                      {metric.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Proof statement */}
            <div className="mt-12 border-t border-gray-100 pt-8 text-center">
              <p className="text-xl font-medium text-gray-900">
                &ldquo;From zero digital presence to $800k+ in pipeline &mdash; in
                90 days.&rdquo;
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Maison Remodeling Group &middot; Santa Clara, CA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
