import { CircleSmall } from "lucide-react";
import React from "react";

type Props = {
  researchPlanning: string[];
};

const Research: React.FC<Props> = ({ researchPlanning }) => {
  return (
    <section className="space-y-4 pt-20 max-w-3xl w-full">
      <p className="font-bold fira p-1 px-3 w-fit bg-green-500/15 rounded-full text-rose-500/80 text-xs sm:text-lg z-10">
        Research & Planning
      </p>
      <div className=" flex flex-col items-start border-2 bg-black border-white/10 p-4 outfit">
        <ul className="text-white/70 space-y-2">
          {researchPlanning.map((item, i) => (
            <li key={i} className="flex gap-4 items-center">
              <CircleSmall size={18} />
              <h2>{item}</h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Research;
