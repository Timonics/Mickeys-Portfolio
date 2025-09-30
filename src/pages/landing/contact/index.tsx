import React from "react";
import ContactVignette from "../../../components/vignettes/contact-vignette";

import contactImg from "../../../assets/svg/undraw_contact-us_kcoa.svg";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <div className="lg:flex lg:flex-col-reverse xl:flex-row lg:items-center relative lg:mt-20 lg:w-[90%] 2xl:w-[80%] max-lg:p-6">
      <div className="flex flex-col gap-3 mt-10 xl:w-1/2">
        <ContactVignette />
        <p className="font-bold nun text-rose-500/80 text-xs">CONTACT ME</p>
        <h2 className="text-[36px] md:text-[45px] leading-[1.25em] pops font-thin">
          Ready to Collaborate? I’d Love to Hear from You!
        </h2>
        <p className="font-light outfit sm:text-xl text-white/50">
          I’d love to hear about your ideas, projects, or even just to chat
          about possibilities. Whether you're looking to start a new project or
          need a fresh perspective, let's get together and make something
          amazing happen.
        </p>
        <div className="flex gap-5">
          <Link
            to={"contact-me"}
            onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
            className="main_btn pops bg-white text-black shadow-lg shadow-rose-400/40 mt-2"
          >
            View My Contacts
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex xl:w-1/2 p-4 lg:justify-center">
        <img src={contactImg} alt="" className="w-[80%] object-center" />
      </div>
    </div>
  );
};

export default Contact;
