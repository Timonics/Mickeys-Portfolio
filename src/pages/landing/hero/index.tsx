import React, { useEffect, useRef, useState } from "react";
import MyImage from "../../../components/image-holder";
import { AnimatePresence, motion } from "framer-motion";
import WorksModal from "./components/WorkModal";

const Hero: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleOpen = () => {
    if (buttonRef.current) {
      setButtonRect(buttonRef.current.getBoundingClientRect());
    }
    setOpen(true);

    // Delay content fade-in until expansion is nearly done
    setTimeout(() => setShowContent(true), 300);
  };

  const handleClose = () => {
    // Fade out content first, then shrink
    setShowContent(false);
    setTimeout(() => setOpen(false), 300); // matches fade-out duration
  };

  const [targetWidthPx, setTargetWidthPx] = useState<number>(() => {
    if (typeof window === "undefined") return 800;
    const w = window.innerWidth;
    const ratio = w <= 640 ? 0.9 : w <= 1024 ? 0.75 : 0.6;
    return Math.round(w * ratio);
  });

  const [targetHeightPx, setTargetHeightPx] = useState<number>(() => {
    if (typeof window === "undefined") return 600;
    return Math.round(window.innerHeight * 0.7);
  });

  useEffect(() => {
    // update on resize
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const ratio = w <= 640 ? 0.9 : w <= 1024 ? 0.75 : 0.6;
      setTargetWidthPx(Math.round(w * ratio));
      setTargetHeightPx(Math.round(h * 0.7));
    };

    window.addEventListener("resize", handleResize);
    // run once to ensure correct initial values after mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // fallback to buttonRect width while target is not ready
  const animateWidth = targetWidthPx ?? buttonRect?.width;
  const animateHeight = targetHeightPx ?? Math.round(window.innerHeight * 0.7);

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-0 lg:w-[90%] 2xl:w-[80%] items-center max-lg:px-6">
      <div className="min-[1180px]:w-1/2 w-full flex flex-col gap-5">
        <h1 className="text-6xl sm:text-8xl outfit font-thin bg-clip-text text-transparent bg-gradient-to-br from-rose-400/45 to-lime-500/85 sm:max-[1180px]:text-center">
          Hi,<span className="text-4xl sm:text-5xl"> this is</span>
        </h1>
        <div className="hidden w-full h-[400px] relative sm:max-[1180px]:flex items-center justify-center my-15 lg:mb-25">
          <MyImage />
        </div>
        <div className="min-sm:hidden w-full h-[300px]">
          <div className="w-full h-full rounded-lg bg-white/5" />
        </div>
        <h1 className="text-[55px] min-[500px]:text-[60px] min-lg:max-[1180px]:text-[70px] leading-[1.12em] font-thin pops">
          {/* <span className="text-lg font-thin sm:max-lg:hidden">I'm </span> */}
          Oderinde Michael
        </h1>
        <div className="flex flex-col gap-2">
          <p className="max-md:w-[90%] min-lg:max-[1180px]:w-[95%] font-light text-white/75 sm:text-xl lg:text-cente outfit">
            I’m all about creating scalable, smooth, dynamic web experiences
            that feel effortless to use. Whether it’s the backend logic or the
            frontend design, I enjoy bringing ideas to life and making the web a
            better place—one project at a time!
          </p>
          <button
            ref={buttonRef}
            onClick={handleOpen}
            className="main_btn pops bg-white text-black shadow-lg shadow-rose-400/40 mt-2 w-fit"
          >
            View My Works
          </button>
          <AnimatePresence>
            {open && buttonRect && (
              <>
                {/* Background overlay */}
                <motion.div
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleClose}
                />

                {/* Expanding container */}
                <motion.div
                  className="fixed bg-white/85 border-2 border-black/50 backdrop-blur-2xl text-black rounded-xl shadow-2xl flex items-center justify-center z-50"
                  initial={{
                    width: buttonRect.width,
                    height: buttonRect.height,
                    borderRadius: 12,
                    top: buttonRect.top,
                    left: buttonRect.left,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    width: animateWidth,
                    height: animateHeight,
                    borderRadius: 20,
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                  }}
                  exit={{
                    width: buttonRect.width,
                    height: buttonRect.height,
                    borderRadius: 12,
                    top: buttonRect.top,
                    left: buttonRect.left,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0, 0, 0, 1],
                  }}
                >
                  {/* Content fade animation */}
                  <motion.div
                    animate={{ opacity: showContent ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <WorksModal />
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="w-1/2 h-[400px] max-[1180px]:hidden relative flex justify-center items-center">
        <MyImage />
      </div>
    </div>
  );
};

export default Hero;
