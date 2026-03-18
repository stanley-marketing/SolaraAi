import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Solara AI",
  description:
    "Privacy Policy for Solara AI. Learn how we collect, use, and protect your data.",
  alternates: {
    canonical: "https://solaraai.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ fontSize: "0.9rem", color: "#667085", marginBottom: "48px" }}>
          Effective date: Feb 24, 2025
        </p>

        <section>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
            <strong>Your Privacy Matters:</strong> The owner of the Solara AI application (the "Application") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, share, and protect your information when you use our services. We are committed to transparency and giving you control over your data.
          </p>
        </section>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginTop: "48px",
            marginBottom: "16px",
            color: "#111",
          }}
        >
          1. Introduction
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          This Privacy Policy is provided by the owner of Solara AI (hereinafter: "we," "us," or "our") and describes:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            What information we collect and why
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            How we use and protect your information
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Your rights and choices regarding your data
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            How we strive to comply with privacy laws including the Protection of Privacy Law, 1981 (Israel), GDPR, CCPA, and other applicable regulations
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Consent and Use:</strong> By using the Application, you declare that you have read, understood, and agree to this Privacy Policy. If you choose to continue using the Application's services, it shall be deemed as your full consent to and acceptance of this Privacy Policy. If you do not agree or do not wish for the described information to be collected, please refrain from using the Application.
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>No Legal Obligation to Provide Information:</strong> There is no legal obligation on you to provide information to us. However, providing certain information is a condition for receiving the full range of services in the Application. If you do not wish to provide such information, you may be prevented from using some of the Application's services.
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Note:</strong> This Privacy Policy uses the masculine form for convenience only and addresses all genders.
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
          2. Information We Collect
        </h2>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          2.1 Information You Provide Directly
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          While using the Application's services, we collect information that you voluntarily provide, some of which may personally identify you:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Account Information:</strong> Name, email address, phone number, password, date of birth
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Business Information:</strong> Company name, business description, industry, target audience information, business objectives
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Social Media Accounts:</strong> Social media account addresses and authentication credentials when you connect platforms like Facebook, Instagram, LinkedIn, YouTube, TikTok, X (formerly Twitter), and others
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Content and Inputs:</strong> Marketing materials, campaign data, text prompts, images, videos, audio files, business objectives, brand information
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Voice and Biometric Data:</strong> Voice samples, audio recordings uploaded for voice cloning, video files for character and voice creation
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>SEO and Website Data:</strong> Website URLs for analysis, homepage screenshots, SEO performance data
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Payment Information:</strong> Billing address, payment method information (processed securely by our payment processors)
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Communications:</strong> Correspondence with us, support requests, feedback, information related to offers and services that interest you
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          2.2 Information Collected Automatically
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          When you use the Application, we automatically collect:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Device Information:</strong> IP address, browser type and version, device type and model, operating system, unique device identifiers
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Usage Data:</strong> Pages viewed, features used, time spent on pages, navigation paths, click patterns, the manner in which you use the Application
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Performance Data:</strong> Error logs, crash reports, API response times, system diagnostics
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Location Data:</strong> Approximate location based on IP address
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          2.3 Information from Third-Party Sources
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We collect relevant information from third-party platforms and services for the purpose of learning and improving the service:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Social Media Platforms:</strong> When you connect your accounts (Facebook, Instagram, LinkedIn, YouTube, TikTok, X, etc.), we receive profile information, page data, and analytics
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Google Services:</strong> Information from Google accounts, Google Analytics, Google Ads
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Marketing Platforms:</strong> Data from META (Facebook/Instagram), Google, YouTube, LinkedIn and other integrated marketing tools
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Authentication Providers:</strong> Information from Google, Microsoft, or other OAuth providers if you use social login
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Public Sources:</strong> Publicly available business information
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          2.4 AI-Generated and Processed Content
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We collect and process:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Input prompts and instructions you provide to our AI systems
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Content generated by our AI based on your inputs (text, images, videos, voice, music)
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Editing and refinement actions you take on generated content
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Performance feedback on AI outputs
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            AI avatar creation data including images, videos, and voice samples
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Voice cloning samples and generated voice profiles
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Character descriptions and specifications
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          2.5 Cookies and Tracking Technologies
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We use cookies, pixels, and similar tracking technologies to collect information. See Section 11 for detailed information about cookies.
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
          3. Legal Basis and Purposes for Data Collection
        </h2>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          3.1 Legal Basis
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We will process your personal data, including sensitive data, only when we have a legal basis to do so:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Consent:</strong> You have given your explicit consent to the processing
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Contract Performance:</strong> Processing is necessary to provide the services you requested
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Legitimate Interest:</strong> Processing is necessary for our legitimate business interests
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Legal Obligation:</strong> Processing is required by law
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          3.2 Purposes of Data Use
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We use the collected information only in accordance with this Privacy Policy or as permitted by applicable law, for the following purposes:
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>1. Provide and maintain the Application</strong><br />
          Enable use of different services, create and manage your account, process transactions, deliver requested features<br />
          <em>Legal Basis: Contract Performance / Consent</em>
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>2. AI Services and Content Generation</strong><br />
          Process your inputs through AI models, generate marketing content (text, images, videos, voice, music), create AI avatars and characters, provide AI-powered features<br />
          <em>Legal Basis: Contract Performance / Consent</em>
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>3. Voice Cloning and Character Creation</strong><br />
          Process voice samples and video files to create voice clones, generate AI characters, provide personalized avatar services<br />
          <em>Legal Basis: Contract Performance / Consent</em>
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>4. Marketing Automation</strong><br />
          Create and execute marketing campaigns, publish content to connected social media platforms, automate marketing workflows<br />
          <em>Legal Basis: Contract Performance / Consent</em>
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>5. SEO Analysis</strong><br />
          Scan and analyze website homepages, check search discoverability, provide SEO recommendations<br />
          <em>Legal Basis: Contract Performance / Consent</em>
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>6. Improve and Optimize Services</strong><br />
          Analyze usage patterns, develop new features, enhance AI models (using anonymized and aggregated data only), tailor marketing strategies, analyze statistical data, optimize service content<br />
          <em>Legal Basis: Legitimate Interest / Consent</em>
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>7. Communications</strong><br />
          Send service updates, respond to inquiries, provide customer support, communicate with you about your account<br />
          <em>Legal Basis: Contract Performance / Legitimate Interest</em>
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>8. Marketing and Promotional Communications</strong><br />
          Send newsletters, promotional emails, SMS, WhatsApp messages about services, products, marketing and promotional information (only with your explicit consent)<br />
          <em>Legal Basis: Consent</em>
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>9. Personalization and Advertising</strong><br />
          Customize advertisements and content displayed during your visit according to your interests, provide targeted marketing<br />
          <em>Legal Basis: Consent / Legitimate Interest</em>
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>10. Security and Fraud Prevention</strong><br />
          Detect and prevent abuse, security threats, fraudulent activity, enforce rules and procedures<br />
          <em>Legal Basis: Legitimate Interest / Legal Obligation</em>
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>11. Legal Compliance and Auditing</strong><br />
          Comply with laws, regulations, legal processes, audit purposes, enforce our Terms of Service<br />
          <em>Legal Basis: Legal Obligation</em>
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>12. Analytics and Research</strong><br />
          Understand how users interact with the Application, measure effectiveness, conduct research<br />
          <em>Legal Basis: Legitimate Interest / Consent</em>
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
          3.3 AI Model Training and Improvement
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We may use anonymized and aggregated data from your use of the Application to train and improve our internal AI models. This includes:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Analyzing patterns in how users interact with AI-generated content
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Improving the quality and relevance of AI outputs
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Developing new AI features and capabilities
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Important:</strong> Your data is processed through third-party AI services to generate content for you, but we do not share your data with external AI providers for their model training purposes. The AI services we use process your data solely to provide you with the requested outputs.
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Opt-Out:</strong> You can opt out of having your data used for our internal AI training in your account settings. Opting out will not affect your ability to use the Application, though some features may be limited.
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
          3.4 Voice Cloning and Biometric Data
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          When you use voice cloning features:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We process voice samples from uploaded audio or video files
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We create voice profiles using AI voice synthesis technology
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Voice data may be considered biometric data in some jurisdictions
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You represent that you have all necessary rights and consents to use any voice you clone
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Voice clones are stored securely and used only for your content creation purposes
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You can request deletion of voice clones at any time through your account settings
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          3.5 Automated Decision-Making &amp; Profiling
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We use profiling to personalize content, features, and advertising. Where we make decisions using solely automated processing that produce legal or similarly significant effects, you have the right to request human review, to express your point of view, and to contest the decision. You may also object to profiling used for direct marketing at any time.
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
          4. How We Share Your Information
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Important:</strong> We do not sell your personal information to third parties.
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          However, we may share your information in the following circumstances:
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
          4.1 Service Providers and Third-Party Platforms
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          The Application uses third-party services and platforms, and therefore information processed within the Application will be shared with these providers:
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Cloud Infrastructure and Data Processing:</strong>
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            AWS (Amazon Web Services): cloud hosting
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Payment Processing:</strong>
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Stripe: Primary payment processor for subscriptions and billing
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Marketing and Analytics:</strong>
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Google Analytics, Mixpanel: Analytics and usage tracking
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            META (Facebook/Instagram), Google, YouTube, LinkedIn, TikTok, X: Marketing platforms for campaign management and advertising (data shared via cookies and pixels)
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Communication Services:</strong>
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Customer Support: Intercom
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Social Media Integration:</strong>
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            When you connect social media accounts (Facebook, Instagram, TikTok etc.), we share data with these platforms to publish content and manage campaigns
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Other Services:</strong>
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Marketing Professionals: We may transfer information to professionals and/or platforms in the field of marketing and advertising for processing and optimization purposes
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          These service providers have access only to the information necessary to perform their functions and are obligated to protect your information.
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
          4.2 Business Transfers
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          In the event of a merger, acquisition, sale of assets, or transfer of business ownership, your personal information may be transferred to a third party as part of the transaction, provided that the acquiring entity assumes the obligations of this Privacy Policy.
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
          4.3 Legal Requirements and Protection
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We may disclose your information in the following cases:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            If you carry out actions in the Application that are contrary to the law
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            If a court order is issued instructing the disclosure of your details or information about you to a third party
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            In the event of a legal dispute between you and us requiring the disclosure of your details
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            To comply with legal obligations, court orders, or government requests
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            To enforce our Terms of Service or other agreements
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            To protect the rights, property, or safety of Solara AI, our users, or the public
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            To detect, prevent, or address fraud, security, or technical issues
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          4.4 With Your Consent
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We may share your information for any other purpose with your explicit consent.
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
          4.5 Aggregated and Statistical Information
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We may share aggregated, anonymized, or de-identified data that cannot reasonably be used to identify you for research, marketing, or other purposes. We may provide statistical information regarding user activity on the Application and in newsletters to third parties, but we will not share your personal information with advertisers.
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
          5. Data Storage and International Transfers
        </h2>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          5.1 Data Storage
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          The data collected, as well as any content you upload, share, or create in the Application, will be stored by us on hosting servers. These databases may be stored on servers located in your country or abroad. By using the Application, you declare that you consent to your information being stored on these servers.
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
          5.2 International Data Transfers
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          When transferring personal data outside your region (e.g., from the EEA/UK to Israel/US), we use appropriate safeguards, including EU Standard Contractual Clauses and the UK IDTA/Addendum, and we perform transfer impact assessments. Copies of the relevant clauses are available on request.
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
          5.3 Data Transfer Safeguards
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          When we transfer personal data internationally, we ensure appropriate safeguards are in place:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Standard Contractual Clauses:</strong> EU-approved Standard Contractual Clauses (SCCs) for transfers from the EU/EEA
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Adequacy Decisions:</strong> Relying on adequacy decisions by the European Commission
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Data Processing Agreements:</strong> Binding agreements with service providers requiring appropriate data protection
          </li>
        </ul>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginTop: "48px",
            marginBottom: "16px",
            color: "#111",
          }}
        >
          6. Data Retention
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We retain your personal information for as long as necessary to:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Provide the Application and fulfill the purposes described in this Privacy Policy
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Comply with legal obligations (e.g., tax, accounting, legal requirements)
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Resolve disputes and enforce our agreements
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Protect against fraudulent, deceptive, or illegal activity
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          6.1 Retention Periods
        </h3>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Account Data:</strong> Retained while your account is active and for up to 90 days after account closure
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>User Content:</strong> Retained according to your subscription plan; you may export your data before account cancellation
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Voice Clones and Characters:</strong> Retained while your account is active; deleted upon request or account closure
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Payment Information:</strong> Retained for as long as necessary for tax and legal compliance (typically 7 years)
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Usage Logs:</strong> Retained for up to 12 months for security and analytics purposes
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Support Communications:</strong> Retained for up to 3 years for quality assurance and dispute resolution
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          6.2 Deletion
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          After the retention period, we will either permanently delete your personal information from our systems or anonymize the data so it can no longer be associated with you. You may request earlier deletion of your data by contacting us (see Section 15).
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We recommend you export any data you wish to retain before terminating your account. After termination, we may permanently delete your data from our systems and cannot guarantee data recovery.
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
          7. Information Security
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We implement updated industry-standard information security systems and procedures to protect your information, including:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Encryption:</strong> Data in transit is encrypted using TLS/SSL; sensitive data at rest is encrypted
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Access Controls:</strong> Strict access controls and authentication for our systems and databases
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Security Monitoring:</strong> Continuous monitoring for suspicious activity and security threats
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Employee Training:</strong> Security awareness training for all employees
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Incident Response:</strong> Procedures for detecting, responding to, and recovering from security incidents
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Voice Data Protection:</strong> Special security measures for biometric voice data including encryption and access logging
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          7.1 Your Responsibility
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You are responsible for:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Maintaining the confidentiality of your account credentials
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Using a strong, unique password
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Enabling two-factor authentication if available
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Notifying us immediately of any unauthorized access to your account
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Ensuring you have rights to any voice or likeness data you upload
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          7.2 No Absolute Security Guarantee
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          While these security systems and procedures reduce the risk of unauthorized intrusions, they do not provide absolute security. Therefore, we cannot guarantee that the Application and its services will be completely immune to unauthorized access to the stored information. No system is completely secure, and you use the Application at your own risk. By using the Application, you acknowledge and accept this risk.
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
          8. Electronic Direct Marketing and User Contact
        </h2>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          8.1 Marketing Communications
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We may send you, from time to time, newsletters or other messages via email, SMS, or WhatsApp regarding:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Services and products
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Marketing and promotional information
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            New features and updates
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Educational content and tips
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Account verification and security (one-time passwords/OTPs)
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          8.2 Consent and Opt-Out
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Such marketing information will be sent only if you have given your explicit consent. You can:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Withdraw your consent at any time
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Stop receiving marketing communications by clicking "unsubscribe" in any email
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Opt out of SMS or WhatsApp messages by replying with "STOP"
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Adjust your communication preferences in your account settings
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          8.3 Statistical Information
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We will not share your personal information with advertisers. However, we may provide statistical information regarding user activity on the Application and in newsletters to third parties.
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
          8.4 SMS Verification Messages
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>SMS Communications:</strong> We may send SMS messages to the phone number you provide for account verification and security purposes, including one-time passwords (OTPs) during login. These messages are transactional and triggered by your actions. Standard message and data rates may apply. Reply STOP to any message to opt out of future SMS communications.
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
          9. Third-Party Services and Integrations
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          The Application integrates with and links to third-party services, including:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Social media platforms (Facebook, Instagram, TikTok)
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Marketing automation tools and advertising platforms
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Analytics services (Google Analytics, Mixpanel)
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Payment processors
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            AI and generative content services
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Content delivery networks
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          9.1 Third-Party Privacy Practices
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          These third-party services have their own privacy policies and practices. We are not responsible for:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            The privacy practices of third-party services
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Content or security of external websites
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            How third parties collect, use, or share your information
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We encourage you to review the privacy policies of any third-party services you use or connect to the Application.
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
          9.2 Social Media Features
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          The Application includes social media features (e.g., share buttons, content publishing). These features may collect your IP address, page visited, and set cookies. Your interactions with these features are governed by the privacy policies of the companies providing them.
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
          10. Cookies and Tracking Technologies
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We use essential cookies to run the Service and optional cookies (analytics/advertising) to improve your experience. Where required by local law (e.g., in the EEA/UK), we set optional cookies only with your consent. You can change your choices anytime in Cookie Settings; withdrawing consent won't affect essential cookies needed for core functionality.
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
          11. Third-Party Advertisements
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We may allow other companies to manage the advertising system on the Application. The advertisements you see while using the Application may come from these companies' servers. These companies may use cookies and tracking technologies to deliver personalized ads based on your interests and activity.
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
          12. Changes to This Privacy Policy
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We will regularly review and update our Privacy Policy to ensure it reflects our current data handling practices.
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
          13.1 Notification of Changes
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          When we make material changes, we will:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Update the "Last Updated" date at the top of this Privacy Policy
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Notify you by email (if you have provided an email address)
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Display a prominent notice within the Application
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Obtain your consent as required by law for significant changes
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          13.2 Your Continued Use
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Your continued use of the Application after we post changes to this Privacy Policy means you accept the updated policy. If you do not agree to the changes, you should stop using the Application and close your account.
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
          14. Reporting a Privacy Violation and Contact Information
        </h2>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          14.1 Privacy Violations
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          If you believe your privacy has been infringed upon within the framework of, or in connection with, the Application's activity, please contact us and detail the circumstances as you understand them. We take privacy concerns seriously and will investigate all reports.
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
          14.2 Questions and Concerns
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          If you have any questions or concerns regarding:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            The processing of your personal data
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Exercising your privacy rights
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            This Privacy Policy
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Our data practices
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Voice cloning or biometric data
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Please contact us:
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Support:</strong> <a href="mailto:contact@solara-ai.com" style={{ color: "#0066cc", textDecoration: "underline" }}>contact@solara-ai.com</a>
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
          15. Supervisory Authorities
        </h2>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          15.1 Israel
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          For users in Israel, you may contact or file a complaint with:
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Privacy Protection Authority Ministry of Justice<br />
          Email: <a href="mailto:privacy@justice.gov.il" style={{ color: "#0066cc", textDecoration: "underline" }}>privacy@justice.gov.il</a><br />
          Website: gov.il/privacy_protection_authority
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
          15.2 European Union
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          If you are in the European Economic Area and believe we have not addressed your concerns adequately, you have the right to lodge a complaint with your local data protection supervisory authority.
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          A list of EU supervisory authorities is available at: <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" style={{ color: "#0066cc", textDecoration: "underline" }}>https://edpb.europa.eu/about-edpb/about-edpb/members_en</a>
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
          15.3 United States
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          For California residents, We do not sell personal information for money. We may "share" certain identifiers and internet activity with advertising/analytics partners for cross-context behavioral advertising. You can opt out via "Do Not Sell or Share My Personal Information" and we honor Global Privacy Control (GPC) signals.
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
          16. Acknowledgment of AI-Assisted Service
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You acknowledge and agree that:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            The Application uses artificial intelligence and machine learning technologies from multiple providers
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Your inputs and content will be processed through AI services to generate outputs for you
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Your data is NOT shared with external AI providers for their model training purposes
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We may use anonymized and aggregated data for our internal AI improvement
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            AI-generated content may require human review and editing
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            AI models may produce unexpected, inaccurate, or biased outputs
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You are responsible for the final content you create and distribute
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We are continuously improving our AI capabilities, which may result in changes to output quality or characteristics
          </li>
        </ul>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginTop: "48px",
            marginBottom: "16px",
            color: "#111",
          }}
        >
          17. Biometric Data Notice
        </h2>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          17.1 Voice Cloning and Biometric Information
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          When you use our voice cloning features, we collect and process voice samples which may be considered biometric data in certain jurisdictions:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Collection:</strong> We collect voice data from audio or video files you upload
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Purpose:</strong> Voice data is used solely to create voice clones for your content generation
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Storage:</strong> Voice samples are securely stored with encryption
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Retention:</strong> Voice data is retained while your account is active and deleted upon request or account closure
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Sharing:</strong> Voice data is processed through ElevenLabs and LMNT for voice synthesis but not used for their training
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            <strong>Rights:</strong> You can request deletion of voice clones at any time
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            marginTop: "32px",
            marginBottom: "12px",
            color: "#111",
          }}
        >
          17.2 Your Consent and Representations
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          By using voice cloning features:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You consent to the collection and processing of voice biometric data
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You represent that you have all necessary rights to use any voice you clone
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You represent that you have obtained consent from individuals whose voices you clone
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You agree not to clone voices without proper authorization
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px", marginTop: "48px" }}>
          © 2025 Solara AI. All rights reserved.
        </p>
      </article>
      <Footer />
    </main>
  );
}
