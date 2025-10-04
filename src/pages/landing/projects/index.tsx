import React from "react";
import ThriftEase from "./splash-screens/thriftease";
import Whispr from "./splash-screens/whispr";
import ProjectVignette from "../../../components/vignettes/project-vignette";
import TicketTrail from "./splash-screens/tickettrail";
import { Link } from "react-router-dom";
import PayHook from "./splash-screens/payhook";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col min-[1180px]:items-center min-[1180px]:flex-row min-[1180px]:gap-8 gap-4 lg:w-[90%] 2xl:w-[85%] max-lg:p-6 mt-30">
      <div className="relative flex flex-col gap-4 p-12 rounded-3xl min-[1180px]:w-1/2 border bg-black z-10 overflow-hidden shadow-2xl">
        <ProjectVignette />
        <p className="font-extrabold nun text-rose-500/80 text-xs underline underline-offset-3">
          MY PROJECTS
        </p>
        <h2 className="text-[36px] md:text-[45px] lg:text-[55px] leading-[1.25em] pops text-white z-20">
          🚀 Build. Break. Innovate.
        </h2>
        <p className="font-light z-20 outfit sm:text-xl text-white/90">
          From sleek web apps to powerful backends, here’s a glimpse into the
          projects I’ve poured my passion into. Each one is a story of
          late-night debugging, “Aha!” moments, and pushing limits. Wanna see
          more? Let’s dive in!
        </p>
        <Link
          to={"projects"}
          onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
          className="main_btn pops bg-white text-black shadow-lg shadow-rose-600/40 mt-2 w-fit z-20"
        >
          View My Projects
        </Link>
      </div>
      <div className="min-h-[350px] min-[1180px]:w-1/2 flex flex-col items-center justify-center py-10 min-[1180px]:gap-0 p-6">
        <ThriftEase />
        <Whispr />
        <TicketTrail />
        <PayHook />
      </div>
    </div>
  );
};

export default Projects;
