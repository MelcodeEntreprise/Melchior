import React from 'react';
import {DataProjects} from '../data/ProjectsData';
import githSvg from '../assets/svg/gith.svg';
import viewSvg from '../assets/svg/view.svg';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';



const container = {
  hidden: {opacity:0},
  show:{
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 1,
    }
  }
}

const containerItem = {
  hidden:{scale: 0},
  show:{
    scale: 1,
    transition: {
      type: "spring",
      duration: 1
    }
  }
}

const Projects = () => {
  return (
    <>
      <section className="project container">
      <div className="fond__text">
        <h1>Mes projets</h1>
      </div>
     <div className="project__head">
        <div className="section__title">
          <h1>Mes réalisations</h1>
        </div>
     </div>

     <motion.div className="project__content" variants={container} initial="hidden" animate="show">
     {DataProjects.map(project => {
            return <motion.div className="project__card" key={project.id} variants={containerItem}>
              <div className="project__image">
                <img src={project.imgSrc} alt="projet" />
              </div>
              <h1>{project.name}</h1>
              <h3>{project.technos}</h3>
              <p>{project.description}</p>
              <div className="project__button">
                <div className="link__views">
                  <a href={project.link} target="_blank" rel="noopener noreferrer"><img src={viewSvg} width={20} height={20} alt="view icon" />Voir le projet</a>
                </div>
                <div className="link__views">
                  <a href={project.depot} target="_blank" rel="noopener noreferrer"><img src={githSvg} width={20} height={20} alt="gith icon" />Voir le dépôt</a>
                </div>
              </div>
            </motion.div>
      })}
     </motion.div>
    </section>
    <Footer />
    </>
  )
}

export default Projects