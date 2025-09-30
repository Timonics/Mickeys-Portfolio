import React from "react";

const ContactVignette: React.FC = () => {
  return (
    <>
      <div className="absolute bg-lime-900/20 sm:bg-lime-900/15 blur-[100px] -translate-x-10 sm:-translate-x-20  w-[1200px] sm:w-[2000px] rounded-full flex justify-center items-center -z-10">
        <div className="vignette w-full h-[300px] opacity-95" />
      </div>
      <div className="absolute bg-green-500/15 sm:bg-green-500/15 translate-x-15 sm:translate-x-25  blur-[100px] w-[500px] sm:w-[700px] h-[260px] rounded-full flex justify-center items-center -z-20">
        <div className="vignette w-full h-[530px] opacity-95 " />
      </div>
    </>
  );
};

export default ContactVignette;
