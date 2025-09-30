import React from "react";

const Process: React.FC = () => {
  return (
    <div className="space-y-12 mb-40">
      <h2 className="text-3xl font-bold text-center pops pb-5">
        My <span className="text-green-500">Process</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-green-500">1</span>
          </div>
          <h3 className="text-xl font-bold monte">Discovery</h3>
          <p className="text-white/70 outfit">
            We discuss your project requirements, goals, and timeline.
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-green-500">2</span>
          </div>
          <h3 className="text-xl font-bold monte">Planning</h3>
          <p className="text-white/70 outfit">
            I create a detailed project plan and technical architecture.
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-green-500">3</span>
          </div>
          <h3 className="text-xl font-bold monte">Development</h3>
          <p className="text-white/70 outfit">
            I build your project with regular updates and feedback loops.
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-green-500">4</span>
          </div>
          <h3 className="text-xl font-bold monte">Delivery</h3>
          <p className="text-white/70 outfit">
            Final testing, deployment, and handover with documentation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
