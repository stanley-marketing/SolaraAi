"use client";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-[var(--section-gap)]">
        <Section>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Left: Info */}
            <Reveal>
              <div>
                <p className="section-label mb-4">Get in Touch</p>
                <h1 className="display text-5xl sm:text-6xl md:text-7xl mb-6">
                  Let&apos;s talk.
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed mb-12 max-w-sm">
                  Whether you&apos;re ready to start or just exploring — we&apos;d love to hear 
                  about your marketing goals.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@solaraai.com"
                      className="text-text-primary text-base hover:text-text-secondary transition-colors"
                    >
                      hello@solaraai.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-2">
                      Book a Call
                    </h3>
                    <a
                      href="https://calendly.com/solaraai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary text-base hover:text-text-secondary transition-colors"
                    >
                      Schedule on Calendly
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-2">
                      Social
                    </h3>
                    <div className="flex gap-6">
                      {[
                        { label: "LinkedIn", href: "https://linkedin.com/company/solaraai" },
                        { label: "Instagram", href: "https://instagram.com/solaraai" },
                        { label: "Facebook", href: "https://facebook.com/solaraai" },
                      ].map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-primary text-base hover:text-text-secondary transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Form */}
            <Reveal delay={0.2}>
              <ContactForm />
            </Reveal>
          </div>
        </Section>
      </section>
    </>
  );
}
