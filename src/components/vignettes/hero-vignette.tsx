import React from "react";

const HeroVignettes: React.FC = () => {
  return (
    <div className="-z-10">
      <div className="absolute bg-rose-700/50 blur-[100px] -translate-x-18 w-[1000px] h-[250px] sm:w-[95%] rounded-full top-[300px] sm:top-[450px] lg:top-[250px] left-[80px] flex justify-center items-center">
        <div className="vignette w-full h-full opacity-95" />
      </div>
      <div className="absolute bg-rose-900/50 sm:bg-green-900/50 blur-[100px] -translate-x-18 translate-y-15 w-[1000px] h-[290px] sm:w-[95%] rounded-full top-[300px] sm:top-[450px] lg:top-[300px] left-[80px] flex justify-center items-center">
        <div className="vignette w-full h-full opacity-95" />
      </div>
    </div>
  );
};

export default HeroVignettes;
