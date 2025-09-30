import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="text-center space-y-8 mb-40">
      <h1 className="text-5xl font-bold pops">
        Ready to <span className="text-green-400">Hire Me?</span>
      </h1>
      <p className="text-xl outfit text-white/70 max-w-3xl mx-auto">
        Let's bring your ideas to life! I specialize in creating scalable,
        modern web applications that deliver exceptional user experiences and
        drive business results.
      </p>
      <div className="flex justify-center gap-4 outfit font-medium">
        <button className="bg-green-400 hover:bg-green-600 text-black p-2 px-4 rounded-md cursor-pointer">
          Start a Project
        </button>
        <button className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent px-4 py-2 rounded-md border-2 cursor-pointer">
          Schedule a Call
        </button>
      </div>
    </div>
  );
};

export default Hero;
