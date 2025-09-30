import React from "react";

const MyStory: React.FC = () => {
  return (
    <div className="space-y-8 mb-16 pt-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center pops">
        My <span className="text-green-500">Story</span>
      </h2>
      <div className="max-w-prose text-white/70 fira bg-black md:bg-green-400/10 p-4 rounded-xl space-y-4">
        <p className="text-lg leading-relaxed">
          My journey into web development started with curiosity and a desire to
          build things that matter. What began as tinkering with HTML and CSS
          has evolved into a passion for creating scalable, user-centric
          applications that solve real-world problems.
        </p>
        <p className="text-lg leading-relaxed">
          I specialize in full-stack development, with expertise in modern
          JavaScript frameworks, backend technologies, and database design. I
          believe in writing clean, maintainable code and creating intuitive
          user experiences that delight users.
        </p>
        <p className="text-lg leading-relaxed">
          When I'm not coding, you'll find me exploring new technologies,
          contributing to open-source projects, or sharing knowledge with the
          developer community. I'm always excited about the next challenge and
          the opportunity to learn something new.
        </p>
      </div>
    </div>
  );
};

export default MyStory;
