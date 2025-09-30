import React from "react";
import Circle from "../../../components/circle";
import { Link } from "react-router-dom";

const MyHub: React.FC = () => {
  return (
    <div className="flex flex-col sm:items-center justify-center gap-4 p-4 mx-2 min-h-[450px] relative mt-30 lg:mt-70 lg:w-[80%] 2xl:w-[70%] max-lg:px-6 max-lg:mx-8 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 to-rose-500/20 overflow-hidden">
      <Circle size={70} top={6} left={100} />
      <Circle size={130} top={370} left={-70} />
      <Circle size={110} top={380} left={580} />
      <Circle size={160} top={15} left={640} />
      <Circle size={90} top={200} left={940} />
      <Circle size={140} top={300} left={1150} />
      <Circle size={140} top={100} left={1500} />
      <Circle size={100} top={490} left={1710} />
      <Circle size={150} top={10} left={1800} />
      <p className="font-bold fira p-1 px-3 w-fit bg-red-500/15 rounded-full text-green-500/80 text-xs sm:text-lg z-10">
        Mickey's Hub
      </p>
      <h2 className="pops text-[36px] md:text-[45px] leading-[1.42em] font-thin z-10">
        Code, Coffee &{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-600/40 to-green-400/30 text-[40px] sm:text-[45px] md:text-[55px] font-medium">
          Creativity!
        </span>
      </h2>
      <p className="font-light outfit sm:text-xl text-white/75 sm:text-center sm:w-[90%] 2xl:w-[70%] z-10">
        Building cool web apps, breaking bugs (sometimes creating them too 😅),
        and turning ideas into seamless user experiences. Let’s make something
        awesome!
      </p>
      <Link
        to={"my-hub"}
        className="main_btn pops bg-white text-black shadow-lg shadow-rose-400/40 mt-2 w-fit"
        onClick={() => {
          window.scrollTo({ behavior: "smooth", top: 0 });
        }}
      >
        Visit My Hub
      </Link>
      {/* <div className="size-[530px] border absolute rounded-full right-0 bottom-0 translate-x-30 translate-y-25 bg-rose-500/20 blur-[120px]"/> */}
    </div>
  );
};

export default MyHub;
