import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const location = window.location;
  const isInView = useInView(ref, { amount: 0.05, once: false });

  const isProjectsPage = location.pathname === '/projects';

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full flex flex-col items-center ${isProjectsPage ? "gap-10" : "gap-6"} justify-center`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
