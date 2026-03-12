"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";
import type {
  CaseStudy,
  CaseStudyMetric,
  CaseStudySectionBlock,
} from "@/lib/case-studies/types";

/* ── Hero metric indices (0=leads, 1=contracts, 2=pipeline, 4=impressions) ── */
const HERO_METRIC_INDICES = [0, 1, 2, 4];

/* ── Block renderer ── */
function BlockRenderer({ block }: { block: CaseStudySectionBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-lg leading-relaxed text-gray-500">{block.text}</p>
      );

    case "list":
      return (
        <ul className="mt-2 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-purple-500" />
              <span className="text-base leading-relaxed text-gray-600">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "metrics":
      return (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {block.items.map((metric: CaseStudyMetric) => (
            <div
              key={`${metric.label}-${metric.value}`}
              className="min-w-0 rounded-xl p-4"
              style={{ border: "1px solid #eaecf0" }}
            >
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-2xl font-light tracking-tight text-transparent sm:text-3xl">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-medium text-gray-900">
                {metric.label}
              </div>
              <div className="mt-0.5 text-xs text-gray-400">
                {metric.context}
              </div>
            </div>
          ))}
        </div>
      );

    case "callout":
      return (
        <div
          className="mt-2 rounded-xl px-6 py-5"
          style={{
            border: "1px solid #eaecf0",
            background: "#fafafa",
            borderLeft: "3px solid #a855f7",
          }}
        >
          <p className="text-base leading-relaxed text-gray-600 italic">
            {block.text}
          </p>
        </div>
      );

    default:
      return null;
  }
}

/* ── FAQ Accordion ── */
function FaqAccordion({
  faq,
}: {
  faq: Array<{ question: string; answer: string }>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faq.map((item, i) => (
        <div
          key={item.question}
          className="overflow-hidden rounded-2xl bg-white"
          style={{ border: "1px solid #eaecf0" }}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="pr-4 text-base font-medium text-gray-900">
              {item.question}
            </span>
            <ChevronDown
              className="h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200"
              style={{
                transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 pt-0">
              <p className="text-base leading-relaxed text-gray-500">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Main Page Component ── */
export function MaisonDetailPage({ caseStudy }: { caseStudy: CaseStudy }) {
  const heroMetrics = HERO_METRIC_INDICES.map(
    (i) => caseStudy.metrics[i],
  ).filter((m): m is CaseStudyMetric => m !== undefined);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      {/* ═══════════════════════════════════════════════
          Sticky Nav
      ═══════════════════════════════════════════════ */}
      <nav
        className="sticky top-0 z-50 border-b bg-white"
        style={{ borderColor: "#eaecf0" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-gray-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Solara AI
          </Link>
          <a
            href={caseStudy.cta.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[999px] bg-black px-6 py-3 text-[14px] font-medium tracking-[1px] text-white transition-opacity hover:opacity-80"
          >
            Book a strategy call
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════
          Hero
      ═══════════════════════════════════════════════ */}
      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <p
            className="text-sm font-semibold uppercase tracking-[2px] text-gray-400"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Case Study — {caseStudy.industry}
          </p>

          {/* Headline */}
          <h1
            className="mt-5 font-light tracking-tight text-gray-900 text-3xl sm:text-4xl md:text-[44px] md:leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From zero digital presence to{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              $800k+ pipeline
            </span>{" "}
            in 90 days
          </h1>

          {/* Executive summary */}
          <p className="mt-6 text-lg leading-relaxed text-gray-500">
            {caseStudy.executiveSummary}
          </p>

          {/* Meta line */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-400">
            <span>{caseStudy.location}</span>
            <span aria-hidden="true" className="text-gray-200">
              ·
            </span>
            <span>{caseStudy.industry}</span>
            <span aria-hidden="true" className="text-gray-200">
              ·
            </span>
            <span>{caseStudy.engagementPeriod}</span>
          </div>
        </div>

        {/* Metrics band */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroMetrics.map((metric) => (
              <div
                key={`${metric.label}-${metric.value}`}
                className="min-w-0 rounded-2xl bg-white p-5 text-center sm:p-6"
                style={{ border: "1px solid #eaecf0" }}
              >
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-4xl font-light leading-none tracking-tight text-transparent sm:text-5xl xl:text-6xl">
                  {metric.value}
                </div>
                <div className="mt-3 text-sm font-semibold text-gray-900">
                  {metric.label}
                </div>
                <div className="mt-1 text-xs leading-snug text-gray-400">
                  {metric.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          Omer Portrait + Quote
      ═══════════════════════════════════════════════ */}
      <section className="px-6 py-20 sm:px-10" style={{ background: "#fafafa" }}>
        <div className="mx-auto max-w-5xl">
          <div
            className="rounded-2xl bg-white p-8 sm:p-12"
            style={{ border: "1px solid #eaecf0" }}
          >
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
              {/* Photo + attribution */}
              <div className="flex shrink-0 flex-col items-center gap-3 sm:items-start">
                <Image
                  src="/images/omer.png"
                  alt="Omer, founder of Maison Remodeling Group"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold text-gray-900">Omer</p>
                  <p className="text-sm text-gray-500">
                    Founder, Maison Remodeling Group
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div>
                <div
                  className="mb-4 h-px w-8"
                  style={{ background: "#a855f7" }}
                />
                <p className="text-xl leading-relaxed text-gray-700 italic">
                  &ldquo;We started with nothing — no website, no leads, no
                  digital footprint. Solara AI built our entire online presence
                  from scratch. Within 90 days we had over 130 inbound leads, 5
                  signed contracts, and a proposal pipeline exceeding
                  $800,000.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          Case Study Sections (6 content cards)
      ═══════════════════════════════════════════════ */}
      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <p
            className="text-sm font-semibold uppercase tracking-[2px] text-gray-400"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What We Built
          </p>
          <h2
            className="mt-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Full-stack digital growth from scratch
          </h2>

          {/* Cards */}
          <div className="mt-12 space-y-8">
            {caseStudy.sections.map((section, i) => (
              <div
                key={section.title}
                className="rounded-2xl bg-white p-8"
                style={{ border: "1px solid #eaecf0" }}
              >
                {/* Section number + title */}
                <div className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="text-xl font-medium tracking-tight text-gray-900"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {section.title}
                  </h3>
                </div>

                {/* Blocks */}
                <div className="mt-5 space-y-5 pl-11">
                  {section.blocks.map((block, j) => (
                    <BlockRenderer
                      key={`${section.title}-${block.type}-${j}`}
                      block={block}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ Accordion
      ═══════════════════════════════════════════════ */}
      <section className="px-6 py-20 sm:px-10" style={{ background: "#fafafa" }}>
        <div className="mx-auto max-w-4xl">
          <p
            className="text-sm font-semibold uppercase tracking-[2px] text-gray-400"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently Asked
          </p>
          <h2
            className="mt-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Common questions about this case study
          </h2>

          <div className="mt-10">
            <FaqAccordion faq={caseStudy.faq} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          Final CTA
      ═══════════════════════════════════════════════ */}
      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[2px] text-gray-400"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to grow?
          </p>
          <h2
            className="mt-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {caseStudy.cta.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            See what Solara AI can build for your business. No pressure, no
            pitch deck — just a direct conversation about your goals.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={caseStudy.cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[999px] bg-black px-8 py-4 text-[14px] font-medium tracking-[1px] text-white transition-opacity hover:opacity-80"
            >
              Book a strategy call
            </a>
            <Link
              href="/"
              className="text-sm text-gray-400 underline-offset-2 hover:text-gray-600 hover:underline transition-colors"
            >
              Learn about Solara AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
