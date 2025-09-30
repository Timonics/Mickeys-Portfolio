import { MdSell } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { RiChatSmile3Fill } from "react-icons/ri";

export const PROJECTS = [
  {
    name: "thriftease",
    title: "ThriftEase.",
    subtitle: "Sustainable thrift marketplace",
    tags: ["Fullstack", "React", "Node.js"],
    desc: "Marketplace for thrifted fashion with seller dashboards and image uploads.",
    textColor: "#15883a",
    headerColor: "from-green-600 via-green-100 to-green-100",
    icon: MdSell,
    live: "#",
    repo: "#",
    backgroundGradient: "thriftease-background",
    shadowClassName: "shadow-lg shadow-green-400/30",
    featured: true,
  },
  {
    name: "whispr",
    title: "Whispr",
    subtitle: "Chat ",
    tags: ["Fullstack", "NestJS", "Postgres"],
    desc: "Real-time booking, admin dashboard, payment flows and concurrency-safe booking.",
    icon: RiChatSmile3Fill,
    textColor: "#7741f4",
    headerColor: "from-indigo-700 via-indigo-100 to-indigo-100",
    backgroundColor: "bg-slate-800",
    shadowClassName: "shadow-lg shadow-2xl shadow-[#7741f4]/30",
    live: "#",
    repo: "#",
  },
  {
    name: "tickettrail",
    title: "TicketTrail",
    subtitle: "Movie reservation system",
    icon: PiFilmReelFill,
    textColor: "#e7000a",
    headerColor: "from-rose-600 via-rose-100 to-rose-100",
    backgroundColor: "bg-red-300",
    shadowClassName: "shadow-lg shadow-red-400/30",
    tags: ["Express", "Node.js", "Postgres"],
    desc: "APIs for a movie reservations, seat booking and allocations, and payment.",
    repo: "#",
  },
];
