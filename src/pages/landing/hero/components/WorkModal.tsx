import { Link } from "react-router-dom";
import { PROJECTS } from "../../../../constants/projects";
import { ArrowDown } from "lucide-react";

export default function WorksModal({}) {
  const projects = PROJECTS.filter((proj) => proj.featured);

  const projectsElements = projects
    .sort(() => Math.random() - 0.5)
    .map((project) => (
      <div className="bg-gradient-to-br from-black via-black to-gray-800 rounded-xl w-full flex flex-col md:flex-row items-center gap-4 md:gap-2 md:h-[250px]">
        <div className="rounded-xl w-full h-[250px] md:w-[300px] bg-white/10" />
        <div className=" flex flex-col gap-2 w-full p-4 md:px-2 md:w-[calc(100%-300px)] md:h-[230px] lg:h-[200px] border-white">
          <h1 className="text-lg outfit font-semibold text-white">
            {project.title}
          </h1>
          <p className="text-sm text-white/40 nun">{project.desc}</p>
          <Link
            to={`projects/${project.name}/case-study`}
            className="main_btn w-fit mt-auto outfit text-sm bg-white/80 text-black transition duration-300 hover:scale-105 ease-in-out"
          >
            Explore
          </Link>
        </div>
      </div>
    ));

  return (
    <div className="space-y-6 h-[70vh] flex flex-col items-start p-2 overflow-auto no-scrollbar w-full">
      <ArrowDown
        className="p-2 rounded-full absolute bottom-0 animate-bounce right-4 bg-white"
        size={40}
      />
      <h1 className="text-black font-bold text-4xl md:text-5xl outfit md:text-center mt-4 ml-2">
        Featured Projects
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-8 md:p-4 lg:p-6 w-full">
        {projectsElements}
      </div>
      <Link
        to={"/projects"}
        className="main_btn pops bg-white text-black shadow-lg shadow-green-400/40 flex w-fit my-8 mx-auto"
        onClick={() => scrollTo({ behavior: "smooth", top: 0 })}
      >
        See My Projects
      </Link>
    </div>
  );
}
