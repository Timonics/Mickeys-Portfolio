import React from "react";
import Hero from "./components/Hero";
import CurrentlyBrewing from "./components/CurrentlyBrewing";
import Projects from "./components/Projects";
import CTA from "./components/CTA";

const MyHub: React.FC = () => {
  return (
    <main className="w-full flex flex-col items-center max-w-3xl">
      <Hero />
      <CurrentlyBrewing />
      <Projects />
      <CTA />
    </main>
  );
};

export default MyHub;
