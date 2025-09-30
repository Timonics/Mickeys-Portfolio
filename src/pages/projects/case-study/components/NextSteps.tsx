import { Circle } from "lucide-react";
import React from "react";

const NextSteps: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 mb-10 text-center outfit">
      <div className="inline-block bg-white/3 p-6 rounded-2xl">
        <h4 className="text-2xl font-bold">Next Steps</h4>
        <hr className="border border-white/3 my-4" />
        <div className="mt-4">
          <ul className="text-white/70 space-y-2">
            <li className="flex gap-4 items-center ">
              <Circle size={10} />
              <h2 className="text-start ">
                Add real-time chat between buyer and sellers
              </h2>
            </li>
            <li className="flex gap-4 items-center">
              <Circle size={10} />
              <h2 className="text-start">
                Integrate Stripe for production payments
              </h2>
            </li>
            <li className="flex gap-4 items-center">
              <Circle size={10} />
              <h2 className="text-start">
                Plan to migrate backedn to a low cost AWS stack.
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;
