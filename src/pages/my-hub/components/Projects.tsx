import React from "react";
import { PROJECTS } from "../../../constants/hub-projects";

const Projects: React.FC = () => {
  const projectsElements = PROJECTS.map((project) => (
    <div
      key={project.name}
      className="border-2 border-white/30 p-4 rounded-xl h-[210px] w-[280px]"
    >
      <div
        className={`px-3 py-1 fira rounded-lg bg-gray-400/15 w-fit ml-auto text-xs ${
          project.status == "Active" && "text-[#d08700]"
        } ${project.status == "Completed" && "text-[#00c950]"} ${
          project.status == "Paused" && "text-[#4a5565]"
        }`}
      >
        {project.status}
      </div>
      <h1 className="text-xl outfit">{project.title}</h1>
      <p className="nun text-xs text-white/40 pt-2">{project.desc}</p>
      <button className="main_btn mt-4 outfit text-sm bg-white/80 text-black transition duration-300 hover:scale-105 ease-in-out">
        View Repo
      </button>
    </div>
  ));
  return (
    <section className="py-10 space-y-5 max-w-3xl">
      <p className="font-bold fira p-1 px-3 w-fit bg-green-500/15 rounded-full text-rose-500/80 text-xs sm:text-lg z-10">
        Side Projects
      </p>
      <div className="flex flex-wrap items-center gap-8 justify-center text-green-500 bg-white/5 p-10">
        {projectsElements}
      </div>
    </section>
  );
};

export default Projects;
