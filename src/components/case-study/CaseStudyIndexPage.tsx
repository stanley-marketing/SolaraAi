"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies/types";

const playfair = "var(--font-display-playfair), Georgia, serif";

const STATS = [
  {
    value: "$800K+",
    label: "Pipeline value generated",
    context: "Across signed client engagements",
  },
  {
    value: "10",
    label: "Page-1 Google rankings",
    context: "Achieved in under 24 days",
  },
  {
    value: "131",
    label: "Inbound leads",
    context: "Tracked in 27 days",
  },
  {
    value: "16K+",
    label: "Social media views",
    context: "From a single client launch",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

function CaseStudyCard({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      className="group"
    >
      <Link
        href={`/case-study/${caseStudy.slug}`}
        className="block h-full overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white transition-all duration-300 hover:border-[#d1d5db] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={caseStudy.heroImage.src}
            alt={caseStudy.heroImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="p-7 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md border border-[#f3f4f6]">
              <Image
                src={caseStudy.clientLogo.src}
                alt={caseStudy.clientLogo.alt}
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <span
              className="text-sm font-medium"
              style={{ color: "#374151", fontFamily: "var(--font-display)" }}
            >
              {caseStudy.clientName}
            </span>
          </div>

          <h2
            className="mb-3 text-2xl leading-tight tracking-[-0.01em]"
            style={{ fontFamily: playfair, color: "#0a0a0a" }}
          >
            {caseStudy.heroHeadline}{" "}
            <span style={{ color: "#0f766e" }}>{caseStudy.heroHighlight}</span>
          </h2>

          <p
            className="mb-6 line-clamp-2 text-sm leading-relaxed"
            style={{ color: "#6b7280", fontFamily: "var(--font-display)" }}
          >
            {caseStudy.executiveSummary}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {[
              caseStudy.industry,
              caseStudy.location,
              caseStudy.engagementPeriod,
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#f3f4f6] bg-[#f9fafb] px-3 py-1 text-[11px] uppercase tracking-[0.08em]"
                style={{ color: "#9ca3af", fontFamily: "var(--font-display)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:gap-3"
            style={{ color: "#0a0a0a", fontFamily: "var(--font-display)" }}
          >
            <span>Read the story</span>
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function PlaceholderCard() {
  return (
    <motion.div variants={itemVariants} custom={2} className="group">
      <Link
        href="/contact"
        className="flex h-full min-h-[440px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#d1d5db] bg-white p-10 text-center transition-all duration-300 hover:bg-[#fafafa] hover:border-[#9ca3af]"
      >
        <div
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#e5e7eb] bg-[#f9fafb]"
          style={{ color: "#9ca3af" }}
        >
          <Plus size={22} />
        </div>
        <h3
          className="mb-3 text-xl"
          style={{ fontFamily: playfair, color: "#0a0a0a" }}
        >
          Your story could be next
        </h3>
        <p
          className="mb-8 max-w-xs text-sm leading-relaxed"
          style={{ color: "#6b7280", fontFamily: "var(--font-display)" }}
        >
          We&apos;re onboarding new clients across home services, professional
          services, and SaaS.
        </p>
        <span
          className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:gap-3"
          style={{ color: "#374151", fontFamily: "var(--font-display)" }}
        >
          Become a client
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </Link>
    </motion.div>
  );
}

export function CaseStudyIndexPage({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <div className="min-h-screen bg-white" style={{ color: "#0a0a0a" }}>
      <section className="px-6 pb-20 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-4xl">
          <p
            className="mb-6 animate-fade-up text-[11px] uppercase tracking-[0.18em]"
            style={{ color: "#9ca3af", fontFamily: "var(--font-display)" }}
          >
            Case Studies
          </p>

          <h1
            className="animate-fade-up mb-6 text-5xl leading-[1.08] tracking-[-0.02em] sm:text-6xl lg:text-7xl"
            style={{
              fontFamily: playfair,
              animationDelay: "80ms",
            }}
          >
            Real businesses.{" "}
            <span
              className="block"
              style={{ color: "#0f766e" }}
            >
              Real results.
            </span>
          </h1>

          <p
            className="animate-fade-up mb-10 max-w-2xl text-lg leading-relaxed sm:text-xl"
            style={{
              color: "#6b7280",
              fontFamily: "var(--font-display)",
              animationDelay: "160ms",
            }}
          >
            How Solara AI built complete digital marketing engines for ambitious
            teams — and the measurable results that followed.
          </p>

          <div
            className="animate-fade-up flex flex-wrap gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0a0a0a] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#1a1a1a] hover:shadow-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book a strategy call
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-6 py-3 text-sm font-medium transition-all duration-200 hover:border-[#d1d5db] hover:bg-[#f9fafb]"
              style={{ color: "#374151", fontFamily: "var(--font-display)" }}
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#f3f4f6] bg-[#fafafa]">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="grid grid-cols-2 divide-x divide-y divide-[#f3f4f6] sm:grid-cols-4 sm:divide-y-0">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="px-6 py-10 sm:px-8"
              >
                <p
                  className="mb-1.5 text-3xl font-semibold tracking-tight sm:text-4xl"
                  style={{ color: "#0f766e", fontFamily: playfair }}
                >
                  {stat.value}
                </p>
                <p
                  className="mb-1 text-sm font-medium"
                  style={{ color: "#0a0a0a", fontFamily: "var(--font-display)" }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#9ca3af", fontFamily: "var(--font-display)" }}
                >
                  {stat.context}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10"
          >
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} index={i} />
            ))}
            <PlaceholderCard />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24 sm:px-10 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            className="mb-5 text-4xl leading-tight tracking-[-0.02em] text-white sm:text-5xl"
            style={{ fontFamily: playfair }}
          >
            Ready to see results like these?
          </h2>
          <p
            className="mb-10 text-lg leading-relaxed"
            style={{ color: "#9ca3af", fontFamily: "var(--font-display)" }}
          >
            Every result you just read started with a 30-minute strategy call.
            Yours can too.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-all duration-200 hover:bg-[#f9fafb] hover:shadow-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book a strategy call
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-[#374151] px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:border-[#6b7280] hover:bg-white/5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              See pricing
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
