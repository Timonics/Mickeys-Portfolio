import React from "react";
import { FaCreditCard } from "react-icons/fa";

const PayHook: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[180px] w-[250px] sm:w-[300px] sm:h-[220px] md:w-[320px] md:h-[240px] lg:w-[300px] lg:h-[250px] rounded-2xl transform rotate-[5deg] translate-x-[2vw] min-[450px]:translate-x-[4vw] min-[550px]:translate-x-[4vw] min-[1180px]:-translate-y-28 border2 border-red-60 shadow-2xl shadow-blue-600/60 bg-blue-500">
      <h1 className="font-bold pops flex items-center text-[30px] text-[#0000E7] gap-2">
        <FaCreditCard className="p-2 bg-black rounded-xl" size={40} />
        PayHook.
      </h1>
    </div>
  );
};

export default PayHook;
