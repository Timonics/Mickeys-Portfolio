import { Circle } from "lucide-react";
import React from "react";

type Props = {
  nextSteps: string[];
};

const NextSteps: React.FC<Props> = ({ nextSteps }) => {
  return (
    <div className="max-w-6xl mx-auto mt-20 mb-10 text-center outfit">
      <div className="inline-block bg-white/3 p-6 rounded-2xl">
        <h4 className="text-2xl font-bold">Next Steps</h4>
        <hr className="border border-white/3 my-4" />
        <div className="mt-4">
          <ul className="text-white/70 space-y-2">
            {nextSteps.map((item, index) => (
              <li key={index} className="flex gap-4 items-center ">
                <Circle size={10} />
                <h2 className="text-start ">{item}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;
