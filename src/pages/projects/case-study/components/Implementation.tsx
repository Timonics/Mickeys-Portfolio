import { CheckCircle2 } from "lucide-react";
import React from "react";

type Props = {
  implementation: {
    backend: string[];
    frontend: string[];
    deployment: string[];
  };
};

const Implementation: React.FC<Props> = ({ implementation }) => {
  return (
    <section className="space-y-4 pt-20 max-w-3xl w-full">
      <p className="font-bold fira p-1 px-3 w-fit bg-red-500/15 rounded-full text-green-500/80 text-xs sm:text-lg z-10">
        Engineering / Implementation
      </p>
      <div className="flex flex-col items-start gap-10 rounded-xl bg-white/10 p-4">
        <div className="space-y-2">
          <h2 className="text-xl monte">Backend Highlights</h2>
          <ul className="outfit text-white/60 space-y-2">
            {implementation.backend.map((item, i) => (
              <li key={i} className="flex gap-4 items-center ">
                <div className="w-5 ">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="flex-1">{item}</h3>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl monte">Frontend Highlights</h2>
          <ul className="outfit text-white/60 space-y-2">
            {implementation.frontend.map((item, i) => (
              <li key={i} className="flex gap-4 items-center ">
                <div className="w-5 ">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="flex-1">{item}</h3>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl monte">Deployment</h2>
          <ul className="outfit text-white/60 space-y-2">
            {implementation.deployment.map((item, i) => (
              <li key={i} className="flex gap-4 items-center ">
                <div className="w-5 ">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="flex-1">{item}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
