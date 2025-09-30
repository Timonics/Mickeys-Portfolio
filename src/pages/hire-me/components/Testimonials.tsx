import React from "react";
import { testimonials } from "../../../constants/testimonials";
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
  return (
    <div className="space-y-12 mb-40">
      <h2 className="text-3xl font-bold text-center pops">
        What Clients <span className="text-green-500">Say</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white/5 p-6 rounded-lg">
            <div className="p-6 space-y-4">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-green-500 text-green-500"
                  />
                ))}
              </div>
              <p className="text-white/70 italic outfit">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold monte">{testimonial.name}</p>
                <p className="text-sm text-white/70 outfit">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
