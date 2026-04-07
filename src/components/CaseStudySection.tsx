"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

const playfair = "var(--font-display-playfair), Georgia, serif";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
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

export function CaseStudySection() {
  return (
    <section
      className="px-6 py-28 sm:px-10 sm:py-32"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#9ca3af", fontFamily: "var(--font-display)" }}
          >
            Case Studies
          </p>
          <h2
            className="mb-5 text-4xl leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[56px]"
            style={{ fontFamily: playfair, color: "#111111" }}
          >
            Real businesses. <span className="italic">Real results.</span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500 sm:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How Solara AI built complete digital marketing engines for ambitious
            teams — and the measurable results that followed.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-6 px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:snap-none lg:grid-cols-2 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.slug}
              variants={itemVariants}
              className="w-[85%] shrink-0 snap-center first:ml-0 sm:w-[70%] lg:w-auto"
            >
              <Link
                href={`/case-study/${cs.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:border-gray-300 hover:shadow-lg sm:p-9 lg:p-10"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                    <Image
                      src={cs.clientLogo.src}
                      alt={cs.clientLogo.alt}
                      fill
                      sizes="40px"
                      className="object-contain p-1"
                    />
                  </div>
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Case Study · {cs.industry}
                  </p>
                </div>

                <h3
                  className="mb-5 text-2xl leading-tight tracking-[-0.01em] sm:text-3xl"
                  style={{ fontFamily: playfair, color: "#111111" }}
                >
                  {cs.heroHeadline}{" "}
                  <span className="italic">{cs.heroHighlight}</span>
                </h3>

                <p
                  className="mb-7 line-clamp-3 text-sm leading-relaxed text-gray-500 sm:text-base"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cs.executiveSummary}
                </p>

                <div className="mb-8 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                  {cs.heroMetrics.map((metric) => (
                    <div key={metric.label}>
                      <p
                        className="mb-1 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
                        style={{ fontFamily: playfair }}
                      >
                        {metric.value}
                      </p>
                      <p
                        className="text-[11px] font-medium leading-tight text-gray-500"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="flex items-center gap-2 text-sm font-medium text-gray-900 transition-all duration-200 group-hover:gap-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span>Read the full story</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <Link
            href="/case-study"
            className="inline-flex items-center rounded-[999px] border border-line bg-white/60 px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-ink-900 backdrop-blur-sm transition-colors duration-200 hover:bg-gray-100"
          >
            View all case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
