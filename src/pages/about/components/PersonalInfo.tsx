import { MapPin, Calendar } from "lucide-react";
import React from "react";

const PersonalInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="bg-white/5 flex flex-col justify-center items-center gap-4 p-6 rounded-lg">
        <div className="flex items-center gap-2 outfit text-xl">
          <MapPin className="w-5 h-5 text-green-500" />
          Location
        </div>
        <div>
          <p className="text-white/70 fira">Lagos, Nigeria</p>
        </div>
      </div>

      <div className="bg-white/5 flex flex-col justify-center items-center gap-4 p-6 rounded-lg">
        <div className="flex items-center gap-2 outfit text-xl">
          <Calendar className="w-5 h-5 text-green-500" />
          Experience
        </div>
        <div>
          <p className="text-white/70 fira">3+ Years in Web Development</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
