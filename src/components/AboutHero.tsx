/* ──────────────────────────────────────────────
   COPY
   ────────────────────────────────────────────── */

const TRUST_ITEMS = [
  {
    label: "AI systems",
    body: "Purpose-built automation that plans, creates, and distributes — running continuously without pause.",
  },
  {
    label: "Human expertise",
    body: "Strategists who configure, calibrate, and guide every campaign against real business objectives.",
  },
  {
    label: "One service",
    body: "Not a platform to learn. A direct service that runs your marketing from the moment you sign on.",
  },
];

/* ──────────────────────────────────────────────
   ABOUT HERO
   ────────────────────────────────────────────── */

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 sm:px-10 pt-28 pb-20 sm:pt-36 sm:pb-28">
      <style>{`
        @keyframes about-hero-fade-up {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .about-hero-item {
          opacity: 0;
          animation: about-hero-fade-up 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Atmospheric: fine dot-grid texture */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: 0.042 }}
      >
        <defs>
          <pattern
            id="about-hero-dots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#111111" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-hero-dots)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Small eyebrow label */}
        <div className="about-hero-item" style={{ animationDelay: "0s" }}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "#9ca3af" }}
          >
            About Solara AI
          </p>
        </div>

        {/* H1 */}
        <div className="about-hero-item" style={{ animationDelay: "0.08s" }}>
          <h1
            className="mt-5 max-w-[860px] leading-[1.05] tracking-[-0.02em] text-ink-900"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
              fontFamily: "var(--font-display-playfair)",
              fontWeight: 300,
            }}
          >
            Why Solara AI exists
          </h1>
        </div>

        {/* Brand accent line */}
        <div className="about-hero-item" style={{ animationDelay: "0.16s" }}>
          <div
            className="mt-8"
            style={{
              width: "60px",
              height: "2px",
              background:
                "linear-gradient(to right, rgba(168,85,247,0.9), rgba(236,72,153,0.7), rgba(251,146,60,0.5))",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Supporting copy */}
        <div className="about-hero-item" style={{ animationDelay: "0.25s" }}>
          <p
            className="mt-8 max-w-2xl text-ink-700/70"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.65,
              fontFamily: "var(--font-body)",
            }}
          >
            Solara AI is a direct marketing service — not a self-serve platform. Every
            client gets a system built from AI-native execution and human strategic
            oversight working in tandem. We run the marketing. You run the business.
          </p>
        </div>

        {/* Trust-intro: three restrained editorial items */}
        <div className="about-hero-item" style={{ animationDelay: "0.33s" }}>
          <div className="mt-14 grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-12 sm:gap-y-0">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col">
                {/* Thin top rule with gradient fade */}
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background:
                      "linear-gradient(to right, #d1d5db 0%, transparent 80%)",
                    marginBottom: "18px",
                  }}
                />
                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-900"
                  style={{ marginBottom: "8px", fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-ink-700/70"
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
