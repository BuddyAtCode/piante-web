import React, { useState } from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { motion, useAnimate } from "framer-motion";

interface SocialsContainerProps {
  soc: string;
  color: string;
  size: number;
}
const SocialsContainer: React.FC<SocialsContainerProps> = (props: any) => {
  const [scope1, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [iconScope, animateIcon] = useAnimate();
  const [isHovered, setIsHovered] = useState(false);
  const soc = props.soc;
  const color = props.color;
  const size = props.size;
  const constSize = props.size === 24 ? "16" : "12";

  const randNum = () => {
    let num = 0;
    const negOrPos = Math.random();

    num =
      negOrPos > 0.5
        ? Math.floor(Math.random() * (-30 - -10) + 30)
        : Math.floor(Math.random() * (30 - 10) - 30);
    return num;
  };

  let IconComponent;

  const animation = () => {
    animate(
      scope1.current,
      { width: [0, 96, 0], height: [0, 96, 0] },
      { duration: 0.8 }
    );
    animate2(
      scope2.current,
      { width: [0, 96, 0], height: [0, 96, 0] },
      { delay: 0.05, duration: 1 }
    );
    animateIcon(iconScope.current, { scale: [1, 1.4, 1] }, { duration: 0.7 });
  };

  const hoverAnimation = {
    rotate: isHovered ? randNum() : 0,
  };

  switch (soc) {
    case "insta":
      IconComponent = <SlSocialInstagram color={color} size={size} />;
      break;
    case "facebook":
      IconComponent = <SlSocialFacebook color={color} size={size} />;
      break;
    case "youtube":
      IconComponent = <SlSocialYoutube color={color} size={size} />;
      break;
    case "linkedIn":
      IconComponent = <SlSocialLinkedin color={color} size={size} />;
      break;
  }

  return (
    <div
      // style={{
      //   width: constSize,
      //   height: constSize,
      // }}
      className={`h-16 w-16
       rounded-md flex justify-center items-center relative cursor-pointer`}
    >
      <div
        ref={iconScope}
        className="w-full h-full absolute z-10 pointer-events-none flex items-center justify-center"
      >
        {IconComponent}
      </div>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTap={() => animation()}
        transition={{ duration: 0.4 }}
        animate={hoverAnimation}
        className={`border-2 border-${
          color === "#FAFAFA" ? "secondary-light" : "primary-light"
        } w-${constSize ? constSize : "16"} h-${
          constSize ? constSize : "16"
        } rounded-md flex justify-center items-center absolute`}
      />

      <motion.div
        animate={hoverAnimation}
        transition={{ duration: 0.4 }}
        className="w-full h-full  absolute pointer-events-none flex justify-center items-center overflow-hidden rounded-md border-2 border-transparent"
      >
        <motion.div
          ref={scope1}
          className={`bg-${
            color === "#FAFAFA" ? "secondary-light" : "primary-light"
          }  rounded-full absolute z-0 pointer-events-none`}
          style={{ width: 0, height: 0 }}
        />
        <motion.div
          ref={scope2}
          className={`bg-${
            color !== "#FAFAFA" ? "secondary-light" : "primary-light"
          }  rounded-full absolute z-0 pointer-events-none`}
          style={{ width: 0, height: 0 }}
        />
      </motion.div>
    </div>
  );
};

interface InputFieldProps {
  header: string;
  bgGreen: boolean;
}
const InputField: React.FC<InputFieldProps> = (props: any) => {
  const primaryColor = props.bgGreen ? "secondary-light" : "primary-light";
  const bgColor = props.bgGreen ? "primary-light" : "secondary-light";
  return (
    <div className="relative w-full h-full">
      <form className="w-full h-full ">
        <textarea
          className={`laptop:h-full mobile:h-full w-full border-2 border-${primaryColor} rounded-md outline-none px-8 py-4 text-${
            props.bgGreen ? "secondary-light" : "primary-light"
          }  h-full `}
          style={{ background: "none" }}
        />
      </form>

      <p
        className={`absolute font-serif top-0 left-4 laptop:text-xl mobile:text-sm tablet:text-xl text-${primaryColor} bg-${bgColor} px-1`}
        style={{ transform: "translateY(-50%)" }}
      >
        {props.header}
      </p>
    </div>
  );
};

const FooterContainer: React.FC = () => {
  return (
    <div className=" laptop:w-[15%] mobile:w-[30%] h-full items-center flex">
      <p className="text-primary-light font-serif laptop:text-md mobile:text-[10px] tablet:text-lg laptop:leading-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit.
      </p>
    </div>
  );
};
function SectionFive() {
  return (
    <div className="w-screen h-screen bg-primary-light ">
      <section className="w-screen h-[80%] bg-primary-light desktop:px-64 mobile:px-8 tablet:px-32">
        {/* About Me section */}

        <div className="w-full  laptop:h-[50%] mobile:h-[50%] tablet:h-[40%] flex mobile:flex-col  laptop:flex-row gap-8  items-center laptop:py-12 mobile:py-0">
          {/* Socials col */}
          <div className="laptop:h-full mobile:h-32 flex laptop:flex-col mobile:flex-row laptop:justify-between mobile:justify-around mobile:mt-4 mobile:w-[100%] laptop:w-32 ">
            <SocialsContainer soc={"insta"} color={"#FAFAFA"} size={24} />

            <SocialsContainer soc={"facebook"} color={"#FAFAFA"} size={24} />

            <SocialsContainer soc={"youtube"} color={"#FAFAFA"} size={24} />
            <SocialsContainer soc={"linkedIn"} color={"#FAFAFA"} size={24} />
          </div>
          {/* Profile photo */}

          <img className="bg-secondary-light laptop:w-72 laptop:h-72 mobile:w-8 mobile:h-full rounded-2xl laptop:flex mobile:hidden" />
          <div className="laptop:w-[60%] mobile:w-[100%] h-full 0">
            <h1 className="laptop:text-[64px] mobile:text-[32px] tablet:text-[64px] font-serif text-secondary-light laptop:mb-8 mobile:mb-2">
              Andrea Planičková
            </h1>

            <p className="text-secondary-light font-serif laptop:text-lg mobile:text-xs  tablet:text-lg  laptop:leading-5 mobile:leading-3 tablet:leading-6">
              Vášnivá milovníčka prírody a dizajnérka, ktorá založila našu firmu
              s cieľom priniesť krásu prírody do interiérov. Už od detstva mala
              blízky vzťah k rastlinám, čo ju inšpirovalo k štúdiu botaniky a
              dizajnu. Po ukončení štúdií pracovala v rôznych záhradníckych a
              dizajnérskych firmách, kde získala cenné skúsenosti a znalosti.
              Jana verí, že príroda má liečivý a upokojujúci vplyv na ľudí,
              preto sa rozhodla spojiť svoju vášeň a odborné znalosti a založila
              firmu špecializujúcu sa na rastlinné teráriá a machové obrazy. Jej
              cieľom je vytvárať jedinečné, ručne vyrábané produkty, ktoré
              prinášajú krásu a pokoj do každej domácnosti či kancelárie.
            </p>
          </div>
        </div>
        {/* Contact form */}
        <div className="w-full  laptop:h-[50%] mobile:h-[50%] tablet:h-[60%] desktop:px-48 mobile:px-8 flex flex-col justify-around ">
          {/* Name & email */}

          <div className="flex  w-full justify-center gap-4 desktop:px-24 mobile:px-8  laptop:h-16 mobile:h-8 tablet:h-16">
            <InputField header={"Name"} bgGreen={true} />
            <InputField header={"E-mail"} bgGreen={true} />
          </div>

          <div className="w-full laptop:h-[50%] mobile:h-32 tablet:h-[50%]">
            <InputField bgGreen={true} header={"Text"} />
          </div>
          <button className="w-48 h-12 self-center  rounded-md border-2 border-secondary-light">
            <h5 className="text-secondary-light font-serif ">Odoslať</h5>
          </button>
        </div>
      </section>
      <footer className="w-screen h-[20%] bg-secondary-light flex py-8 laptop:px-64 mobile:px-8 justify-between">
        <FooterContainer />
        <FooterContainer />
        <FooterContainer />
        <div className=" w-[30%] h-full laptop:flex mobile:hidden flex-col justify-between">
          <div className="h-12 flex gap-2">
            <InputField header={"E-mail"} bgGreen={false} />
            <button className="w-[35%] bg-primary-light rounded-md">
              <h4 className="text-secondary-light font-serif">Submit</h4>
            </button>
          </div>
          <div className="w-full h-12 flex justify-between ">
            <SocialsContainer soc={"insta"} color={"#99B080"} size={24} />

            <SocialsContainer soc={"facebook"} color={"#99B080"} size={24} />

            <SocialsContainer soc={"youtube"} color={"#99B080"} size={24} />
            <SocialsContainer soc={"linkedIn"} color={"#99B080"} size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SectionFive;
