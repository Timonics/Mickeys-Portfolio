import { Heart, Coffee } from "lucide-react";
import React from "react";

const Values: React.FC = () => {
  return (
    <div className="space-y-8 mb-16 pt-10">
      <h2 className="text-4xl font-bold text-center pops">
        What Drives <span className="text-green-500">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-pink-400/20 border-2 p-4 rounded-lg space-y-4">
          <h2 className="flex items-center gap-2 text-pink-400 nun text-lg">
            <Heart className="w-5 h-5" />
            User-Centric Design
          </h2>
          <p className="text-white/70 outfit">
            I believe great software puts users first. Every line of code I
            write is focused on creating meaningful, accessible experiences.
          </p>
        </div>

        <div className="border-blue-400/20 border-2 p-4 rounded-lg space-y-4">
          <h2 className="flex items-center gap-2 text-blue-400 nun text-lg">
            <Coffee className="w-5 h-5" />
            Continuous Learning
          </h2>

          <p className="text-white/70 outfit">
            Technology evolves rapidly, and so do I. I'm constantly learning new
            tools, frameworks, and best practices to stay at the forefront of
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
