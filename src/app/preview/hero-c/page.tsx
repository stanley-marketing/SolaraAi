import { HeroSection } from "@/components/homepage/HeroSection";
import { MessagesScriptedHeroMockup } from "@/components/homepage/MessagesMockup";
import { SideBySidePhones } from "@/components/homepage/SideBySidePhones";
import { WhatsAppScriptedHeroMockup } from "@/components/homepage/WhatsAppMockupScripted";

export default function HeroCPreview() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection
        mockup={
          <div className="origin-center scale-[0.65] md:scale-[0.78] lg:scale-[0.86]">
            <SideBySidePhones
              primary={{
                label: "Messages",
                accent: "#007AFF",
                mockup: <MessagesScriptedHeroMockup phoneWidth={260} />,
              }}
              secondary={{
                label: "WhatsApp",
                accent: "#25D366",
                mockup: <WhatsAppScriptedHeroMockup phoneWidth={260} />,
              }}
            />
          </div>
        }
      />
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Variation C &middot; Side-by-side, both visible
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          Both phones in view at once. Calmer than the auto-switch but takes
          more horizontal space, so phones drop to ~260px. Messages is
          foregrounded, WhatsApp tucked behind.
        </p>
      </div>
    </main>
  );
}
