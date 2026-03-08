import { WebGLShader } from "@/components/WebGLShader";
import { RotatingText } from "@/components/RotatingText";
import { TopNav } from "@/components/LandingSections";
import { SectionIndex } from "@/components/SectionIndex";
import { MobileCtaBar } from "@/components/MobileCtaBar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      <TopNav />

      {/* Hero */}
      <section
        id="top"
        className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-24 text-center sm:px-10"
      >
        <WebGLShader />
        <h1
          className="relative z-10 max-w-6xl leading-[0.9] tracking-[-0.02em] text-ink-900"
          style={{
            fontSize: "clamp(3rem, 8.8vw, 8.1rem)",
            fontFamily: "var(--font-display)", fontWeight: 300,
          }}
        >
          The new era of marketing
        </h1>

        <div className="relative z-10 mt-[1.875rem] font-normal tracking-[1.5px] text-ink-900" style={{ fontSize: "clamp(1.45rem, 4vw, 1.875rem)" }}>
          <RotatingText />
        </div>

        <div className="relative z-10 mt-13 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center rounded-xl bg-black px-6 py-3 font-[family-name:var(--font-body)] text-[16px] font-medium tracking-[1px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            Start free trial
          </a>
          <a
            href="/product"
            className="inline-flex items-center rounded-xl border border-line bg-white/60 px-6 py-3 font-[family-name:var(--font-body)] text-[16px] font-medium tracking-[1px] text-ink-900 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85"
          >
            Talk To Our Experts
          </a>
        </div>
      </section>

      {/* Content sections — SectionIndex becomes sticky here */}
      <MobileCtaBar />

      <div className="relative flex">
        {/* Sticky sidebar */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-24 px-8 pt-12">
            <SectionIndex />
          </div>
        </div>

        {/* Sections */}
        <div className="flex-1">
          <section id="section-01" className="min-h-screen" />
          <section id="section-02" className="min-h-screen" />
          <section id="section-03" className="min-h-screen" />
          <section id="section-04" className="min-h-screen" />
          <section id="section-05" className="min-h-screen" />
          <section id="section-06" className="min-h-screen" />
        </div>
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
          Turn your marketing engine on.
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-[0.88rem] text-ink-700/60">
          Start free. No credit card required.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://app.solaraai.com/auth/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-ink-900 px-7 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            Start free trial
          </a>
          <a
            href="https://calendly.com/ilay-mor-solaraai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-line bg-white px-7 py-3.5 text-[0.82rem] font-medium tracking-[0.08em] text-ink-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-900/30"
          >
            Book a call
          </a>
        </div>
      </section>
    </main>
  );
}
