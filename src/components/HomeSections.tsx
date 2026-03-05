"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const operatingBlocks = [
  {
    title: "Plan in one board",
    body: "Weekly strategy, campaign decisions, and content priorities are mapped in one command layer.",
    stat: "1 weekly narrative",
    placeholder: "Planning board image placeholder",
    palette: "bg-[linear-gradient(145deg,#f5ede0_0%,#ecddcb_58%,#f8f3ea_100%)]",
  },
  {
    title: "Execute across channels",
    body: "Paid, content, and social actions move as one system instead of disconnected task lists.",
    stat: "5 channels synchronized",
    placeholder: "Channel orchestration image placeholder",
    palette: "bg-[linear-gradient(145deg,#edf3fa_0%,#d8e6f5_57%,#f3f8fc_100%)]",
  },
  {
    title: "Learn every day",
    body: "Performance trends are captured and turned into the next decision cycle automatically.",
    stat: "24/7 learning loop",
    placeholder: "Optimization loop image placeholder",
    palette: "bg-[linear-gradient(145deg,#f2ece3_0%,#e8dccf_57%,#f7f3ec_100%)]",
  },
];

const pageCards = [
  {
    label: "Product",
    title: "System overview and setup",
    copy: "Where teams configure strategy, automations, and launch checklists.",
    href: "/product",
    placeholder: "Product page screenshot placeholder",
    theme: "bg-[linear-gradient(145deg,#f6efe3_0%,#e8dac7_56%,#f9f4ed_100%)]",
  },
  {
    label: "Analytics",
    title: "Performance intelligence",
    copy: "Dashboards and attribution snapshots for fast executive decisions.",
    href: "/analytics",
    placeholder: "Analytics page screenshot placeholder",
    theme: "bg-[linear-gradient(145deg,#edf3fb_0%,#d8e5f4_56%,#f3f8fd_100%)]",
  },
  {
    label: "AI Ads Agent",
    title: "Autonomous ads cockpit",
    copy: "Creative testing and budget shifts managed as a continuous loop.",
    href: "/ai-ads-agent",
    placeholder: "AI ads page screenshot placeholder",
    theme: "bg-[linear-gradient(145deg,#efe7f7_0%,#ddd1f0_56%,#f5eefc_100%)]",
  },
  {
    label: "Content",
    title: "Blog and article hub",
    copy: "Structured as a publication where long-form posts, insights, and guides live.",
    href: "/content",
    placeholder: "Blog/article page screenshot placeholder",
    theme: "bg-[linear-gradient(145deg,#f5ece3_0%,#ebddd0_56%,#f8f2ea_100%)]",
  },
  {
    label: "Contact",
    title: "Conversion-focused booking",
    copy: "A direct path for visitors to book strategy calls and become pipeline.",
    href: "/contact",
    placeholder: "Contact page screenshot placeholder",
    theme: "bg-[linear-gradient(145deg,#eff5ed_0%,#dbe8d8_56%,#f5faf3_100%)]",
  },
];

const featuredArticle = {
  category: "Editorial",
  title: "How premium brands are replacing fragmented marketing stacks with one operating system.",
  excerpt:
    "Featured article placeholder copy. This module is designed to mirror the future content page structure: hero article, metadata, and direct read path.",
  date: "Mar 2026",
  readTime: "9 min read",
  href: "/content",
};

const articleCards = [
  {
    category: "Playbook",
    title: "A practical weekly ritual for paid, organic, and lifecycle alignment.",
    date: "Mar 2026",
    readTime: "6 min read",
    placeholder: "Article card image placeholder",
  },
  {
    category: "Analytics",
    title: "The scorecard template that helps founders spot growth friction early.",
    date: "Feb 2026",
    readTime: "5 min read",
    placeholder: "Article chart placeholder",
  },
  {
    category: "Creative",
    title: "Creative testing frameworks for velocity without brand inconsistency.",
    date: "Feb 2026",
    readTime: "7 min read",
    placeholder: "Article creative placeholder",
  },
];

const signalMetrics = [
  { value: "37%", label: "more qualified pipeline" },
  { value: "4.2x", label: "campaign iteration speed" },
  { value: "11 hrs", label: "weekly team time recovered" },
  { value: "92%", label: "automations running daily" },
];

export function HomeSections() {
  return (
    <>
      <OperatingModelSection />
      <PageArchitectureSection />
      <EditorialSection />
      <SignalSection />
      <FinalCtaSection />
      <HomeFooter />
    </>
  );
}

function OperatingModelSection() {
  return (
    <section className="relative overflow-hidden bg-white py-26 sm:py-34">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(0,0,0,0.06),transparent_40%),radial-gradient(circle_at_88%_82%,rgba(0,0,0,0.05),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.78, ease: EASE }}
          className="max-w-3xl"
        >
          <span className="inline-block text-[0.67rem] font-semibold uppercase tracking-[0.21em] text-ink-700">
            Home architecture
          </span>
          <h2
            className="mt-4 text-[clamp(2.15rem,5vw,4rem)] leading-[0.95] tracking-[-0.03em] text-ink-900"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            Built as a complete story
            <span className="italic text-ink-700"> after the hero.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-[1.78] text-ink-700">
            These sections are freshly coded for the homepage and follow the existing design
            system. Each block supports a clear narrative: model, pages, editorial depth, and
            conversion.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {operatingBlocks.map((block, index) => (
            <motion.article
              key={block.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.72, delay: index * 0.08, ease: EASE }}
              className="rounded-[1.8rem] border border-line bg-shell p-5 sm:p-6"
            >
              <div className={`rounded-[1.2rem] border border-black/8 p-3 ${block.palette}`}>
                <div className="flex aspect-[16/10] items-end rounded-[0.9rem] border border-black/12 bg-white/67 p-3">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink-700/90">
                    {block.placeholder}
                  </span>
                </div>
              </div>

              <h3
                className="mt-5 text-[clamp(1.45rem,2.6vw,2rem)] leading-[1.02] tracking-[-0.02em] text-ink-900"
                style={{ fontFamily: "var(--font-display-playfair)" }}
              >
                {block.title}
              </h3>
              <p className="mt-3 text-[0.9rem] leading-[1.74] text-ink-700">{block.body}</p>
              <p className="mt-4 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-700">
                {block.stat}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PageArchitectureSection() {
  return (
    <section className="relative overflow-hidden bg-black py-26 text-white sm:py-34">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.16),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.11),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.76, ease: EASE }}
          className="max-w-3xl"
        >
          <span className="inline-block text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-white/62">
            Page map
          </span>
          <h2
            className="mt-4 text-[clamp(2.1rem,4.8vw,3.9rem)] leading-[0.96] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            Every route has a focused mission.
          </h2>
          <p className="mt-5 max-w-2xl text-[0.93rem] leading-[1.8] text-white/68">
            The homepage introduces the ecosystem and routes visitors into dedicated pages. Each
            tile includes an intentional screenshot placeholder so visual assets can be swapped in
            later.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pageCards.map((card, index) => (
            <motion.article
              key={card.href}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.68, delay: index * 0.05, ease: EASE }}
              className="rounded-[1.75rem] border border-white/14 bg-white/6 p-5 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-white/68">
                  {card.label}
                </span>
                <span className="rounded-full border border-white/22 px-2.5 py-1 text-[0.57rem] font-semibold uppercase tracking-[0.12em] text-white/62">
                  Route
                </span>
              </div>

              <h3
                className="mt-4 text-[clamp(1.45rem,2.8vw,2rem)] leading-[1.03] tracking-[-0.02em] text-white"
                style={{ fontFamily: "var(--font-display-playfair)" }}
              >
                {card.title}
              </h3>

              <p className="mt-3 text-[0.87rem] leading-[1.72] text-white/64">{card.copy}</p>

              <div className={`mt-5 rounded-[1.15rem] border border-white/18 p-3 ${card.theme}`}>
                <div className="flex aspect-[16/10] items-end rounded-[0.85rem] border border-black/12 bg-white/70 p-3">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.13em] text-black/72">
                    {card.placeholder}
                  </span>
                </div>
              </div>

              <Link
                href={card.href}
                className="mt-5 inline-flex items-center rounded-full border border-white/24 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
              >
                Open page
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialSection() {
  return (
    <section className="relative overflow-hidden bg-shell py-26 sm:py-34">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease: EASE }}
          className="mb-10 flex flex-wrap items-end justify-between gap-5"
        >
          <div className="max-w-3xl">
            <span className="inline-block text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-ink-700">
              Blog architecture
            </span>
            <h2
              className="mt-4 text-[clamp(2.1rem,4.9vw,3.85rem)] leading-[0.95] tracking-[-0.03em] text-ink-900"
              style={{ fontFamily: "var(--font-display-playfair)" }}
            >
              Home preview for the article experience.
            </h2>
          </div>

          <Link
            href="/content"
            className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-ink-900 transition-colors duration-300 hover:bg-black hover:text-white"
          >
            Explore content page
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid gap-6 rounded-[1.9rem] border border-line bg-white p-5 sm:p-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
        >
          <div className="rounded-[1.2rem] border border-black/8 bg-[linear-gradient(145deg,#f5ecdf_0%,#e7d7c4_55%,#f7f1e7_100%)] p-3">
            <div className="flex aspect-[16/11] items-end rounded-[0.95rem] border border-black/12 bg-white/68 p-4">
              <span className="text-[0.61rem] font-semibold uppercase tracking-[0.14em] text-ink-700/90">
                Featured article image placeholder
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.13em] text-ink-700">
              <span className="rounded-full border border-line bg-fog px-2.5 py-1">
                {featuredArticle.category}
              </span>
              <span>{featuredArticle.date}</span>
              <span className="h-1 w-1 rounded-full bg-ink-700" />
              <span>{featuredArticle.readTime}</span>
            </div>

            <h3
              className="mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-[0.98] tracking-[-0.025em] text-ink-900"
              style={{ fontFamily: "var(--font-display-playfair)" }}
            >
              {featuredArticle.title}
            </h3>

            <p className="mt-4 max-w-xl text-[0.92rem] leading-[1.78] text-ink-700">
              {featuredArticle.excerpt}
            </p>

            <Link
              href={featuredArticle.href}
              className="mt-6 inline-flex w-fit items-center rounded-full bg-black px-5 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white transition-opacity duration-300 hover:opacity-90"
            >
              Read featured article
            </Link>
          </div>
        </motion.article>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {articleCards.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.66, delay: index * 0.06, ease: EASE }}
              className="rounded-[1.55rem] border border-line bg-white p-4"
            >
              <div className="rounded-[0.95rem] border border-black/8 bg-[linear-gradient(145deg,#f2ece3_0%,#e8ddd1_54%,#f7f2ea_100%)] p-2.5">
                <div className="flex aspect-[16/10] items-end rounded-[0.75rem] border border-black/12 bg-white/67 p-3">
                  <span className="text-[0.56rem] font-semibold uppercase tracking-[0.12em] text-ink-700/90">
                    {article.placeholder}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-[0.57rem] font-semibold uppercase tracking-[0.12em] text-ink-700">
                <span>{article.category}</span>
                <span className="h-1 w-1 rounded-full bg-ink-700" />
                <span>{article.date}</span>
                <span className="h-1 w-1 rounded-full bg-ink-700" />
                <span>{article.readTime}</span>
              </div>

              <h3
                className="mt-3 text-[clamp(1.3rem,2.5vw,1.8rem)] leading-[1.05] tracking-[-0.02em] text-ink-900"
                style={{ fontFamily: "var(--font-display-playfair)" }}
              >
                {article.title}
              </h3>

              <Link
                href="/content"
                className="mt-5 inline-flex items-center rounded-full border border-line px-3.5 py-2 text-[0.59rem] font-semibold uppercase tracking-[0.13em] text-ink-900 transition-colors duration-300 hover:bg-black hover:text-white"
              >
                Open article
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalSection() {
  return (
    <section className="relative overflow-hidden bg-white py-26 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(0,0,0,0.06),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: EASE }}
          className="max-w-3xl"
        >
          <span className="inline-block text-[0.66rem] font-semibold uppercase tracking-[0.19em] text-ink-700">
            Signal layer
          </span>
          <h2
            className="mt-4 text-[clamp(2rem,4.6vw,3.5rem)] leading-[0.96] tracking-[-0.03em] text-ink-900"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            Outcomes, not activity logs.
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {signalMetrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.62, delay: index * 0.05, ease: EASE }}
              className="rounded-2xl border border-line bg-fog/55 px-4 py-5"
            >
              <p
                className="text-[1.8rem] leading-none tracking-[-0.03em] text-ink-900"
                style={{ fontFamily: "var(--font-display-playfair)" }}
              >
                {metric.value}
              </p>
              <p className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-700">
                {metric.label}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-black py-26 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.14),transparent_44%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.78, ease: EASE }}
          className="rounded-[2rem] border border-white/15 bg-white/5 px-5 py-12 backdrop-blur-sm sm:px-9"
        >
          <span className="text-[0.64rem] font-semibold uppercase tracking-[0.17em] text-white/60">
            Next step
          </span>
          <h2
            className="mt-5 text-[clamp(2rem,4.8vw,3.8rem)] leading-[0.95] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            Launch your autonomous marketing stack.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[0.93rem] leading-[1.8] text-white/68">
            Use the product pages for depth, the content page for education, and the contact page
            for conversion.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-black transition-opacity duration-300 hover:opacity-90"
            >
              Book a call
            </Link>
            <Link
              href="/content"
              className="inline-flex items-center rounded-full border border-white/28 px-6 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Read the journal
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HomeFooter() {
  return (
    <footer className="border-t border-line bg-white px-6 py-8 sm:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3">
        <span
          className="text-[0.88rem] leading-none tracking-[0.14em] text-ink-900"
          style={{ fontFamily: "var(--font-display-playfair)" }}
        >
          Solara
        </span>

        <div className="flex flex-wrap items-center gap-4 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-ink-700">
          <Link href="/product" className="transition-colors duration-300 hover:text-ink-900">
            Product
          </Link>
          <Link href="/analytics" className="transition-colors duration-300 hover:text-ink-900">
            Analytics
          </Link>
          <Link href="/content" className="transition-colors duration-300 hover:text-ink-900">
            Content
          </Link>
          <Link href="/contact" className="transition-colors duration-300 hover:text-ink-900">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
