"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { technicalSkillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <center>
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <h2 className = "text-3xl font-bold text-center"> My Skills </h2>
      <br />
      <br />
      <h3 className = "text-xl text-center"> Programming Languages</h3>
      <br />
      <br />
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <br />
      <br />
      <h3 className = "text-xl text-center"> Technical Skills</h3>
      <br />
      <br />
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {technicalSkillsData.map((technicalSkill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {technicalSkill}
          </motion.li>
        ))}
      </ul>
    </section>
    </center>
  );
}
