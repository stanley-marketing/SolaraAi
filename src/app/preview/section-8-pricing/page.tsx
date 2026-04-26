"use client";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Lock,
  MinusCircle,
  X,
} from "lucide-react";
import {
  BODY,
  DISPLAY,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_FAINT,
  INK_MUTED,
  INK_SOFT,
  PreviewFooter,
  ROSE,
  ROSE_DEEP,
  SHELL,
} from "@/components/homepage/teardown-parts";

type RowValue = {
  text: string;
  tone?: "positive" | "negative" | "neutral";
};

type ComparisonRow = {
  label: string;
  diy: RowValue;
  agency: RowValue;
  solara: RowValue;
};

const ROWS: ComparisonRow[] = [
  {
    label: "Monthly cost",
    diy: { text: "$0 + 40 hrs of you", tone: "neutral" },
    agency: { text: "$1,500–$2,500", tone: "negative" },
    solara: { text: "$99", tone: "positive" },
  },
  {
    label: "Hours from you",
    diy: { text: "40+", tone: "negative" },
    agency: { text: "5–10 managing them", tone: "negative" },
    solara: { text: "~30 min / day", tone: "positive" },
  },
  {
    label: "Strategy",
    diy: { text: "None", tone: "negative" },
    agency: { text: "Yes", tone: "positive" },
    solara: { text: "Yes, weekly tuned", tone: "positive" },
  },
  {
    label: "Editing",
    diy: { text: "You", tone: "negative" },
    agency: { text: "Them", tone: "neutral" },
    solara: { text: "Solara + human review", tone: "positive" },
  },
  {
    label: "Publishing",
    diy: { text: "You", tone: "negative" },
    agency: { text: "Them", tone: "neutral" },
    solara: { text: "Auto, with your approval", tone: "positive" },
  },
  {
    label: "Learns your brand",
    diy: { text: "No", tone: "negative" },
    agency: { text: "Slowly", tone: "neutral" },
    solara: { text: "Every week", tone: "positive" },
  },
];

const PROTECTIONS = [
  {
    label: "Nothing posts without your approval",
    detail: "Every draft waits for your tap. Ever.",
  },
  {
    label: "Cancel anytime",
    detail: "Month-to-month, no lock-in, no exit fee.",
  },
  {
    label: "Your data stays yours",
    detail: "No training on your content. No resale.",
  },
  {
    label: "A human on our team watches every account",
    detail: "Not every post — every edge case the AI flags.",
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div
      className="inline-flex items-center gap-3"
      style={{
        fontFamily: BODY,
        fontSize: "0.66rem",
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: INK_SOFT,
        fontWeight: 600,
      }}
    >
      <span className="h-px w-6 bg-current opacity-60" />
      {number} &middot; {label}
      <span className="relative flex h-2 w-2">
        <span
          className="absolute inset-0 animate-ping rounded-full"
          style={{ background: ROSE, opacity: 0.6 }}
        />
        <span
          className="relative h-2 w-2 rounded-full"
          style={{ background: ROSE }}
        />
      </span>
    </div>
  );
}

function ToneIcon({ tone }: { tone?: RowValue["tone"] }) {
  if (tone === "positive") {
    return (
      <CheckCircle2
        size={13}
        strokeWidth={2.2}
        style={{ color: "#22c55e", flexShrink: 0 }}
      />
    );
  }
  if (tone === "negative") {
    return (
      <X
        size={13}
        strokeWidth={2.4}
        style={{ color: ROSE_DEEP, flexShrink: 0, opacity: 0.65 }}
      />
    );
  }
  return (
    <MinusCircle
      size={13}
      strokeWidth={2}
      style={{ color: INK_FAINT, flexShrink: 0 }}
    />
  );
}

function ComparisonCard() {
  return (
    <div
      className="relative overflow-hidden rounded-sm"
      style={{
        border: `1px solid ${HAIRLINE_HEAVY}`,
        background: "#fdfcf8",
      }}
    >
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 pointer-events-none"
        style={{
          width: "33.333%",
          background: "#f0efe9",
          borderLeft: `1px solid ${HAIRLINE_HEAVY}`,
        }}
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 pointer-events-none"
        style={{
          width: "33.333%",
          height: 4,
          background: ROSE_DEEP,
        }}
      />

      <div
        className="relative grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-0"
        style={{ fontFamily: BODY }}
      >
        <div
          className="px-5 py-5"
          style={{ borderBottom: `1px solid ${HAIRLINE_HEAVY}` }}
        />
        <div
          className="flex flex-col items-start justify-end px-4 py-5"
          style={{ borderBottom: `1px solid ${HAIRLINE_HEAVY}` }}
        >
          <p
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: INK_FAINT,
              fontWeight: 700,
            }}
          >
            Option 1
          </p>
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "1.05rem",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.015em",
              marginTop: 3,
            }}
          >
            DIY, alone
          </p>
        </div>
        <div
          className="flex flex-col items-start justify-end px-4 py-5"
          style={{ borderBottom: `1px solid ${HAIRLINE_HEAVY}` }}
        >
          <p
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: INK_FAINT,
              fontWeight: 700,
            }}
          >
            Option 2
          </p>
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "1.05rem",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.015em",
              marginTop: 3,
            }}
          >
            Agency / SMM
          </p>
        </div>
        <div
          className="relative flex flex-col items-start justify-end px-4 py-5"
          style={{ borderBottom: `1px solid ${HAIRLINE_HEAVY}` }}
        >
          <p
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: ROSE_DEEP,
              fontWeight: 700,
            }}
          >
            Recommended
          </p>
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "1.05rem",
              fontWeight: 600,
              color: ROSE_DEEP,
              letterSpacing: "-0.015em",
              marginTop: 3,
            }}
          >
            Solara
          </p>
        </div>

        {ROWS.map((row, i) => (
          <div key={row.label} className="contents">
            <div
              className="flex items-center px-5 py-4"
              style={{
                borderBottom:
                  i === ROWS.length - 1
                    ? "none"
                    : `1px solid ${HAIRLINE}`,
                fontFamily: BODY,
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: INK_FAINT,
                fontWeight: 700,
              }}
            >
              {row.label}
            </div>
            <div
              className="flex items-start gap-2 px-4 py-4"
              style={{
                borderBottom:
                  i === ROWS.length - 1
                    ? "none"
                    : `1px solid ${HAIRLINE}`,
                fontFamily: BODY,
                fontSize: "0.9rem",
                color: INK,
                lineHeight: 1.35,
              }}
            >
              <ToneIcon tone={row.diy.tone} />
              <span style={{ paddingTop: 1 }}>{row.diy.text}</span>
            </div>
            <div
              className="flex items-start gap-2 px-4 py-4"
              style={{
                borderBottom:
                  i === ROWS.length - 1
                    ? "none"
                    : `1px solid ${HAIRLINE}`,
                fontFamily: BODY,
                fontSize: "0.9rem",
                color: INK,
                lineHeight: 1.35,
              }}
            >
              <ToneIcon tone={row.agency.tone} />
              <span style={{ paddingTop: 1 }}>{row.agency.text}</span>
            </div>
            <div
              className="relative flex items-start gap-2 px-4 py-4"
              style={{
                borderBottom:
                  i === ROWS.length - 1
                    ? "none"
                    : `1px solid ${HAIRLINE}`,
                fontFamily: BODY,
                fontSize: "0.92rem",
                color: INK,
                lineHeight: 1.35,
                fontWeight: 500,
              }}
            >
              <ToneIcon tone={row.solara.tone} />
              <span style={{ paddingTop: 1 }}>{row.solara.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PriceDisplay() {
  return (
    <div
      className="flex flex-col items-start rounded-sm px-8 py-7"
      style={{
        background: "#fdfcf8",
        border: `1px solid ${HAIRLINE_HEAVY}`,
      }}
    >
      <div className="flex items-baseline gap-3">
        <span
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(3rem, 6vw, 4.4rem)",
            fontWeight: 600,
            color: INK,
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
          }}
        >
          $99
        </span>
        <span
          style={{
            fontFamily: BODY,
            fontSize: "1.1rem",
            color: INK_MUTED,
            fontWeight: 500,
          }}
        >
          / month
        </span>
      </div>
      <div
        className="mt-5 flex items-center gap-3 rounded-full px-3.5 py-1.5"
        style={{
          background: `${ROSE}12`,
          border: `1px solid ${ROSE}33`,
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: ROSE_DEEP }}
        />
        <span
          style={{
            fontFamily: BODY,
            fontSize: "0.84rem",
            color: ROSE_DEEP,
            fontWeight: 600,
            letterSpacing: "-0.005em",
          }}
        >
          $69/mo billed annually &middot; save $360
        </span>
      </div>
      <p
        className="mt-5"
        style={{
          fontFamily: BODY,
          fontSize: "0.92rem",
          color: INK_MUTED,
          lineHeight: 1.55,
          maxWidth: "440px",
        }}
      >
        Less than one customer order at most businesses. Less than one client
        session. Less than one hour of a freelancer&rsquo;s time.
      </p>
      <p
        className="mt-2"
        style={{
          fontFamily: BODY,
          fontSize: "0.78rem",
          color: INK_FAINT,
          fontWeight: 500,
          fontStyle: "italic",
        }}
      >
        Annual rate locked for life, even when we raise prices.
      </p>
    </div>
  );
}

function ProtectionList() {
  return (
    <div>
      <p
        className="mb-4 inline-flex items-center gap-2"
        style={{
          fontFamily: BODY,
          fontSize: "0.6rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: ROSE_DEEP,
          fontWeight: 700,
        }}
      >
        <span
          className="h-1 w-1 rounded-full"
          style={{ background: ROSE_DEEP }}
        />
        Your protection
      </p>

      <ul className="flex flex-col">
        {PROTECTIONS.map((p, i) => (
          <li
            key={p.label}
            className="flex items-start gap-3 py-3.5"
            style={{
              borderTop: i === 0 ? `1px solid ${HAIRLINE_HEAVY}` : "none",
              borderBottom: `1px solid ${HAIRLINE}`,
            }}
          >
            <Lock
              size={14}
              strokeWidth={2}
              style={{
                color: ROSE_DEEP,
                flexShrink: 0,
                marginTop: 3,
              }}
            />
            <div className="flex flex-col">
              <span
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "0.98rem",
                  fontWeight: 500,
                  color: INK,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                {p.label}
              </span>
              <span
                className="mt-0.5"
                style={{
                  fontFamily: BODY,
                  fontSize: "0.82rem",
                  color: INK_SOFT,
                  lineHeight: 1.4,
                }}
              >
                {p.detail}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div
        className="mt-4 flex items-start gap-2 rounded-sm px-4 py-3"
        style={{
          background: "#fff9eb",
          border: "1px dashed #d4a017",
        }}
      >
        <Clock
          size={13}
          strokeWidth={2}
          style={{
            color: "#a67c00",
            flexShrink: 0,
            marginTop: 3,
          }}
        />
        <div
          style={{
            fontFamily: BODY,
            fontSize: "0.76rem",
            color: "#5c4600",
            lineHeight: 1.45,
          }}
        >
          <strong style={{ fontWeight: 700 }}>Optional 5th protection</strong>{" "}
          (needs Omer&rsquo;s authorization before ship):{" "}
          <em>
            &ldquo;If you&rsquo;re not happy with any post we publish, we
            remove it and credit the month.&rdquo;
          </em>{" "}
          Research flagged this as one of the highest-leverage conversion
          upgrades if you can commit to it.
        </div>
      </div>
    </div>
  );
}

function SectionEight() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-10 sm:pt-28">
        <SectionEyebrow number="08" label="Pricing" />

        <h2
          className="mt-5 leading-[1.03] tracking-[-0.038em] text-[clamp(2.2rem,4.8vw,3.4rem)]"
          style={{
            fontFamily: DISPLAY,
            fontWeight: 600,
            color: INK,
            maxWidth: "820px",
          }}
        >
          The cost of a social media team.{" "}
          <span style={{ color: ROSE_DEEP, fontWeight: 600 }}>
            Replaced.
          </span>
        </h2>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <PriceDisplay />
          <ProtectionList />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-8">
        <div className="mb-4 flex items-baseline justify-between gap-3">
          <p
            style={{
              fontFamily: BODY,
              fontSize: "0.62rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: INK_FAINT,
              fontWeight: 700,
            }}
          >
            How this compares
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "0.78rem",
              color: INK_SOFT,
              fontStyle: "italic",
            }}
          >
            Every option on the market, honestly
          </p>
        </div>

        <ComparisonCard />
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-24 pt-4">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)",
              fontWeight: 500,
              color: INK,
              letterSpacing: "-0.015em",
              lineHeight: 1.3,
              maxWidth: "480px",
            }}
          >
            Your strategy is ready in 10 minutes.{" "}
            <span style={{ color: INK_FAINT }}>Free.</span>
          </p>

          <button
            type="button"
            className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5"
            style={{
              background: INK,
              color: "#fff",
              fontFamily: BODY,
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Start &mdash; free strategy first
            <ArrowRight size={16} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function SectionEightPricingPreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <SectionEight />

      <PreviewFooter
        label="Section 08 · Pricing + risk reversal"
        description="Three-block pricing section. Left: $99/mo price display with the $69 annual save callout and a rate-locked-for-life note. Right: four protection items (approval, cancel, data, human oversight) with a dashed callout flagging the optional 5th 'remove + credit' guarantee that needs Omer's authorization. Below: comparison card across DIY / Agency / Solara with 6 rows, Solara column highlighted in cream with navy accent stripe. Bottom: CTA with free-strategy pitch. No phone, no device chrome."
      />
    </main>
  );
}
