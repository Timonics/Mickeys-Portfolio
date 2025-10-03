import React from "react";
import { IconType } from "react-icons";

type CardProps = {
  Icon?: IconType;
  projectName: string;
  textColor: string;
  fontSize: string;
  backgroundColor?: string;
  backgroundGradient?: string;
  shadowClassName?: string;
  onClick?: () => void;
};

const ProjectCard: React.FC<CardProps> = ({
  Icon,
  projectName,
  textColor,
  fontSize,
  backgroundColor,
  backgroundGradient,
  shadowClassName,
  onClick,
}) => {
  return (
    <div
      className={`${
        backgroundGradient && backgroundGradient
      } flex items-center justify-center h-[210px] sm:h-[280px] w-full lg:w-1/2 pointer-events-auto lg:pointer-events-none rounded-lg ${
        shadowClassName && shadowClassName
      } ${backgroundColor && backgroundColor} lg:shadow-none`}
      onClick={onClick}
    >
      <div
        className="pops font-extrabold flex flex-wrap text-center items-center justify-center gap-2"
        style={{
          color: textColor,
          fontSize,
        }}
      >
        {Icon && <Icon className="p-2 bg-black rounded-xl" size={40} />}{" "}
        {projectName}
      </div>
    </div>
  );
};

export default ProjectCard;
