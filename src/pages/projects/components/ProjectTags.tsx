import React, { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
};

const ProjectTag: React.FC<TagProps> = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm mr-2 mb-2 transition-all focus:outline-none cursor-pointer ${
        active
          ? "bg-white/10 text-green-500 ring-1 ring-green-300/40"
          : "text-gray-400 hover:text-white/40"
      }`}
    >
      {children}
    </button>
  );
};

export default ProjectTag;
