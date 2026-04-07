import Link from "next/link";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

const playfair = "var(--font-display-playfair), Georgia, serif";

export default function CaseStudyNotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-ink-900">
      <TopNav />
      <section className="flex flex-1 items-center justify-center px-6 pt-32 pb-20 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Case study not found
          </p>
          <h1
            className="mb-6 text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: playfair, color: "#111111" }}
          >
            We could not find{" "}
            <span className="italic">that case study.</span>
          </h1>
          <p
            className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-gray-500 sm:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The page you are looking for may have moved or no longer exists.
            Browse our case studies or get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/case-study"
              className="inline-flex items-center rounded-[999px] bg-black px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-white transition-colors duration-200 hover:bg-gray-700"
            >
              See all case studies
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-[999px] border border-line bg-white/60 px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-ink-900 backdrop-blur-sm transition-colors duration-200 hover:bg-gray-100"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
