import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

const ProjectsLayout: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-15 items-center justify-center relative overflow-hidden">
      <div className="fixed blur-3xl size-[800px] rounded-full top-0 right-0 translate-x-80 -translate-y-80 bg-green-500/7 z-30 pointer-events-none" />
      <div className="fixed blur-3xl size-[700px] rounded-full bottom-0 left-0 -translate-x-70 translate-y-70 bg-rose-500/7 -z-10 pointer-events-none" />
      <Nav />
      <div className="flex flex-col justify-center gap-20 w-full lg:w-[90%] mt-5 2xl:w-[80%] items-center max-lg:px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsLayout;
