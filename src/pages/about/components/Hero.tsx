import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="text-center space-y-8 mb-20">
      <div className="w-32 h-32 bg-gradient-to-br from-green-300 to-green-600 rounded-full mx-auto flex items-center justify-center pops">
        <span className="text-4xl font-bold text-black">OM</span>
      </div>
      <div className="space-y-4">
        <h1 className="text-5xl font-bold pops">
          About <span className="text-green-500">Me</span>
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto nun">
          I'm Oderinde Michael, a passionate full-stack developer who loves
          creating digital experiences that make a difference.
        </p>
      </div>
    </div>
  );
};

export default Hero;
