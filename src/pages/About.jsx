import React from 'react';
import { Abouts } from '../data/AboutData';
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


const About = () => {
  return (
    <>
      <section className="about container">
       <div className="fond__text">
          <h1>À propos</h1>
        </div>
      <div className="about__head">
        <div className="section__title">
          <h1>Mes compétences de développeur</h1>
          <p>Autodidacte, je me suis formé principalement sur le web via des formations gratuites et payantes.</p>
        </div>
      </div>

      <motion.div className="about__content" variants={container} initial="hidden" animate="show">
        {Abouts.map(about => {
            return <motion.div className="about__card" key={about.id} variants={containerItem}>
              <img src={about.imgSrc} width={40} height={40} alt="à propos" />
              <h1>{about.title}</h1>
              <p>{about.content}</p>
            </motion.div>
        })}
      </motion.div>
    </section>
    <Footer />
    </>
  )
}

export default About