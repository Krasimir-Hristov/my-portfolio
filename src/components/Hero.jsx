import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="realative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Krasimir</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm <br className="sm:block hidden" /> Full-Stack Javascript
            Developer
          </p>
          <h2 className={`${styles.heroSubText} text-[darkred]`}>
            Important!
            <br />
            <span className={styles.heroSubText}>
              Every icon on this website-portfolio is 3D modeled. Give them a
              try!
            </span>
          </h2>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
