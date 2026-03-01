"use client";

import Link from "next/link";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { TextReveal } from "@/components/text-reveal";
import { WordCycle } from "@/components/word-cycle";
import { Noise } from "@/components/noise";
import { Counter } from "@/components/counter";
import { Magnetic } from "@/components/magnetic";
import { PersonaToggle } from "@/components/persona-toggle";
import { FeatureTabs } from "@/components/feature-tabs";
import { TestimonialGrid } from "@/components/testimonial-grid";
import { AvatarStack } from "@/components/avatar-stack";
import { Faq } from "@/components/faq";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";
import { posts } from "@/data/posts";
import { PostCard } from "@/components/post-card";

const homeFaq = [
  {
    question: "How is Solara different from other AI marketing tools?",
    answer:
      "Most AI tools handle one slice of marketing — content, ads, or SEO. Solara is a complete marketing department: storytelling, strategy, and research all working together as one system. It doesn't just generate content; it researches your audience, crafts strategy, and executes across every channel.",
  },
  {
    question: "Will the content sound like AI wrote it?",
    answer:
      "No. Solara learns your brand voice from your existing content and messaging. It doesn't generate generic copy — it creates content that sounds like you, just faster. You always have final approval before anything goes live.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most teams see measurable improvements within 30 days — reduced ad waste, increased content output, and time savings. Significant ROI improvements (3x+) typically emerge within 60-90 days as the system learns and optimizes.",
  },
  {
    question: "Do I need a large team to use Solara?",
    answer:
      "Not at all. Solo founders use Solara as their entire marketing department. Agencies use it to scale without hiring. It adapts to teams of any size — from one-person startups to enterprise marketing departments.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── 01 / HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <Noise opacity={0.05} />
        <div className="relative z-10 text-center px-6 pt-24 pb-20 max-w-4xl mx-auto">
          <Reveal variant="fade-in" delay={0.1}>
            <p className="section-label text-white/50 mb-6">
              AI-Powered Marketing Platform
            </p>
          </Reveal>

          <h1 className="display text-text-inverse text-5xl sm:text-6xl md:text-7xl lg:text-[82px] mb-6">
            <TextReveal text="Your marketing on" className="text-text-inverse" />
            <br />
            <WordCycle
              words={["auto-pilot", "overdrive", "lock-in", "full-send"]}
              className="text-white/70 h-[1.1em]"
            />
          </h1>

          <Reveal variant="fade-up" delay={0.5}>
            <p className="text-white/55 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              A full marketing department in software. AI-powered storytelling,
              strategy, and research — running while you sleep.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={0.7}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Magnetic>
                <Link href="/contact" className="btn-primary-inv !h-12 !px-8 !text-base">
                  Book a Free Call
                </Link>
              </Magnetic>
              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full text-base font-medium text-white/70 border border-white/20 hover:border-white/40 hover:text-white transition-all"
              >
                See How It Works
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.9}>
            <div className="mt-12">
              <AvatarStack inverted count="500+" label="marketers trust Solara" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 02 / LOGO CLOUD ────────────────────────────────── */}
      <section className="py-16 border-b border-border">
        <Section>
          <Reveal>
            <p className="section-label text-center mb-8">
              Trusted by forward-thinking teams
            </p>
          </Reveal>
          <div className="relative overflow-hidden">
            <div className="flex animate-[marquee_30s_linear_infinite] gap-16 items-center">
              {[
                "Sharon Regev",
                "LEAD Ogilvy",
                "Ness Digital",
                "Recoverli",
                "RE/MAX",
                "Dentaluxe",
                "Rose Poet",
                "Sharon Regev",
                "LEAD Ogilvy",
                "Ness Digital",
                "Recoverli",
                "RE/MAX",
                "Dentaluxe",
                "Rose Poet",
              ].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-text-tertiary font-heading font-semibold text-lg whitespace-nowrap select-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ─── 03 / THREE PILLARS ─────────────────────────────── */}
      <section className="py-[var(--section-gap)]">
        <Section>
          <Reveal>
            <p className="section-label mb-4">01 / What We Believe</p>
            <h2 className="heading text-4xl md:text-5xl font-bold mb-6 max-w-2xl">
              Marketing isn&apos;t magic.
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mb-14">
              It&apos;s storytelling that connects, strategy that guides every decision,
              and research that knows exactly who&apos;s listening and why they care.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Storytelling",
                description:
                  "Content that feels personal and compelling. Your voice, amplified across every platform — short videos, carousels, posts that build trust one piece at a time.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                title: "Strategy",
                description:
                  "Every decision guided by purpose. Content flow, ad placement, lead follow-up — tied into one cohesive push that compounds over time.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                ),
              },
              {
                title: "Research",
                description:
                  "Know exactly who's listening and why they care. Audience insights, keyword intelligence, and competitive analysis — all running continuously.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                ),
              },
            ].map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="group h-full p-8 rounded-2xl border border-border bg-bg-primary hover:border-text-primary transition-all duration-500">
                  <div className="mb-6 text-text-tertiary group-hover:text-text-primary transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      </section>

      {/* ─── 04 / PERSONA TOGGLE ────────────────────────────── */}
      <section className="py-[var(--section-gap)] bg-bg-secondary">
        <Section>
          <Reveal>
            <p className="section-label mb-4">02 / Who It&apos;s For</p>
            <h2 className="heading text-4xl md:text-5xl font-bold mb-12 max-w-2xl">
              Built for the people doing the work.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <PersonaToggle />
          </Reveal>
        </Section>
      </section>

      {/* ─── 05 / HOW IT WORKS ──────────────────────────────── */}
      <section className="py-[var(--section-gap)]">
        <Section>
          <Reveal>
            <p className="section-label mb-4">03 / How It Works</p>
            <h2 className="heading text-4xl md:text-5xl font-bold mb-16 max-w-xl">
              Four steps. Full autopilot.
            </h2>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Scan & Research",
                description:
                  "AI analyzes your audience, competitors, keywords, and market — building a deep understanding of who you need to reach.",
              },
              {
                step: "02",
                title: "Plan & Strategize",
                description:
                  "A complete marketing strategy is crafted: content calendar, ad plan, SEO roadmap, and engagement sequences.",
              },
              {
                step: "03",
                title: "Create & Launch",
                description:
                  "Content, ads, and campaigns go live across platforms — all on-brand, all optimized, all scheduled for maximum impact.",
              },
              {
                step: "04",
                title: "Optimize & Grow",
                description:
                  "Continuous learning. Budget shifts to what works. Underperformers get cut. New tests run automatically. Growth compounds.",
              },
            ].map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative">
                  <span className="font-display text-6xl text-bg-tertiary font-normal select-none">
                    {step.step}
                  </span>
                  <h3 className="font-heading font-bold text-lg mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      </section>

      {/* ─── 06 / FEATURE TABS ──────────────────────────────── */}
      <section className="py-[var(--section-gap)] bg-bg-secondary">
        <Section>
          <Reveal>
            <p className="section-label mb-4">04 / The Platform</p>
            <h2 className="heading text-4xl md:text-5xl font-bold mb-12 max-w-2xl">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <FeatureTabs />
          </Reveal>
        </Section>
      </section>

      {/* ─── 07 / STATS STRIP ───────────────────────────────── */}
      <section className="relative py-24 bg-bg-inverse overflow-hidden">
        <Noise opacity={0.04} />
        <Section className="relative z-10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: 50, suffix: "+", label: "Hours saved per week" },
              { value: 67, suffix: "%", label: "Average CTR increase" },
              { value: 3, suffix: "x", label: "Average ROI" },
              { value: 500, suffix: "+", label: "Brands trust Solara" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div>
                  <Counter
                    to={stat.value}
                    suffix={stat.suffix}
                    className="font-display text-5xl md:text-6xl text-text-inverse"
                  />
                  <p className="text-white/50 text-sm mt-3">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      </section>

      {/* ─── 08 / TESTIMONIALS ──────────────────────────────── */}
      <section className="py-[var(--section-gap)]">
        <Section>
          <Reveal>
            <p className="section-label mb-4">05 / What They Say</p>
            <h2 className="heading text-4xl md:text-5xl font-bold mb-14 max-w-2xl">
              Real results from real teams.
            </h2>
          </Reveal>
          <TestimonialGrid />
        </Section>
      </section>

      {/* ─── BLOG PREVIEW ───────────────────────────────────── */}
      <section className="py-[var(--section-gap)] bg-bg-secondary">
        <Section>
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="section-label mb-4">06 / From The Blog</p>
                <h2 className="heading text-4xl md:text-5xl font-bold max-w-xl">
                  Latest insights.
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex btn-secondary !h-10 !px-5 !text-[13px]"
              >
                View All Posts
              </Link>
            </div>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post) => (
              <StaggerItem key={post.slug}>
                <PostCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="mt-8 md:hidden text-center">
            <Link href="/blog" className="btn-secondary">
              View All Posts
            </Link>
          </div>
        </Section>
      </section>

      {/* ─── FAQ PREVIEW ────────────────────────────────────── */}
      <section className="py-[var(--section-gap)]">
        <Section>
          <div className="grid md:grid-cols-2 gap-16">
            <Reveal>
              <div>
                <p className="section-label mb-4">07 / FAQ</p>
                <h2 className="heading text-4xl md:text-5xl font-bold mb-6">
                  Common questions.
                </h2>
                <p className="text-text-secondary text-base mb-6 leading-relaxed">
                  Everything you need to know about Solara. Can&apos;t find what you&apos;re
                  looking for?
                </p>
                <Link href="/faq" className="btn-secondary !h-10 !px-5 !text-[13px]">
                  See All FAQs
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Faq items={homeFaq} />
            </Reveal>
          </div>
        </Section>
      </section>

      {/* ─── 09 / FINAL CTA ─────────────────────────────────── */}
      <section className="relative py-28 bg-bg-inverse overflow-hidden">
        <Noise opacity={0.04} />
        <Section className="relative z-10 text-center">
          <Reveal>
            <h2 className="display text-text-inverse text-4xl sm:text-5xl md:text-6xl mb-6 max-w-3xl mx-auto">
              Ready to feel that calm confidence?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/50 text-lg max-w-md mx-auto mb-10">
              The strategy is solid. The research is guiding you. And you don&apos;t
              have to carry it all alone.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
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
          <Reveal delay={0.5}>
            <div className="flex justify-center">
              <AvatarStack inverted />
            </div>
          </Reveal>
        </Section>
      </section>
    </>
  );
}
