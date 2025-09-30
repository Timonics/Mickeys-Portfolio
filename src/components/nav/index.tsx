import React, { useState } from "react";
import { TbMenu3 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import Logo from "../logo";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";

const Nav: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`w-full ${
          pathname === "/" && "fixed"
        } top-0 bg-black shadow-2xl shadow-black/20 z-20`}
      >
        <div
          className={`py-6 px-4 md:px-10 md:py-8 lg:py-4 lg:px-6  w-full flex items-center justify-between`}
        >
          <Logo />
          <div className="flex items-center gap-4">
            <div className="max-md:hidden flex gap-5 mr-7 outfit items-center">
              {/* <Link
              to={"/hire-me"}
              className="cursor-pointer transition-colors duration-300 hover:text-green-400"
              onClick={() =>
                window.scrollTo({
                  behavior: "smooth",
                  top: 0,
                })
                }
            >
              Hire-Me
            </Link> */}
              <NavLink
                to={"/about-me"}
                className={({ isActive }) =>
                  `cursor-pointer duration-500 transition-all ${
                    isActive
                      ? "text-black font-bold hover:text-black ease-out px-2 py-1 rounded-lg bg-gradient-to-br from-rose-400 to-rose-200"
                      : "hover:text-green-400"
                  }`
                }
                onClick={() =>
                  window.scrollTo({
                    behavior: "smooth",
                    top: 0,
                  })
                }
              >
                About-Me
              </NavLink>
              <NavLink
                to={"/contact-me"}
                className={({ isActive }) =>
                  `cursor-pointer duration-500 transition-all ${
                    isActive
                      ? "text-black font-bold hover:text-black ease-out px-2 py-1 rounded-lg bg-gradient-to-br from-rose-400 to-rose-200"
                      : "hover:text-green-400"
                  }`
                }
                onClick={() =>
                  window.scrollTo({
                    behavior: "smooth",
                    top: 0,
                  })
                }
              >
                Work-With-Me
              </NavLink>
            </div>
            {pathname !== "/projects" && (
              <Link
                to={"/projects"}
                className="main_btn pops bg-white text-black shadow-lg shadow-green-400/40"
                onClick={() => scrollTo({ behavior: "smooth", top: 0 })}
              >
                Explore Projects
              </Link>
            )}
            <TbMenu3
              className="size-[25px] md:hidden"
              onClick={() => setNavIsOpen(true)}
            />
          </div>
        </div>
        <div
          className={`
          fixed inset-0 bg-black/70 backdrop-blur-sm bg-opacity-50 md:hidden
          transition-all z-50 duration-300 ease-in-out
          ${navIsOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
          onClick={() => setNavIsOpen(false)}
        />

        <div
          className={`fixed right-0 top-0 w-64 rounded-l-2xl bg-[#0e0f10] shadow-2xl h-full z-50 md:hidden transform transition-transform ease-in-out duration-300 py-6 px-4 space-y-20 ${
            navIsOpen ? "translate-x-0" : "translate-x-full"
          } shadow-2xl`}
        >
          <Logo />
          <div className="flex flex-col gap-4 items-center outfit">
            <NavLink
              to={"/about-me"}
              className={({ isActive }) =>
                `cursor-pointer duration-500 transition-all ${
                  isActive
                    ? "text-black font-bold hover:text-black ease-out px-2 py-1 rounded-lg bg-gradient-to-br from-rose-400 to-rose-200"
                    : "hover:text-green-400"
                }`
              }
              onClick={() =>
                window.scrollTo({
                  behavior: "smooth",
                  top: 0,
                })
              }
            >
              About-Me
            </NavLink>
            <NavLink
              to={"/contact-me"}
              className={({ isActive }) =>
                `cursor-pointer duration-500 transition-all ${
                  isActive
                    ? "text-black font-bold hover:text-black ease-out px-2 py-1 rounded-lg bg-gradient-to-br from-rose-400 to-rose-200"
                    : "hover:text-green-400"
                }`
              }
              onClick={() =>
                window.scrollTo({
                  behavior: "smooth",
                  top: 0,
                })
              }
            >
              Work-With-Me
            </NavLink>
          </div>
          <X className="mx-auto bg-white rounded-full p-2 text-black h-10 w-10" />
        </div>
      </div>
    </>
  );
};

export default Nav;
