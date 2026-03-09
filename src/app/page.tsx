import { AuroraBackground } from "@/components/ui/aurora-background";

import { Ticker } from "@/components/Ticker";
import { TopNav } from "@/components/LandingSections";

import { MobileCtaBar } from "@/components/MobileCtaBar";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { MagicCard } from "@/components/ui/magic-card";
import { BeamHubSection } from "@/components/BeamHubSection";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      <TopNav />

      {/* Hero */}
      <AuroraBackground
        className="w-full px-6 pb-16 pt-44 text-center sm:px-10"
        showRadialGradient={true}
      >
        <h1
          className="relative z-10 max-w-5xl leading-[1.05] tracking-[-0.02em] text-ink-900"
          style={{
            fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
            fontFamily: "var(--font-display)", fontWeight: 300,
          }}
        >
          Looking for real marketing and real growth?
          <br className="hidden sm:block" />
          You&apos;re in the right place.
        </h1>

        <p
          className="relative z-10 mx-auto mt-8 max-w-2xl text-ink-700/70"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.6 }}
        >
          We are leading the new era of AI marketing. More marketing. More growth.
          Less cost. That&apos;s not a pitch. That&apos;s the model.
        </p>

        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center rounded-[999px] bg-black px-6 py-3 font-[family-name:var(--font-body)] text-[16px] font-medium tracking-[1px] text-white transition-colors duration-200 hover:bg-gray-700"
          >
            Sign Up
          </a>
          <a
            href="/product"
            className="inline-flex items-center rounded-[999px] border border-line bg-white/60 px-6 py-3 font-[family-name:var(--font-body)] text-[16px] font-medium tracking-[1px] text-ink-900 backdrop-blur-sm transition-colors duration-200 hover:bg-gray-100"
          >
            Contact Sales
          </a>
        </div>

        {/* Social proof */}
        <div className="relative z-10 mt-8 mb-2 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[
              'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">2,000+</span> businesses already growing
          </p>
        </div>

        <Ticker />
      </AuroraBackground>


      <div>
          <section id="section-01" className="px-6 py-28 sm:px-10">
            <div className="mx-auto max-w-3xl">
              <BlurFade delay={0}>
                <span className="inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-500">
                  Let&apos;s Be Honest
                </span>
              </BlurFade>

              <BlurFade delay={0.15}>
                <h2
                  className="mt-8 text-3xl leading-snug tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Right now someone needs exactly what you offer.
                  <br className="hidden sm:block" />
                  {" "}They just can&apos;t find you.
                </h2>
              </BlurFade>

              <div className="mt-10 space-y-6 text-lg leading-relaxed text-gray-500">
                <BlurFade delay={0.3}>
                  <p>
                    Tools break. Agencies bill. Freelancers move on. And growth —
                    real growth — never came from one channel, one campaign, or one
                    tactic.
                  </p>
                </BlurFade>

                <BlurFade delay={0.45}>
                  <p>
                    It came from everything working as one.{" "}
                    <span className="font-medium text-gray-900">Ads</span>.{" "}
                    <span className="font-medium text-gray-900">SEO</span>.{" "}
                    <span className="font-medium text-gray-900">Content</span>.{" "}
                    <span className="font-medium text-gray-900">Reputation</span>.{" "}
                    <span className="font-medium text-gray-900">Leads</span>.
                    <br />
                    Each force pushing the next, consistently. All of them pointing
                    at the same target.
                  </p>
                </BlurFade>

                <BlurFade delay={0.6}>
                  <p className="text-xl font-medium text-gray-900">
                    That used to cost a fortune.{" "}
                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                      Now it doesn&apos;t.
                    </span>
                  </p>
                </BlurFade>
              </div>
            </div>
          </section>


          {/* ========== OPTION 1A: Orbiting Services Hub ========== */}
          <section className="border-t border-gray-100 px-6 py-28 sm:px-10">
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-purple-500">⬇ Option 1A — Orbiting Services Hub</p>
            <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
              {/* Visual: Orbiting circles */}
              <BlurFade delay={0}>
                <div className="relative flex h-[420px] items-center justify-center">
                  {/* Center hub */}
                  <div className="z-10 flex h-24 w-24 items-center justify-center rounded-full bg-black text-sm font-bold text-white shadow-2xl">
                    <div className="text-center">
                      <NumberTicker value={6} className="text-2xl font-bold text-white" />
                      <p className="text-[10px] font-normal text-gray-300">services</p>
                    </div>
                  </div>
                  {/* Orbit ring */}
                  <div className="absolute h-[340px] w-[340px] rounded-full border border-gray-200" />
                  {/* Orbiting items */}
                  {[
                    { label: 'Ads', delay: 0 },
                    { label: 'SEO', delay: 3.3 },
                    { label: 'Creative', delay: 6.6 },
                    { label: 'CMS', delay: 10 },
                    { label: 'Social', delay: 13.3 },
                    { label: 'Leads', delay: 16.6 },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 bg-white text-[11px] font-medium text-gray-700 shadow-md"
                      style={{
                        animation: `orbit 20s linear infinite`,
                        animationDelay: `${-item.delay}s`,
                      }}
                    >
                      {item.label}
                    </div>
                  ))}
                  {/* Second orbit ring */}
                  <div className="absolute h-[220px] w-[220px] rounded-full border border-dashed border-gray-150" />
                </div>
              </BlurFade>

              {/* Text */}
              <div>
                <BlurFade delay={0.1}>
                  <span className="inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-500">The New Way</span>
                </BlurFade>
                <BlurFade delay={0.2}>
                  <h2 className="mt-6 text-3xl leading-snug tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]" style={{ fontFamily: 'var(--font-display)' }}>Solara is beyond AI&nbsp;marketing.</h2>
                </BlurFade>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-500">
                  <BlurFade delay={0.3}><p>It&apos;s the new way to drive real growth — through the perfect collaboration between cutting-edge AI and human expertise.</p></BlurFade>
                  <BlurFade delay={0.4}><p>AI gives you power, speed, and scale. Human expertise gives you strategy, taste, and judgment. Together they give you something that didn&apos;t exist before.</p></BlurFade>
                  <BlurFade delay={0.5}><p>A full marketing operation. Running for your business. Every single day. At a cost that will make you ask — <em>are you doing charity?</em></p></BlurFade>
                  <BlurFade delay={0.6}><p className="text-xl font-semibold text-gray-900">We&apos;re not.</p></BlurFade>
                </div>
              </div>
            </div>
          </section>

          {/* ========== OPTION 1B: Animated Beam Hub ========== */}
          <BeamHubSection />

          {/* ========== OPTION 1C: Magic Spotlight Cards ========== */}
          <section className="border-t border-gray-100 px-6 py-28 sm:px-10">
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-purple-500">⬇ Option 1C — Magic Spotlight Cards</p>
            <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
              {/* Visual: Magic Cards grid */}
              <BlurFade delay={0}>
                <div className="space-y-4">
                  <MagicCard className="p-8">
                    <div className="flex items-baseline gap-3">
                      <NumberTicker value={1} className="text-5xl font-semibold text-gray-900" />
                      <span className="text-lg text-gray-500">unified system</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Everything connected. Everything aligned.</p>
                  </MagicCard>
                  <div className="grid grid-cols-2 gap-4">
                    <MagicCard className="p-6">
                      <NumberTicker value={6} className="text-4xl font-semibold text-gray-900" />
                      <p className="mt-1 text-sm text-gray-400">AI services running</p>
                    </MagicCard>
                    <MagicCard className="p-6">
                      <NumberTicker value={24} className="text-4xl font-semibold text-gray-900" />
                      <p className="mt-1 text-sm text-gray-400">hours / day</p>
                    </MagicCard>
                  </div>
                  <MagicCard className="p-8" gradientColor="rgba(168, 85, 247, 0.12)">
                    <div className="flex items-baseline gap-2">
                      <NumberTicker value={90} className="text-5xl font-semibold text-gray-900" />
                      <span className="text-2xl font-semibold text-gray-900">%</span>
                      <span className="text-lg text-gray-500">less cost</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">vs. traditional marketing departments</p>
                  </MagicCard>
                </div>
              </BlurFade>

              {/* Text */}
              <div>
                <BlurFade delay={0.1}>
                  <span className="inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-500">The New Way</span>
                </BlurFade>
                <BlurFade delay={0.2}>
                  <h2 className="mt-6 text-3xl leading-snug tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]" style={{ fontFamily: 'var(--font-display)' }}>Solara is beyond AI&nbsp;marketing.</h2>
                </BlurFade>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-500">
                  <BlurFade delay={0.3}><p>It&apos;s the new way to drive real growth — through the perfect collaboration between cutting-edge AI and human expertise.</p></BlurFade>
                  <BlurFade delay={0.4}><p>AI gives you power, speed, and scale. Human expertise gives you strategy, taste, and judgment. Together they give you something that didn&apos;t exist before.</p></BlurFade>
                  <BlurFade delay={0.5}><p>A full marketing operation. Running for your business. Every single day. At a cost that will make you ask — <em>are you doing charity?</em></p></BlurFade>
                  <BlurFade delay={0.6}><p className="text-xl font-semibold text-gray-900">We&apos;re not.</p></BlurFade>
                </div>
              </div>
            </div>
          </section>

          {/* Remaining placeholder sections */}
          <section id="section-03" className="min-h-screen" />
          <section id="section-04" className="min-h-screen" />
          <section id="section-05" className="min-h-screen" />
          <section id="section-06" className="min-h-screen" />
      </div>
      {/* CTA Footer */}
      <section className="border-t border-line bg-shell px-6 py-20 text-center sm:px-10">
        <h2
          className="mx-auto max-w-xl leading-tight tracking-[-0.015em]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
          }}
        >
          More marketing. More growth. Less cost.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-ink-700/60">
          The largest companies in the world are doubling down on marketing right
          now. They have entire departments for it. You don&apos;t need a department
          anymore. You need Solara.
        </p>
        <p className="mx-auto mt-2 max-w-sm text-[0.85rem] text-ink-700/40">
          One flat investment. Fully managed. Built to grow with you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://app.solaraai.com/auth/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-ink-900 px-7 py-3.5 text-[16px] font-[family-name:var(--font-body)] font-medium tracking-[1px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            Let&apos;s Start Growing
          </a>
          <a
            href="https://calendly.com/ilay-mor-solaraai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-line bg-white px-7 py-3.5 text-[16px] font-[family-name:var(--font-body)] font-medium tracking-[1px] text-ink-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-900/30"
          >
            Talk To Us First
          </a>
        </div>
        <p className="mt-6 text-[0.8rem] text-ink-700/35">
          No long-term lock-ins. No confusing contracts. Just growth.
        </p>
      </section>
    </main>
  );
}
