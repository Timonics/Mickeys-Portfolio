import React from "react";
import { services } from "../../../constants/services";
import { CheckCircle } from "lucide-react";

const Services: React.FC = () => {
  return (
    <div className="space-y-12 mb-40">
      <h2 className="text-3xl font-bold text-center pops">
        My <span className="text-green-300">Services</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="border-green-500/20 hover:border-green-500/50 transition-transform duration-300 hover:bg-black z-50 hover:scale-110 border p-6 rounded-lg flex flex-col"
          >
            <div className="space-y-2">
              <h2 className="text-xl text-green-500 monte">{service.title}</h2>
              <p className="outfit">{service.description}</p>
              {/* <div className="text-2xl font-bold pops mb-4">
                {service.price}
              </div> */}
            </div>
            <div className="space-y-4 mb-10 mt-4">
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-white/70 fira">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-black p-2 rounded-md pops font-bold mt-auto">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
