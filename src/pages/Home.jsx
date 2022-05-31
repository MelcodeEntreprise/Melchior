import React from 'react';
import homeProfile from '../assets/img/profile.png';
import reactLogo from '../assets/svg/reactLogo.svg';
import fbkSvg from '../assets/svg/facebook.svg';
import twitterSvg from '../assets/svg/twitter.svg';
import githSvg from '../assets/svg/gith.svg';
import NavEnd from '../components/NavEnd';
import { motion } from 'framer-motion';

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


const Home = () => {
  return (
    <section className="home container">
      <motion.div className="home__display" variants={container} initial="hidden" animate="show">
        <motion.div className="home__infos" variants={containerItem}>
          <h3>Salut, je suis</h3>
          <h1>François Melchior</h1>
          <p>Développeur web javaScript, Front-end et Back-end.</p>
          <div className="home__sociaux">
            <a href="https://www.facebook.com/melcodeentreprise" target="_blank" rel="noopener noreferrer"><img src={fbkSvg} width={30} height={30} alt="facebook"/></a>
            <a href="https://twitter.com/MelCode_" target="_blank" rel="noopener noreferrer"><img src={twitterSvg} width={30} height={30} alt="twitter"/></a>
            <a href="https://github.com/MelcodeEntreprise" target="_blank" rel="noopener noreferrer"><img src={githSvg} width={30} height={30} alt="github"/></a>
          </div>

          <div className="home__react__logo">
            <img src={reactLogo} alt="react__logo" />
          </div>
        </motion.div>

        <motion.div className="home__img" variants={containerItem}>
          <img src={homeProfile} alt="home__profile" />
        </motion.div>
      </motion.div>

      <div className="home__nav">
        <NavEnd />
      </div>
    </section>
  )
}

export default Home