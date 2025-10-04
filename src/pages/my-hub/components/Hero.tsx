import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="text-start space-y-8 mb-20 flex flex-col w-full">
      <div className="flex flex-wrap items-center gap-4">
        <h1 className="text-5xl md:text-7xl text-black bg-white font-bold p-4 pt-3 px-2 pops w-fit">
          Mickey's
        </h1>{" "}
        <h1 className="text-5xl md:text-7xl font-bold pops py-2 w-fit bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-900 via-rose-500 to-rose-700 ">
          Hub
        </h1>
      </div>
      <p className="text-xl outfit text-white/70 max-w-3xl mx-auto">
        Welcome to my creative space where ideas come to life. This is where I
        experiment, learn, and build amazing things. Grab a coffee and explore
        what I've been working on!
      </p>
    </div>
  );
};

export default Hero;
