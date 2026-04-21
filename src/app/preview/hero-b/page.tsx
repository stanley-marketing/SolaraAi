import { HeroSection } from "@/components/homepage/HeroSection";
import { MessagesScriptedHeroMockup } from "@/components/homepage/MessagesMockup";
import { PhoneSwitcher } from "@/components/homepage/PhoneSwitcher";
import { WhatsAppScriptedHeroMockup } from "@/components/homepage/WhatsAppMockupScripted";

export default function HeroBPreview() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection
        mockup={
          <div className="origin-center scale-[0.84] md:scale-100">
            <PhoneSwitcher
              intervalMs={6500}
              channels={[
                {
                  key: "imessage",
                  label: "Messages",
                  accent: "#007AFF",
                  mockup: (
                    <div className="lg:-rotate-2">
                      <MessagesScriptedHeroMockup phoneWidth={320} />
                    </div>
                  ),
                },
                {
                  key: "whatsapp",
                  label: "WhatsApp",
                  accent: "#25D366",
                  mockup: (
                    <div className="lg:-rotate-2">
                      <WhatsAppScriptedHeroMockup phoneWidth={320} />
                    </div>
                  ),
                },
              ]}
            />
          </div>
        }
      />
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Variation B &middot; Auto-switching mockup
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          Crossfades between Messages and WhatsApp every ~6.5s. Pauses on
          hover. Click a channel chip to lock it. Watch out for the cycling
          motion competing with the CTA.
        </p>
      </div>
    </main>
  );
}
