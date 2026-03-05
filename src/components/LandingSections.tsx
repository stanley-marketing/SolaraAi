"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Analytics", href: "/analytics" },
  { label: "Content", href: "/content" },
  { label: "Product", href: "/product" },
  { label: "AI Ads Agent", href: "/ai-ads-agent" },
  { label: "Contact", href: "/contact" },
];

const methodSteps = [
  {
    step: "01",
    title: "Clarity pass",
    body: "We map your positioning, audience, and channel economics into one operating brief your team can actually use.",
  },
  {
    step: "02",
    title: "System launch",
    body: "Solara spins up your growth loops across paid, organic, email, and landing pages with one consistent brand voice.",
  },
  {
    step: "03",
    title: "Daily optimization",
    body: "Underperforming campaigns are corrected in real time while winners are scaled with clear rationale and control.",
  },
  {
    step: "04",
    title: "Executive signal",
    body: "Every week ends with concise reporting: what moved, why it moved, and what happens next.",
  },
];

const proofCards = [
  {
    eyebrow: "Luxury skincare",
    title: "A premium launch sold out in 11 days.",
    body: "Creative sequencing and budget pacing drove demand without discounting, protecting brand perception while accelerating cash flow.",
    metric: "+184%",
    metricLabel: "Qualified pipeline",
  },
  {
    eyebrow: "D2C wellness",
    title: "Acquisition cost dropped while volume climbed.",
    body: "Cross-channel suppression logic reduced overlap and waste, then shifted spend to the best-converting audience pockets.",
    metric: "-31%",
    metricLabel: "Cost per acquisition",
  },
  {
    eyebrow: "B2B SaaS",
    title: "A smaller team shipped with enterprise cadence.",
    body: "Solara handled campaign operations and reporting, giving founders back time for product and sales.",
    metric: "4.7x",
    metricLabel: "Marketing velocity",
  },
];

const toplineMetrics = [
  { value: "92%", label: "of actions auto-executed" },
  { value: "7 hrs", label: "average weekly time saved" },
  { value: "3.4x", label: "median return on ad spend" },
];

const commandRows = [
  {
    task: "Meta creative rotation",
    status: "Live",
    note: "Budget shifted +18% to top performer",
    statusClass: "bg-white animate-[pulse-dot_2.6s_ease-in-out_infinite]",
  },
  {
    task: "Google search expansion",
    status: "Queued",
    note: "12 high-intent keywords added",
    statusClass: "bg-white/45",
  },
  {
    task: "Email reactivation flow",
    status: "Live",
    note: "Personalization variant B now primary",
    statusClass: "bg-white animate-[pulse-dot_2.6s_ease-in-out_infinite]",
  },
  {
    task: "Landing page test",
    status: "Review",
    note: "Variant C leads on conversion +22%",
    statusClass: "bg-white/75",
  },
];

const plans = [
  {
    name: "Foundation",
    price: "$1,900",
    cadence: "/month",
    blurb: "For early teams that need consistent presence without a full in-house marketing stack.",
    features: ["2 primary channels", "Weekly optimization", "Founders dashboard"],
    cardClass: "border-line bg-white",
    buttonClass: "border border-line text-ink-900 hover:bg-black/[0.04]",
  },
  {
    name: "Signature",
    price: "$4,800",
    cadence: "/month",
    blurb: "For growth-stage brands that want always-on orchestration with performance accountability.",
    features: ["Full channel orchestration", "Daily optimization loops", "Executive-level reporting"],
    cardClass: "border-black bg-black text-white",
    buttonClass: "bg-white text-black hover:bg-white/90",
    badge: "Most chosen",
  },
  {
    name: "Private",
    price: "Custom",
    cadence: "engagement",
    blurb: "For enterprise and premium brands with complex geography, compliance, or go-to-market needs.",
    features: ["Custom architecture", "Dedicated strategist", "White-glove onboarding"],
    cardClass: "border-line bg-white",
    buttonClass: "border border-line text-ink-900 hover:bg-black/[0.04]",
  },
];

const faqs = [
  {
    q: "Can I keep approvals before anything goes live?",
    a: "Yes. You choose your control mode per channel: fully autonomous, approval-required, or hybrid. Most teams start hybrid and expand autonomy once confidence is established.",
  },
  {
    q: "Will this replace my marketing team?",
    a: "No. Solara replaces operational drag. Your team keeps strategic direction, while repetitive execution and optimization loops run continuously in the background.",
  },
  {
    q: "How quickly do we see impact?",
    a: "Most accounts see clear signal in the first 2-3 weeks. Material compounding usually appears by month two as channel data quality improves.",
  },
  {
    q: "Can we plug into our existing tools?",
    a: "Yes. Solara is designed to sit on top of existing ad accounts, analytics stacks, and CRM workflows without forcing a full migration.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div
        className={`pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? "border border-line bg-white/82 shadow-[0_12px_35px_-28px_rgba(23,19,14,0.45)] backdrop-blur-xl"
            : "border border-transparent bg-transparent shadow-none backdrop-blur-0"
        }`}
      >
        <Link
          href="/"
          className="inline-flex items-center"
        >
          <Image src="/Logo.svg" alt="Solara AI" width={126} height={27} className="h-auto w-[126px]" priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.74rem] uppercase tracking-[0.18em] text-ink-900/80 transition-colors duration-300 hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={`inline-flex items-center rounded-full px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-ink-900 transition-colors duration-300 hover:bg-black hover:text-white ${
            isScrolled ? "border border-line" : "border border-black/20"
          }`}
        >
          Book a call
        </Link>
      </div>
    </header>
  );
}

export function MethodSection() {
  return (
    <section id="method" className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(0,0,0,0.06),transparent_48%),radial-gradient(circle_at_84%_8%,rgba(0,0,0,0.04),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-18">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.21em] text-ink-700">
            How it runs
          </span>
          <h2
            className="mt-5 max-w-xl text-[clamp(2.3rem,5vw,4.25rem)] leading-[0.95] tracking-[-0.03em] text-ink-900"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            Built like an
            <span className="italic text-ink-700"> executive operating system.</span>
          </h2>
          <p className="mt-7 max-w-md text-[0.98rem] leading-[1.8] text-ink-700">
            Solara is not a bag of prompts. It is one connected system that captures signal,
            executes across channels, and reports what matters in language your leadership team
            can act on.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-700">
            <span className="rounded-full border border-line px-3 py-1.5">Positioning intelligence</span>
            <span className="rounded-full border border-line px-3 py-1.5">Autonomous execution</span>
            <span className="rounded-full border border-line px-3 py-1.5">Clear accountability</span>
          </div>
        </motion.div>

        <div className="space-y-4">
          {methodSteps.map((item, index) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: EASE }}
              className="relative overflow-hidden rounded-[1.8rem] border border-line bg-[linear-gradient(140deg,rgba(255,255,255,0.96),rgba(244,239,231,0.88))] p-7 sm:p-8"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-black/70 via-black/35 to-transparent" />

              <div className="flex items-center gap-4">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink-700">
                  {item.step}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>

              <h3
                className="mt-4 text-[clamp(1.6rem,3.4vw,2.2rem)] leading-[1.02] tracking-[-0.02em] text-ink-900"
                style={{ fontFamily: "var(--font-display-playfair)" }}
              >
                {item.title}
              </h3>
              <p className="mt-3 max-w-lg text-[0.9rem] leading-[1.75] text-ink-700">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofSection() {
  return (
    <section id="proof" className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(0,0,0,0.04),transparent_52%),radial-gradient(circle_at_88%_90%,rgba(0,0,0,0.03),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14 max-w-3xl"
        >
          <span className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.21em] text-ink-700">
            Proof over noise
          </span>
          <h2
            className="mt-4 text-[clamp(2.2rem,5vw,4.1rem)] leading-[0.96] tracking-[-0.03em] text-ink-900"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            Performance that still
            <span className="italic text-ink-700"> feels premium.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: EASE }}
            className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-8 sm:p-10"
          >
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0)_72%)]" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-700">
              Featured engagement
            </span>
            <h3
              className="mt-4 max-w-xl text-[clamp(2rem,4.4vw,3.25rem)] leading-[0.98] tracking-[-0.025em] text-ink-900"
              style={{ fontFamily: "var(--font-display-playfair)" }}
            >
              {proofCards[0].title}
            </h3>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-[1.8] text-ink-700">{proofCards[0].body}</p>

            <div className="mt-8 inline-flex items-baseline gap-3 rounded-2xl border border-line bg-black/[0.02] px-5 py-4">
              <span
                className="text-[clamp(2.2rem,5vw,3.1rem)] leading-none tracking-[-0.03em] text-ink-900"
                style={{ fontFamily: "var(--font-display-playfair)" }}
              >
                {proofCards[0].metric}
              </span>
              <span className="max-w-[10rem] text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-ink-700">
                {proofCards[0].metricLabel}
              </span>
            </div>
          </motion.article>

          <div className="grid gap-5">
            {proofCards.slice(1).map((card, index) => (
              <motion.article
                key={card.eyebrow}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
                className="rounded-[1.75rem] border border-line bg-white p-6 sm:p-7"
              >
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-700">
                  {card.eyebrow}
                </span>
                <h3
                  className="mt-3 text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.03] tracking-[-0.022em] text-ink-900"
                  style={{ fontFamily: "var(--font-display-playfair)" }}
                >
                  {card.title}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-[1.7] text-ink-700">{card.body}</p>

                <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
                  <span
                    className="text-[2rem] leading-none tracking-[-0.03em] text-ink-900"
                    style={{ fontFamily: "var(--font-display-playfair)" }}
                  >
                    {card.metric}
                  </span>
                  <span className="text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-ink-700">
                    {card.metricLabel}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {toplineMetrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.07, ease: EASE }}
              className="rounded-2xl border border-line bg-white/82 px-5 py-4"
            >
              <span
                className="text-[1.8rem] leading-none tracking-[-0.03em] text-ink-900"
                style={{ fontFamily: "var(--font-display-playfair)" }}
              >
                {item.value}
              </span>
              <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-700">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommandDeckSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white sm:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(255,255,255,0.12),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_66%,rgba(255,255,255,0.08),transparent_46%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/55">
            Live command
          </span>
          <h2
            className="mt-4 text-[clamp(2.2rem,4.8vw,4rem)] leading-[0.95] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            A marketing floor
            <span className="italic text-white/72"> that never sleeps.</span>
          </h2>
          <p className="mt-6 max-w-md text-[0.95rem] leading-[1.82] text-white/62">
            Behind the scenes, Solara continuously monitors spend, creative fatigue, audience
            quality, and conversion friction. It intervenes early, not after the report is already
            late.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="grain-overlay relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.03] p-6 sm:p-8"
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/60">
              Real-time execution log
            </span>
            <span className="rounded-full border border-white/18 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/62">
              Updated 12s ago
            </span>
          </div>

          <ul className="space-y-3">
            {commandRows.map((row, index) => (
              <motion.li
                key={row.task}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65, delay: index * 0.07, ease: EASE }}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border border-white/12 bg-black/[0.22] px-3 py-3"
              >
                <span className={`h-2 w-2 rounded-full ${row.statusClass}`} />
                <div>
                  <p className="text-[0.88rem] font-medium text-white/92">{row.task}</p>
                  <p className="mt-0.5 text-[0.75rem] text-white/48">{row.note}</p>
                </div>
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/52">
                  {row.status}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export function EngagementSection() {
  return (
    <section id="engagement" className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: EASE }}
          className="mb-14 max-w-3xl"
        >
          <span className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.21em] text-ink-700">
            Engagement models
          </span>
          <h2
            className="mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] tracking-[-0.03em] text-ink-900"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            Choose your tempo.
            <span className="italic text-ink-700"> Scale with confidence.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.07, ease: EASE }}
              className={`relative overflow-hidden rounded-[1.85rem] border p-7 sm:p-8 ${plan.cardClass}`}
            >
              {plan.badge ? (
                <span className="absolute right-5 top-5 rounded-full border border-white/22 bg-white/8 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-white/84">
                  {plan.badge}
                </span>
              ) : null}

              <h3
                className="text-[clamp(1.7rem,3.5vw,2.3rem)] leading-[1.02] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display-playfair)" }}
              >
                {plan.name}
              </h3>

              <div className="mt-4 flex items-end gap-2">
                <span
                  className="text-[2.6rem] leading-none tracking-[-0.035em]"
                  style={{ fontFamily: "var(--font-display-playfair)" }}
                >
                  {plan.price}
                </span>
                <span className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.15em] opacity-60">
                  {plan.cadence}
                </span>
              </div>

              <p className="mt-4 text-[0.88rem] leading-[1.75] opacity-72">{plan.blurb}</p>

              <ul className="mt-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-[0.77rem] uppercase tracking-[0.13em] opacity-78">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${plan.buttonClass}`}
              >
                Request proposal
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-white py-24 sm:py-30">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: EASE }}
          className="mb-10"
        >
          <span className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink-700">
            Questions
          </span>
          <h2
            className="mt-4 text-[clamp(2rem,4.8vw,3.6rem)] leading-[0.97] tracking-[-0.03em] text-ink-900"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            Everything teams ask
            <span className="italic text-ink-700"> before they scale.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: index * 0.05, ease: EASE }}
              className="group rounded-2xl border border-line bg-white px-5 py-4"
            >
              <summary className="cursor-pointer list-none text-[0.86rem] font-semibold uppercase tracking-[0.14em] text-ink-900 marker:content-none">
                {item.q}
              </summary>
              <p className="mt-3 max-w-3xl text-[0.92rem] leading-[1.76] text-ink-700">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-16 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-[2.4rem] border border-line bg-[linear-gradient(132deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_38%,rgba(248,248,248,1)_75%)] p-8 sm:p-12 lg:p-14"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.07),transparent_70%)]" />
            <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.05),transparent_70%)]" />
          </div>

          <div className="relative max-w-3xl">
            <span className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink-700">
              Final step
            </span>
            <h2
              className="mt-4 text-[clamp(2.3rem,5.4vw,4.5rem)] leading-[0.92] tracking-[-0.03em] text-ink-900"
              style={{ fontFamily: "var(--font-display-playfair)" }}
            >
              Turn your marketing engine on.
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-[1.82] text-ink-700">
              This page uses placeholder copy, but the structure is ready: a premium narrative,
              clear differentiators, tangible proof, and a conversion path that feels deliberate.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#top"
                className="inline-flex items-center rounded-full bg-black px-6 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start now
              </a>
              <a
                href="#proof"
                className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-ink-900 transition-colors duration-300 hover:bg-black/[0.04]"
              >
                See more proof
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <a href="#top" className="inline-flex items-center">
          <Image src="/Logo.svg" alt="Solara AI" width={112} height={24} className="h-auto w-[112px]" />
        </a>
        <p className="text-[0.72rem] uppercase tracking-[0.14em] text-ink-700">
          Designed for modern premium brands.
        </p>
      </div>
    </footer>
  );
}
