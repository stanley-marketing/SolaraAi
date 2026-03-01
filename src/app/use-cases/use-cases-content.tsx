"use client";

import Link from "next/link";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Noise } from "@/components/noise";
import { Magnetic } from "@/components/magnetic";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";
import { TiltCard } from "@/components/tilt-card";
import { PageTransition } from "@/components/page-transition";

const ownerPoints = [
  {
    title: "Calm Confidence",
    description:
      "Your brand is out in the world — telling your story exactly the way you want it told. Fresh content lands overnight on Instagram, TikTok, LinkedIn, Facebook. People are engaging, asking questions, reaching out.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Budget Intelligence",
    description:
      "Your ads are working smarter than you ever could alone. Budget isn't vanishing into guesswork — it's directed with purpose toward the people who actually need what you offer, at the moments they're most likely to say yes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Autopilot Growth",
    description:
      "Overnight adjustments happened automatically: more spend on the creative that's converting, less on the one that wasn't, new tests running quietly. Real numbers moving in the right direction — leads, bookings, sales.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Focus on Big Things",
    description:
      "You're not the one piecing it together anymore. You're the leader who gets to focus on growing the team, serving customers better, dreaming up the next offer — while marketing runs like a trusted partner.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

const marketerPoints = [
  {
    title: "No Blank-Page Panic",
    description:
      "The content machine is already turning: posts scheduled, repurposed smartly across platforms, each one rooted in real research about what resonates. No last-minute scrambles. It's cohesive, it's on-brand, it's performing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    title: "Real-Time Campaigns",
    description:
      "Your AI wingman spotted what was working overnight, shifted resources to double down, killed what wasn't pulling weight, and quietly launched a variation based on fresh audience insights.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Creative Headspace",
    description:
      "Metrics are climbing, stakeholders are nodding, and you actually have headspace for the creative thinking and storytelling that got you into this role in the first place.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Relentless Partner",
    description:
      "Like you finally have a partner who gets your style, learns fast, protects your budget, and amplifies your best work. No more flying solo at 2 a.m. You're the sharp mind with serious support.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

const useCases = [
  {
    category: "Creative",
    items: ["AI Avatar & Twin", "Social Media Content", "Video Scripts", "Blog Posts", "Email Campaigns", "Ad Creative"],
  },
  {
    category: "Engagement",
    items: ["Ad Management", "Social Scheduling", "Email Automation", "Lead Nurturing", "Audience Targeting", "Retargeting"],
  },
  {
    category: "SEO & Website",
    items: ["Keyword Research", "Content Optimization", "Technical Audits", "Rank Tracking", "Competitor Analysis", "Page Building"],
  },
];

export function UseCasesContent() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-bg-inverse overflow-hidden">
        <Noise opacity={0.05} />
        <Section className="relative z-10">
          <Reveal>
            <p className="section-label text-white/40 mb-6">Use Cases</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display text-text-inverse text-5xl sm:text-6xl md:text-7xl max-w-3xl mb-8">
              Solara works for you.
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">
              Whether you&apos;re the owner who wants calm momentum or the marketer
              who craves true backup — Solara gives you the feeling you&apos;ve been missing.
            </p>
          </Reveal>
        </Section>
      </section>

      {/* Business Owners */}
      <section className="py-[var(--section-gap)]">
        <Section>
          <Reveal>
            <p className="section-label mb-4">01 / For Business Owners</p>
            <h2 className="heading text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
              The one steering the ship.
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mb-4 leading-relaxed">
              You wake up, and the knot in your chest isn&apos;t there. Instead, there&apos;s
              steady forward motion.
            </p>
            <blockquote className="font-display text-xl md:text-2xl italic text-text-tertiary mb-14 max-w-2xl">
              &ldquo;The strategy is solid, the research is guiding us — and I don&apos;t
              have to carry it all alone.&rdquo;
            </blockquote>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {ownerPoints.map((point) => (
              <StaggerItem key={point.title}>
                <TiltCard tiltAmount={5}>
                  <div className="group h-full p-7 rounded-2xl border border-border bg-bg-primary hover:border-border-strong transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-bg-secondary flex items-center justify-center text-text-tertiary group-hover:text-text-primary transition-colors">
                        {point.icon}
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-2">
                          {point.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      </section>

      {/* Marketers */}
      <section className="py-[var(--section-gap)] bg-bg-secondary">
        <Section>
          <Reveal>
            <p className="section-label mb-4">02 / For Marketers</p>
            <h2 className="heading text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
              Your AI wingman in the arena.
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mb-4 leading-relaxed">
              You log in Monday morning and the pressure is... lighter. The content
              machine is already turning.
            </p>
            <blockquote className="font-display text-xl md:text-2xl italic text-text-tertiary mb-14 max-w-2xl">
              &ldquo;That shift — from &apos;I have to do everything&apos; to &apos;We&apos;re in this together
              and it&apos;s working&apos; — is what Solara delivers.&rdquo;
            </blockquote>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {marketerPoints.map((point) => (
              <StaggerItem key={point.title}>
                <TiltCard tiltAmount={5}>
                  <div className="group h-full p-7 rounded-2xl border border-border bg-bg-primary hover:border-border-strong transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-bg-secondary flex items-center justify-center text-text-tertiary group-hover:text-text-primary transition-colors">
                        {point.icon}
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-2">
                          {point.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      </section>

      {/* Use Case Grid */}
      <section className="py-[var(--section-gap)]">
        <Section>
          <Reveal>
            <p className="section-label mb-4">03 / Capabilities</p>
            <h2 className="heading text-4xl md:text-5xl font-bold mb-14 max-w-xl">
              Everything in one platform.
            </h2>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {useCases.map((uc) => (
              <StaggerItem key={uc.category}>
                <div className="p-7 rounded-2xl border border-border">
                  <h3 className="font-heading font-bold text-lg mb-6 pb-4 border-b border-border">
                    {uc.category}
                  </h3>
                  <ul className="space-y-3">
                    {uc.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                        <span className="h-1.5 w-1.5 rounded-full bg-text-tertiary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-bg-inverse overflow-hidden">
        <Noise opacity={0.04} />
        <Section className="relative z-10 text-center">
          <Reveal>
            <h2 className="display text-text-inverse text-4xl md:text-5xl mb-6 max-w-2xl mx-auto">
              Which one are you?
            </h2>
            <p className="text-white/50 text-base mb-10 max-w-md mx-auto">
              Whether you&apos;re steering the ship or in the arena — Solara has your back.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Magnetic>
                <Link href="/contact" className="btn-primary-inv !h-12 !px-8 !text-base">
                  Book a Free Call
                </Link>
              </Magnetic>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full text-base font-medium text-white/70 border border-white/20 hover:border-white/40 hover:text-white transition-all"
              >
                View Pricing
              </Link>
            </div>
          </Reveal>
        </Section>
      </section>
    </PageTransition>
  );
}
