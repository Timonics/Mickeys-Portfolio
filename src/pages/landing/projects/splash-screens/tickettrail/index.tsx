import React from "react";
import { PiFilmReelFill } from "react-icons/pi";

const TicketTrail: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[180px] w-[250px] sm:w-[300px] sm:h-[220px] md:w-[320px] md:h-[240px] lg:w-[300px] lg:h-[250px] rounded-2xl transform -rotate-[1.56deg] -translate-x-[2vw] min-[450px]:-translate-x-[4vw] min-[550px]:-translate-x-[6vw] min-[1180px]:-translate-y-20 border2 border-red-60 shadow-2xl shadow-red-600/60 bg-red-300">
      <h1 className="font-bold pops flex items-center text-[30px] text-red-600 gap-2">
        <PiFilmReelFill className="p-2 bg-black rounded-xl" size={40} />
        TicketTrail.
      </h1>
    </div>
  );
};

export default TicketTrail;
