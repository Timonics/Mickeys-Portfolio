import React, { useState } from "react";
import { previewStacks } from "../../../constants/stacks";

const MyStacks: React.FC = () => {
  const [isActive, setIsActive] = useState("frontend");
  const stackPreviewArr = previewStacks
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  const stackPreviewElements = stackPreviewArr.map((stack) => {
    const Icon = stack.icon;
    return (
      <div
        key={stack.name}
        className="bg-gray-200 h-[100px] sm:w-[160px] xl:w-[150px] xl:gap-1 rounded-lg text-black flex items-center justify-center text-lg pops shadow-md"
      >
        <Icon size={30} />
        <p className="font-semibold min-[400px]:text-xs sm:text-sm md:text-base">{stack.name}</p>
      </div>
    );
  });

  const frontendStacks = previewStacks.filter(
    (stack) => stack.type === "frontend" || stack.type === "both"
  );
  const backendStacks = previewStacks.filter(
    (stack) => stack.type === "backend" || stack.type === "both"
  );

  return (
    <div className="mt-[50px] pb-5 lg:w-[90%] 2xl:w-[85%] max-lg:p-6 flex flex-col items-center">
      <hr className="border border-black/30 w-full" />
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between xl:w-[70%] mt-30">
        <p className="text-black outfit text-6xl font-semibold">
          Tools of the Trade
        </p>
        <div className="grid min-[500px]:grid-cols-2 gap-6 w-full sm:w-fit">
          {stackPreviewElements}
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 mt-30 xl:mt-50 brder border-black xl:w-[50%]">
        <h2 className="text-[36px] md:text-[50px] leading-[1.25em] pops font-thn text-black">
          🛠️ Code. Debug. Optimize. Repeat.
        </h2>
        <p className="font-light outfit sm:text-xl xl:text-2xl text-black/75">
          From crafting seamless frontends to building powerful APIs, these are
          the tools I wield daily. Each line of code, every database query, and
          all the debugging sessions—powered by this ever-evolving tech stack.
        </p>
      </div>
      <div className="w-full xl:w-[70%] mt-20 flex gap-5">
        <div className="border-l border-black/50 flex flex-col text-black pb-10">
          <p className="font-extrabold nun text-green-600 bg-green-500/30 text-xs h-fit w-fit p-2 rounded-lg ml-5">
            MY STACKS
          </p>
          <div
            className={`${
              isActive === "frontend" && "border-l-[2px] border-green-500"
            } mt-8 pl-4`}
          >
            <h2
              className={`text-2xl pops font-semibold cursor-pointer ${
                isActive === "frontend" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setIsActive("frontend")}
            >
              Frontend Development{" "}
            </h2>
            {isActive === "frontend" && (
              <div>
                <p className="text-black/75 outfit">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam nemo enim blanditiis qui asperiores minima iusto, vero
                  accusamus velit eum.
                </p>
                <div className="grid min-[400px]:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                  {frontendStacks.map((stack) => {
                    const Icon = stack.icon;
                    return (
                      <div
                        key={stack.name}
                        className="bg-gradient-to-br from-gray-800 to-black h-[100px] gap-1 xl:gap-1 rounded-lg text-white/50 flex items-center justify-center text-lg pops shadow-md"
                      >
                        <Icon size={30} />
                        <p className="font-semibold min-[400px]:text-xs sm:text-sm md:text-base">
                          {stack.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div
            className={`${
              isActive === "backend" && "border-l-[2px] border-green-500"
            } mt-8 pl-4`}
          >
            <h2
              className={`text-2xl pops font-semibold cursor-pointer ${
                isActive === "backend" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setIsActive("backend")}
            >
              Backend Development{" "}
            </h2>
            {isActive === "backend" && (
              <div>
                <p className="text-black/75 outfit">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam nemo enim blanditiis qui asperiores minima iusto, vero
                  accusamus velit eum.
                </p>
                <div className="grid min-[400px]:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                  {backendStacks.map((stack) => {
                    const Icon = stack.icon;
                    return (
                      <div
                        key={stack.name}
                        className="bg-gradient-to-br from-gray-800 to-black h-[100px] gap-1 xl:gap-1 rounded-lg text-white/50 flex items-center justify-center text-lg pops shadow-md"
                      >
                        <Icon size={30} />
                        <p className="font-semibold min-[400px]:text-xs sm:text-sm md:text-base">
                          {stack.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStacks;
