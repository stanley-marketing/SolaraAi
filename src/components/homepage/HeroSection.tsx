import Link from "next/link";

const AVATAR_SRCS = [
  "/avatars/avatar-1.jpg",
  "/avatars/avatar-2.jpg",
  "/avatars/avatar-3.jpg",
  "/avatars/avatar-4.jpg",
  "/avatars/avatar-5.jpg",
];

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 pt-32 pb-20 text-center sm:px-10 sm:pt-36 sm:pb-28"
      aria-label="Hero"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% -10%, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10"
        style={{
          animation: "fadeInDown 0.6s ease both",
          animationDelay: "0s",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.38)",
            borderRadius: 999,
            padding: "7px 18px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            marginBottom: 28,
          }}
        >
          Autonomous Social Media Manager
        </span>
      </div>

      <h1
        className="relative z-10 mx-auto max-w-[960px] text-white"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
          fontWeight: 300,
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
          animation: "fadeInDown 0.65s ease both",
          animationDelay: "0.1s",
        }}
      >
        Your business is losing because your social media looks dead.
      </h1>

      <p
        className="relative z-10 mx-auto mt-8 max-w-2xl"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.95rem, 1.8vw, 1.125rem)",
          fontWeight: 300,
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.5)",
          animation: "fadeInDown 0.65s ease both",
          animationDelay: "0.2s",
        }}
      >
        Solara is the autonomous social media manager that builds your strategy,
        writes your scripts, directs your content, edits your videos, and
        publishes every week — so your brand stays alive while you run your
        business.
      </p>

      <div
        className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3"
        style={{
          animation: "fadeInDown 0.65s ease both",
          animationDelay: "0.3s",
        }}
      >
        <Link
          href="/contact"
          className="inline-flex items-center rounded-[999px] bg-white px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-black transition-opacity duration-200 hover:opacity-85"
        >
          Start free — $69/month after 7 days
        </Link>
        <a
          href="#how-it-works"
          className="inline-flex items-center rounded-[999px] border border-white/20 bg-transparent px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors duration-200 hover:border-white/40 hover:text-white"
        >
          See how it works
        </a>
      </div>

      <p
        className="relative z-10 mt-7"
        style={{
          fontSize: "0.75rem",
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.04em",
          animation: "fadeInDown 0.65s ease both",
          animationDelay: "0.38s",
        }}
      >
        No marketing knowledge required. No agency. No hiring. Works via
        WhatsApp.
      </p>

      <div
        className="relative z-10 my-10 h-px w-24"
        style={{
          background: "rgba(255,255,255,0.1)",
          animation: "fadeInDown 0.65s ease both",
          animationDelay: "0.42s",
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
        style={{
          animation: "fadeInDown 0.65s ease both",
          animationDelay: "0.46s",
        }}
      >
        <div className="flex -space-x-2.5">
          {AVATAR_SRCS.map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt=""
              className="h-9 w-9 rounded-full border-2 object-cover"
              style={{ borderColor: "#0a0a0a" }}
            />
          ))}
        </div>
        <p
          style={{
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.38)",
            lineHeight: 1.4,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
            2,000+
          </span>{" "}
          businesses already growing
        </p>
      </div>

      <p
        className="relative z-10 mt-8"
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.18)",
          animation: "fadeInDown 0.65s ease both",
          animationDelay: "0.5s",
        }}
      >
        Instagram · TikTok · LinkedIn · Facebook
      </p>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(10,10,10,0.6))",
        }}
      />

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
