export interface CaseStudyMetric {
  label: string;
  value: string;
  context: string;
}

export interface CaseStudyTimelineItem {
  day: string;
  milestone: string;
  description: string;
}

export interface CaseStudyRanking {
  keyword: string;
  position: string;
  note?: string;
}

export interface CaseStudyBeforeAfter {
  beforeLabel: string;
  beforeText: string;
  afterLabel: string;
  afterText: string;
}

export interface CaseStudyChannelResult {
  channel: string;
  metric: string;
  detail: string;
}

export type CaseStudySectionBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "metrics"; items: CaseStudyMetric[] }
  | { type: "callout"; text: string }
  | { type: "timeline"; items: CaseStudyTimelineItem[] }
  | { type: "rankings"; items: CaseStudyRanking[] }
  | { type: "beforeAfter"; items: CaseStudyBeforeAfter[] }
  | { type: "channelGrid"; items: CaseStudyChannelResult[] }
  | { type: "inlineCta"; headline: string; subtext: string; buttonText: string; link: string };

export interface CaseStudySection {
  title: string;
  eyebrow?: string;
  blocks: CaseStudySectionBlock[];
}

export interface CaseStudyFaqItem {
  question: string;
  answer: string;
}

export interface CaseStudyCta {
  headline: string;
  link: string;
}

export interface CaseStudyHeroImage {
  src: string;
  alt: string;
}

export interface CaseStudyQuote {
  text: string;
  author: string;
  role: string;
  avatar: CaseStudyHeroImage;
}

export interface CaseStudySeoMeta {
  title: string;
  description: string;
  canonical: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  location: string;
  engagementPeriod: string;
  datePublished: string;
  challenge: string;
  executiveSummary: string;
  heroHeadline: string;
  heroHighlight: string;
  heroImage: CaseStudyHeroImage;
  clientLogo: CaseStudyHeroImage;
  quote: CaseStudyQuote;
  metrics: CaseStudyMetric[];
  heroMetrics: CaseStudyMetric[];
  sections: CaseStudySection[];
  faq: CaseStudyFaqItem[];
  cta: CaseStudyCta;
  seoMeta: CaseStudySeoMeta;
}
