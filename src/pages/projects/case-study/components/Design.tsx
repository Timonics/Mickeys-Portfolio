import { CircleSmall } from "lucide-react";
import React from "react";

type Props = {
  designUX: string[];
};

const Design: React.FC<Props> = ({ designUX }) => {
  return (
    <section className="space-y-4 pt-20 max-w-3xl w-full">
      <p className="font-bold fira p-1 px-3 w-fit bg-red-500/15 rounded-full text-green-500/80 text-xs sm:text-lg z-10">
        Design & UX
      </p>
      <div className=" flex flex-col items-start border-2 bg-black border-white/10 p-4 outfit">
        <ul className="text-white/70 space-y-2">
          {designUX.map((item, i) => (
            <li key={i} className="flex gap-4 items-center">
              <CircleSmall size={18} />
              <h2 className="">{item}</h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Design;
