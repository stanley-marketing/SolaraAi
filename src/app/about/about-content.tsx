"use client";

import Link from "next/link";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { Noise } from "@/components/noise";
import { Magnetic } from "@/components/magnetic";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";
import { SubscribeForm } from "@/components/subscribe-form";
import { PageTransition } from "@/components/page-transition";

export function AboutContent() {
  return (
    <PageTransition>
      {/* ─── HERO ───────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 bg-bg-inverse overflow-hidden">
        <Noise opacity={0.05} />
        <Section className="relative z-10">
          <Reveal>
            <p className="section-label text-white/40 mb-6">About Solara</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display text-text-inverse text-5xl sm:text-6xl md:text-7xl max-w-3xl mb-8">
              The story behind the shift.
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
              We started Solara because we believed marketing should feel like having
              a brilliant partner — not a burden. Here&apos;s how we got here.
            </p>
          </Reveal>
        </Section>
      </section>

      {/* ─── MISSION ────────────────────────────────────── */}
      <section className="py-[var(--section-gap)]">
        <Section>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="section-label mb-4">01 / Our Mission</p>
                <h2 className="heading text-4xl md:text-5xl font-bold mb-6">
                  Make great marketing accessible to every business.
                </h2>
                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  Marketing used to require a huge team, massive budgets, and months of runway. 
                  We saw talented founders and lean teams struggling — not because their product 
                  was bad, but because they couldn&apos;t tell their story at scale.
                </p>
                <p className="text-text-secondary text-base leading-relaxed">
                  Solara exists to change that equation. We built an AI that doesn&apos;t just 
                  generate content — it researches your audience, crafts strategy, and executes 
                  across every channel. Storytelling, strategy, and research working as one.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 rounded-2xl border border-border bg-bg-secondary">
                <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-text-tertiary mb-8">
                  Solara at a Glance
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: 2024, label: "Founded", isYear: true },
                    { value: 500, suffix: "+", label: "Brands Served" },
                    { value: 1, prefix: "$", suffix: "M", label: "Pre-Seed Raised" },
                    { value: 50, suffix: "+", label: "Hours Saved / Week" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      {stat.isYear ? (
                        <span className="font-heading font-bold text-3xl text-text-primary">
                          {stat.value}
                        </span>
                      ) : (
                        <Counter
                          to={stat.value}
                          suffix={stat.suffix}
                          prefix={stat.prefix}
                          className="font-heading font-bold text-3xl text-text-primary"
                        />
                      )}
                      <p className="text-text-tertiary text-sm mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      </section>

      {/* ─── VALUES ─────────────────────────────────────── */}
      <section className="py-[var(--section-gap)] bg-bg-secondary">
        <Section>
          <Reveal>
            <p className="section-label mb-4">02 / Our Values</p>
            <h2 className="heading text-4xl md:text-5xl font-bold mb-14 max-w-xl">
              Principles over playbooks.
            </h2>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Human-First AI",
                description:
                  "AI should amplify human creativity, not replace it. Every feature we build starts with the question: does this give the marketer more room to think, create, and lead?",
              },
              {
                num: "02",
                title: "Radical Transparency",
                description:
                  "No black boxes. Every recommendation comes with reasoning. Every metric is real. We show you what's working, what's not, and why — because trust is built on truth.",
              },
              {
                num: "03",
                title: "Compounding Growth",
                description:
                  "We don't chase vanity spikes. We build systems that get smarter over time. Every campaign, every insight, every optimization feeds the next one. Growth that stacks.",
              },
            ].map((value) => (
              <StaggerItem key={value.num}>
                <div className="relative">
                  <span className="font-display text-6xl text-bg-tertiary select-none">
                    {value.num}
                  </span>
                  <h3 className="font-heading font-bold text-xl mt-4 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      </section>

      {/* ─── FOUNDER ────────────────────────────────────── */}
      <section className="py-[var(--section-gap)]">
        <Section>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="aspect-[4/5] rounded-2xl bg-bg-secondary border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-bg-tertiary mx-auto mb-4 flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-text-tertiary">
                      S
                    </span>
                  </div>
                  <p className="text-text-tertiary text-sm">Founder Portrait</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <p className="section-label mb-4">03 / The Founder</p>
                <h2 className="heading text-3xl md:text-4xl font-bold mb-6">
                  Built by marketers, for marketers.
                </h2>
                <blockquote className="font-display text-xl md:text-2xl italic text-text-secondary mb-6 leading-snug">
                  &ldquo;I spent 10 years watching brilliant business owners drown in marketing 
                  complexity. Solara is the partner I wish they&apos;d had.&rdquo;
                </blockquote>
                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  After a decade in performance marketing — building campaigns for agencies, 
                  startups, and enterprise brands — the pattern was clear: marketing was broken 
                  for everyone except companies with massive budgets and full departments.
                </p>
                <p className="text-text-secondary text-base leading-relaxed">
                  Solara was born from that frustration. A platform where AI handles the 
                  execution, strategy, and research — so humans can focus on what they do 
                  best: creating stories that connect.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section className="relative py-24 bg-bg-inverse overflow-hidden">
        <Noise opacity={0.04} />
        <Section className="relative z-10 text-center">
          <Reveal>
            <h2 className="display text-text-inverse text-4xl md:text-5xl mb-6 max-w-2xl mx-auto">
              Join the movement.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/50 text-base max-w-md mx-auto mb-10">
              Get weekly insights on AI marketing. No spam, unsubscribe anytime.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="max-w-md mx-auto">
              <SubscribeForm inverted />
            </div>
          </Reveal>
        </Section>
      </section>
    </PageTransition>
  );
}
