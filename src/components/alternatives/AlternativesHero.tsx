import Link from "next/link";

export function AlternativesHero() {
  return (
    <section
      className="relative bg-white"
      style={{
        paddingTop: "144px",
        paddingBottom: "80px",
      }}
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes alt-fadeup {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .alt-eyebrow  { animation: alt-fadeup 0.55s cubic-bezier(0.16,1,0.3,1) both; }
          .alt-headline { animation: alt-fadeup 0.72s cubic-bezier(0.16,1,0.3,1) 0.07s both; }
          .alt-sub      { animation: alt-fadeup 0.65s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
          .alt-ctas     { animation: alt-fadeup 0.60s cubic-bezier(0.16,1,0.3,1) 0.24s both; }
        }
      `}</style>

      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <div
          className="alt-eyebrow"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <span style={{ display: "block", width: "28px", height: "1px", background: "#d0d5dd" }} />
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#98a2b3",
            }}
          >
            Alternatives Hub
          </p>
          <span style={{ display: "block", width: "28px", height: "1px", background: "#d0d5dd" }} />
        </div>

        <h1
          className="alt-headline"
          style={{
            fontFamily: "var(--font-display-playfair), Georgia, serif",
            fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#111111",
            marginBottom: "24px",
            textWrap: "balance" as const,
          }}
        >
          Solara AI is the best alternative to{" "}
          <em style={{ fontStyle: "italic" }}>disconnected marketing tools</em>
        </h1>

        <p
          className="alt-sub"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            lineHeight: 1.72,
            color: "#667085",
            maxWidth: "54ch",
            margin: "0 auto 36px",
          }}
        >
          Compare Solara against individual tools across content, social, and ad creative. See what
          changes when AI-powered execution replaces scattered workflows.
        </p>

        <div
          className="alt-ctas"
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-[999px] bg-[#111111] px-6 py-3 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-[#222222] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
          >
            Book a strategy call
          </Link>
          <Link
            href="/ai-marketing-platform"
            className="inline-flex items-center rounded-[999px] border border-[#d0d5dd] px-6 py-3 text-[14px] font-medium text-[#344054] transition-colors duration-200 hover:border-[#98a2b3] hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
          >
            See the platform
          </Link>
        </div>
      </div>
    </section>
  );
}
