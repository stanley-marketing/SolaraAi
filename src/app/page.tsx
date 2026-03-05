import { WebGLShader } from "@/components/WebGLShader";
import { RotatingText } from "@/components/RotatingText";
import { WhyNowSectionA } from "@/components/WhyNowSectionA";
import { WhyNowSectionB } from "@/components/WhyNowSectionB";
import { WhyNowSectionC } from "@/components/WhyNowSectionC";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <section className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-24 text-center sm:px-10">
        <WebGLShader />
        <h1
          className="relative z-10 max-w-6xl leading-[0.9] tracking-[-0.02em] text-black"
          style={{ fontSize: "clamp(3rem, 8.8vw, 8.1rem)", fontFamily: "var(--font-display-playfair)" }}
        >
          The new era of marketing
        </h1>

        <div className="relative z-10 mt-[30px] text-[clamp(1.05rem,2.2vw,1.45rem)] font-medium tracking-[1.5px] text-black/85">
          <RotatingText />
        </div>

        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center rounded-xl bg-black px-7 py-3.5 font-[family-name:var(--font-body)] text-[1rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            Start free trial
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-xl border border-black/35 bg-white/60 px-7 py-3.5 font-[family-name:var(--font-body)] text-[1rem] font-semibold text-black backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80"
          >
            View demo
          </a>
        </div>
      </section>

      {/* Section 1: Word-by-word scroll reveal — The Importance */}
      <WhyNowSectionA />

      {/* Section 2: Chaotic marquee noise — The Problem */}
      {/* <WhyNowSectionB /> */}

      {/* Section 3: Dark dramatic closer — The Answer */}
      {/* <WhyNowSectionC /> */}
    </main>
  );
}
