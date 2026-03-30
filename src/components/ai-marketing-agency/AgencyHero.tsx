import Link from "next/link";
import { AGENCY_CONTENT } from "./content";

const { hero } = AGENCY_CONTENT;

export function AgencyHero() {
  return (
    <section
      className="relative overflow-hidden bg-white px-6 pb-24 pt-36 sm:px-10 sm:pt-44"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(17,17,17,0.07) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
      }}
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes ag-fadeup {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .ag-eyebrow  { animation: ag-fadeup 0.55s cubic-bezier(0.16,1,0.3,1) both; }
          .ag-headline { animation: ag-fadeup 0.72s cubic-bezier(0.16,1,0.3,1) 0.06s both; }
          .ag-sub      { animation: ag-fadeup 0.65s cubic-bezier(0.16,1,0.3,1) 0.14s both; }
          .ag-ctas     { animation: ag-fadeup 0.60s cubic-bezier(0.16,1,0.3,1) 0.22s both; }
          .ag-proof    { animation: ag-fadeup 0.70s cubic-bezier(0.16,1,0.3,1) 0.32s both; }
        }
      `}</style>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 55%, rgba(255,255,255,1) 100%), linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.6) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="ag-eyebrow mb-7 flex items-center gap-3">
          <span className="h-px w-10" style={{ background: "#111111" }} />
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#626262",
            }}
          >
            {hero.eyebrow}
          </p>
        </div>

        <h1
          className="ag-headline"
          style={{
            fontFamily: "var(--font-display-playfair), Georgia, serif",
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.04,
            color: "#111111",
            maxWidth: "20ch",
            marginBottom: "2rem",
          }}
        >
          Managed Marketing{" "}
          <em style={{ fontStyle: "italic", color: "#6366f1" }}>That Delivers</em>
        </h1>

        <p
          className="ag-sub"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            lineHeight: 1.72,
            color: "#626262",
            maxWidth: "52ch",
            marginBottom: "2.5rem",
          }}
        >
          {hero.subheadline}
        </p>

        <div className="ag-ctas mb-20 flex flex-wrap gap-4">
          <Link
            href={hero.cta.href}
            aria-label="Book a strategy call"
            className="group inline-flex items-center gap-2 rounded-[999px] bg-[#111111] px-6 py-3 text-[14px] font-medium tracking-[0.5px] text-white transition-all duration-200 hover:bg-[#222222] hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {hero.cta.label}
            <svg
              className="h-3.5 w-0 opacity-0 transition-all duration-200 group-hover:w-3.5 group-hover:opacity-100"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 7h12m0 0L8.5 2.5M13 7l-4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex items-center rounded-[999px] border border-[#e3e3e3] bg-white px-6 py-3 text-[14px] font-medium text-[#626262] transition-all duration-200 hover:border-[#111111] hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>

        <div
          className="ag-proof grid grid-cols-2 gap-y-6 gap-x-8 border-t pt-8 sm:grid-cols-4"
          style={{ borderColor: "#e3e3e3" }}
        >
          {hero.proofStrip.map((item) => (
            <div key={item.label}>
              <p
                style={{
                  fontFamily: "var(--font-display-playfair), Georgia, serif",
                  fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                  fontWeight: 600,
                  color: "#111111",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                {item.value}
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#626262",
                  marginTop: "0.25rem",
                  letterSpacing: "0.01em",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
