import React from "react";
import Nav from "../../components/nav";
import Hero from "../../pages/landing/hero";
import Projects from "../../pages/landing/projects";
import MyHub from "../../pages/landing/my-hub";
import HeroVignettes from "../../components/vignettes/hero-vignette";
import Stacks from "../../pages/landing/stacks";
import Contact from "../../pages/landing/contact";
import SectionWrapper from "../section-wrapper";
import LandingFooter from "../../pages/landing/footer";

const HomeLayout: React.FC = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center">
      <HeroVignettes />
      <Nav />
      <div className="flex flex-col w-full items-center mt-40 gap-[50px]">
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
        <SectionWrapper>
          <MyHub />
        </SectionWrapper>
        <div className="w-full flex flex-col gap-[50px] items-center bg-white/95 mt-30 pb-30">
          <SectionWrapper>
            <Projects />
            <Stacks />
          </SectionWrapper>
        </div>
        <Contact />
      </div>
      <div className="w-full flex flex-col items-center">
        <SectionWrapper>
          <LandingFooter />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default HomeLayout;
