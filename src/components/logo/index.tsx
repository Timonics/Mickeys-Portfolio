import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to={"/"} className="relative text-lg flex w-[58px] lg:w-[50px] monte">
      <div className="top-div h-1/2 flex items-center justify-between px-2.5 font-extrabold bg-green-300 text-black">
        <p>M</p>
        <p>I</p>
      </div>
      <div className="bottom-div h-1/2 flex items-center bg-white/10 justify-between font-bold px-2.5 -translate-x-1">
        <p>C</p>
        <p>K</p>
      </div>
    </Link>
  );
};

export default Logo;
