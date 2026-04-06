"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import { CheckCircle, ChevronDown, Trophy, ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import type {
  CaseStudy,
  CaseStudyMetric,
  CaseStudySectionBlock,
} from "@/lib/case-studies/types";

/* ── NumberTicker ── */
function NumberTicker({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(value);

  const parsed = useMemo(() => {
    const m = value.match(/^([^\d]*)(\d[\d,]*)(.*)$/);
    if (!m) return null;
    const [, prefix, numStr, suffix] = m;
    const target = parseInt(numStr.replace(/,/g, ""), 10);
    if (isNaN(target)) return null;
    return { prefix, numStr, suffix, target };
  }, [value]);

  useEffect(() => {
    if (!parsed || !isInView) return;

    const { prefix, numStr, suffix, target } = parsed;
    const duration = 1500;
    const startTime = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    let rafId: number;
    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(easeOut(progress) * target);
      const formatted = numStr.includes(",")
        ? current.toLocaleString()
        : String(current);
      setDisplayValue(`${prefix}${formatted}${suffix}`);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, parsed]);

  return <span ref={ref}>{displayValue}</span>;
}

/* ── Block Renderer ── */
function BlockRenderer({ block }: { block: CaseStudySectionBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-xl leading-[1.7] text-gray-700">{block.text}</p>
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
        <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {block.items.map((metric: CaseStudyMetric) => (
            <div
              key={`${metric.label}-${metric.value}`}
              className="rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-purple-200 hover:shadow-sm"
            >
              <div
                className="text-3xl font-bold leading-none text-gray-900"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <NumberTicker value={metric.value} />
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-gray-700">
                {metric.label}
              </div>
              <div className="mt-1 text-[11px] leading-snug text-gray-400">
                {metric.context}
              </div>
            </div>
          ))}
        </div>
      );

    case "callout":
      return (
        <div className="relative my-6 overflow-hidden rounded-2xl border-l-4 border-purple-500 bg-gradient-to-r from-purple-50 via-purple-50/40 to-white px-7 py-6">
          <p className="text-base leading-relaxed text-gray-700 italic">
            {block.text}
          </p>
        </div>
      );

    case "timeline":
      return (
        <div className="relative my-8">
          <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-300 via-purple-200 to-transparent" />
          <div className="space-y-8">
            {block.items.map((item, idx) => (
              <div key={item.day} className="relative flex gap-6">
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500 ring-4 ring-white">
                  <span className="text-xs font-bold text-white">{idx + 1}</span>
                </div>
                <div className="flex-1 pb-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">
                    {item.day}
                  </p>
                  <p className="mt-1.5 text-lg font-semibold text-gray-900">
                    {item.milestone}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "rankings":
      return (
        <div className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 bg-gradient-to-r from-purple-50 to-white px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">
              Page-1 Google Rankings
            </p>
            <p className="mt-0.5 text-sm text-gray-500">Earned within the engagement window</p>
          </div>
          <table className="w-full">
            <tbody className="divide-y divide-gray-100">
              {block.items.map((item, idx) => {
                const isTop = item.position.includes("#1");
                const isHighRank = item.position.startsWith("#") && !isTop;
                return (
                  <tr
                    key={item.keyword}
                    className={`group transition-colors hover:bg-gray-50 ${
                      idx % 2 === 1 ? "bg-gray-50/40" : ""
                    }`}
                  >
                    <td
                      className="border-l-4 px-6 py-4 text-base text-gray-900"
                      style={{
                        borderLeftColor: isTop ? "#7c3aed" : isHighRank ? "#3b82f6" : "transparent",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {isTop && <Trophy className="h-4 w-4 text-purple-500" />}
                        <span className="font-medium">{item.keyword}</span>
                        {item.note && (
                          <span className="text-xs text-gray-400">({item.note})</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span
                        className={`inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm font-bold ${
                          isTop
                            ? "bg-purple-100 text-purple-700"
                            : isHighRank
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {item.position}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );

    case "beforeAfter":
      return (
        <div className="my-10 space-y-6">
          {block.items.map((item) => (
            <div
              key={`${item.beforeLabel}-${item.afterLabel}`}
              className="relative grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch"
            >
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-7">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  {item.beforeLabel}
                </p>
                <p className="text-base leading-relaxed text-gray-600">{item.beforeText}</p>
              </div>
              <div className="hidden items-center justify-center sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <ArrowRight className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div className="rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white p-6 sm:p-7">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-600">
                  {item.afterLabel}
                </p>
                <p className="text-base font-medium leading-relaxed text-purple-900">
                  {item.afterText}
                </p>
              </div>
            </div>
          ))}
        </div>
      );

    case "channelGrid": {
      const channelStyles: Record<string, { gradient: string }> = {
        Instagram: { gradient: "from-pink-500 to-orange-400" },
        "TikTok (new account)": { gradient: "from-gray-900 to-gray-700" },
        "Facebook + LinkedIn": { gradient: "from-blue-600 to-blue-400" },
      };
      return (
        <div className="my-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((item) => {
            const style = channelStyles[item.channel] ?? { gradient: "from-gray-700 to-gray-500" };
            return (
              <div
                key={item.channel}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${style.gradient}`} />
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {item.channel}
                </p>
                <p
                  className="my-3 text-3xl font-bold text-gray-900 sm:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.metric}
                </p>
                <p className="text-xs leading-relaxed text-gray-500">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      );
    }

    case "inlineCta":
      return (
        <div className="my-10 overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-950 px-8 py-8 sm:px-10 sm:py-10">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8">
            <div>
              <p
                className="text-xl font-semibold leading-tight text-white sm:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {block.headline}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                {block.subtext}
              </p>
            </div>
            <Link
              href={block.link}
              className="inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-[999px] bg-white px-7 py-3.5 text-base font-semibold text-gray-900 transition-all hover:gap-3 hover:bg-white/90"
            >
              {block.buttonText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      );

    default:
      return null;
  }
}

function blockKey(block: CaseStudySectionBlock): string {
  switch (block.type) {
    case "paragraph":
    case "callout":
      return `${block.type}-${block.text.slice(0, 40)}`;
    case "list":
      return `${block.type}-${(block.items[0] ?? "").slice(0, 40)}`;
    case "metrics":
      return `${block.type}-${block.items.map((m) => m.label).join("-")}`;
    case "timeline":
      return `${block.type}-${block.items.map((i) => i.day).join("-")}`;
    case "rankings":
      return `${block.type}-${block.items.map((i) => i.keyword).join("-").slice(0, 40)}`;
    case "beforeAfter":
      return `${block.type}-${block.items.map((i) => i.beforeLabel).join("-")}`;
    case "channelGrid":
      return `${block.type}-${block.items.map((i) => i.channel).join("-")}`;
    case "inlineCta":
      return `${block.type}-${block.headline.slice(0, 30)}`;
    default:
      return "block";
  }
}

/* ── FAQ Accordion ── */
function FaqAccordion({ faq }: { faq: Array<{ question: string; answer: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faq.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border bg-gray-50 transition-colors ${
              isOpen ? "border-purple-200 bg-white" : "border-gray-100"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-gray-900 sm:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-all duration-200 ${
                  isOpen ? "rotate-180 text-purple-600" : "text-gray-400"
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6">
                <p className="text-base leading-relaxed text-gray-600">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Main Page Component ── */
export function MaisonDetailPage({ caseStudy }: { caseStudy: CaseStudy }) {
  const heroMetrics = caseStudy.heroMetrics;
  const dataHasChallengeSection = caseStudy.sections.some(
    (s) => s.title.toLowerCase() === "the challenge",
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      {/* ── 1. Hero ── */}
      <section
        className="px-6 pt-24 pb-32 sm:px-10 sm:pt-32 sm:pb-44"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 0%, rgba(124,58,237,0.07) 0%, transparent 70%), #F9F8F6",
        }}
      >
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-gray-600">
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
            <span className="text-gray-500">{caseStudy.clientName}</span>
          </nav>

          {/* Split layout */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left: text */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Image
                  src={caseStudy.clientLogo.src}
                  alt={caseStudy.clientLogo.alt}
                  width={36}
                  height={36}
                  className="rounded-lg object-cover"
                />
                <span className="text-sm font-medium text-gray-500">
                  {caseStudy.clientName}
                </span>
              </div>

              <h1
                className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-[64px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {caseStudy.heroHeadline}{" "}
                <span className="font-bold" style={{ color: "#7c3aed" }}>
                  {caseStudy.heroHighlight}
                </span>
              </h1>

              <p className="mt-6 text-xl leading-[1.7] text-gray-500">
                {caseStudy.executiveSummary}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
                <span>{caseStudy.industry}</span>
                <span aria-hidden="true" className="text-gray-300">
                  ·
                </span>
                <span>{caseStudy.location}</span>
                <span aria-hidden="true" className="text-gray-300">
                  ·
                </span>
                <span>{caseStudy.engagementPeriod}</span>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center rounded-[999px] bg-gray-900 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Book a strategy call
                </Link>
                <Link
                  href="/grow"
                  className="inline-flex min-h-[48px] items-center rounded-[999px] border border-gray-300 px-7 py-3.5 text-base font-semibold text-gray-700 transition-colors hover:border-gray-400"
                >
                  See how it works
                </Link>
              </div>
            </div>

            {/* Right: portrait */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={caseStudy.heroImage.src}
                alt={caseStudy.heroImage.alt}
                width={400}
                height={480}
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
                    <NumberTicker value={metric.value} />
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

      {/* ── 3. The Challenge (only if not already in sections) ── */}
      {!dataHasChallengeSection && (
        <section className="bg-white px-6 pt-20 pb-12 sm:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              The Challenge
            </p>
            <h2
              className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Where it started
            </h2>
            <p className="text-xl leading-[1.7] text-gray-700">
              {caseStudy.challenge}
            </p>
          </div>
        </section>
      )}

      {/* ── 4. Editorial Narrative ── */}
      <section
        className={`bg-white px-6 pb-24 sm:px-10 sm:pb-32 ${
          dataHasChallengeSection ? "pt-20 sm:pt-24" : "pt-8"
        }`}
      >
        <div className="mx-auto max-w-3xl">
          {caseStudy.sections.map((section, i) => (
            <div
              key={section.title}
              className={
                i > 0 ? "mt-20 border-t border-gray-100 pt-20" : "pt-4"
              }
            >
              {section.eyebrow && (
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                  {section.eyebrow}
                </p>
              )}
              <h2
                className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {section.title}
              </h2>
              <div className="mt-6 space-y-5">
                {section.blocks.map((block) => (
                  <BlockRenderer
                    key={`${section.title}-${blockKey(block)}`}
                    block={block}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Pull Quote ── */}
      <section
        className="px-6 py-24 sm:px-10 sm:py-32"
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
                className="text-3xl font-medium leading-relaxed text-gray-800 italic sm:text-[32px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;{caseStudy.quote.text}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={caseStudy.quote.avatar.src}
                  alt={caseStudy.quote.avatar.alt}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {caseStudy.quote.author}
                  </p>
                  <p className="text-sm text-gray-500">{caseStudy.quote.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section className="bg-white px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">
            Common questions
          </p>
          <h2
            className="mb-12 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently asked questions
          </h2>
          <FaqAccordion faq={caseStudy.faq} />
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
            <Link
              href={caseStudy.cta.link}
              className="inline-flex min-h-[48px] items-center rounded-[999px] bg-white px-7 py-3.5 font-[family-name:var(--font-body)] text-base font-semibold tracking-[0.5px] text-ink-900 transition-colors duration-200 hover:bg-white/90"
            >
              Book a strategy call
            </Link>
            <Link
              href="/case-study"
              className="inline-flex min-h-[48px] items-center rounded-[999px] border border-white/20 bg-white/10 px-7 py-3.5 font-[family-name:var(--font-body)] text-base font-semibold tracking-[0.5px] text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/16"
            >
              See more case studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
