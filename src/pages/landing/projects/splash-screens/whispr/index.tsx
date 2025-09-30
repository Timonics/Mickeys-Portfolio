import React from "react";
import { RiChatSmile3Fill } from "react-icons/ri";

const Whispr: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[180px] w-[250px] sm:w-[300px] sm:h-[220px] md:w-[320px] md:h-[240px] lg:w-[300px] lg:h-[250px] rounded-2xl bg-slate-800 transform rotate-[5deg] translate-x-[4vw] min-[450px]:translate-x-[6vw] min-[550px]:translate-x-[7vw] shadow-2xl shadow-[#7741f4]/60">
      <h1 className="font-bold pops flex items-center text-[30px] text-[#7741f4] gap-2">
        <RiChatSmile3Fill className="p-2 bg-black rounded-xl" size={40} />
        Whispr.
      </h1>
    </div>
  );
};

export default Whispr;
