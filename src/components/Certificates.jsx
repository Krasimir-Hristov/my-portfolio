import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { certificates } from "../constants";

import SectionWrapper from "../hoc/SectionWrapper";

const CertificateCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px]  shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-1 px-1 
            min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-[100%] h-[100%] object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Certificates = () => {
  return (
    <>
      <h2
        className={`${styles.sectionHeadText} justify-center text-center mt-[20px]`}
      >
        Certificates.
      </h2>

      <div className="mt-20 flex flex-wrap gap-10">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.title}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
