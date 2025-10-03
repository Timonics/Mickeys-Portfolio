import React from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../../../../constants/projects";

const Hero: React.FC = () => {
  const param = useParams();

  const project = PROJECTS.filter((project) => project.name == param.project);

  const projectElement = project.map((proj) => {
    const Icon = proj.icon;
    return (
      <div key={proj.name} className="flex flex-col gap-4">
        <h1
          style={{ color: proj.textColor }}
          className={`pops text-5xl font-bold text-center`}
        >
          {proj.title}
        </h1>
        <div
          className={`${proj.backgroundGradient} mx-auto flex items-center justify-center h-[290px] sm:h-[320px] w-[90vw] md:w-[70vw] lg:w-[60vw] rounded-lg ${proj.shadowClassName} ${proj.backgroundColor} shadow-none mt-4`}
        >
          <div
            className="pops font-extrabold flex items-center gap-2"
            style={{
              color: proj.textColor,
              fontSize: "30px",
            }}
          >
            {Icon && <Icon className="p-2 bg-black rounded-xl" size={40} />}{" "}
            {proj.title}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center w-full items-center outfit text-xl mt-4">
          <p>Timeline: Jan - Mar 2025</p>
          <div className="flex gap-4 items-center">
            Stack:{" "}
            <span className="flex gap-2">
              {proj.tags.map((tag, index) => (
                <p
                  key={index}
                  className="text-sm bg-white/5 rounded-full py-2 px-4"
                >
                  {tag}
                </p>
              ))}
            </span>
          </div>
          <p>Status: Active</p>
        </div>
      </div>
    );
  });

  return <div>{projectElement}</div>;
};

export default Hero;
