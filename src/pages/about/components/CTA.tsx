import React from "react";
import { Link } from "react-router-dom";

const CTA: React.FC = () => {
  return (
    <div className="text-center space-y-6 pt-20 pb-10">
      <h2 className="text-3xl font-bold pops">
        Let's Build Something <span className="text-green-500">Amazing</span>
      </h2>
      <p className="text-lg text-white/70 max-w-2xl mx-auto outfit">
        I'm always excited to work on new projects and collaborate with
        like-minded individuals. Whether you have a project in mind or just want
        to connect, I'd love to hear from you!
      </p>
      <div className="flex justify-center gap-4 font-bold nun">
        <Link
          to={"/contact-me"}
          className="bg-green-500 hover:bg-green-600 text-black px-3 py-1.5 rounded-md"
          onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
        >
          Get In Touch
        </Link>
        <Link
          to={"/hire-me"}
          className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black bg-transparent px-3 py-1.5 rounded-md"
          onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default CTA;
