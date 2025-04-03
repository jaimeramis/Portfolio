import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projects from "../data/projects.json";

function ProjectItem({ title, type, role, stack, live, documentation, image, trigger, index }) {
  const ref = useRef(null);
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
      <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
      <p dangerouslySetInnerHTML={{ __html: type }}></p>
      <p dangerouslySetInnerHTML={{ __html: role }}></p>
      <p dangerouslySetInnerHTML={{ __html: stack }}></p>
      <div className="projects__content--btn">
        <a className="btn-1" href={live} target="_blank" rel="noopener noreferrer">
          <p>Live Work</p>
        </a>
        <a className={`btn-2 ${trigger}`} href={documentation} target="_blank" rel="noopener noreferrer">
          <p>Documentation Work</p>
        </a>
      </div>
      <div className={`projects__bg ${image}`}></div>
    </motion.div>
  );
}

function Projects() {
  return (
    <div className="projects-box" id="projects">
      <div className="projects__profile">
        <div className="projects__profile--section">
          <img src="/images/info-icons/icon.svg" alt="Project Icon" />
          <p>My Projects</p>
        </div>
        <div className="projects__profile--title">
          <h4>Selected Works</h4>
        </div>
      </div>

      <div className="projects__content">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
