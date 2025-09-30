import { CheckCircle2 } from "lucide-react";
import React from "react";

const Implementation: React.FC = () => {
  return (
    <section className="space-y-4 pt-20 max-w-3xl w-full">
      <p className="font-bold fira p-1 px-3 w-fit bg-red-500/15 rounded-full text-green-500/80 text-xs sm:text-lg z-10">
        Engineering / Implementation
      </p>
      <div className="flex flex-col items-start gap-10 rounded-xl bg-white/10 p-4">
        <div className="space-y-2">
          <h2 className="text-xl monte">Backend Highlights</h2>
          <ul className="outfit text-white/60 space-y-2">
            <li className="flex gap-4 items-center ">
              <div className="w-5 ">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="flex-1">
                RESTful API with Express.js + Sequelize ORM.
              </h3>
            </li>
            <li className="flex gap-4 items-center ">
              <div className="w-5">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="flex-1">
                JWT authentication + role-based access (seller vs buyer)
              </h3>
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-5 ">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="flex-1">Cloudinary for image uploads</h3>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl monte">Frontend Highlights</h2>
          <ul className="outfit text-white/60 space-y-2">
            <li className="flex gap-4 items-center">
              <div className="w-5 ">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="flex-1">
                Redux Toolkit with async thunks for API calls
              </h3>
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-5 ">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="flex-1">
                React Router for protected routes and dashboard redirects
              </h3>
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-5 ">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="flex-1">
                Tailwind Components for consistent theming
              </h3>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl monte">Deployment</h2>
          <ul className="outfit text-white/60 space-y-2">
            <li className="flex gap-4 items-center">
              <div className="w-5 ">
                <CheckCircle2 size={20} />
              </div>
              <p className="flex-1">
                Frontend on{" "}
                <span className="font-semibold text-white ml-1">Vercel</span>
              </p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-5 ">
                <CheckCircle2 size={20} />
              </div>
              <p className="flex-1">
                Backend on
                <span className="font-semibold text-white ml-1">
                  Render
                </span>{" "}
                free tier with Postgres add-on.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
