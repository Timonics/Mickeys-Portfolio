import React from "react";

const CTA: React.FC = () => {
  return (
    <div className="py-20 flex items-center justify-center gap-5 outfit">
      <button className="px-4 py-3 bg-white/10 transition duration-300 ease-in-out hover:scale-105 cursor-pointer">View Live Demo</button>
      <button className="border-2 border-white/30 bg-black text-white/70 px-3 py-2  transition duration-300 ease-in-out hover:scale-105 cursor-pointer">View GitHub Repo</button>
    </div>
  );
};

export default CTA;
