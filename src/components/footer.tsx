import Link from "next/link";
import { Section } from "./section";
import { SubscribeForm } from "./subscribe-form";
import { Noise } from "./noise";

const productLinks = [
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "https://app.solaraai.com", label: "Login" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const socialLinks = [
  { href: "https://linkedin.com/company/solaraai", label: "LinkedIn" },
  { href: "https://instagram.com/solaraai", label: "Instagram" },
  { href: "https://facebook.com/solaraai", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative bg-bg-inverse text-text-inverse overflow-hidden">
      <Noise opacity={0.04} />
      <Section className="relative z-10 py-20 md:py-24">
        {/* Top: Newsletter */}
        <div className="pb-12 mb-12 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-2">
                Stay ahead of the curve
              </h3>
              <p className="text-white/60 text-sm max-w-md">
                Weekly insights on AI marketing, delivered to your inbox. No spam, unsubscribe anytime.
              </p>
            </div>
            <SubscribeForm inverted className="w-full md:w-auto md:min-w-[380px]" />
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-md bg-white flex items-center justify-center">
              <span className="text-bg-inverse font-heading font-bold text-xs">S</span>
            </div>
            <span className="font-heading font-bold text-sm text-white">Solara AI</span>
          </div>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Solara AI. All rights reserved.
          </p>
        </div>
      </Section>
    </footer>
  );
}
