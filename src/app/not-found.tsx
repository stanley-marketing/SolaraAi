import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found — Solara AI",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: false },
};

const playfair = "var(--font-display-playfair), Georgia, serif";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-ink-900">
      <TopNav />
      <section className="flex flex-1 items-center justify-center px-6 pt-32 pb-20 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Error 404
          </p>
          <h1
            className="mb-6 text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: playfair, color: "#111111" }}
          >
            Page not <span className="italic">found.</span>
          </h1>
          <p
            className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-gray-500 sm:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The page you are looking for does not exist or has moved. Try one
            of the links below to get back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-[999px] bg-black px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-white transition-colors duration-200 hover:bg-gray-700"
            >
              Back to home
            </Link>
            <Link
              href="/case-study"
              className="inline-flex items-center rounded-[999px] border border-line bg-white/60 px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-ink-900 backdrop-blur-sm transition-colors duration-200 hover:bg-gray-100"
            >
              See case studies
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
