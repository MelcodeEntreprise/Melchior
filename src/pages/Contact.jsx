import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import callSvg from '../assets/svg/call.svg';
import emailSvg from '../assets/svg/email.svg';
import locationSvg from '../assets/svg/location.svg';
import { faqs } from '../data/FaqData';
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

const Contact = () => {

  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let nameS = document.getElementById("name");
    let emailS = document.getElementById("email");
    let numberS = document.getElementById("number");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".form__message");

    const isEmail = () => {
      let isMail = document.getElementById("invalid-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        return false;
      }
    };

    if (name && isEmail() && message && number) {

      nameS.classList.remove("error");
      emailS.classList.remove("error");
      numberS.classList.remove("error");
      messageS.classList.remove("error");

      formMess.innerHTML = "Message en cours d'envoi...";
      formMess.style.background = "#dff0d8";
      formMess.style.color = "#3c763d";
      formMess.style.opacity = "1";

   
      emailjs.sendForm('service_xtc8pxh', 'template_nk2ym7q', form.current, 'm3G1D5QOfQ0ovOriQ', {
        name,
        email,
        number,
        message
      }).then(
          (result) => {
            formMess.innerHTML = "Message envoyé ! Je vous recontacterai dès que possible.";
            e.target.reset();

            setTimeout(() => {
              formMess.style.opacity = "0";
            }, 5000);
          },
          (err) => {
            console.log(err);
            formMess.style.background = "#fcf8e3";
            formMess.style.color = "#8a6d3b";
            formMess.innerHTML = "Une erreur s'est produite, veuillez réessayer.";
          }
        );
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = "#f2dede";
      formMess.style.color = "#a94442";
      formMess.style.opacity = "1";

      if (!name) {
        nameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!number) {
        numberS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  }


  return (
   <>
     <section className="contact container">
        <div className="fond__text">
          <h1>Contact</h1>
        </div>
        <div className="section__title">
          <h1>Me Contacter</h1>
            <p>
              Donnez un maximum d'informations sur votre projet, insistez sur les grands points, afin
              que je puisse avoir une idée au préalable sur le service qui devra être effectué et de fixer en amont un tarif à titre préventif. 
            </p>
        </div>

        
      <div className="form__display">
        <motion.div className="form" variants={container} initial="hidden" animate="show">
              <motion.div className="contact__infos" variants={containerItem}>
                <h2>Informations de Contact</h2>
                <div className="information">
                  <img src={callSvg} width={25} height={25} alt="call" />
                  <p>+241 66743453</p>
                </div>
                <div className="information">
                  <img src={emailSvg} width={25} height={25} alt="email" />
                  <p>melcodeentreprise@gmail.com </p>
                </div>
                <div className="information">
                  <img src={locationSvg} width={25} height={25} alt="location" />
                  <p>Gabon, Libreville</p>
                </div>
              </motion.div>

              <motion.div className="contact__form" variants={containerItem}>
                <form ref={form} onSubmit={(e) => handleSubmit(e)}>
                  <input type="text" placeholder="Nom" autoComplete="off" id="name" name="user_name" required  onChange={(e) => setName(e.target.value)} />
                  <div className="email__content">
                    <label id="invalid-mail">Email non valide</label>
                    <input type="email" placeholder="Email"  autoComplete="off" id="email" name="user_email" required onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <input type="text" placeholder="Téléphone" autoComplete="off" id="number" name="user_number" required onChange={(e) => setNumber(e.target.value)} />
                  <textarea placeholder="Message" id="message" name="message" required onChange={(e) => setMessage(e.target.value)}></textarea>
                  <button type="submit">Obtenir un devis</button>
                </form>
                <div className="form__message"></div>
              </motion.div>
        </motion.div>
      </div>

      <div className="form__faq">
        <div className="section__title">
          <h1>Les questions fréquentes</h1>
        </div>

        <motion.div className="faq__display" variants={container} initial="hidden" animate="show">
            {faqs.map(faq => {
                    return <motion.div key={faq.id} className="faq__contain" variants={containerItem}>
                        <h1>{faq.question}</h1>
                        <p>{faq.response}</p>
                    </motion.div>
                })}
        </motion.div>
      </div>
    </section>
    <Footer />
   </>
  )
}

export default Contact