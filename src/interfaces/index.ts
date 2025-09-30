import { IconType } from "react-icons";

export interface ProjectType {
  name: string;
  title: string;
  subtitle: string;
  tags: string;
  desc: string;
  icon: IconType;
  textColor: string;
  headerColor: string;
  backgroundColor?: string;
  backgroundGradient?: string;
  shadowClassName: string;
  live: string;
  repo: string;
  featured?: boolean
}
