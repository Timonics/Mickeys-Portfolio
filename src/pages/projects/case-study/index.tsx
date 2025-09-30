import React from "react";
import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import Research from "./components/Research";
import Implementation from "./components/Implementation";
import Design from "./components/Design";
import NextSteps from "./components/NextSteps";
import CTA from "./components/CTA";

const CaseStudy: React.FC = () => {
  return (
    <main className="pt-10 w-full flex flex-col items-center">
      <Hero />
      <ProblemStatement />
      <Research />
      <Implementation />
      <Design />
      <NextSteps />
      <CTA />
    </main>
  );
};

export default CaseStudy;
