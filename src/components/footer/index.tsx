import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="md:mt-10 flex flex-col gap-5 w-full bg-white/1 pt-4 border-t-2 border-white/10">   
      <div className="flex items-center justify-center gap-2">
        <p className="monte text-sm font-semibold text-white/40">
          © 2025 Oderinde Michael. All Rights Reserved.
        </p>
      </div>
      <div className="w-full pops flex items-center justify-center">
        <h1 className="xl:text-[135px] lg:text-[115px] md:text-[95px] max-md:hidden xl:leading-25 md:leading-16 lg:leading-21 text-white/5 font-semibold -tracking-widest">
          Oderinde Michael
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
