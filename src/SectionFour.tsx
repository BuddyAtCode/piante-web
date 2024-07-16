import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import monsterra from "../public/Images/monsterra.svg";
import branch from "../public/Images/leafs.svg";
import { useMediaQuery } from "react-responsive";
interface ContainerProps {
  num: number;
  prog: number;
  textings: string;
}
const Container: React.FC<ContainerProps> = (props) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1441px)" });

  const isMobile = useMediaQuery({ query: "max-width: 468px" });
  const num = props.num;
  const ml = (50 / 3) * num;
  const mt = 8 * num;
  const mobileConHeight = window.innerHeight / 8;
  const mobileMt = mobileConHeight * num + (num - 1) * 16;
  const prog = props.prog;
  const basePosition = -1500;
  const baseTriggerPoint = 45;
  const currTriggerPoint = baseTriggerPoint * num;
  return (
    <motion.div
      initial={{ y: basePosition }}
      animate={{ y: prog > currTriggerPoint ? -25 : basePosition }}
      transition={{ duration: 0.7 }}
      className={`laptop:w-[50%] mobile:w-full tablet:w-full desktop:h-[20vw]  border-primary-light laptop:border-4 mobile:border-[1px] rounded-md absolute desktop:px-8 mobile:px-4 overflow-hidden `}
      style={{
        height: isDesktop ? "20vw" : `${mobileConHeight}px`,
        marginLeft: isDesktop ? `${ml}%` : isMobile ? "0" : "0",
        marginTop: isDesktop
          ? `${mt}%`
          : isMobile
          ? `${mobileMt}px`
          : `${mobileMt}px`,
        zIndex: num,
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(5px)",
        display: "",
      }}
    >
      <div className="flex h-full">
        <div className="flex  flex-col h-full">
          <h4 className="text-primary-light font-serif inline-block laptop:text-[128px] mobile:text-[48px]">
            {num + 1}
          </h4>
        </div>
        <div className=" flex items-center desktop:px-16 mobile:px-4 ">
          <p className="font-serif text-primary-light text-left desktop:text-xl mobile:text-[8px] tablet:text-[16px]  ">
            {props.textings}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
function SectionFour() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1441px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width:1440px)",
  });

  const [prog, setProg] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const sm = useTransform(scrollYProgress1, [0, 1], ["0%", "200%"]);
  const monstParal = useTransform(scrollYProgress1, [0, 1], ["0%", "430%"]);
  const monstParalMob = useTransform(scrollYProgress1, [0, 1], ["0%", "350%"]);
  const monstParalTab = useTransform(scrollYProgress1, [0, 1], ["0%", "650%"]);
  const brnchParal = useTransform(scrollYProgress1, [0, 1], ["0%", "135%"]);
  const brnchParalMob = useTransform(scrollYProgress1, [0, 1], ["0%", "475%"]);
  const brnchParalTab = useTransform(scrollYProgress1, [0, 1], ["0%", "330%"]);
  const rotate = useTransform(scrollYProgress2, [0, 1], [-10, 0]);
  const transition = useTransform(scrollYProgress2, [0, 1], ["90%", "100%"]);
  useMotionValueEvent(sm, "change", (latest) => {
    let num = parseInt(latest);
    setProg(num);
    console.log(num);
  });

  const array = [
    {
      num: 0,
      textings:
        "Najprv nás kontaktujte prostredníctvom emailu, telefónu alebo formulára na našej stránke. Spoločne prediskutujeme vaše predstavy a požiadavky.",
    },
    {
      num: 1,
      textings:
        "Na základe vašich požiadaviek pripravíme návrh rastlinného terária alebo machového obrazu. Po vašom schválení začneme s výrobou.",
    },
    {
      num: 2,
      textings:
        "Naši skúsení odborníci ručne vytvoria váš jedinečný produkt s použitím najkvalitnejších materiálov a rastlín. Proces výroby trvá obvykle niekoľko dní, v závislosti od náročnosti projektu.",
    },
    {
      num: 3,
      textings:
        "Po dokončení vás budeme informovať o termíne dodania. Váš hotový výrobok vám doručíme priamo domov alebo do kancelárie s maximálnou starostlivosťou.",
    },
  ];
  return (
    <motion.section
      ref={ref}
      className=" w-screen h-[300vh] laptop:overflow-clip px-0 mobile:overflow-x-hidden"
    >
      <motion.div
        style={{ rotateZ: rotate, scale: transition }}
        className="w-screen
          laptop:px-64 mobile:px-16 desktop:py-48 mobile:pt-32 relative "
      >
        <motion.img
          src={monsterra}
          //className={`absolute left-0 translate-x-[calc(-30%)] scale-150 rotate-90 transform-y-[calc(${md})]`}
          style={{
            y: isDesktop
              ? monstParal
              : isTablet
              ? monstParalTab
              : monstParalMob,
            position: "absolute",
            left: isDesktop ? "-5%" : isTablet ? "-19%" : "-45%",
            //translateX: "-30%",
            scale: isDesktop ? 1.5 : isTablet ? 1.7 : 0.8,
            rotate: 90,
            //translateY: "30%",
          }}
        />
        <motion.img
          src={branch}
          className="z-Index-2"
          style={{
            y: isDesktop
              ? brnchParal
              : isTablet
              ? brnchParalTab
              : brnchParalMob,
            position: "absolute",
            right: 0,
            translateX: "40%",
            scale: "50%",
            translateY: "-30%",
          }}
        />
        <motion.div
          style={{ y: sm }}
          className="w-full h-screen laptop:py-0 mobile:py-[50%] tablet:py-[25%] flex relative"
        >
          {array.map((number) => {
            return (
              <Container
                num={number.num}
                prog={prog}
                textings={number.textings}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default SectionFour;
