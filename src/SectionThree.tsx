import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  useAnimation,
  useScroll,
  MotionValue,
} from "framer-motion";
import { useMediaQuery } from "react-responsive";
interface ImgCompProps {
  direction: string;
}
const ImgComp: React.FC<ImgCompProps> = (props: any) => {
  const h = 2 * window.innerHeight;
  const y = useMotionValue(0);
  const ref = useRef(null);
  const value = useTransform(y, [0, h], [0, 1]);

  const divH = h / 4;

  const [imgUrl, setImgUrl] = useState("");

  //IMAGE fetch and set
  const fetchImage = async () => {
    const img = await fetch("https://picsum.photos/200/300");
    setImgUrl(img.url);
    //console.log(img);
  };
  useEffect(() => {
    fetchImage();
  }, []);

  //start animation

  useEffect(() => {
    startAnimation();
  }, []);

  //
  //CHange speed
  useEffect(() => {
    //console.log(duration);
  }, [props.velocity]);

  //
  //Reset position
  useMotionValueEvent(value, "change", (latest) => {
    if (latest >= 0.75) {
      y.set(h - h);
      fetchImage();
      startAnimation();
    }
  });

  const controls = useAnimation();

  const startAnimation = () => {
    // const currY = y.get();
    // const neededDistance = distance - currY;
    // let velocity = neededDistance / duration;
    // controls.start({
    //   y: [currY, distance],
    //   transition: { duration: velocity, ease: "linear" },
    // });
  };

  return (
    <div className="laptop:h-full mobile:h-64">
      <motion.div
        ref={ref}
        style={{
          y,
          height: divH,
        }}
        initial={{ y: 0 + props.num * divH }}
        animate={controls}
        className={`w-full    rounded-sm  overflow-hidden  `}
      >
        <motion.img
          alt="ransdf"
          src={imgUrl}
          style={{ filter: "grayScale()" }}
          initial={{ filter: "blur(0px) grayscale()" }}
          className="w-full mobile:h-64  laptop:h-full rounded-md flex overflow-hidden  size-fit cursor-pointer "
          whileHover={{ scale: 1.2, filter: "blur(0px)" }}
          transition={{ scale: { duration: 0.8 }, filter: { duration: 1.2 } }}
        />
      </motion.div>
    </div>
  );
};

interface SliderColumnProps {
  direction: string;
  yProg: MotionValue;
}
const SliderColumn: React.FC<SliderColumnProps> = (props) => {
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width:1440px)",
  });

  const direction = props.direction;
  return (
    <motion.div
      style={{
        y: props.yProg,
        translateY: direction === "down" ? (isTablet ? "-50%" : "-100%") : "0%",
      }}
    >
      <div className="h-[200vh] laptop:w-64 mobile:w-32 tablet:w-48 flex flex-col rounded-xl  laptop:gap-8 mobile:gap-2 ">
        {/* <img className="w-64 h-96 bg-secondary-light rounded-xl " />
        <img className="w-64 h-96 bg-secondary-light rounded-xl" /> */}
        {/* {arr.map((id) => {
          return (
            <>
              <ImgComp key={id} />
            </>
          );
        })} */}
        <ImgComp direction={direction} />
        <ImgComp direction={direction} />
        <ImgComp direction={direction} />
        <ImgComp direction={direction} />
        <ImgComp direction={direction} />
        <ImgComp direction={direction} />
        <ImgComp direction={direction} />
        <ImgComp direction={direction} />
        {/* <ImgComp num={3} /> */}
        {/* <ImgComp num={2} />
        <ImgComp num={3} /> */}
        {/* <ImgComp name={"thrd"} /> */}
      </div>
    </motion.div>
  );
};
function SectionThree() {
  const ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const sm = useTransform(scrollYProgress1, [0, 1], ["0%", "200%"]);
  const reverse = useTransform(scrollYProgress2, [0, 1], ["0%", "-30%"]);
  const forward = useTransform(scrollYProgress2, [0, 1], ["0%", "50%"]);
  const transition = useTransform(scrollYProgress3, [0, 5], ["100%", "20%"]);
  const rotation = useTransform(scrollYProgress3, [0, 2], [0, 10]);
  const headerTransition = useTransform(
    scrollYProgress4,
    [0, 1],
    ["-100%", "0%"]
  );

  return (
    <motion.section
      ref={ref}
      className="w-screen h-[200vh] bg-primary-light p-0 overflow-hidden "
      style={{ scale: transition, rotateZ: rotation }}
    >
      <motion.div style={{ y: sm }}>
        <motion.div
          style={{ y: headerTransition }}
          className=" h-[100vh] flex w-full overflow-hidden absolute  "
        >
          <h1
            className="vertical-text tablet:text-[196px] mobile:text-[96px] text-secondary-light font-serif tracking-[.2em]  text-center translate-x-[100%] rotate-180 origin-left leading-none
            "
          >
            PIANTE
          </h1>
        </motion.div>
        <div className="w-screen h-screen laptop:px-64 mobile:pl-24 tablet:pl-48 overflow-hidden ">
          <div className="overflow-hidden ">
            <motion.div
              className="flex laptop:gap-16 mobile:gap-4  "
              style={{ rotate: "-22.3deg", x: "15%" }}
            >
              <SliderColumn direction={"down"} yProg={forward} />
              <SliderColumn direction={"up"} yProg={reverse} />
              <SliderColumn direction={"down"} yProg={forward} />
              <SliderColumn direction={"up"} yProg={reverse} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default SectionThree;
