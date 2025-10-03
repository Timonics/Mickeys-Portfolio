import { IconType } from "react-icons";

export interface ProjectType {
  name: string;
  title: string;
  subtitle: string;
  tags: string[];
  desc: string;
  icon: IconType;
  textColor: string;
  headerColor: string;
  backgroundColor?: string;
  backgroundGradient?: string;
  shadowClassName: string;
  live?: string;
  repo: string;
  featured?: boolean;
  caseStudy: {
    problemStatement: {
      goal: string;
      description: string;
    };
    researchPlanning: string[];
    engineering: {
      backend: string[];
      frontend: string[];
      deployment: string[];
    };
    designUX: string[];
    nextSteps: string[];
  };
}
