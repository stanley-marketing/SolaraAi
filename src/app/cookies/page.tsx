import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookies Policy | Solara AI",
  description:
    "Learn about how Solara AI uses cookies and similar technologies.",
  alternates: {
    canonical: "https://solaraai.com/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      <TopNav />
      <article
        className="mx-auto max-w-3xl px-6 pb-24 pt-36 sm:px-10 sm:pt-44"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            marginBottom: "8px",
          }}
        >
          Cookies Policy
        </h1>
        <p style={{ fontSize: "0.9rem", color: "#667085", marginBottom: "48px" }}>
          Effective date: Feb 24, 2025
        </p>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginTop: "48px",
            marginBottom: "16px",
            color: "#111",
          }}
        >
          What are cookies?
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Cookies are small text files that are stored on your device (computer, phone, tablet) when you visit a website. They help the site work properly, remember your preferences, and understand how people use the site.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We also use similar technologies like pixels, tags, and local storage. In this policy, we call all of these "cookies."
        </p>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginTop: "48px",
            marginBottom: "16px",
            color: "#111",
          }}
        >
          Why we use cookies
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We use cookies on solaraai.com and in Solara AI for the following reasons:
        </p>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          Essential / Required cookies
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          These are needed for the website and app to function. For example:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Keeping you logged in / session management
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Protecting our service from fraud, abuse, or unauthorized access
          </li>
        </ul>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You cannot turn these off because the site won't work without them.
        </p>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          Analytics &amp; performance cookies
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          These help us understand how visitors use our website and product (which pages people visit, how long things take to load, etc.) so we can improve the experience.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Example tools that typically set these cookies: product analytics, traffic analytics, and crash/error tracking.
        </p>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          Marketing &amp; advertising cookies (if enabled)
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          These help us understand which campaigns brought you to Solara AI and measure conversion (for example, if you came from an ad and then signed up or requested a demo).
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          They may also be used to show you more relevant ads on other platforms.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Example tools that typically set these cookies: ad platforms like Meta, TikTok, Google Ads, LinkedIn.
        </p>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          Preference cookies
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          These remember things like your language, region, or UI choices so you don't have to re-enter them every time.
        </p>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginTop: "48px",
            marginBottom: "16px",
            color: "#111",
          }}
        >
          What types of data cookies collect
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Depending on the cookie type, we may collect:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Device/browser information
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            IP address and rough location (city/country level)
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Pages you visit and actions you take (for example: "clicked Start Free Trial")
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Login status / account ID (for account security and session continuity)
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Campaign source (for example: "came from TikTok ad")
          </li>
        </ul>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We do not sell personal information.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          For more details about how we handle personal data, please review our <a href="/privacy-policy" style={{ color: "#0066cc", textDecoration: "underline" }}>Privacy Policy</a>.
        </p>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginTop: "48px",
            marginBottom: "16px",
            color: "#111",
          }}
        >
          How long cookies stay on your device
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Session cookies</strong> are deleted when you close your browser.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Persistent cookies</strong> stay on your device until they expire or you delete them manually in your browser settings. Some may last days; some may last months.
        </p>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginTop: "48px",
            marginBottom: "16px",
            color: "#111",
          }}
        >
          Third-party cookies
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Some cookies on our site are placed by third parties we work with, such as:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Analytics / performance providers
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Advertising platforms
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Customer support / chat tools
          </li>
        </ul>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          These third parties may use their cookies to understand your activity across different websites where they are also used. Their use of data is governed by their own privacy policies.
        </p>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginTop: "48px",
            marginBottom: "16px",
            color: "#111",
          }}
        >
          How to control cookies
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You have options.
        </p>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          Browser settings
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You can block or delete cookies in your browser settings.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          If you block essential cookies, some parts of the website or app may stop working.
        </p>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          Do Not Track
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Some browsers let you send a "Do Not Track" signal. Our behavior in response to these signals may vary depending on technical support in the product at that time.
        </p>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          Ads preferences
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          For marketing/ads cookies, you can usually control ad personalization directly through the ad platforms (for example: Meta, Google, TikTok, etc.).
        </p>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginTop: "48px",
            marginBottom: "16px",
            color: "#111",
          }}
        >
          Changes to this Cookies Policy
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We may update this Cookies Policy if we add or change technologies. When we do, we'll update the "Last Updated" date at the top of this page.
        </p>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginTop: "48px",
            marginBottom: "16px",
            color: "#111",
          }}
        >
          Contact us
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          If you have questions about cookies or how we use data, you can reach us at:
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <a href="mailto:contact@solaraai.com" style={{ color: "#0066cc", textDecoration: "underline" }}>contact@solaraai.com</a>
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px", marginTop: "48px" }}>
          © 2025 Solara AI. All rights reserved.
        </p>
      </article>
      <Footer />
    </main>
  );
}
