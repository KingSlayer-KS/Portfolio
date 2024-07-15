import { React, useState } from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

function ServiceCard({ index, title, icon, technologies, hide }) {
  const [ishidden, setishidden] = useState("hidden");
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        onMouseEnter={() => setishidden("")}
        onMouseLeave={() => setishidden("hidden")}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] min-w-[309] flex justify-evenly items-center flex-col"
        >
          <img
            key={title}
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain "
          />
          <div className=" ">
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
            <ol className={`${ishidden} text-[16px] p-[5px] m-[5px]`}>
              {technologies.map((tech) => (
                <motion.li key={tech}>{tech}</motion.li>
              ))}
            </ol>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who is Sirjan?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mb-20 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <div>
        Sirjan is a full-stack developer with over four years of experience, currently focusing on Web3 startups as a Blockchain & Backend Developer. He's working on a Web3-based dating platform at DropD Network. Apart from that, he's aiming to develop a SaaS product, specifically a CRM, which will be hopefully launched in Q4 2024.

          <br />
          <br />
          He also takes on freelance projects, including portfolio sites,
          e-commerce websites, and custom web apps development. He has empowered
          over 30 small businesses to establish an online presence and kickstart
          their marketing efforts. Sirjan offers free initial consultations for
          small businesses looking to explore digital solutions.
          <div className="mt-5 text-left">
            {" "}
            <Link target="blank" to="https://calendly.com/codingsimplify/free-estimations-and-brain-storming-call">
            <button  className="bg-tertiary green-pink-gradient w-4/5 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
              Book a FREE Call
            </button></Link>
          </div>
        </div>
      </motion.p>

      <motion.div className="mt-3" variants={textVariant()}>
        <p className={styles.sectionSubText}>Tools he is Famillar with</p>
        <h2 className={styles.sectionHeadText}>His Arsenel.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <div>
              <ServiceCard
                key={service.title}
                technologies={service.technologies}
                index={index}
                {...service}
              />
            </div>
          );
        })}
      </div>



      {/*Service costings */}
      {/* <motion.div className="mt-20" variants={textVariant()}>
        <p className={styles.sectionSubText}>services</p>
        <h2 className={styles.sectionHeadText}>Making Visons a Reality</h2>
      </motion.div>

      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 h-3/6">04</div>
        <div class="h-3/6">05</div>
        <div class="h-3/6">06</div>
        <div class="col-span-2 h-3/6">07</div>
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
