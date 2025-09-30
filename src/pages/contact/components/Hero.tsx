import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="text-center space-y-8 mb-20">
      <h1 className="text-5xl font-bold pops">
        Get In <span className="text-green-500">Touch</span>
      </h1>
      <p className="text-xl text-white/70 outfit max-w-3xl mx-auto">
        Have a project in mind? Want to collaborate? Or just want to say hello?
        I'd love to hear from you. Let's create something amazing together!
      </p>
    </div>
  );
};

export default Hero;
