import { Star, Users, Zap } from "lucide-react";
import React from "react";

const WhyChooseMe: React.FC = () => {
  return (
    <div className="space-y-12 mb-40 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center pops">
        Why Choose <span className="text-green-400">Me?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%]">
        <div className="bg-white/5 p-6 text-center space-y-6">
          <div>
            <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-green-400 monte">Fast Delivery</h2>
          </div>
          <div>
            <p className="text-white/70 outfit">
              I deliver high-quality projects on time, every time. Your
              deadlines are my priority.
            </p>
          </div>
        </div>

        <div className="bg-white/5 p-6 text-center space-y-6">
          <div>
            <Star className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-green-400 monte">Quality Code</h2>
          </div>
          <div>
            <p className="text-white/70 outfit">
              Clean, maintainable, and scalable code that follows industry best
              practices.
            </p>
          </div>
        </div>

        <div className="bg-white/5 p-6 text-center space-y-6">
          <div>
            <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-green-400 monte">Great Communication</h2>
          </div>
          <div>
            <p className="text-white/70 outfit">
              Regular updates, clear communication, and collaborative approach
              throughout the project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
