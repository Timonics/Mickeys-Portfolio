import React, { useMemo, useState } from "react";
import { PROJECTS } from "../../constants/projects";
import ProjectTag from "./components/ProjectTags";
import ProjectCard from "./components/ProjectCard";
import SectionWrapper from "../../layouts/section-wrapper";
import { Link } from "react-router-dom";
import MobileProjectModal from "./components/MobileProjectModal";

const Project: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [showProjectInfo, setShowProjectInfo] = useState<boolean>(false);
  const [showAllTags, setShowAllTags] = useState<boolean>(false);
  const [selectedProjectName, setSelectedrojectName] = useState<string>("");
  const allTags: string[] = useMemo(() => {
    const tagSet: Set<string> = new Set();
    PROJECTS.forEach((project) => {
      project.tags.forEach((tag: string) => tagSet.add(tag));
    });
    return ["All", ...Array.from(tagSet)];
  }, []);

  const filteredProjects =
    activeTag !== "All"
      ? PROJECTS.filter((project) => project.tags.includes(activeTag))
      : PROJECTS;

  const mobileSelectedProject = PROJECTS.find(
    (proj) => proj.name === selectedProjectName
  );

  const filteredProjectsElements = filteredProjects
    .sort(() => Math.random() - 0.5)
    .map((project) => {
      const Icon = project.icon!;
      const projectTags = project.tags;
      return (
        <div
          key={project.title}
          className="flex items-center justify-around w-full gap-10 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg lg:p-6 rounded-xl shadow-2xl"
        >
          <ProjectCard
            Icon={Icon}
            projectName={project.title}
            textColor={project.textColor!}
            fontSize="25px"
            backgroundGradient={project.backgroundGradient}
            backgroundColor={project.backgroundColor}
            shadowClassName={project.shadowClassName}
            onClick={() => {
              setSelectedrojectName(project.name);
              setShowProjectInfo(true);
            }}
          />
          <div className="hidden lg:flex flex-col gap-2 outfit w-1/2">
            <h2
              className={`text-xl pops font-bold bg-clip-text text-transparent bg-gradient-to-r ${project.headerColor}`}
            >
              {project.title}
            </h2>
            <p className="text-white/80">{project.subtitle}</p>
            <p className="text-white/50 mt-2">{project.desc}</p>
            <div className="flex gap-4 items-center mt-2">
              {project.tags.map((tag, index) => (
                <p
                  key={index}
                  className="text-sm bg-white/5 rounded-full py-2 px-4"
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className="mt-2 flex items-center text-sm font-bold gap-5">
              {projectTags.includes("Fullstack") && (
                <button
                  onClick={() => window.open(project.live, "_blank")}
                  className="cursor-pointer py-3 px-5 rounded-lg bg-white/20 border-[1.5px] border-white/75 text-white/75"
                >
                  View Demo
                </button>
              )}
              <button
                onClick={() => window.open(project.repo, "_blank")}
                className="cursor-pointer py-3 px-5 rounded-lg border-[1.5px] border-white/50 text-white/75"
              >
                View Repo
              </button>
              <Link
                onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
                to={`${project.name}/case-study`}
                className="cursor-pointer py-3 px-5 rounded-lg text-black bg-gradient-to-r from-green-400 to-teal-400"
              >
                Case Study
              </Link>
            </div>
          </div>
        </div>
      );
    });

  return (
    <>
      <header className="w-full space-y-5">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="text-5xl md:text-7xl text-black bg-white font-bold p-4 pt-3 px-2 pops w-fit">
            My
          </h1>{" "}
          <h1 className="text-5xl md:text-7xl font-bold pops py-2 w-fit bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-900 via-rose-500 to-rose-700 ">
            Projects
          </h1>
        </div>
        <p className="outfit text-white/70 text-lg lg:w-[70%]">
          A selection of my favorite builds __ from experimental playground
          ideas to fully deployed production apps. Every project represents a
          new challenge i tackled and a new skill i honed.
        </p>
        <div className="outfit mt-8 text-lg flex gap-6 flex-wrap p-4 items-center justify-center text-white/50">
          {(showAllTags ? allTags : allTags.slice(0, 3)).map((tag) => (
            <ProjectTag
              key={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </ProjectTag>
          ))}
          <button onClick={() => setShowAllTags(!showAllTags)} className="px-2 py-1 rounded-md text-md fontbold bg-white/5 text-green-400">
            {showAllTags ? "Collapse tags" : "View All tags"}
          </button>
        </div>
      </header>
      <main className="w-full sm:w-[calc(100%-50px)] md:w-[calc(100%-80px)] py-4 px-2 flex flex-col items-center gap-10">
        <SectionWrapper>{filteredProjectsElements}</SectionWrapper>
      </main>
      <div className="max-w-6xl mx-auto mb-20 text-center outfit">
        <div className="inline-block bg-white/3 p-6 rounded-2xl">
          <h4 className="text-2xl font-bold">Like what you see</h4>
          <p className="text-sm text-gray-300 mt-1">
            Let's build something together
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              to={"/contact-me"}
              onClick={() =>
                window.scrollTo({
                  behavior: "smooth",
                  top: 0,
                })
              }
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-black font-semibold"
            >
              Contact Me
            </Link>
            <Link
              to={""}
              className="px-5 py-2 rounded-lg border border-white/10 text-sm"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>
      {showProjectInfo && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <MobileProjectModal
            showProjectInfo={showProjectInfo}
            setShowProjectInfo={setShowProjectInfo}
            mobileSelectedProject={mobileSelectedProject}
          />
        </div>
      )}
    </>
  );
};
export default Project;
