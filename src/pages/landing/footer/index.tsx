import React from "react";
import Logo from "../../../components/logo";
import { Link } from "react-router-dom";

const LandingFooter: React.FC = () => {
  return (
    <div className="mt-70 relative rounded-t-4xl overflow-hidden flex flex-col items-center justify-center p-6 pb-0 lg:w-[90%] 2xl:w-[85%] max-lg:px-6 bg-white/5">
      <div className="absolute h-[700px] w-full top-10 right-1/2 -translate-y-1/2 translate-x-1/2 bg-gradient-to-b -z-10 blur-2xl from-rose-500/40 via-rose-500/40 to-transparent" />
      <div className="sm:text-center flex flex-col gap-3 items-center justify-center mt-10">
        <h1 className="text-[30px] sm:text-[45px] md:text-[55px] leading-[1.25em] pops font-semibold lg:w-2/3 w-full">
          Driven by Code, <br className="lg:hidden" />
          Fueled by Creativity.
        </h1>
        <p className="font-light sm:text-xl text-white/50 lg:w-2/3">
          Crafting seamless experiences, one line of code at a time. Let’s
          connect and create something extraordinary!
        </p>
      </div>
      <div className="w-full flex flex-col xl:flex-row xl:justify-around gap-4 mt-30">
        <div className="space-y-4 ">
          <Logo />
          <p className="monte text-sm font-semibold text-white/40">
            © 2025 Oderinde Michael. <br />
            All Rights Reserved.
          </p>
        </div>
        <div className="mt-4 xl:mt-0">
          <h2 className="pops font-bold">Quick Naviagation</h2>
          <div className="flex flex-col gap-2 items-sm font-light outfit mt-4 text-white/50">
            <Link
              className="transition ease-in-out duration-300 hover:scale-105 hover:text-green-400"
              onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="transition ease-in-out duration-300 hover:scale-105 hover:text-green-400"
              onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              to={"/about-me"}
            >
              About Me
            </Link>
            <Link
              className="transition ease-in-out duration-300 hover:scale-105 hover:text-green-400"
              onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              to={"/projects"}
            >
              Projects
            </Link>
            <Link
              className="transition ease-in-out duration-300 hover:scale-105 hover:text-green-400"
              onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              to={"/my-hub"}
            >
              My Hub
            </Link>
            <Link
              className="transition ease-in-out duration-300 hover:scale-105 hover:text-green-400"
              onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              to={"/contact-me"}
            >
              Contact Me
            </Link>
            <Link
              className="transition ease-in-out duration-300 hover:scale-105 hover:text-green-400"
              onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              to={"/contact-me"}
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="mt-4 xl:mt-0">
          <h2 className="pops font-bold">Contact Information</h2>
          <div className="flex flex-col gap-2 items-sm font-light outfit mt-4 text-white/50">
            <p>Gmail</p>
            <p>LinkedIn</p>
            <p>GitHub</p>
            <p>X</p>
            <p>Phone number</p>
          </div>
        </div>
      </div>
      <div className="w-full pops flex items-center justify-center mt-25">
        <h1 className="xl:text-[135px] lg:text-[115px] md:text-[95px] max-md:hidden xl:leading-25 md:leading-16 lg:leading-21 text-white/2 font-semibold -tracking-widest">
          Oderinde Michael
        </h1>
      </div>
    </div>
  );
};

export default LandingFooter;
