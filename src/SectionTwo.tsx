import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useMediaQuery } from "react-responsive";
function SectionTwo() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1441px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width:1440px)",
  });

  const screenWidth = window.innerWidth;

  const textFieldStyle =
    "laptop:text-[24px] tablet:text-[24px] text-left text-primary-light laptop:w-[20vw] mobile:w-[50vw] tablet:w-[40vw] border-r-2 border-primary-light pr-8 mobile:leading-4 laptop:leading-7 tablet:leading-7";
  const ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const sm = useTransform(scrollYProgress1, [0, 1], ["0%", "500%"]);

  const hs = useTransform(
    scrollYProgress1,
    [0, 1],
    ["100%", `-${!isDesktop ? screenWidth * 0.9 : "150"}vw`]
  );
  const hsTab = useTransform(scrollYProgress1, [0, 1], ["100%", "-230vw"]);
  const transition = useTransform(scrollYProgress2, [0, 1], ["0%", "100%"]);
  const initialHeaderTransition = useTransform(
    scrollYProgress3,
    [0, 1],
    ["-100%", "0%"]
  );

  return (
    <motion.div
      ref={ref}
      className="w-screen h-[600vh]  bg-secondary-light px-0 relative overflow-hidden"
    >
      <motion.div style={{ y: sm }}>
        <motion.div
          style={{ y: transition, x: initialHeaderTransition }}
          className=" h-[100vh] flex w-full overflow-hidden absolute "
        >
          <h1
            className="vertical-text tablet:text-[196px] mobile:text-[96px]   text-primary-light font-serif tracking-[.2em]  text-center translate-x-[100%] rotate-180 origin-left 
             leading-none"
          >
            PIANTE
          </h1>
        </motion.div>
        <section className="laptop:pl-64 mobile:pl-24 tablet:pl-48 flex items-center h-screen ">
          <div className="px-0  flex items-center h-screen w-screen  overflow-clip ">
            <motion.div
              style={{ x: isTablet ? hsTab : hs }}
              className="flex gap-16 overflow-hidden flex-shrink-0 "
            >
              <h1 className={textFieldStyle}>
                Naša firma sa špecializuje na vytváranie jedinečných rastlinných
                terárií a machových obrazov, ktoré prinášajú kúsok prírody
                priamo do vášho domova alebo kancelárie. Sme nadšení milovníci
                prírody a veríme, že každý priestor môže byť oživený krásou a
                pokojom, ktorý prinášajú naše výrobky.
              </h1>
              <h1 className={textFieldStyle}>
                Ponúkame široký výber rastlinných terárií a machových obrazov,
                ktoré sú navrhnuté tak, aby vyhovovali rôznym vkusom a potrebám.
                Každý produkt je starostlivo vyrobený s dôrazom na detail a
                kvalitu, pričom používame len tie najlepšie materiály a
                rastliny. Naše teráriá a obrazy sú ideálne ako darček alebo
                štýlový doplnok do akéhokoľvek interiéru.
              </h1>
              <h1 className={textFieldStyle}>
                Naše výrobky sú vytvárané s láskou a odbornosťou. Každé terárium
                a machový obraz je jedinečný, ručne vyrobený a prispôsobený
                vašim požiadavkám. Pri našej práci dbáme na ekologický prístup a
                udržateľnosť. Sme tu pre vás, aby sme vám pomohli nájsť ten
                správny kúsok prírody pre váš priestor.
              </h1>
              <h1 className={textFieldStyle}>
                Naši spokojní zákazníci sú pre nás najväčšou odmenou. Po celom
                Slovensku sme už priniesli kúsok prírody do mnohých domovov a
                kancelárií. Pozrite si naše referencie a nechajte sa inšpirovať
                príbehmi tých, ktorí už objavili krásu a pokoj, ktoré prinášajú
                naše rastlinné teráriá a machové obrazy.
              </h1>
              <h1 className={textFieldStyle}>
                Máte otázky alebo potrebujete poradiť s výberom? Neváhajte nás
                kontaktovať! Sme tu pre vás, aby sme vám poskytli všetky
                potrebné informácie a pomohli vám vybrať ten najlepší produkt
                pre vaše potreby. Spojte sa s nami prostredníctvom emailu,
                telefónu alebo sociálnych sietí a my vám radi poradíme.
              </h1>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}

export default SectionTwo;
