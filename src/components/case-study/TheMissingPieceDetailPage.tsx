"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies/types";

const playfair = "var(--font-display-playfair), Georgia, serif";


const fadeIn: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const RANKINGS = [
  { keyword: "lifestyle coaching", position: 1.0 },
  { keyword: "lifestyle coach", position: 1.0 },
  { keyword: "life coaching", position: 1.12 },
  { keyword: "sober coach", position: 1.33 },
  { keyword: "relationship coaching", position: 1.75 },
  { keyword: "life coach", position: 1.95 },
  { keyword: "recovery coaching", position: 2.8 },
  { keyword: "life coach Glasgow", position: 3.57 },
  { keyword: "mental health coaching", position: 4.17 },
  { keyword: "trauma coach", position: 5.92 },
];

const AI_PLATFORMS = [
  {
    name: "Perplexity AI",
    status: "Confirmed",
    detail:
      "Cites homepage, /services, and /contact for branded queries — confirmed within 24 days of launch.",
  },
  {
    name: "Google AI Overviews",
    status: "Partial",
    detail:
      "Triggered for 2 of 5 tested queries: lifestyle coach UK and what is lifestyle coaching.",
  },
  {
    name: "ChatGPT",
    status: "Partial",
    detail:
      "Recognises Alistair's name. Limited detail due to training cutoff constraints.",
  },
  {
    name: "Gemini",
    status: "Partial",
    detail: "Surfaced name and some information in responses.",
  },
];

const DELIVERABLES = [
  "Custom Next.js 16 website on Vercel with Tailwind 4 and Framer Motion.",
  "7 fully developed service pages with schema markup.",
  "3 SEO-targeted location pages: Glasgow, Edinburgh, and Scotland.",
  "48 blog posts planned, with 12 live and 36 scheduled via cron.",
  "ISR plus daily 6 am UTC blog publishing workflow.",
  "WhatsApp floating button, sticky mobile CTA, and custom favicon.",
  "GA4 with Consent Mode v2 and full Google Search Console setup.",
  "LocalBusiness, ProfessionalService, FAQPage, and BreadcrumbList schema rollout.",
  "Two rounds of DataForSEO research with 30 keywords audited and 19 validated.",
  "12-week social content plan backed by platform research.",
  "Weeks 1–4 content produced across video, carousel, Facebook, LinkedIn, and Sunday Check-In formats.",
  "ElevenLabs v3 voice clone plus launch of @theemissingpiece.shorts on TikTok.",
];

export function TheMissingPieceDetailPage({ caseStudy }: { caseStudy: CaseStudy }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white" style={{ color: "#0a0a0a" }}>

      <section className="px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-44">
        <div className="mx-auto max-w-[760px]">

          <nav
            className="mb-12 flex items-center gap-2 text-[11px] uppercase tracking-[0.14em]"
            style={{ color: "#9ca3af" }}
          >
            <Link href="/" className="transition-colors hover:text-[#0a0a0a]">
              Home
            </Link>
            <span aria-hidden>·</span>
            <Link href="/case-study" className="transition-colors hover:text-[#0a0a0a]">
              Case Studies
            </Link>
            <span aria-hidden>·</span>
            <span>The Missing Piece</span>
          </nav>

          <p
            className="mb-8 text-[11px] uppercase tracking-[0.18em]"
            style={{ color: "#6b7280" }}
          >
            Case Study &nbsp;&middot;&nbsp; Life Coaching &nbsp;&middot;&nbsp; Glasgow
          </p>

          <h1
            style={{
              fontFamily: playfair,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: "#0a0a0a",
              marginBottom: "1.5rem",
            }}
          >
            Page&thinsp;1 in 24&thinsp;days.
          </h1>

          <p
            className="text-lg sm:text-xl"
            style={{ color: "#6b7280", lineHeight: 1.7, maxWidth: "52ch" }}
          >
            How Solara AI took a Glasgow life coach from invisible to indexed — 10
            page&#8209;1 rankings, 16,081 Instagram views, and a Perplexity AI citation,
            without a single paid ad.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Image
              src="/images/case-studies/alistair.webp"
              alt="Alistair Johnstone, founder of The Missing Piece"
              width={52}
              height={52}
              priority
              className="rounded-full object-cover"
              style={{ width: 52, height: 52 }}
            />
            <div>
              <p className="text-sm font-semibold" style={{ color: "#0a0a0a" }}>
                Alistair Johnstone
              </p>
              <p className="text-xs" style={{ color: "#9ca3af" }}>
                The Missing Piece &middot; Glasgow, Scotland
              </p>
            </div>
            <div
              className="text-xs"
              style={{
                borderLeft: "1px solid #e5e7eb",
                paddingLeft: "1rem",
                marginLeft: "0.25rem",
                color: "#9ca3af",
              }}
            >
              {caseStudy.engagementPeriod}
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-6 py-12 sm:px-10"
        style={{ borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}
      >
        <div className="mx-auto max-w-[760px]">
          <div className="grid grid-cols-2 gap-y-10 sm:flex sm:divide-x sm:divide-gray-200">
            {[
              { value: "84", label: "Pages Built" },
              { value: "10", label: "Page-1 Rankings" },
              { value: "16,081", label: "Instagram Views" },
              { value: "24", label: "Days to Rank" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center sm:flex-1 sm:px-8 sm:first:pl-0 sm:last:pr-0"
              >
                <p
                  style={{
                    fontFamily: playfair,
                    fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: "#0f766e",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-2 text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: "#9ca3af" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto max-w-[760px]">
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-12">

            <div>
              <h2
                style={{
                  fontFamily: playfair,
                  fontSize: "1.5rem",
                  fontStyle: "italic",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "#0a0a0a",
                  marginBottom: "1.25rem",
                }}
              >
                The Challenge.
              </h2>
              <p
                className="text-base"
                style={{ color: "#6b7280", lineHeight: 1.75 }}
              >
                {caseStudy.challenge}
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Outdated, fragmented web presence",
                  "Zero organic search visibility",
                  "No content system or publishing cadence",
                  "32 five-star reviews hidden from search",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "#6b7280" }}
                  >
                    <span
                      className="mt-px shrink-0 select-none"
                      style={{ color: "#d1d5db" }}
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: playfair,
                  fontSize: "1.5rem",
                  fontStyle: "italic",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "#0a0a0a",
                  marginBottom: "1.25rem",
                }}
              >
                The Strategy.
              </h2>
              <p
                className="text-base"
                style={{ color: "#6b7280", lineHeight: 1.75 }}
              >
                Solara AI built a full digital marketing engine from scratch: technical SEO
                foundation, local search signals, a 48-post content pipeline, platform-native
                social production, and AI visibility infrastructure — all in 24 days.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "84-page Next.js website engineered for conversion",
                  "Two DataForSEO keyword rounds, 19 validated targets",
                  "12-week social content plan, weeks 1–4 produced",
                  "ElevenLabs v3 voice clone for consistent video output",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "#6b7280" }}
                  >
                    <span
                      className="mt-px shrink-0 select-none"
                      style={{ color: "#d1d5db" }}
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </motion.section>

      <section
        className="px-6 py-24 sm:px-10 sm:py-32"
        style={{ borderTop: "1px solid #e5e7eb", background: "#f9fafb" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeIn}
          className="mx-auto max-w-[760px]"
        >
          <p
            className="mb-4 text-[11px] uppercase tracking-[0.16em]"
            style={{ color: "#9ca3af" }}
          >
            SEO Performance
          </p>
          <h2
            style={{
              fontFamily: playfair,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#0a0a0a",
              marginBottom: "0.75rem",
            }}
          >
            10 Page-1 Rankings in 24 Days.
          </h2>
          <p
            className="mb-14 text-base"
            style={{ color: "#6b7280", lineHeight: 1.7 }}
          >
            From a standing start, across national coaching terms and local intent keywords.
          </p>

          <table className="w-full border-collapse">
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                <th
                  className="pb-3 text-left text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: "#9ca3af", fontWeight: 600 }}
                >
                  Keyword
                </th>
                <th
                  className="pb-3 text-right text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: "#9ca3af", fontWeight: 600 }}
                >
                  Avg. Position
                </th>
              </tr>
            </thead>
            <tbody>
              {RANKINGS.map((r) => (
                <tr key={r.keyword} style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td
                    className="py-3.5 text-sm capitalize"
                    style={{ color: "#0a0a0a" }}
                  >
                    {r.keyword}
                  </td>
                  <td
                    className="py-3.5 text-right font-mono text-sm"
                    style={{ color: r.position <= 2 ? "#0f766e" : "#6b7280" }}
                  >
                    #{r.position.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4"
            style={{ borderTop: "1px solid #e5e7eb", paddingTop: "2.5rem" }}
          >
            {[
              { value: "80+", label: "Keywords in SERPs" },
              { value: "726", label: "Organic Impressions" },
              { value: "23", label: "Organic Clicks" },
              { value: "82%", label: "Mobile Clicks" },
            ].map((m) => (
              <div key={m.label}>
                <p
                  style={{
                    fontFamily: playfair,
                    fontSize: "1.875rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: "#0a0a0a",
                  }}
                >
                  {m.value}
                </p>
                <p
                  className="mt-1.5 text-[11px] uppercase tracking-[0.1em]"
                  style={{ color: "#9ca3af" }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <blockquote
            className="mt-14"
            style={{ borderLeft: "2px solid #e5e7eb", paddingLeft: "1.5rem" }}
          >
            <p
              className="text-base italic"
              style={{ color: "#6b7280", lineHeight: 1.75 }}
            >
              &ldquo;Ranking #1 for lifestyle coaching and nearly #1 for life coaching
              inside 24 days is unusually fast. It shows the combination of technical
              setup, keyword targeting, and content architecture landed immediately.&rdquo;
            </p>
          </blockquote>

        </motion.div>
      </section>

      <section
        className="px-6 py-24 sm:px-10 sm:py-32"
        style={{ borderTop: "1px solid #e5e7eb" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeIn}
          className="mx-auto max-w-[760px]"
        >
          <p
            className="mb-4 text-[11px] uppercase tracking-[0.16em]"
            style={{ color: "#9ca3af" }}
          >
            Social Media
          </p>
          <h2
            style={{
              fontFamily: playfair,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#0a0a0a",
              marginBottom: "0.75rem",
            }}
          >
            Audience Built From Zero.
          </h2>
          <p
            className="mb-14 text-base"
            style={{ color: "#6b7280", lineHeight: 1.7 }}
          >
            Platform-native storytelling turned Alistair&rsquo;s lived experience into
            reach across Instagram, TikTok, Facebook, and LinkedIn.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2">

            <div className="sm:pr-12">
              <p
                className="mb-8 text-[10px] uppercase tracking-[0.16em]"
                style={{ color: "#9ca3af" }}
              >
                Instagram &middot; Mar 9 – Apr 5
              </p>
              <div className="space-y-6">
                {[
                  { value: "16,081", label: "Total Views" },
                  { value: "309", label: "New Followers" },
                  { value: "1,834", label: "Accounts Reached" },
                  { value: "671", label: "Interactions" },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{ borderBottom: "1px solid #f3f4f6", paddingBottom: "1.25rem" }}
                  >
                    <p
                      style={{
                        fontFamily: playfair,
                        fontSize: "1.875rem",
                        fontWeight: 700,
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                        color: "#0f766e",
                      }}
                    >
                      {s.value}
                    </p>
                    <p className="mt-1.5 text-xs" style={{ color: "#9ca3af" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <ul className="mt-6 space-y-1.5">
                {[
                  "Peak single-day views: 4,158 on Mar 26",
                  "Peak interaction day: 141 on Mar 31",
                  "Total reel watch time: 5+ hours",
                  "Profile visits: 219",
                ].map((note) => (
                  <li key={note} className="text-xs" style={{ color: "#9ca3af" }}>
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="mt-14 pt-14 border-t border-[#e5e7eb] sm:mt-0 sm:pt-0 sm:border-t-0 sm:border-l sm:pl-12"
              style={{ borderColor: "#e5e7eb" }}
            >
              <p
                className="mb-8 text-[10px] uppercase tracking-[0.16em]"
                style={{ color: "#9ca3af" }}
              >
                TikTok &middot; Mar 8 – Apr 4
              </p>
              <div className="space-y-6">
                {[
                  { value: "2,353", label: "Total Views" },
                  { value: "78", label: "Likes" },
                  { value: "1,899", label: "Unique Viewers" },
                  { value: "86.6%", label: "For You Traffic" },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{ borderBottom: "1px solid #f3f4f6", paddingBottom: "1.25rem" }}
                  >
                    <p
                      style={{
                        fontFamily: playfair,
                        fontSize: "1.875rem",
                        fontWeight: 700,
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                        color: "#0f766e",
                      }}
                    >
                      {s.value}
                    </p>
                    <p className="mt-1.5 text-xs" style={{ color: "#9ca3af" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <ul className="mt-6 space-y-1.5">
                {[
                  "The gym didn\u2019t fix me — 415 views",
                  "The discipline you build in the gym — 374 views",
                  "5 Things Sobriety Taught Me — 286 views",
                  "New Year\u2019s Eve 2014 changed my life — 265 views",
                ].map((note) => (
                  <li key={note} className="text-xs" style={{ color: "#9ca3af" }}>
                    {note}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <p
            className="mt-12 text-sm"
            style={{
              color: "#9ca3af",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "1.5rem",
            }}
          >
            Facebook generated 95+ likes and reactions. LinkedIn carousels outperformed text
            posts by 1.9–11.2×.
          </p>

        </motion.div>
      </section>

      <section
        className="px-6 py-24 sm:px-10 sm:py-32"
        style={{ borderTop: "1px solid #e5e7eb", background: "#f9fafb" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeIn}
          className="mx-auto max-w-[760px]"
        >
          <p
            className="mb-4 text-[11px] uppercase tracking-[0.16em]"
            style={{ color: "#9ca3af" }}
          >
            AI Search Visibility
          </p>
          <h2
            style={{
              fontFamily: playfair,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#0a0a0a",
              marginBottom: "0.75rem",
            }}
          >
            Cited by Perplexity in 24 Days.
          </h2>
          <p
            className="mb-14 text-base"
            style={{ color: "#6b7280", lineHeight: 1.7, maxWidth: "56ch" }}
          >
            Beyond Google rankings, the site was structured for AI-native discovery from day
            one. Technically sound and semantically clear enough for Perplexity to cite it
            within 24 days of launch.
          </p>

          <div style={{ borderTop: "1px solid #e5e7eb" }}>
            {AI_PLATFORMS.map((p) => (
              <div
                key={p.name}
                className="flex items-start justify-between gap-8 py-5"
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#0a0a0a" }}>
                    {p.name}
                  </p>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "#6b7280", lineHeight: 1.65 }}
                  >
                    {p.detail}
                  </p>
                </div>
                <p
                  className="shrink-0 text-[10px] uppercase tracking-[0.14em]"
                  style={{
                    color: p.status === "Confirmed" ? "#0f766e" : "#9ca3af",
                    marginTop: "0.15rem",
                  }}
                >
                  {p.status}
                </p>
              </div>
            ))}
          </div>

        </motion.div>
      </section>

      <section
        className="px-6 py-24 sm:px-10 sm:py-32"
        style={{ borderTop: "1px solid #e5e7eb" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeIn}
          className="mx-auto max-w-[760px]"
        >
          <p
            className="mb-4 text-[11px] uppercase tracking-[0.16em]"
            style={{ color: "#9ca3af" }}
          >
            Complete Deliverables
          </p>
          <h2
            style={{
              fontFamily: playfair,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#0a0a0a",
              marginBottom: "3.5rem",
            }}
          >
            A Full Marketing Engine, Built in 24 Days.
          </h2>
          <ol style={{ borderTop: "1px solid #e5e7eb" }}>
            {DELIVERABLES.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-6 py-4"
                style={{ borderBottom: "1px solid #f3f4f6" }}
              >
                <span
                  className="shrink-0 font-mono text-sm"
                  style={{ color: "#d1d5db", width: "2rem", textAlign: "right" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "#6b7280", lineHeight: 1.75 }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ol>

        </motion.div>
      </section>

      <section
        className="px-6 py-24 sm:px-10 sm:py-32"
        style={{ borderTop: "1px solid #e5e7eb", background: "#f9fafb" }}
      >
        <div className="mx-auto max-w-[760px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h2
              style={{
                fontFamily: playfair,
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                color: "#0a0a0a",
                marginBottom: "3rem",
              }}
            >
              Frequently Asked Questions.
            </h2>
          </motion.div>

          <div style={{ borderTop: "1px solid #e5e7eb" }}>
            {caseStudy.faq.map((item, i) => (
              <div key={item.question} style={{ borderBottom: "1px solid #e5e7eb" }}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-start justify-between py-5 text-left"
                >
                  <span
                    className="pr-8 text-sm leading-relaxed"
                    style={{ color: "#0a0a0a", lineHeight: 1.65 }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className="mt-0.5 h-4 w-4 shrink-0 transition-transform duration-300"
                    style={{
                      color: "#9ca3af",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div className="pb-5">
                    <p
                      className="text-sm"
                      style={{ color: "#6b7280", lineHeight: 1.75 }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-24 sm:px-10 sm:py-32"
        style={{ borderTop: "1px solid #e5e7eb" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="mx-auto max-w-[600px] text-center"
        >
          <h2
            style={{
              fontFamily: playfair,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              color: "#0a0a0a",
              marginBottom: "1rem",
            }}
          >
            {caseStudy.cta.headline}
          </h2>
          <p
            className="mb-10 text-base"
            style={{ color: "#6b7280", lineHeight: 1.7 }}
          >
            See what Solara AI can build for your business. No pitch deck, no pressure
            — just a direct conversation about your goals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={caseStudy.cta.link}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-[0.02em] transition-colors hover:bg-[#1a1a1a]"
              style={{
                background: "#0a0a0a",
                color: "#ffffff",
                border: "1px solid #0a0a0a",
              }}
            >
              Book a strategy call
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/case-study"
              className="inline-flex items-center px-7 py-3 text-sm tracking-[0.02em] transition-colors hover:bg-[#f3f4f6]"
              style={{
                color: "#6b7280",
                border: "1px solid #e5e7eb",
              }}
            >
              More case studies
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
