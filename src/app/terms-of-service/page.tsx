import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Solara AI",
  description: "Terms of Service for Solara AI platform.",
  alternates: {
    canonical: "https://solaraai.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
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
          Terms of Service
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
          1. Acceptance of Terms
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          By creating an account, accessing, or using Solara AI (the "Service"), you agree to be bound by these Terms of Service ("Terms"), our Privacy Policy, and all applicable laws and regulations. These Terms constitute a legally binding agreement between you and Solara AI ("Company," "we," "us," or "our").
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          If you are using the Service on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms, and your agreement to these Terms will be treated as the agreement of the organization.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You must be at least 13 years old or the minimum age required in your country to consent to use the Services. If you are under 18, you must have your parent or legal guardian's permission to use the Services. You hereby represent that you possess the legal authority to enter into these Terms and to form a binding agreement under any applicable law and use the Services in accordance with these Terms.
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
          2. Description of Service
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Solara AI is an AI-powered marketing automation and content creation platform that provides:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            AI-driven marketing strategy development and execution
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Content creation and generation using artificial intelligence (including text, images, videos, voice, and music)
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Marketing campaign management and automation
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Analytics and performance tracking
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Integration with third-party platforms and services (social media, marketing platforms)
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            AI avatar creation and video generation with voice synthesis and cloning
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            SEO analysis and business intelligence
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Character and voice creation tools
          </li>
        </ul>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.
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
          3. User Accounts and Registration
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
          3.1 Account Creation
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          To use the Service, you must create an account by providing accurate, complete, and current information. You are responsible for:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Maintaining the confidentiality of your account credentials
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            All activities that occur under your account
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Notifying us immediately of any unauthorized use of your account
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Ensuring that your account information remains accurate and up-to-date
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
          3.2 Account Eligibility
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You must be at least 18 years old and have the legal capacity to enter into contracts to use the Service. By creating an account, you represent and warrant that you meet these requirements.
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
          3.3 Account Security
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You are solely responsible for maintaining the security of your account. We will not be liable for any loss or damage arising from your failure to maintain account security.
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
          4. User Responsibilities and Acceptable Use
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
          4.1 Prohibited Activities
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You agree not to:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Use the Service for any illegal, harmful, or fraudulent purpose
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Violate any applicable laws, regulations, or third-party rights
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Upload, post, or transmit content that is defamatory, obscene, harassing, or offensive
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Impersonate any person or entity or misrepresent your affiliation
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Interfere with or disrupt the Service or servers or networks connected to the Service
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Attempt to gain unauthorized access to any portion of the Service
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Use automated means (bots, scripts, scrapers) to access the Service without our permission
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Reverse engineer, decompile, or disassemble any aspect of the Service
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Remove, obscure, or alter any proprietary notices from the Service
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Use the Service to create content that violates intellectual property rights of others
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Generate content that promotes violence, discrimination, or illegal activities
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Abuse, harass, or harm another user or our support staff
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
          4.2 Content Responsibility
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You are solely responsible for all content you create, upload, or distribute using the Service. You represent and warrant that you have all necessary rights, licenses, and permissions for any content you submit to the Service.
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
          4.3 Voice Cloning and Avatar Creation
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          When you create avatars or use voice cloning features:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You represent and warrant that you have the legal right to use any voice, likeness, or personal characteristics you upload or clone
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You may only clone voices from content you own or have explicit permission to use
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You are solely responsible for ensuring you have obtained all necessary consents from any individuals whose voice or likeness you use
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You agree not to create avatars or clone voices of public figures, celebrities, or other individuals without their explicit written consent
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We reserve the right to remove any avatar or voice clone that violates these terms or applicable laws
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
          5. Intellectual Property Rights
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
          5.1 Company Intellectual Property
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          The Service and its original content, features, and functionality are owned by Solara AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Service without our explicit written permission.
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
          5.2 User Content License
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You retain ownership of all content you create or upload to the Service ("User Content"). By using the Service, you grant us a worldwide, non-exclusive, royalty-free, transferable license to:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Use, reproduce, modify, and display your User Content as necessary to provide the Service
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Process your User Content through our AI models to generate outputs and improve our Service
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Create derivative works based on your User Content solely for the purpose of providing and improving the Service
          </li>
        </ul>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          This license terminates when you delete your User Content or close your account, except for content that has been shared with others or is necessary for legal compliance.
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
          5.3 AI-Generated Content Ownership
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Subject to your compliance with these Terms and payment of applicable fees:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You own the content generated by our AI tools based on your inputs and prompts
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We do not claim ownership of AI-generated outputs
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            However, similar outputs may be generated for other users based on similar inputs
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You are responsible for reviewing and ensuring that AI-generated content complies with applicable laws and does not infringe third-party rights
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You may use AI-generated content for commercial purposes
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You may not resell, redistribute, or sublicense the Service itself or access to our AI generation tools
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You retain full commercial rights to use, modify, and distribute AI-generated content created through your account
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
          5.4 Feedback and Suggestions
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Any feedback, suggestions, or ideas you provide about the Service become our property, and we may use them without any obligation to you.
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
          6. Subscription Plans and Payment Terms
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
          6.1 Subscription Plans
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          The Service is offered through various subscription plans with different features and usage limits. Specific details of each plan are available on our pricing page.
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
          6.2 Payment and Billing
        </h3>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Subscription fees are billed in advance on a recurring basis (monthly, annually, or as specified)
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You authorize us to charge your payment method for all fees incurred
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            All fees are final and non-refundable except for billing errors as described in Section 7.2
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You are responsible for providing accurate payment information and updating it as needed
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We reserve the right to change our fees with at least 30 days' advance notice
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
          6.3 Usage Limits and Credits
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Depending on your subscription plan, the Service may include usage limits, credits, or quotas for:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            AI content generation
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Video and avatar creation
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            API calls and integrations
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Storage and data processing
          </li>
        </ul>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Exceeding your plan's limits may result in additional charges, service limitations, or the need to upgrade your plan.
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
          6.4 Automatic Renewal
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date. You will be charged the then-current rate for your plan.
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
          6.5 Free Trial
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          If you sign up for a free trial:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            The trial period and terms will be specified at sign-up
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We may require payment information to start the trial
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You will be automatically charged at the end of the trial unless you cancel
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We reserve the right to modify or terminate free trial offers at any time
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
          6.6 Taxes
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          All fees are exclusive of applicable taxes, duties, or similar governmental assessments. You are responsible for paying all taxes associated with your use of the Service.
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
          7. Cancellation, Refunds, and Downgrades
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
          7.1 Cancellation
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You may cancel your subscription at any time through your account settings. Upon cancellation:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Your subscription will remain active until the end of your current billing period
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You will not be charged for subsequent billing periods
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You will lose access to paid features at the end of your billing period
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You may export your data before your access ends
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
          7.2 Refunds and Exchanges
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          All sales are final. We may offer refunds at our sole discretion.
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
          7.3 Account Suspension or Termination
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We reserve the right to suspend or terminate your account if you violate these Terms. In such cases, you will not be entitled to any refund of prepaid fees.
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
          8. Data Processing and AI Training
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
          8.1 Data Usage
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We process your data to provide and improve the Service. This includes:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Using your inputs and content to generate AI-powered outputs
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Analyzing usage patterns to improve our AI models and features
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Storing your content and generated outputs in accordance with your subscription plan
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
          8.2 AI Model Training
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          By default, we may use anonymized and aggregated data from your use of the Service to train and improve our AI models. This training is conducted internally and your data is not shared with external AI providers for their model training purposes. You may opt out of AI training in your account settings, though this may limit certain features or functionality.
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
          8.3 Data Security
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We implement industry-standard security measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute security. Please see our Privacy Policy for more details on how we handle your data.
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
          8.4 Third-Party Integrations
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          When you connect third-party services (social media, marketing platforms, etc.) to Solara AI:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You authorize us to access and use data from those services as necessary to provide our Service
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You are responsible for complying with the terms of service of those third-party platforms
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We are not responsible for the privacy or security practices of third-party services
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
          9. Privacy and Data Protection
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Your privacy is important to us. Our collection and use of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you consent to our collection and use of your information as described in the Privacy Policy.
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We implement industry-standard security practices and strive to comply with applicable data protection laws in the jurisdictions where we operate.
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
          10. Service Availability and Modifications
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
          10.1 Service Availability
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We strive to maintain high service availability but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Scheduled maintenance
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Technical issues or system failures
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Factors beyond our reasonable control
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
          10.2 Service Modifications
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We reserve the right to modify, update, or discontinue any aspect of the Service at any time. We will provide reasonable notice of material changes when possible, but are not obligated to do so.
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
          10.3 Beta Features
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We may offer beta or experimental features. These features are provided "as is" and may be modified or discontinued at any time without notice.
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
          11. Disclaimers and Limitation of Liability
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
          11.1 Disclaimer of Warranties
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</strong>
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Implied warranties of merchantability, fitness for a particular purpose, or non-infringement
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Warranties regarding the accuracy, reliability, or completeness of AI-generated content
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Warranties that the Service will be uninterrupted, secure, or error-free
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
          11.2 AI-Generated Content Disclaimer
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          AI-generated content may contain errors, inaccuracies, or inappropriate material. You are responsible for:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Reviewing and verifying all AI-generated content before use
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Ensuring content complies with applicable laws and regulations
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Confirming content does not infringe third-party rights
          </li>
        </ul>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We do not warrant that AI-generated content will be accurate, appropriate, or suitable for your purposes.
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
          11.3 Limitation of Liability
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, SOLARA AI AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR:</strong>
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Any indirect, incidental, special, consequential, or punitive damages
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Loss of profits, revenue, data, or business opportunities
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Damage to reputation or brand
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Cost of substitute services
          </li>
        </ul>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR $100, WHICHEVER IS GREATER.</strong>
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
          11.4 Exceptions
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such jurisdictions, our liability will be limited to the maximum extent permitted by law.
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
          12. Indemnification
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You agree to indemnify, defend, and hold harmless Solara AI and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Your use or misuse of the Service
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Your violation of these Terms
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Your violation of any third-party rights, including intellectual property rights
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Your User Content or AI-generated content based on your inputs
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Your violation of any applicable laws or regulations
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We reserve the right to assume exclusive defense and control of any matter subject to indemnification, in which case you will cooperate with us in asserting any available defenses.
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
          13. Dispute Resolution and Governing Law
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
          13.1 Governing Law
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          These Terms shall be governed by and construed in accordance with the laws of Israel, without regard to its conflict of law principles.
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
          13.2 Dispute Resolution Process
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Before filing any legal action, you agree to first attempt to resolve any dispute informally by contacting our support team. We will attempt to resolve the dispute informally within 30 days.
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
          13.3 Arbitration Agreement
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          If we cannot resolve a dispute informally, any dispute arising out of or relating to these Terms or the Service will be resolved through binding arbitration, except that either party may seek injunctive relief in court for intellectual property infringement or violations of these Terms.
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          The arbitration will be conducted by a single arbitrator under the rules of the International Chamber of Commerce, and judgment on the award may be entered in any court having jurisdiction.
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
          13.4 Class Action Waiver
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration.
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
          13.5 Exceptions
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Either party may seek equitable relief (including injunctive relief) in a court of competent jurisdiction to prevent the infringement of intellectual property rights or other proprietary rights.
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
          14. Termination
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
          14.1 Termination by You
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You may terminate your account at any time by following the cancellation process in your account settings or by contacting our support team.
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
          14.2 Termination by Us
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We may suspend or terminate your account immediately, without prior notice or liability, if:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You breach any provision of these Terms
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You fail to pay applicable fees
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Your use of the Service poses a security risk or legal liability
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We are required to do so by law or legal process
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We discontinue the Service or your subscription plan
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
          14.3 Effect of Termination
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Upon termination:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Your right to access and use the Service immediately ceases
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You remain liable for all fees incurred prior to termination
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            We may delete your account and data from our systems
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Provisions that by their nature should survive termination will survive (including intellectual property rights, disclaimers, limitations of liability, and dispute resolution)
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
          14.4 Data Retrieval
        </h3>
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
          15. Export Control and Sanctions
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          The Service may be subject to export control laws and regulations. You agree to comply with all applicable export and import control laws and regulations, including those of the United States and your jurisdiction. You represent that:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You are not located in a country subject to a U.S. government embargo or designated as a "terrorist supporting" country
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You are not listed on any U.S. government list of prohibited or restricted parties
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            You will not use the Service for any purposes prohibited by applicable export control laws
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
          16. Modifications to Terms
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Email to the address associated with your account
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Notice within the Service or on our website
          </li>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            Updating the "Last Updated" date at the top of these Terms
          </li>
        </ul>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Your continued use of the Service after notification of changes constitutes your acceptance of the modified Terms. If you do not agree to the modified Terms, you must stop using the Service and may cancel your account.
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
          17. General Provisions
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
          17.1 Entire Agreement
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          These Terms, together with our Privacy Policy and any other legal notices published by us on the Service, constitute the entire agreement between you and Solara AI regarding the Service.
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
          17.2 Assignment
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You may not assign or transfer these Terms or your account without our prior written consent. We may assign or transfer these Terms, in whole or in part, without restriction.
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
          17.3 Severability
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect, and the invalid provision will be modified to the minimum extent necessary to make it valid and enforceable.
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
          17.4 Waiver
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
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
          17.5 Force Majeure
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          We will not be liable for any failure or delay in performing our obligations under these Terms due to circumstances beyond our reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, or internet service provider failures.
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
          17.6 Independent Contractors
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          The parties are independent contractors. These Terms do not create a partnership, franchise, joint venture, agency, or employment relationship between the parties.
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
          17.7 Notice
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          Notices to you may be sent to the email address associated with your account. Notices to us should be sent to the contact information provided below.
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
          17.8 Language
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          These Terms may be translated into other languages for your convenience. In the event of any conflict between the English version and a translated version, the English version will prevail.
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
          18. Special Provisions for Enterprise Customers
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          If you have entered into a separate written agreement with us for enterprise services, the terms of that agreement will prevail to the extent of any conflict with these Terms.
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
          19. Acknowledgment of AI-Assisted Service
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          You acknowledge and agree that:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "4px" }}>
            The Service uses artificial intelligence and machine learning technologies
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
            We are continuously improving our AI models, which may result in changes to output quality or characteristics
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
          20. Contact Information
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          If you have any questions about these Terms of Service, please contact us:
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          <strong>Company Name:</strong> Progressus Software LTD<br />
          <strong>Email:</strong> <a href="mailto:contact@solaraai.com" style={{ color: "#0066cc", textDecoration: "underline" }}>contact@solaraai.com</a><br />
          <strong>Address:</strong> Ben Yehuda St 32, Tel Aviv-Jaffa, 6342502
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px", marginTop: "48px" }}>
          For technical support or account-related inquiries, please contact our support team through the Service or at the email address above.
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#344054", marginBottom: "16px" }}>
          © 2025 Solara AI. All rights reserved.
        </p>
      </article>
      <Footer />
    </main>
  );
}
