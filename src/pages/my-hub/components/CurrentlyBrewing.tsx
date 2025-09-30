import { Coffee } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CurrentlyBrewing: React.FC = () => {
  return (
    <section className="space-y-4 pt-10">
      <p className="font-bold fira p-1 px-3 w-fit bg-red-500/15 rounded-full text-green-500/80 text-xs sm:text-lg z-10">
        Currently Brewing
      </p>
      <div className="bg-gradient-to-r from-purple-800/50 via-purple-600/50 to-pink-600/50 rounded-3xl p-12 mb-20">
        <div className="text-center space-y-4">
          <Coffee className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-3xl font-bold pops">LumaMind</h2>

          <p className="text-sm text-gray-200 max-w-md px-2 py-1 rounded-lg bg-black mx-auto fira">
            Smart spaced-repetition platform that personalizes learning with
            adaptive scheduling.
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto outfit">
            Built with NestJS, LumaMind helps users retain knowledge using a
            custom algorithm that adjusts review intervals based on performance.
          </p>
          <div className="text-center space-y-4 my-10">
            <p className="px-2 py-1 w-fit bg-gray-700 text-sm text-green-400 fira rounded-md mx-auto">
              Stacks
            </p>
            <div className="flex flex-wrap justify-center gap-4 monte p-2 py-6 bg-gray-950 max-w-xs mx-auto">
              <div className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
                NestJS
              </div>
              <div className="bg-pink-400/20 text-pink-400 border-pink-400/30 px-4 py-2">
                Prisma
              </div>
              <div className="bg-blue-400/20 text-blue-400 border-blue-400/30 px-4 py-2">
                PostgresSQL
              </div>
              <div className="bg-blue-400/20 text-red-400 border-blue-400/30 px-4 py-2">
                SM-2
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-10 gap-5">
            <Link
              to={""}
              className="main_btn outfit text-sm lg:text-base bg-white/80 text-black shadow-lg shadow-green-400/40 transition duration-300 hover:scale-105 ease-in-out"
            >
              View Repo
            </Link>
            <Link
              to={""}
              className="main_btn outfit text-sm lg:text-base bg-white/80 text-black shadow-lg shadow-rose-400/40 transition duration-300 hover:scale-105 ease-in-out"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBrewing;
