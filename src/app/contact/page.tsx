import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact — Solara AI | Book a Free Call",
  description:
    "Get in touch with Solara AI. Book a free strategy call, ask about pricing, or explore a partnership. We typically respond within 24 hours.",
  openGraph: {
    title: "Contact — Solara AI | Let's Talk",
    description:
      "Book a free strategy call or send us a message. We'd love to hear about your marketing goals.",
    url: "https://solaraai.com/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact Solara AI",
    description: "Book a free call or send us a message.",
  },
  alternates: {
    canonical: "https://solaraai.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
