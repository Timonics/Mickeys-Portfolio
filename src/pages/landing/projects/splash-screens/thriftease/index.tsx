import React from "react";
import { MdSell } from "react-icons/md";

const ThriftEase: React.FC = () => {
  return (
    <div className="thriftease-background flex items-center justify-center h-[180px] w-[250px] sm:w-[300px] sm:h-[220px] md:w-[320px] md:h-[240px] lg:w-[300px] lg:h-[250px] rounded-2xl transform -rotate-[5deg] -translate-x-[4vw] min-[450px]:-translate-x-[6vw] min-[550px]:-translate-x-[4vw] shadow-2xl shadow-[#039832f9]/60 min-[1180px]:translate-y-25">
      <div className="pops font-extrabold text-[#15883a] flex items-center text-[30px]">
        <MdSell /> ThriftEase.
      </div>
    </div>
  );
};

export default ThriftEase;
