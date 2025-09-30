import React from "react";
import Hero from "./components/Hero";
import WhyChooseMe from "./components/WhyChooseMe";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

const HireMe: React.FC = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero />
      <WhyChooseMe />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default HireMe;
