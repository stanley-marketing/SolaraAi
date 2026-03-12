import Script from "next/script";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

/* ──────────────────────────────────────────────────────────────
   PartnerPageShell
   Server component — composes TopNav + slot children + Footer.
   Accepts optional JSON-LD strings to inject as structured data.
   ────────────────────────────────────────────────────────────── */

interface PartnerPageShellProps {
  children: React.ReactNode;
  /** Array of raw JSON-LD strings (already serialized JSON). */
  jsonLd?: string[];
}

export function PartnerPageShell({ children, jsonLd }: PartnerPageShellProps) {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      {/* Structured data */}
      {jsonLd?.map((ld, i) => (
        <Script
          key={i}
          id={`partner-jsonld-${i}`}
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {ld}
        </Script>
      ))}

      {/* Fixed nav */}
      <TopNav />

      {/* Page content */}
      {children}

      {/* Footer */}
      <Footer />
    </main>
  );
}
