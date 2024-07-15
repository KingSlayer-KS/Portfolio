import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { fadeIn } from "../utils/motion";
import {
  IconBrandReact,
  IconBrandAws,
  IconCurrencyEthereum,
} from "@tabler/icons-react";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      onMouseEnter={() => setishidden("")}
      onMouseLeave={() => setishidden("hidden")}
      variants={fadeIn("right", "spring")}
      class="bg-tertiary hover:shadow-md group m-3 p-3 rounded-md p-3 bg-grey ring-1 ring-slate-200 shadow-sm shadow-card rounded-[20px]"
    >
      <div>
        <div className="flex">
          <h3 className="text-white text-[24px] font-bold flex-1">
            {experience.title}
          </h3>
          <div className="flex">
            {experience.icon && <experience.icon />}
            {experience.icon2 && <experience.icon2 />}
            {experience.icon3 && <experience.icon3 />}
          </div>
        </div>
        <div className="flex">
          <p
            className="text-secondary text-[16px] font-semibold flex-1"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
          <br className="hidden sm:block md:block"/>
          <p className="text-secondary text-[16px] font-semibold">
          {experience.date}
          </p>
        </div>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What He has added value so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col ">
        {/* <VerticalTimeline > */}
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
        {/* </VerticalTimeline> */}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
