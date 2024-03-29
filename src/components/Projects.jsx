import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, web } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  web_link
}) => {
  return (
    <div>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          <div className="mt-5 flex justify-between">
            <div
              onClick={() => window.open(web_link, "_blank")}
              className="black-gradient w-32 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <p className="text-white font-bold text-[14px]">Live Web Demo</p>
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-32 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <p className="text-white font-bold text-[14px]">Go to the source</p>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work!</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below, you'll find a showcase of projects that highlight my skills and experience through real-world examples of my work. Each project reflects my ability to solve complex problems, work with different technologies, and manage projects effectively. Look for the two icons in the top right corner of each project - one for the live web link and the other for GitHub source code access.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} idex={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
