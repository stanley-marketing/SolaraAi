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

/* ── Block Renderer ── */
function BlockRenderer({ block }: { block: CaseStudySectionBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-lg leading-relaxed text-gray-600">{block.text}</p>
      );

    case "list":
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-purple-500" />
              <span className="text-base leading-relaxed text-gray-600">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "metrics":
      return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {block.items.map((metric: CaseStudyMetric) => (
            <div
              key={`${metric.label}-${metric.value}`}
              className="rounded-xl bg-gray-50 p-4"
            >
              <div className="text-2xl font-bold text-gray-900">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-medium text-gray-700">
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
          className="rounded-r-xl bg-gray-50 px-6 py-5"
          style={{ borderLeft: "3px solid #7c3aed" }}
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
    <div>
      {faq.map((item, i) => (
        <div key={item.question} className="border-b border-gray-200">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left"
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
            <div className="pb-5">
              <p className="text-base leading-relaxed text-gray-600">
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
  const heroMetrics = [
    caseStudy.metrics[2],
    caseStudy.metrics[0],
    caseStudy.metrics[1],
  ].filter((m): m is CaseStudyMetric => m !== undefined);

  const resultMetrics = caseStudy.metrics.slice(0, 6);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      {/* ── 1. Hero ── */}
      <section
        className="px-6 pt-20 pb-28 sm:px-10 sm:pt-28 sm:pb-36"
        style={{ background: "#F9F8F6" }}
      >
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <Link
              href="/"
              className="transition-colors hover:text-gray-600"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/case-study"
              className="transition-colors hover:text-gray-600"
            >
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-gray-500">Maison Remodeling Group</span>
          </nav>

          {/* Split layout */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr]">
            {/* Left: text */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Image
                  src="/images/maison-logo.jpeg"
                  alt="Maison Remodeling Group logo"
                  width={36}
                  height={36}
                  className="rounded-lg object-cover"
                />
                <span className="text-sm font-medium text-gray-500">
                  {caseStudy.clientName}
                </span>
              </div>

              <h1
                className="text-[44px] font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl sm:leading-[1.08]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                From Zero Digital Presence to{" "}
                <span style={{ color: "#7c3aed" }}>$800K+</span> in Pipeline
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-gray-500">
                {caseStudy.executiveSummary}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
                <span>{caseStudy.industry}</span>
                <span aria-hidden="true" className="text-gray-300">·</span>
                <span>{caseStudy.location}</span>
                <span aria-hidden="true" className="text-gray-300">·</span>
                <span>{caseStudy.engagementPeriod}</span>
              </div>
            </div>

            {/* Right: portrait */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/omer.webp"
                alt="Omer, Founder of Maison Remodeling Group"
                width={300}
                height={360}
                className="rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Overlapping Metrics Band ── */}
      <div className="relative z-10 px-6 sm:px-10">
        <div className="mx-auto max-w-4xl -mt-16">
          <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-10">
            <div className="flex flex-col sm:flex-row">
              {heroMetrics.map((metric, i) => (
                <div
                  key={`hero-metric-${metric.label}`}
                  className={`flex-1 px-6 py-4 text-center ${
                    i > 0
                      ? "border-t border-gray-100 sm:border-l sm:border-t-0"
                      : ""
                  }`}
                >
                  <div
                    className="text-[48px] font-bold leading-none text-gray-900"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {metric.value}
                  </div>
                  <div className="mt-2 text-[13px] font-medium uppercase tracking-wide text-gray-500">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-xs text-gray-400">
                    {metric.context}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Editorial Narrative ── */}
      <section className="bg-white px-6 pt-16 pb-16 sm:px-10 sm:pt-20 sm:pb-20">
        <div className="mx-auto max-w-3xl">
          {caseStudy.sections.map((section, i) => (
            <div
              key={section.title}
              className={
                i > 0 ? "mt-16 border-t border-gray-100 pt-16" : "pt-4"
              }
            >
              <h2
                className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {section.title}
              </h2>
              <div className="mt-6 space-y-5">
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
      </section>

      {/* ── 4. Pull Quote ── */}
      <section
        className="px-6 py-16 sm:px-10 sm:py-20"
        style={{ background: "#F9F8F6" }}
      >
        <div className="mx-auto max-w-3xl">
          <div className="flex gap-6">
            <div
              className="w-[3px] shrink-0 rounded-full"
              style={{ background: "#7c3aed" }}
            />
            <div>
              <p
                className="text-2xl font-medium leading-relaxed text-gray-800 italic sm:text-[28px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;We started with nothing — no website, no leads, no
                digital footprint. Solara AI built our entire online presence
                from scratch. Within 90 days we had over 130 inbound leads, 5
                signed contracts, and a proposal pipeline exceeding
                $800,000.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src="/images/omer.webp"
                  alt="Omer"
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Omer</p>
                  <p className="text-sm text-gray-500">
                    Founder, Maison Remodeling Group
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Results Spotlight ── */}
      <section
        className="px-6 py-16 sm:px-10 sm:py-20"
        style={{ background: "#F9F8F6" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="border-t border-gray-200 pt-16">
            <h2
              className="text-center text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Results at a Glance
            </h2>
            <p className="mt-3 text-center text-base text-gray-500">
              Measurable impact across traffic, search, social, and revenue in
              90 days.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resultMetrics.map((metric) => (
                <div
                  key={`result-${metric.label}`}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <div
                    className="text-4xl font-bold leading-none text-gray-900"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {metric.value}
                  </div>
                  <div className="mt-3 text-sm font-semibold text-gray-700">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-gray-400">
                    {metric.context}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section className="bg-white px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2
            className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="mt-8 border-t border-gray-200">
            <FaqAccordion faq={caseStudy.faq} />
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section
        className="px-6 py-16 sm:px-10 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(6, 12, 24, 0.82), rgba(6, 12, 24, 0.7)), url('/homepage-cta-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {caseStudy.cta.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            See what Solara AI can build for your business. No pressure, no
            pitch deck — just a direct conversation about your goals.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={caseStudy.cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-[999px] bg-white px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-ink-900 transition-colors duration-200 hover:bg-white/90"
            >
              Book a strategy call
            </a>
            <Link
              href="/"
              className="inline-flex items-center rounded-[999px] border border-white/20 bg-white/10 px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/16"
            >
              Learn about Solara AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
