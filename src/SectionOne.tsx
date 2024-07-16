import monsterra from "../public/Images/monsterra.svg";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

function SectionOne() {
  const sectionOneRef = useRef(null);
  const [isActive, setIsActive] = useState(true);
  const { scrollYProgress } = useScroll({
    target: sectionOneRef,
    offset: ["start start", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lg = useTransform(scrollYProgress, [0, 1], ["0", "140%"]);
  const op = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);
  const btnOp = useTransform(scrollYProgress, [1, 0], ["-1000%", "100%"]);
  const lfRot = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const rghtLfRot = useTransform(scrollYProgress, [0, 1], [0, 18]);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time:any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <motion.section
      ref={sectionOneRef}
      style={{ opacity: op }}
      className="w-screen h-screen bg-secondary-light flex flex-col lg:justify-between mobile:justify-center overflow-hidden relative"
      initial={{ opacity: 0, y: 128 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <motion.div
        animate={{ top: isActive ? "-100%" : 0 }}
        transition={{ delay: 0.6, duration: 1.2, ease: "linear" }}
        initial={{ top: 0 }}
        className="bg-secondary-light lg:h-[20vh] w-full absolute  left-0 z-20"
      />
      <motion.div
        animate={{ bottom: isActive ? "-100%" : 0 }}
        transition={{ delay: 0.6, duration: 1.2, ease: "linear" }}
        initial={{ bottom: 0 }}
        className="bg-secondary-light h-[60vh] w-full absolute left-0 z-20"
      />
      <motion.img
        src={monsterra}
        alt="monsterra"
        className="absolute z-1 left-[-4rem] opacity-15 top-16 laptop:scale-150 mobile:scale-50 rotate-90 "
        style={{ y: sm, rotate: lfRot }}
        initial={{ rotate: 0, x: "-100%" }}
        animate={{ rotate: -10, x: isActive ? 0 : "-100%" }}
        transition={{ delay: 0.8, duration: 1.2 }}
      />
      <motion.img
        src={monsterra}
        alt="monsterra"
        className="absolute z-1 right-[-16rem] opacity-15 top-96 rotate-45 lg:scale-150 mobile:scale-50"
        style={{ y: sm, rotate: rghtLfRot }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 15, x: isActive ? 0 : "100%" }}
        transition={{ delay: 0.8, duration: 1.2 }}
      />
      <motion.header
        className="pt-8 cursor-pointer"
        style={{ y: lg }}
        initial={{ scale: 0.05 }}
        animate={{ scale: isActive ? 1 : 0.05 }}
        transition={{ delay: 0.6, duration: 1.2, ease: "circOut" }}
        onClick={() => {
          setIsActive(true);
        }}
      >
        <motion.h3
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -32 }}
          transition={{ delay: 2 }}
          className="laptop:text-7xl mobile:text-2xl text-center font-serif text-secondary-light translate-y-16 z-10"
        >
          Rastlinné dekorácie
        </motion.h3>
        <h1 className="laptop:text-[256px] mobile:text-[64px] tablet:text-[128px]  text-center text-primary-light font-serif tablet:tracking-[.5em] laptop:tracking-[.4em] mobile:tracking-[.1em] ">
          PIANTE
        </h1>
      </motion.header>

      <motion.div
        className="w-6 h-12 border-2 border-primary-light rounded-full mx-auto items-center justify-center flex self-end mb-8 "
        style={{ opacity: btnOp }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ delay: 4, duration: 0.6 }}
      >
        <motion.div
          initial={{ y: -8 }}
          animate={{ y: 8 }}
          className="bg-primary-light w-1 h-2 rounded-full"
          transition={{
            duration: 2,

            delay: 2,
            ease: "backInOut",
            repeat: Infinity,
            repeatDelay: 1.2,
            repeatType: "mirror",
          }}
        ></motion.div>
      </motion.div>
    </motion.section>
  );
}

export default SectionOne;
