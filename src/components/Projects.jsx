import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
  // Card animation variant
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Title animation variant
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
  <section
  id="project"
  className="bg-color text-color py-12 px-5 sm:px-10 md:px-20"
>

      {/* Section Title */}
      <div className="flex items-center justify-center">
        <motion.h2
          className="text-4xl font-bold mb-10 p-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={titleVariants}
        >
          Projects
        </motion.h2>
      </div>

      {/* Card Grid */}
      <div className="flex flex-wrap justify-center gap-10 max-w-[1200px] mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: index * 0.2 }} // stagger effect
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
