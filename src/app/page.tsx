"use client";

import { useMemo, useState } from "react";
import { WebGLShader } from "@/components/WebGLShader";

const rankings = [
  "#1 in bake-offs",
  "#1 in benchmarks",
  "#1 for complex queries",
  "#1 on G2",
];

const displayFontOptions = [
  { label: "Cormorant Garamond", value: "var(--font-display-cormorant)" },
  { label: "Playfair Display", value: "var(--font-display-playfair)" },
  { label: "EB Garamond", value: "var(--font-display-ebgaramond)" },
  { label: "Libre Baskerville", value: "var(--font-display-librebaskerville)" },
  { label: "Lora", value: "var(--font-display-lora)" },
  { label: "DM Serif Display", value: "var(--font-display-dmserif)" },
  { label: "Prata", value: "var(--font-display-prata)" },
  { label: "Bodoni Moda", value: "var(--font-display-bodonimoda)" },
  { label: "Newsreader", value: "var(--font-display-newsreader)" },
  { label: "Vidaloka", value: "var(--font-display-vidaloka)" },
];

export default function Home() {
  const [selectedDisplayFont, setSelectedDisplayFont] = useState("var(--font-display-playfair)");

  const headingStyle = useMemo(
    () => ({
      fontSize: "clamp(3rem, 8.8vw, 8.1rem)",
      fontFamily: selectedDisplayFont,
    }),
    [selectedDisplayFont]
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <WebGLShader />
      <div className="fixed top-4 right-4 z-20 rounded-md bg-white/80 px-3 py-2 text-xs text-black backdrop-blur">
        <label htmlFor="headline-font" className="block font-medium">
          Headline Font
        </label>
        <select
          id="headline-font"
          value={selectedDisplayFont}
          onChange={(event) => setSelectedDisplayFont(event.target.value)}
          className="mt-2 w-52 rounded border border-black/25 bg-white px-2 py-1.5 text-xs"
        >
          {displayFontOptions.map((font) => (
            <option key={font.value} value={font.value}>
              {font.label}
            </option>
          ))}
        </select>
      </div>
      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-24 text-center sm:px-10">
        <h1 className="max-w-6xl leading-[0.9] tracking-[-0.02em] text-black" style={headingStyle}>
          The {" "}
          <span className="inline-block text-[0.81em] font-bold tracking-[-0.02em]" style={{ fontFamily: "none" }}>
            #1
          </span>{" "}
          AI Agent for
          <span className="block">all your customer service</span>
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
