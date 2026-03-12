/* ──────────────────────────────────────────────────────────────
   PartnerPitchBlock
   Three side-by-side (desktop) / stacked (mobile) pitch sections.
   Server component — no interactivity needed.
   ────────────────────────────────────────────────────────────── */

interface PitchBlock {
  headline: string;
  body: string;
}

interface PartnerPitchBlockProps {
  blocks: [PitchBlock, PitchBlock, PitchBlock];
}

export function PartnerPitchBlock({ blocks }: PartnerPitchBlockProps) {
  return (
    <section className="border-t border-gray-100 bg-white px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {blocks.map((block, i) => {
            const isLast = i === blocks.length - 1;
            return (
              <div
                key={i}
                className={[
                  "flex flex-col py-10 sm:py-0 sm:px-10",
                  !isLast
                    ? "border-b border-[#eaecf0] sm:border-b-0 sm:border-r sm:border-[#eaecf0]"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
              {/* Subtle numbered label */}
              <span
                className="mb-5 text-neutral-400"
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.12em",
                  fontWeight: 500,
                }}
              >
                0{i + 1}
              </span>

              <h2
                className="text-ink-900"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: "0.75rem",
                }}
              >
                {block.headline}
              </h2>

              <p
                className="text-neutral-500"
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  fontFamily: "var(--font-body)",
                  maxWidth: "38ch",
                }}
              >
                {block.body}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
