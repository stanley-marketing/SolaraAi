import maisonRemodelingCaseStudy from "./maison-remodeling";
import theMissingPieceCaseStudy from "./the-missing-piece";
import type { CaseStudy } from "./types";

export type {
  CaseStudy,
  CaseStudyCta,
  CaseStudyFaqItem,
  CaseStudyMetric,
  CaseStudySection,
  CaseStudySectionBlock,
  CaseStudySeoMeta,
} from "./types";

export const caseStudies: CaseStudy[] = [
  maisonRemodelingCaseStudy,
  theMissingPieceCaseStudy,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getAllCaseSlugs(): string[] {
  return caseStudies.map((caseStudy) => caseStudy.slug);
}
