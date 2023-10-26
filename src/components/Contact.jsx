import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";


const Contact = () => {

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div
          className="mt-12 flex flex-col gap-8"
        >
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">My Name</span>
            <p className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium">Krasimir Hristov</p>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">My Address</span>
            <p className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium">Wndlingen am Neckar - Germany</p>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">My Email</span>
            <p className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium">krasimir.xristov@gmail.com</p>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">My Mobile</span>
            <p className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium">+49 173 3079213</p>
          </div>

        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
