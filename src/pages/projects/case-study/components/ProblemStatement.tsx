import React from "react";

const ProblemStatement: React.FC = () => {
  return (
    <section className="space-y-4 pt-20 max-w-3xl w-full">
      <p className="font-bold fira p-1 px-3 w-fit bg-red-500/15 rounded-full text-green-500/80 text-xs sm:text-lg z-10">
        Problem Statement
      </p>
      <div className="flex flex-col items-start bg-white/10 p-4 outfit">
        <h2 className="text-xl ml-2">What gap or pain point triggered this project</h2>
        <div className="mt-4 border-l-4 p-4 border-white/5 mx-6">
        <h3>Goal:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non commodi dolore magni minima ipsa eum aut quo voluptatum obcaecati. </h3></div>
      </div>
    </section>
  );
};

export default ProblemStatement;
