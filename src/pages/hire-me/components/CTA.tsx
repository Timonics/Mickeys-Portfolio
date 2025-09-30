import { Clock, DollarSign } from "lucide-react";
import React from "react";

const CTA: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-3xl p-12 text-center border border-green-500/20">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold pops">
          Ready to Start Your <span className="text-green-500">Project?</span>
        </h2>
        <p className="text-lg outfit text-white/70 max-w-2xl mx-auto">
          Let's discuss your project and see how I can help bring your vision to
          life. I'm excited to work with you!
        </p>
        <div className="flex justify-center gap-4 monte">
          <button className="transition duration-300 hover:scale-110 flex items-center main_btn pops bg-white text-black shadow-lg shadow-green-400/40 mt-2 w-fit">
            <DollarSign className="w-5 h-5 mr-2" />
            Get a Quote
          </button>
          <button className="text-green-500 hover:bg-green-500 hover:text-black bg-black flex items-center main_btn">
            <Clock className="w-5 h-5 mr-2" />
            Schedule Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
