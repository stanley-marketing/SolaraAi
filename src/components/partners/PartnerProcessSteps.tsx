/* ──────────────────────────────────────────────────────────────
   PartnerProcessSteps
   How-it-works section: numbered 3-step horizontal/stacked layout.
   Layout mirrors ContactProcess.tsx structure but uses NO whileInView.
   Server component — no interactivity needed.
   ────────────────────────────────────────────────────────────── */

interface ProcessStep {
  number: string;
  label: string;
  body: string;
}

interface PartnerProcessStepsProps {
  steps: [ProcessStep, ProcessStep, ProcessStep];
}

export function PartnerProcessSteps({ steps }: PartnerProcessStepsProps) {
  return (
    <section className="border-t border-gray-100 bg-white px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-5xl">

        {/* Section heading */}
        <h2
          className="text-ink-900"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "3.5rem",
          }}
        >
          How it works
        </h2>

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col">
              {/* Top rule */}
              <div
                aria-hidden
                style={{
                  width: "100%",
                  height: "1px",
                  background:
                    "linear-gradient(to right, #d1d5db 0%, transparent 80%)",
                  marginBottom: "20px",
                }}
              />

              {/* Number row */}
              <div className="mb-4 flex items-center gap-3">
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-body)",
                    color: "#9ca3af",
                    letterSpacing: "0.1em",
                    fontWeight: 500,
                  }}
                >
                  {step.number}
                </span>
                {/* Gradient accent dot */}
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)",
                  }}
                />
              </div>

              {/* Step label */}
              <p
                className="text-ink-900"
                style={{
                  fontSize: "1rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}
              >
                {step.label}
              </p>

              {/* Step body */}
              <p
                className="text-neutral-500"
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  fontFamily: "var(--font-body)",
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
