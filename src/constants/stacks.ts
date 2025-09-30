import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoPostgresql,
} from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiRedis, SiSequelize } from "react-icons/si";

export const previewStacks = [
  {
    name: "React",
    icon: FaReact,
    type: "frontend"
  },
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
    type: "both"
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    type: "both"
  },
  {
    name: "TailwindCSS",
    icon: BiLogoTailwindCss,
    type: "frontend"
  },
  {
    name: "NodeJS",
    icon: FaNodeJs,
    type: "backend"
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    type: "backend"
  },
  {
    name: "Sequelize",
    icon: SiSequelize,
    type: "backend"
  },
  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    type: "backend"
  },
  {
    name: "redis",
    icon: SiRedis,
    type: "backend"
  }, 
];
