import { motion } from "framer-motion";
import React from "react";

const Marquee: React.FC = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-neutral-950 h-[200px]">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none flex">
        <div className="w-16 bg-gradient-to-r from-black to-transparent"></div>
        <div className="flex-1"></div>
        <div className="w-16 bg-gradient-to-l from-black to-transparent"></div>
      </div>

      {/* Marquee Content */}
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
      >
        {/* Duplicate items for seamless looping */}
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg text-lg font-semibold min-w-max"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
