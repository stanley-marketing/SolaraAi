import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   PartnerFinalCta
   Clean final CTA banner — light-mode, restrained gradient accent.
   Server component — no interactivity needed.
   Do NOT replicate the aurora/colorful CtaSection design.
   ────────────────────────────────────────────────────────────── */

interface CtaButton {
  label: string;
  href: string;
}

interface PartnerFinalCtaProps {
  headline: string;
  subtext: string;
  primaryCta: CtaButton;
  secondaryCta?: CtaButton;
}

export function PartnerFinalCta({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
}: PartnerFinalCtaProps) {
  return (
    <section className="border-t border-gray-100 bg-white px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <div
          className="relative overflow-hidden rounded-3xl px-10 py-16 sm:px-16 sm:py-20 text-center"
          style={{ border: "1px solid #eaecf0", background: "#fafafa" }}
        >
          {/* Background gradient accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(168,85,247,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative">
            <h2
              className="text-ink-900"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              {headline}
            </h2>

            <p
              className="mx-auto text-neutral-600"
              style={{
                fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                lineHeight: 1.65,
                fontFamily: "var(--font-body)",
                maxWidth: "48ch",
                marginBottom: "2.5rem",
              }}
            >
              {subtext}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center bg-ink-900 text-white transition-opacity hover:opacity-80"
                style={{
                  borderRadius: "999px",
                  padding: "12px 28px",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {primaryCta.label}
              </Link>

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center text-ink-900 transition-opacity hover:opacity-60"
                  style={{
                    borderRadius: "999px",
                    padding: "12px 28px",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    border: "1px solid #d1d5db",
                  }}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
