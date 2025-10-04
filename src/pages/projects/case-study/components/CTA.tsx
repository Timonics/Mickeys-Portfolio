import React from "react";

type Props = {
  live?: string;
  repo: string;
};

const CTA: React.FC<Props> = ({ live, repo }) => {
  return (
    <div className="py-20 flex items-center justify-center gap-5 outfit">
      {live && <button
        onClick={() => window.open(live, "_blank")}
        className="px-4 py-3 bg-white/10 transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
      >
        View Live Demo
      </button>}
      <button
        onClick={() => window.open(repo, "_blank")}
        className="border-2 border-white/30 bg-black text-white/70 px-3 py-2  transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
      >
        View GitHub Repo
      </button>
    </div>
  );
};

export default CTA;
