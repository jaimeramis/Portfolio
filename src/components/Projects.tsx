import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projects from "../data/projects.json";
import content from "../data/content.json";
import type { Project, ProjectsContent } from "../types";
import SectionHeader from "./SectionHeader";

const { sectionTitle, sectionSubtitle, btnLive, btnDocumentation } = content.projects as ProjectsContent;

function ProjectItem({ title, type, role, stack, live, documentation, image, trigger, index }: Project & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px -30% 0px" });

  return (
    <motion.div
      ref={ref}
      className="projects__content--items"
      initial={{ opacity: 0 }} // Inicia con mayor desplazamiento
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Se mueve hacia arriba y aparece
      transition={{
        duration: 0.8, // Duración ajustada para mayor suavidad
        ease: "easeInOut", // Asegura un movimiento más suave al principio y al final
        delay: index * 0.2, // Retraso ajustado para cada elemento en la secuencia
      }}>
      <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
      <p dangerouslySetInnerHTML={{ __html: type }}></p>
      <p dangerouslySetInnerHTML={{ __html: role }}></p>
      <p dangerouslySetInnerHTML={{ __html: stack }}></p>
      <div className="projects__content--btn">
        <a className="btn-1" href={live} target="_blank" rel="noopener noreferrer">
          <p>{btnLive}</p>
        </a>
        <a className={`btn-2 ${trigger}`} href={documentation} target="_blank" rel="noopener noreferrer">
          <p>{btnDocumentation}</p>
        </a>
      </div>
      <div className={`projects__bg ${image}`}></div>
    </motion.div>
  );
}

function Projects() {
  return (
    <div className="projects-box" id="projects">
      <SectionHeader prefix="projects" sectionTitle={sectionTitle} subtitle={sectionSubtitle} />

      <div className="projects__content">
        {(projects as Project[]).map((project, index) => (
          <ProjectItem key={project.title} {...project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
