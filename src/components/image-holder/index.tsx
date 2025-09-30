import React from "react";

const MyImage: React.FC = () => {
  return (
    <>
      <div className="absolute w-[55%] max-w-[350px] h-[80%] max-h-[400px] rounded-xl -translate-y-4 -translate-x-4 bg-black/70 transform -rotate-[8deg]" />
      <div className="absolute w-[55%] max-w-[350px] h-[80%] max-h-[400px] rounded-xl translate-y-6 translate-x-6 transform -rotate-[3deg] bg-gray-500" />
      <div className="absolute w-[55%] max-w-[350px] h-[80%] max-h-[400px] rounded-xl translate-y-14 translate-x-14 transform rotate-[4deg] bg-white/85" />
      {/* <div className="border-white/30 border border-dashed top-2 w-full translate-y-7 absolute" />
        <div className="border-white/30 border-r border-dashed w-[90%] h-full -translate-x-4 absolute" />
        <div className="border-white/30 border-l border-dashed w-[90%] h-full translate-x-4 absolute" /> */}
    </>
  );
};

export default MyImage;
