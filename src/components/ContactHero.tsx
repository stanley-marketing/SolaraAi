import { CalendlyEmbed } from "@/components/CalendlyEmbed";

export function ContactHero() {
  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 sm:py-28"
      style={{ fontFamily: "var(--font-blog)" }}
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">
            Get in touch
          </p>

          <h1
            className="mt-5 leading-[1.05] tracking-[-0.02em] text-gray-900"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              fontFamily: "var(--font-blog)",
              fontWeight: 400,
            }}
          >
            Book a free strategy call
          </h1>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-gray-200">
          <CalendlyEmbed />
        </div>

        <div className="mt-10 text-center">
          <p
            className="mx-auto max-w-lg text-gray-500"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: 1.65 }}
          >
            Tell us where your marketing stands today. In 45 minutes, we&apos;ll
            map out what Solara can do for your business — no pitch, no
            pressure.
          </p>

          <p className="mt-6 text-sm text-gray-400">
            Prefer email?{" "}
            <a
              href="mailto:contact@solaraai.com"
              className="text-gray-600 underline underline-offset-2 transition-colors duration-150 hover:text-gray-900"
            >
              contact@solaraai.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
