import React from "react";
import { Link } from "react-router-dom";

const CTA: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 mb-10 text-center outfit">
      <div className="inline-block bg-white/3 p-6 rounded-2xl">
        <h4 className="text-2xl font-bold">
          Want to collaborate or suggest an idea?
        </h4>
        <p className="text-sm text-gray-300 mt-1">
          Let's build something together
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <Link
            to={"/contact-me"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-black font-semibold"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
