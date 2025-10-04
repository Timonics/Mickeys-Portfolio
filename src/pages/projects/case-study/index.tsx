import React, { useMemo } from "react";
import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import Research from "./components/Research";
import Implementation from "./components/Implementation";
import Design from "./components/Design";
import NextSteps from "./components/NextSteps";
import CTA from "./components/CTA";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../../../constants/projects";

const CaseStudy: React.FC = () => {
  const { project } = useParams<{ project: string }>();

  const selected_project = useMemo(
    () => PROJECTS.find((proj) => proj.name == project),
    [project]
  );

  if (!selected_project) {
    return (
      <div className="fixed min-h-screen flex items-center justify-center pops text-2xl">
        Project Not Found!!
      </div>
    );
  }

  const caseStudy = useMemo(() => selected_project.caseStudy, [project]);

  return (
    <main className="pt-10 w-full flex flex-col items-center">
      <Hero />
      <CTA live={selected_project.live} repo={selected_project.repo} />
      <ProblemStatement {...caseStudy.problemStatement} />
      <Research researchPlanning={caseStudy.researchPlanning} />
      <Implementation implementation={caseStudy.engineering} />
      <Design designUX={caseStudy.designUX} />
      <NextSteps nextSteps={caseStudy.nextSteps} />
      <CTA live={selected_project.live} repo={selected_project.repo} />
    </main>
  );
};

export default CaseStudy;
