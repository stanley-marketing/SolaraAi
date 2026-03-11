"use client";

import { ArrowRight } from "lucide-react";

/* ── Shared mini-hero shell ── */
function MiniHero({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 48 }}>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#6b7280",
          marginBottom: 12,
        }}
      >
        {label}
      </p>
      <div
        style={{
          background: "linear-gradient(135deg, #fdfcfb 0%, #f9f7f4 50%, #f5f0fa 100%)",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid #eaecf0",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Reusable hero content block ── */
function HeroContent({ above, belowSocial }: { above?: React.ReactNode; belowSocial?: React.ReactNode }) {
  return (
    <div style={{ textAlign: "center", padding: "48px 24px 40px" }}>
      {above}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: "2rem",
          lineHeight: 1.1,
          color: "#0f0f0f",
          letterSpacing: "-0.02em",
          marginTop: above ? 20 : 0,
        }}
      >
        Looking for marketing and growth?
        <br />
        You&apos;re in the right place.
      </h2>
      <p
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.6,
          color: "#6b7280",
          maxWidth: 480,
          margin: "16px auto 0",
        }}
      >
        We are leading the new era of AI marketing. More marketing. More growth.
        Less cost. That&apos;s not a pitch. That&apos;s the model.
      </p>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 24 }}>
        <span
          style={{
            background: "#000",
            color: "#fff",
            borderRadius: 999,
            padding: "10px 22px",
            fontSize: "0.8rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
          }}
        >
          Sign Up
        </span>
        <span
          style={{
            background: "rgba(255,255,255,0.6)",
            border: "1px solid #d1d5db",
            borderRadius: 999,
            padding: "10px 22px",
            fontSize: "0.8rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
            color: "#0f0f0f",
          }}
        >
          Contact Sales
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 20 }}>
        <div style={{ display: "flex" }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: `hsl(${i * 60}, 30%, 75%)`,
                border: "2px solid #fff",
                marginLeft: i > 1 ? -6 : 0,
              }}
            />
          ))}
        </div>
        <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>
          <span style={{ fontWeight: 600, color: "#111" }}>2,000+</span> businesses already growing
        </p>
      </div>
      {belowSocial}
    </div>
  );
}

export default function PreviewPage() {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "60px 24px 100px",
        fontFamily: "var(--font-body)",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "#0f0f0f",
          marginBottom: 8,
        }}
      >
        Funding Announcement Placement — Preview
      </h1>
      <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: 48 }}>
        4 options for displaying &quot;Raised $1M in pre-seed funding&quot; in the hero.
      </p>

      {/* ── Option A: Announcement bar above nav ── */}
      <MiniHero label="Option A — Announcement bar above nav">
        <div
          style={{
            background: "#0f0f0f",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: "0.78rem", color: "#fff", fontWeight: 500 }}>
            We raised $1M in pre-seed funding
          </span>
          <ArrowRight size={14} color="#fff" />
        </div>
        <div
          style={{
            padding: "12px 24px",
            borderBottom: "1px solid #eaecf0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgba(255,255,255,0.7)",
          }}
        >
          <span style={{ fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.04em" }}>SOLARA AI</span>
          <div style={{ display: "flex", gap: 16, fontSize: "0.75rem", color: "#6b7280" }}>
            <span>HOME</span><span>PRICING</span><span>ABOUT</span>
          </div>
        </div>
        <HeroContent />
      </MiniHero>

      {/* ── Option B: Pill badge above headline ── */}
      <MiniHero label="Option B — Pill badge above headline (Recommended)">
        <HeroContent
          above={
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "#374151",
                  border: "1px solid #d1d5db",
                  borderRadius: 999,
                  padding: "5px 14px",
                  background: "rgba(255,255,255,0.6)",
                }}
              >
                Backed by $1M in pre-seed funding
                <ArrowRight size={12} color="#9ca3af" />
              </span>
            </div>
          }
        />
      </MiniHero>

      {/* ── Option C: Social proof row extension ── */}
      <MiniHero label="Option C — Added to social proof row">
        <HeroContent
          belowSocial={
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 8 }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#6b7280",
                }}
              >
                <span style={{ fontWeight: 600, color: "#111" }}>$1M</span> pre-seed raised
              </span>
              <span style={{ color: "#d1d5db" }}>·</span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#6b7280",
                  textDecoration: "underline",
                  textDecorationColor: "#d1d5db",
                  textUnderlineOffset: 2,
                  cursor: "pointer",
                }}
              >
                Read more
              </span>
            </div>
          }
        />
      </MiniHero>

      {/* ── Option D: Inline in subtitle ── */}
      <MiniHero label="Option D — Inline in subtitle text">
        <div style={{ textAlign: "center", padding: "48px 24px 40px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "2rem",
              lineHeight: 1.1,
              color: "#0f0f0f",
              letterSpacing: "-0.02em",
            }}
          >
            Looking for marketing and growth?
            <br />
            You&apos;re in the right place.
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "#6b7280",
              maxWidth: 480,
              margin: "16px auto 0",
            }}
          >
            <span style={{ fontWeight: 600, color: "#374151" }}>Backed by $1M in pre-seed funding.</span>{" "}
            We are leading the new era of AI marketing. More marketing. More growth.
            Less cost. That&apos;s not a pitch. That&apos;s the model.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 24 }}>
            <span
              style={{
                background: "#000",
                color: "#fff",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
              }}
            >
              Sign Up
            </span>
            <span
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid #d1d5db",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "#0f0f0f",
              }}
            >
              Contact Sales
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 20 }}>
            <div style={{ display: "flex" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: `hsl(${i * 60}, 30%, 75%)`,
                    border: "2px solid #fff",
                    marginLeft: i > 1 ? -6 : 0,
                  }}
                />
              ))}
            </div>
            <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>
              <span style={{ fontWeight: 600, color: "#111" }}>2,000+</span> businesses already growing
            </p>
          </div>
        </div>
      </MiniHero>
    </div>
  );
}
