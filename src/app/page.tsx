import { WebGLShader } from "@/components/WebGLShader";

const rankings = [
  "#1 in bake-offs",
  "#1 in benchmarks",
  "#1 for complex queries",
  "#1 on G2",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <WebGLShader />
      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-24 text-center sm:px-10">
        <h1
          className="max-w-6xl leading-[0.9] tracking-[-0.02em] text-black"
          style={{ fontSize: "clamp(3rem, 8.8vw, 8.1rem)", fontFamily: "var(--font-display-playfair)" }}
        >
          The new era of marketing
        </h1>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-black/70">
          {rankings.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
    </main>
  );
}
