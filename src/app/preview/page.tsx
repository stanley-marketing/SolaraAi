"use client";

import { useRef } from "react";
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { CardStack, CardItem } from "@/components/ui/card-stack";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Check, Target, Share2, Palette, BarChart3 } from "lucide-react";

// ─── Platform icons ───────────────────────────────────────────────
function Google({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
function Meta({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 12" fill="none" stroke="#0081FB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6C10.5 3 8.5 1 6.5 1 4 1 2 3.5 2 6 2 8.5 4 11 6.5 11 8.5 11 10.5 9 12 6 13.5 3 15.5 1 17.5 1 20 1 22 3.5 22 6 22 8.5 20 11 17.5 11 15.5 11 13.5 9 12 6"/>
    </svg>
  );
}
function TikTok({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#000">
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}
function Instagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs><linearGradient id="ig-pv" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#FCAF45"/><stop offset="50%" stopColor="#E1306C"/><stop offset="100%" stopColor="#833AB4"/></linearGradient></defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="url(#ig-pv)" strokeWidth="2"/>
      <circle cx="12" cy="12" r="5" fill="none" stroke="url(#ig-pv)" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-pv)"/>
    </svg>
  );
}

// ─── Demo 1: AnimatedList ─────────────────────────────────────────
const FEED_ITEMS = [
  { key: "1", icon: "ads",     text: "Google Search campaign launched",      sub: "Budget: $150/day · CPC: $0.82" },
  { key: "2", icon: "check",   text: "Meta bid adjusted +14%",               sub: "Audience: Lookalike 1% · US" },
  { key: "3", icon: "check",   text: "TikTok ad set paused",                 sub: "CTR below 0.8% threshold" },
  { key: "4", icon: "check",   text: "Instagram retargeting enabled",        sub: "7-day page visitors" },
  { key: "5", icon: "check",   text: "Weekly ROAS report generated",         sub: "ROAS: 4.2x · Spend: $1,240" },
];

function FeedItem({ text, sub }: { text: string; sub: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "#fff", border: "1px solid #eaecf0", borderRadius: 10, padding: "10px 14px", width: "100%" }}>
      <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#f0fdf4", border: "1px solid #bbf7d0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
        <Check size={12} style={{ color: "#16a34a" }} />
      </div>
      <div>
        <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: 600, color: "#0f0f0f", lineHeight: 1.4 }}>{text}</p>
        <p style={{ margin: 0, fontSize: "0.7rem", color: "#9ca3af", lineHeight: 1.4 }}>{sub}</p>
      </div>
    </div>
  );
}

// ─── Demo 2: AnimatedBeam ─────────────────────────────────────────
function BeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const googleRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const tiktokRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const nodeStyle: React.CSSProperties = {
    width: 44, height: 44, borderRadius: "50%",
    background: "#fff", border: "1px solid #eaecf0",
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)", flexShrink: 0,
  };

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
      {/* Left: platform inputs */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div ref={googleRef} style={nodeStyle}><Google size={20} /></div>
        <div ref={metaRef}   style={nodeStyle}><Meta size={18} /></div>
        <div ref={tiktokRef} style={nodeStyle}><TikTok size={18} /></div>
      </div>

      {/* Center: Solara node */}
      <div ref={centerRef} style={{ ...nodeStyle, width: 52, height: 52, borderRadius: "50%", background: "#0f0f0f", border: "none" }}>
        <Target size={20} style={{ color: "#fff" }} />
      </div>

      {/* Right: output */}
      <div ref={resultsRef} style={{ ...nodeStyle, borderRadius: 10, width: "auto", padding: "8px 14px", flexDirection: "column", height: "auto", alignItems: "flex-start" }}>
        <p style={{ margin: 0, fontSize: "0.65rem", color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>Results</p>
        <p style={{ margin: 0, fontSize: "0.78rem", fontWeight: 700, color: "#0f0f0f" }}>ROAS 4.2x</p>
      </div>

      {/* Beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={googleRef} toRef={centerRef} curvature={-30} gradientStartColor="#4285F4" gradientStopColor="#9E7AFF" />
      <AnimatedBeam containerRef={containerRef} fromRef={metaRef}   toRef={centerRef} curvature={0}   gradientStartColor="#0081FB" gradientStopColor="#9E7AFF" />
      <AnimatedBeam containerRef={containerRef} fromRef={tiktokRef} toRef={centerRef} curvature={30}  gradientStartColor="#000000" gradientStopColor="#9E7AFF" />
      <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={resultsRef} gradientStartColor="#9E7AFF" gradientStopColor="#FE8BBB" reverse />
    </div>
  );
}

// ─── Demo 3: CardStack ────────────────────────────────────────────
const CREATIVE_CARDS: CardItem[] = [
  {
    id: 0, name: "Facebook Ad", designation: "1200 × 628 · Static",
    content: <span style={{ fontSize: "0.82rem", color: "#4b5563" }}>High-converting copy. Strong hook, clear benefit, single CTA. Brand colors enforced.</span>,
  },
  {
    id: 1, name: "Instagram Reel", designation: "1080 × 1920 · Video",
    content: <span style={{ fontSize: "0.82rem", color: "#4b5563" }}>Hook in first 3 seconds. Visual story arc. Subtitles added automatically.</span>,
  },
  {
    id: 2, name: "LinkedIn Post", designation: "1200 × 627 · Carousel",
    content: <span style={{ fontSize: "0.82rem", color: "#4b5563" }}>Authority-building format. Data-backed insights. Professional tone matched to brand.</span>,
  },
  {
    id: 3, name: "TikTok Video", designation: "1080 × 1920 · UGC-style",
    content: <span style={{ fontSize: "0.82rem", color: "#4b5563" }}>Native-feel content. Trending audio. Pattern-interrupt opener tested across 3 variants.</span>,
  },
];

// ─── Demo 4: GlowingEffect ────────────────────────────────────────
function GlowDemo() {
  return (
    <div style={{ position: "relative", borderRadius: 14, border: "1px solid #eaecf0", background: "#fff", padding: "28px 28px", overflow: "hidden" }}>
      <GlowingEffect spread={40} borderWidth={2} proximity={80} />
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f9fafb", border: "1px solid #eaecf0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <BarChart3 size={18} style={{ color: "#6b7280" }} />
        </div>
        <div>
          <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700, color: "#0f0f0f" }}>Analytics Agent</p>
          <p style={{ margin: "4px 0 0", fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.5 }}>No more dashboards you stare at and don&rsquo;t trust.</p>
        </div>
      </div>
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        {[
          { label: "ROAS", value: "4.2x" },
          { label: "CTR", value: "3.8%" },
          { label: "Conversions", value: "+127" },
        ].map((m) => (
          <div key={m.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontSize: "0.65rem", color: "#9ca3af", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{m.label}</span>
            <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f0f0f", fontVariantNumeric: "tabular-nums" }}>{m.value}</span>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 14, fontSize: "0.72rem", color: "#9ca3af", fontStyle: "italic" }}>Move your cursor over this card &darr;</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function PreviewPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fafafa", padding: "60px 40px", fontFamily: "var(--font-body)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f0f0f", marginBottom: 6 }}>Component Preview</h1>
        <p style={{ fontSize: "0.85rem", color: "#9ca3af", marginBottom: 48 }}>Evaluating AnimatedList, AnimatedBeam, CardStack, and GlowingEffect for agent card illustrations.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>

          {/* 1 — AnimatedList */}
          <Section label="AnimatedList" sub="Live task activity feed — shows service being performed in real time">
            <div style={{ padding: "16px 20px" }}>
              <AnimatedList delay={1400} loop>
                {FEED_ITEMS.map((item) => (
                  <AnimatedListItem key={item.key}>
                    <FeedItem text={item.text} sub={item.sub} />
                  </AnimatedListItem>
                ))}
              </AnimatedList>
            </div>
          </Section>

          {/* 2 — AnimatedBeam */}
          <Section label="AnimatedBeam" sub="Platform connections — data flowing from Google · Meta · TikTok into Solara">
            <div style={{ height: 220 }}>
              <BeamDemo />
            </div>
          </Section>

          {/* 3 — CardStack */}
          <Section label="CardStack" sub="Creative formats rotating — each card = a different deliverable being produced">
            <div style={{ padding: "16px 20px 60px" }}>
              <CardStack items={CREATIVE_CARDS} />
            </div>
          </Section>

          {/* 4 — GlowingEffect */}
          <Section label="GlowingEffect" sub="Mouse-tracking border glow on card hover — applies to any card container">
            <div style={{ padding: "16px 20px" }}>
              <GlowDemo />
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}

function Section({ label, sub, children }: { label: string; sub: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #eaecf0", borderRadius: 16, overflow: "hidden" }}>
      <div style={{ padding: "18px 20px 14px", borderBottom: "1px solid #f0f0f0" }}>
        <p style={{ margin: 0, fontSize: "0.7rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em" }}>Component</p>
        <p style={{ margin: "2px 0 0", fontSize: "1rem", fontWeight: 700, color: "#0f0f0f" }}>{label}</p>
        <p style={{ margin: "4px 0 0", fontSize: "0.75rem", color: "#9ca3af", lineHeight: 1.4 }}>{sub}</p>
      </div>
      {children}
    </div>
  );
}
