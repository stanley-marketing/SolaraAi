"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
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
import { TiltCard } from "@/components/tilt-card";
import { RoiCalculator } from "@/components/roi-calculator";
import { PageTransition } from "@/components/page-transition";
import { Parallax } from "@/components/parallax";
import { posts } from "@/data/posts";
import { PostCard } from "@/components/post-card";

const HeroScene = dynamic(
  () => import("@/components/hero-scene").then((m) => ({ default: m.HeroScene })),
  { ssr: false }
);

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

export function HomeContent() {
  return (
    <PageTransition>
      {/* ─── 01 / HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[120svh] hero-gradient overflow-hidden">
        <HeroScene />
        <Noise opacity={0.05} />

        <Parallax speed={0.55} mobileSpeed={0.06} className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute -top-28 -left-20 h-[400px] w-[400px] rounded-full bg-white/[0.06] blur-3xl" />
        </Parallax>
        <Parallax speed={0.72} mobileSpeed={0.08} className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute top-[24%] right-[6%] h-[220px] w-[220px] rounded-full border border-white/[0.18]" />
        </Parallax>
        <Parallax speed={-0.35} mobileSpeed={-0.04} className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute bottom-[12%] left-[10%] h-[180px] w-[180px] rounded-full border border-white/[0.14]" />
        </Parallax>

        <Section className="relative z-10 pt-28 pb-16 min-h-[108svh] flex items-center">
          <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-14 items-center w-full">
            <div>
              <Reveal variant="fade-up" delay={0.05}>
                <Image
                  src="/images/logo.svg"
                  alt="Solara AI"
                  width={220}
                  height={48}
                  className="h-10 md:h-12 w-auto invert mb-7"
                  priority
                />
              </Reveal>

              <Reveal variant="fade-up" delay={0.12}>
                <p className="section-label text-white/55 mb-5">
                  AI Marketing Platform Built to Convert
                </p>
              </Reveal>

              <h1 className="display text-text-inverse text-5xl sm:text-6xl md:text-7xl lg:text-[78px] mb-5 max-w-3xl">
                <TextReveal text="Own the market on" className="text-text-inverse" />
                <br />
                <WordCycle
                  words={["auto-pilot", "overdrive", "full intent", "your terms"]}
                  className="text-white/75 h-[1.1em]"
                />
              </h1>

              <Reveal variant="fade-up" delay={0.26}>
                <p className="text-white/60 text-lg md:text-xl max-w-xl mb-9 leading-relaxed">
                  Solara runs your storytelling, ad optimization, and growth strategy
                  in one system, so your team ships faster and closes more.
                </p>
              </Reveal>

              <Reveal variant="fade-up" delay={0.35}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Magnetic>
                    <Link href="/contact" className="btn-primary-inv !h-12 !px-8 !text-base">
                      Start Free Strategy Call
                    </Link>
                  </Magnetic>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 h-12 px-7 rounded-full text-base font-medium text-white/75 border border-white/20 hover:border-white/45 hover:text-white transition-all"
                  >
                    View Pricing
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </Reveal>

              <Reveal variant="fade-up" delay={0.46}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <AvatarStack inverted count="500+" label="teams trust Solara" />
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    127 teams joined this month
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="relative hidden xl:block max-w-[520px] w-full ml-auto pr-4">
              <Parallax speed={0.9} mobileSpeed={0.1}>
                <TiltCard tiltAmount={4}>
                  <div className="rounded-2xl border border-white/20 bg-white/[0.06] backdrop-blur-md p-6">
                    <p className="section-label text-white/50 mb-4">Live Growth Pulse</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-white/80">
                        <span>Qualified Leads</span>
                        <span className="font-heading text-lg text-white">+67%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[67%] bg-white/70" />
                      </div>
                      <div className="flex items-center justify-between text-sm text-white/80">
                        <span>Ad Waste Reduced</span>
                        <span className="font-heading text-lg text-white">-26%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[74%] bg-white/55" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Parallax>

              <Parallax speed={-0.55} mobileSpeed={-0.08} className="absolute -bottom-7 -left-7 w-[72%] max-w-[360px]">
                <div className="rounded-2xl border border-white/18 bg-black/45 backdrop-blur-md p-5">
                  <p className="text-xs uppercase tracking-[0.08em] text-white/45 mb-2">Campaign Engine</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Auto-testing 54 creatives, reallocating budget hourly, and
                    publishing top-performing variants across channels.
                  </p>
                </div>
              </Parallax>
            </div>
          </div>
        </Section>
      </section>

      {/* ─── 02 / LOGO CLOUD ────────────────────────────────── */}
      <section className="py-16 border-b border-border">
        <Section>
          <Reveal>
            <p className="section-label text-center mb-8">
              Trusted by forward-thinking teams
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <span className="text-xs font-medium text-text-secondary bg-bg-secondary px-3 py-1 rounded-full">
                500+ active teams
              </span>
              <span className="text-xs font-medium text-text-secondary bg-bg-secondary px-3 py-1 rounded-full">
                Avg 3x ROI
              </span>
              <span className="text-xs font-medium text-text-secondary bg-bg-secondary px-3 py-1 rounded-full">
                4.9/5 satisfaction
              </span>
            </div>
          </Reveal>
          <Parallax speed={0.24} mobileSpeed={0.03}>
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
          </Parallax>
        </Section>
      </section>

      {/* ─── 03 / THREE PILLARS ─────────────────────────────── */}
      <section className="py-[var(--section-gap)]">
        <Section>
          <Parallax speed={0.22} mobileSpeed={0.03}>
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
          </Parallax>

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
            ].map((pillar, index) => (
              <StaggerItem key={pillar.title}>
                <Parallax speed={0.35 + index * 0.08} mobileSpeed={0.04 + index * 0.01}>
                  <TiltCard tiltAmount={6}>
                    <div className="group h-full p-8 surface-card hover:border-text-primary">
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
                  </TiltCard>
                </Parallax>
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
            <p className="text-text-secondary text-lg max-w-2xl mb-10">
              Choose your role and see exactly how Solara removes friction from your day-to-day.
            </p>
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
            ].map((step, index) => (
              <StaggerItem key={step.step}>
                <Parallax speed={0.3 + index * 0.05} mobileSpeed={0.03}>
                  <div className="relative surface-card p-6 md:p-7">
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
                </Parallax>
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
          <Reveal>
            <p className="section-label text-white/45 text-center mb-10">Performance Snapshot</p>
          </Reveal>
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
          <Parallax speed={0.28} mobileSpeed={0.03}>
            <TestimonialGrid />
          </Parallax>
        </Section>
      </section>

      {/* ─── ROI CALCULATOR ────────────────────────────────── */}
      <section className="py-[var(--section-gap)] bg-bg-secondary">
        <Section>
          <Reveal>
            <p className="section-label mb-4">06 / See Your ROI</p>
            <h2 className="heading text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
              Calculate your savings.
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mb-12 leading-relaxed">
              Drag the sliders to see how much time and money Solara could save
              your team every month.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <RoiCalculator />
          </Reveal>
        </Section>
      </section>

      {/* ─── BLOG PREVIEW ───────────────────────────────────── */}
      <section className="py-[var(--section-gap)]">
        <Section>
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="section-label mb-4">07 / From The Blog</p>
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
            {posts.slice(0, 3).map((post, index) => (
              <StaggerItem key={post.slug} className={index === 0 ? "md:col-span-2" : ""}>
                <Parallax speed={0.24} mobileSpeed={0.03}>
                  <PostCard post={post} featured={index === 0} />
                </Parallax>
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
                <p className="section-label mb-4">08 / FAQ</p>
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
              <div className="surface-card p-5 md:p-6">
                <Faq items={homeFaq} />
              </div>
            </Reveal>
          </div>
        </Section>
      </section>

      {/* ─── 09 / FINAL CTA ─────────────────────────────────── */}
      <section className="relative py-28 bg-bg-inverse overflow-hidden">
        <Noise opacity={0.04} />
        <Section className="relative z-10 text-center">
          <Parallax speed={0.26} mobileSpeed={0.03}>
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
          </Parallax>
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
    </PageTransition>
  );
}
