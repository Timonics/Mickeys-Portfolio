import { Link } from "react-router-dom";

const projects = [
  {
    title: "ThriftEase",
    description: "A marketplace for thrifted items, built with React & NestJS.",
    image: "/images/thrift-ease.png",
    link: "/projects#thrift-ease",
  },
  {
    title: "Wheely",
    description: "Car rental booking platform with real-time availability.",
    image: "/images/wheely.png",
    link: "/projects#wheely",
  },
  {
    title: "FleetIQ",
    description: "Fleet management dashboard with live tracking & analytics.",
    image: "/images/fleetiq.png",
    link: "/projects#fleetiq",
  },
];

export default function WorksModal({}) {
  const projectsElements = projects
    .sort(() => Math.random() - 0.5)
    .slice(0, 2)
    .map((project) => (
      <div className="bg-black rounded-xl max-w-sm h-[320px]">
        <div className="rounded-t-xl h-[150px] w-full bg-white/10" />
        <div className=" flex flex-col h-[170px] gap-2 p-4 bg-gradient-to-br from-gray-950 to-black rounded-b-xl">
          <h1 className="text-lg outfit font-semibold text-white">
            {project.title}
          </h1>
          <p className="text-sm text-white/40 nun">{project.description}</p>
          <button className="main_btn mt-auto outfit text-sm bg-white/80 text-black transition duration-300 hover:scale-105 ease-in-out">
            Explore
          </button>
        </div>
      </div>
    ));

  return (
    <div className="space-y-6 max-w-[70vw] h-[70vh] p-4 overflow-auto scrollbar">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl outfit md:text-center mt-4">
        Featured Projects
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
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
