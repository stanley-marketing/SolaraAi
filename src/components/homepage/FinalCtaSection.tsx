import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-32 text-center sm:px-10 sm:py-40"
      style={{ background: "#0a0a0a" }}
      aria-label="Final call to action"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <h2
          className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.15]"
          style={{
            animation: "fadeInDown 0.7s ease both",
          }}
        >
          Your brand is judged every time someone looks it up.
        </h2>

        <p
          className="mt-6 text-base leading-relaxed sm:text-lg"
          style={{
            color: "rgba(255,255,255,0.55)",
            animation: "fadeInDown 0.7s ease both 0.1s",
          }}
        >
          Make sure what they find reflects what you&apos;ve actually built.
        </p>

        <div
          style={{
            animation: "fadeInDown 0.7s ease both 0.2s",
          }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink-900 transition-opacity hover:opacity-90"
          >
            Start with Solara
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
