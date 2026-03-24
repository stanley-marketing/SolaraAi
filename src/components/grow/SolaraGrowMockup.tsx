"use client";

const ROW_1 = [
  { name: "Facebook",   src: "/icons/facebook-svgrepo-com.svg", h: 28 },
  { name: "Instagram",  src: "/icons/ig-instagram-icon.svg",    h: 28 },
  { name: "LinkedIn",   src: "/icons/linkedin-svgrepo-com.svg", h: 28 },
  { name: "TikTok",     src: "/icons/tiktok-svgrepo-com.svg",   h: 28 },
  { name: "YouTube",    src: "/icons/youtube.svg",              h: 22 },
  { name: "X",          src: "/icons/x-2.svg",                  h: 22 },
  { name: "Meta",       src: "/icons/meta-3.svg",               h: 22 },
  { name: "Google Ads", src: "/icons/google-ads-svgrepo-com.svg", h: 28 },
];

const ROW_2 = [
  { name: "OpenAI",              src: "/icons/OpenAI-black-monoblossom.svg", h: 36 },
  { name: "Perplexity",          src: "/icons/perplexity-color.svg",         h: 28 },
  { name: "Claude",              src: "/icons/claude-color.svg",             h: 28 },
  { name: "Google",              src: "/icons/google.svg",                   h: 28 },
  { name: "Gemini",              src: "/icons/gemini-color.svg",             h: 28 },
  { name: "Grok",                src: "/icons/grok.svg",                     h: 28 },
  { name: "Google AI Overviews", src: "/icons/google-ai-overview.svg",       h: 28 },
  { name: "Analytics",           src: "/icons/google-analytics-svgrepo-com.svg", h: 28 },
];

export function SolaraGrowMockup() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "56px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.02,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundRepeat: "repeat",
        }}
      />

      <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
        <div className="grow-marquee-left">
          {[...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1].map((item, i) => (
            <div key={`r1-${item.name}-${i}`} className="grow-logo-pill">
              <img
                src={item.src}
                alt={item.name}
                style={{ height: item.h, width: "auto", objectFit: "contain" }}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 16 }} />

      <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
        <div className="grow-marquee-right">
          {[...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2].map((item, i) => (
            <div key={`r2-${item.name}-${i}`} className="grow-logo-pill">
              <img
                src={item.src}
                alt={item.name}
                style={{ height: item.h, width: "auto", objectFit: "contain" }}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes grow-scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes grow-scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .grow-marquee-left {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: grow-scroll-left 40s linear infinite;
        }
        .grow-marquee-right {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: grow-scroll-right 40s linear infinite;
        }
        .grow-logo-pill {
          border: 1px solid #eaeaea;
          border-radius: 12px;
          padding: 14px 24px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #fafafa;
          white-space: nowrap;
          font-size: 0.85rem;
          font-weight: 500;
          color: #666666;
          font-family: inherit;
        }
        @media (prefers-reduced-motion: reduce) {
          .grow-marquee-left,
          .grow-marquee-right { animation: none; }
        }
      `}</style>
    </section>
  );
}
