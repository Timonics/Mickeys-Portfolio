import { CircleSmall } from "lucide-react";
import React from "react";

const Research: React.FC = () => {
  return (
    <section className="space-y-4 pt-20 max-w-3xl w-full">
      <p className="font-bold fira p-1 px-3 w-fit bg-green-500/15 rounded-full text-rose-500/80 text-xs sm:text-lg z-10">
        Research & Planning
      </p>
      <div className=" flex flex-col items-start border-2 bg-black border-white/10 p-4 outfit">
        <ul className="text-white/70 space-y-2">
          <li className="flex gap-4 items-center">
            <CircleSmall size={18} />
            <h2>
              Decided on{" "}
              <span className="font-semibold text-white">
                Express + PostgreSQL
              </span>{" "}
              for rapid iteration
            </h2>
          </li>
          <li className="flex gap-4 items-center">
            <CircleSmall size={18} />
            <h2>
              ER-diagram + REST endpoint map for product, user, and order flow
            </h2>
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Research;
