import React from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ProjectType } from "../../../interfaces";
import { Link } from "react-router-dom";

type Props = {
  showProjectInfo: boolean;
  setShowProjectInfo: React.Dispatch<React.SetStateAction<boolean>>;
  mobileSelectedProject: ProjectType | undefined;
};

const MobileProjectModal: React.FC<Props> = ({
  showProjectInfo,
  setShowProjectInfo,
  mobileSelectedProject,
}) => {
  if (!mobileSelectedProject) {
    return (
      <div className="fixed min-h-screen flex items-center justify-center pops text-2xl">
        Project Not Found!!
      </div>
    );
  }

  // parent container animation
  const container: Variants = {
    hidden: { opacity: 0, x: "100%" }, // slide from right
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.15, // delay for child items
      },
    },
    exit: { opacity: 0, x: "100%" },
  };

  // child items animation
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const Icon = mobileSelectedProject?.icon;

  return (
    <div className="relative">
      <AnimatePresence>
        {showProjectInfo && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-lg flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowProjectInfo(false)}
          >
            {/* Modal Content */}
            <motion.div
              className="bg-white/80 rounded-xl shadow-2xl w-[90%] max-w-md p-6 text-center"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <motion.h2
                className="text-2xl font-bold mb-4 pops text-black"
                variants={item}
              >
                {mobileSelectedProject.title}
              </motion.h2>

              <motion.div
                className="rounded-lg w-full h-[250px] mx-auto mb-4 bg-black"
                variants={item}
              >
                {mobileSelectedProject.img ? (
                  <img
                    src={mobileSelectedProject.img}
                    alt="Project Image"
                    className="h-full w-full rounded-lg flex object-cover"
                  />
                ) : (
                  <div
                    className={`h-full w-full rounded-lg flex flex-wrap gap-2 items-center justify-center pops ${
                      mobileSelectedProject.backgroundColor &&
                      mobileSelectedProject.backgroundColor
                    } ${
                      mobileSelectedProject.backgroundGradient &&
                      mobileSelectedProject.backgroundGradient
                    } ${
                      mobileSelectedProject?.shadowClassName
                    } text-2xl font-bold`}
                    style={{
                      color: mobileSelectedProject.textColor,
                      fontSize: "30px",
                    }}
                  >
                    <Icon className="p-2 bg-black rounded-xl" size={40} />
                    <h2>{mobileSelectedProject.title}</h2>
                  </div>
                )}
              </motion.div>

              <motion.p className="text-gray-600 mb-4 outfit" variants={item}>
                {mobileSelectedProject.desc}
              </motion.p>

              <motion.div
                className="flex flex-col gap-3 outfit font-bold"
                variants={item}
              >
                {mobileSelectedProject.tags.includes("Fullstack") && (
                  <button
                    onClick={() =>
                      window.open(mobileSelectedProject.live, "_blank")
                    }
                    className="p-3 rounded-lg bg-black/50 border-[1.5px] border-white/75 text-black"
                  >
                    View Demo
                  </button>
                )}
                <button
                  onClick={() =>
                    window.open(mobileSelectedProject.repo, "_blank")
                  }
                  className="p-3 rounded-lg bg-black/50 border-[1.5px] border-white/75 text-black"
                >
                  View Repo
                </button>
                <Link
                  onClick={() =>
                    window.scrollTo({ behavior: "smooth", top: 0 })
                  }
                  to={`${mobileSelectedProject.name}/case-study`}
                  className="p-3 rounded-lg bg-white/20 border-[1.5px] border-white/75 text-black bg-gradient-to-r from-green-400 to-teal-400"
                >
                  Case Study
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileProjectModal;
