"use client";

import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";

/* ── Data ──────────────────────────────────────────────── */

const PRODUCT = [
  { label: "Ads", href: "/ads" },
  { label: "SEO", href: "/seo" },
  { label: "Content", href: "/content" },
  { label: "Social Media", href: "/social" },
  { label: "Website", href: "/website" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
];

const RESOURCES = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-study" },
  { label: "Changelog", href: "/changelog" },
];

const COMPARE = [
  { label: "vs Jasper", href: "/vs/jasper-ai" },
  { label: "vs AdCreative", href: "/vs/adcreative-ai" },
  { label: "vs Ocoya", href: "/vs/ocoya" },
  { label: "vs HubSpot", href: "/vs/hubspot-marketing" },
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { Icon: Linkedin, href: "https://linkedin.com/company/solaraai", label: "LinkedIn" },
  { Icon: Twitter, href: "https://x.com/solaraai", label: "X" },
  { Icon: Youtube, href: "https://youtube.com/@solaraai", label: "YouTube" },
];

const LEGAL = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
];

const COLUMNS = [
  { heading: "Product", links: PRODUCT },
  { heading: "Resources", links: RESOURCES },
  { heading: "Compare", links: COMPARE },
  { heading: "Company", links: COMPANY },
];

/* ── Styles ────────────────────────────────────────────── */

const RAINBOW =
  "linear-gradient(90deg, #f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ec4899, #f97316)";

const RAINBOW_KEYFRAMES = `
@keyframes footer-rainbow-flow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}`;

/* ── Helpers ───────────────────────────────────────────── */

function SocialIcon({
  Icon,
  href,
  label,
}: {
  Icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-[34px] w-[34px] items-center justify-center rounded-lg transition-all duration-200"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.35)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(168,85,247,0.5)";
        el.style.color = "#a855f7";
        el.style.boxShadow = "0 0 14px rgba(168,85,247,0.2)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.color = "rgba(255,255,255,0.35)";
        el.style.boxShadow = "none";
      }}
    >
      <Icon size={15} />
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[0.84rem] leading-none transition-colors duration-200"
        style={{ color: "rgba(255,255,255,0.45)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.88)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
        }}
      >
        {children}
      </Link>
    </li>
  );
}

/* ── Component ─────────────────────────────────────────── */

export function Footer() {
  return (
    <>
      <style>{RAINBOW_KEYFRAMES}</style>

      <footer style={{ background: "#060608" }}>
        {/* Rainbow accent line */}
        <div
          className="h-[2px] w-full"
          style={{
            background: RAINBOW,
            backgroundSize: "200% 100%",
            animation: "footer-rainbow-flow 8s linear infinite",
          }}
        />

        <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-0 sm:px-10">
          {/* ── Main grid ── */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-[220px_1fr_1fr_1fr_1fr] lg:gap-x-12">
            {/* Brand — full width on mobile, first col on desktop */}
            <div className="col-span-2 lg:col-span-1">
              <div
                className="text-[0.92rem] font-extrabold tracking-[0.14em]"
                style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
              >
                SOLARA AI
              </div>
              <p
                className="mt-3 max-w-[220px] text-[0.82rem] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                AI-powered marketing
                <br />
                that runs 24/7.
              </p>
              <div className="mt-5 flex gap-2">
                {SOCIALS.map((s) => (
                  <SocialIcon key={s.label} {...s} />
                ))}
              </div>
            </div>

            {/* Link columns */}
            {COLUMNS.map(({ heading, links }) => (
              <div key={heading}>
                <div
                  className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.18em]"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "rgba(255,255,255,0.22)",
                  }}
                >
                  {heading}
                </div>
                <ul className="flex flex-col gap-[12px]">
                  {links.map((l) => (
                    <FooterLink key={l.href} href={l.href}>
                      {l.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Bottom bar ── */}
          <div
            className="mt-14 flex flex-col items-center justify-between gap-3 py-5 sm:flex-row"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span
              className="text-[0.76rem]"
              style={{ color: "rgba(255,255,255,0.18)" }}
            >
              &copy; 2024&ndash;2026 Solara AI, Inc.
            </span>
            <div className="flex gap-5">
              {LEGAL.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[0.76rem] transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.18)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.18)";
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
