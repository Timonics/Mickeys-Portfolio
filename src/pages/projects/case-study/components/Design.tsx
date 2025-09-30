import { CircleSmall } from "lucide-react";
import React from "react";

const Design: React.FC = () => {
  return (
    <section className="space-y-4 pt-20 max-w-3xl w-full">
      <p className="font-bold fira p-1 px-3 w-fit bg-red-500/15 rounded-full text-green-500/80 text-xs sm:text-lg z-10">
        Design & UX
      </p>
      <div className=" flex flex-col items-start border-2 bg-black border-white/10 p-4 outfit">
        <ul className="text-white/70 space-y-2">
          <li className="flex gap-4 items-center">
            <CircleSmall size={18} />
            <h2 className="">
              <span className="font-semibold text-white">
              UI direction: 
              </span>{" "}
              light-green/white theme (Poppins & Outfit)
            </h2>
          </li>
          <li className="flex gap-4 items-center">
            <CircleSmall size={18} />
            <h2>
              Mobile-first wireframes {"->"} final responsive layouts 
            </h2>
          </li>
          <li className="flex gap-4 items-center">
            <CircleSmall size={18} />
            <h2>
              Core flows: product discovery, wishlist, checkout
            </h2>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Design;
