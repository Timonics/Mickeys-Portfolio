import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="space-y-8 mb-16 pt-10">
      <h2 className="text-4xl font-bold text-center pops">
        Technical <span className="text-green-500">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white/5 flex flex-col gap-8">
          <div>
            <h2 className="text-green-500 monte text-lg font-bold">Frontend</h2>
            <p className="outfit text-white/70">
              Building beautiful, responsive user interfaces
            </p>
          </div>
          <div className="flex fira gap-3 flex-wrap">
            <div>React</div>
            <div>Next.js</div>
            <div>TypeScript</div>
            <div>Tailwind CSS</div>
            <div>HTML5</div>
            <div>CSS3</div>
          </div>
        </div>

        <div className="p-4 bg-white/5 flex flex-col gap-8">
          <div>
            <h2 className="text-green-500 monte text-lg font-bold">Backend</h2>
            <p className="outfit text-white/70">
              Developing robust server-side applications
            </p>
          </div>
          <div className="flex fira gap-3 flex-wrap">
            <div>Node.js</div>
            <div>Express.js</div>
            <div>PostgreSQL</div>
            <div>MongoDB</div>
            <div>REST APIs</div>
            <div>GraphQL</div>
          </div>
        </div>

        <div className="p-4 bg-white/5 flex flex-col gap-8">
          <div>
            <h2 className="text-green-500 monte text-lg font-bold">Tools & Others</h2>
            <p className="outfit text-white/70">
              Development tools and methodologies
            </p>
          </div>
          <div className="flex fira flex-wrap gap-3">
            <div>Git</div>
            <div>Docker</div>
            <div>AWS</div>
            <div>Vercel</div>
            <div>Jest</div>
            <div>Agile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
