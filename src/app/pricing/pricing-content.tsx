"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { Noise } from "@/components/noise";
import { Magnetic } from "@/components/magnetic";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";
import { TiltCard } from "@/components/tilt-card";
import { PageTransition } from "@/components/page-transition";

type Billing = "monthly" | "quarterly" | "yearly";

const discounts: Record<Billing, number> = {
  monthly: 1,
  quarterly: 0.8,
  yearly: 0.6,
};

const billingLabels: { id: Billing; label: string; badge?: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "quarterly", label: "Quarterly", badge: "20% off" },
  { id: "yearly", label: "Yearly", badge: "40% off" },
];

interface Tier {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  custom?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Starter",
    price: 39,
    description: "For solo founders getting started with AI marketing.",
    features: [
      "1 brand profile",
      "Content generation (10/month)",
      "Basic SEO monitoring",
      "Email support",
      "Community access",
    ],
  },
  {
    name: "Pro",
    price: 89,
    description: "For growing teams that need serious marketing power.",
    features: [
      "3 brand profiles",
      "Unlimited content generation",
      "Ad management (1 platform)",
      "Full SEO engine",
      "Priority support",
      "Weekly performance reports",
    ],
  },
  {
    name: "Premium",
    price: 179,
    description: "The full marketing department. Everything, unlocked.",
    features: [
      "10 brand profiles",
      "Unlimited everything",
      "Multi-platform ad management",
      "Advanced analytics & attribution",
      "Dedicated account manager",
      "Custom content strategy",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Agency",
    price: 0,
    description: "For agencies managing multiple client accounts at scale.",
    features: [
      "Unlimited brand profiles",
      "White-label options",
      "Client dashboard",
      "Bulk content operations",
      "Custom integrations",
      "Dedicated success team",
      "Custom SLA",
    ],
    custom: true,
  },
];

const pricingFaq = [
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes. Upgrade or downgrade at any time. When you upgrade, you'll be prorated for the remainder of your billing period. When you downgrade, the change takes effect at the next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We offer a 14-day free trial on all plans. No credit card required. You'll have full access to all features during the trial period.",
  },
  {
    question: "What happens when I hit my content limit?",
    answer:
      "On the Starter plan, you'll get a notification when you're approaching your limit. You can upgrade at any time to unlock unlimited content generation.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee on all plans. If Solara isn't the right fit, we'll refund your payment — no questions asked.",
  },
];

export function PricingContent() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const discount = discounts[billing];

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-40 pb-20">
        <Section className="text-center">
          <Reveal>
            <p className="section-label mb-4">Pricing</p>
            <h1 className="heading text-5xl md:text-6xl font-bold mb-6 max-w-2xl mx-auto">
              Simple, transparent pricing.
            </h1>
            <p className="text-text-secondary text-lg max-w-md mx-auto mb-6">
              Start free for 14 days. No credit card required. Scale when you&apos;re ready.
            </p>
            <p className="text-sm text-text-tertiary mb-12">
              <span className="inline-flex items-center gap-1.5 bg-bg-secondary text-text-primary font-medium px-3 py-1 rounded-full text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                127 teams signed up this month
              </span>
            </p>
          </Reveal>

          {/* Billing Toggle */}
          <Reveal delay={0.15}>
            <div className="inline-flex items-center rounded-full border border-border p-1 mb-4">
              {billingLabels.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBilling(b.id)}
                  className="relative px-5 py-2.5 text-sm font-medium rounded-full transition-colors"
                >
                  {b.id === billing && (
                    <motion.div
                      className="absolute inset-0 bg-bg-inverse rounded-full"
                      layoutId="pricing-toggle"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 flex items-center gap-2 ${
                      b.id === billing ? "text-text-inverse" : "text-text-secondary"
                    }`}
                  >
                    {b.label}
                    {b.badge && b.id !== billing && (
                      <span className="text-[10px] font-semibold bg-bg-secondary text-text-primary px-1.5 py-0.5 rounded-full">
                        {b.badge}
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </Section>
      </section>

      {/* Tier Cards */}
      <section className="pb-[var(--section-gap)]">
        <Section>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <TiltCard tiltAmount={5}>
                <div
                  className={`relative h-full flex flex-col p-7 rounded-2xl border transition-all duration-300 ${
                    tier.popular
                      ? "border-text-primary bg-bg-inverse text-text-inverse"
                      : "border-border bg-bg-primary hover:border-border-strong"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-7 text-[11px] font-semibold bg-bg-primary text-text-primary px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}

                  <h3
                    className={`font-heading font-bold text-lg mb-2 ${
                      tier.popular ? "text-text-inverse" : ""
                    }`}
                  >
                    {tier.name}
                  </h3>

                  <div className="mb-3">
                    {tier.custom ? (
                      <span className="font-heading font-bold text-3xl">Custom</span>
                    ) : (
                      <>
                        <motion.span
                          key={`${tier.name}-${billing}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="font-heading font-bold text-4xl"
                        >
                          ${Math.round(tier.price * discount)}
                        </motion.span>
                        <span
                          className={`text-sm ml-1 ${
                            tier.popular ? "text-white/50" : "text-text-tertiary"
                          }`}
                        >
                          /mo
                        </span>
                      </>
                    )}
                  </div>

                  <p
                    className={`text-sm mb-6 leading-relaxed ${
                      tier.popular ? "text-white/60" : "text-text-secondary"
                    }`}
                  >
                    {tier.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={`shrink-0 mt-0.5 ${
                            tier.popular ? "text-white/60" : "text-text-tertiary"
                          }`}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className={tier.popular ? "text-white/80" : ""}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.custom ? "/contact" : "https://app.solaraai.com"}
                    className={`text-center rounded-full h-11 flex items-center justify-center text-sm font-medium transition-all ${
                      tier.popular
                        ? "bg-bg-primary text-text-primary hover:bg-bg-secondary"
                        : "bg-bg-inverse text-text-inverse hover:bg-accent-hover"
                    }`}
                  >
                    {tier.custom ? "Contact Sales" : "Start Free Trial"}
                  </Link>
                </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      </section>

      {/* FAQ */}
      <section className="py-[var(--section-gap)] bg-bg-secondary">
        <Section narrow>
          <Reveal>
            <h2 className="heading text-3xl md:text-4xl font-bold mb-10 text-center">
              Pricing FAQ
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Faq items={pricingFaq} />
          </Reveal>
        </Section>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-bg-inverse overflow-hidden">
        <Noise opacity={0.04} />
        <Section className="relative z-10 text-center">
          <Reveal>
            <h2 className="display text-text-inverse text-3xl md:text-4xl mb-4">
              Not sure which plan is right?
            </h2>
            <p className="text-white/50 text-base mb-8">
              Book a quick call. We&apos;ll help you find the perfect fit.
            </p>
            <Magnetic>
              <Link href="/contact" className="btn-primary-inv !h-12 !px-8">
                Book a Free Call
              </Link>
            </Magnetic>
          </Reveal>
        </Section>
      </section>
    </PageTransition>
  );
}
