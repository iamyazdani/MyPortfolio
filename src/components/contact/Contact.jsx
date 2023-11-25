import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
// import { RiMessengerLine } from "react-icons/ri";
// import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";
import './contact.css';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y6b6yeu', 'template_8hl23ea', form.current, 'stOL20Rdz3s-zhKkv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <>
    <section id="contact">
      
      <motion.h5 style={{ fontSize: "0.8rem" }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >Get in Touch</motion.h5>
      
      <motion.h2 style={{ fontSize: "1.2rem" }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >Contact Me</motion.h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <motion.article className="contact__option"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
          
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>gulamyazdani03@gmail.com</h5>
          <a href="mailto:gulamyazdani03@gmail.com" target="_blank">
          Send a mail
          </a>
          </motion.article>

          <motion.article className="contact__option"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >

          <BsWhatsapp className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <h5>+91 7317208121</h5>
          <a href="https://wa.me/+917317208121" target="_blank">
          Send a message
          </a>
          </motion.article>

          <motion.article className="contact__option"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >

          {/* <RiMessengerLine className="contact__option-icon" /> */}
          {/* <FaInstagram className="contact__option-icon" /> */}
          <FaLinkedin className="contact__option-icon" />
          <h4>LinkedIn</h4>
          <h5>Gulam Yazdani</h5>
          <a href="https://www.linkedin.com/in/gulam-yazdani-4b2201227/" target="_blank">
          Send a message
          </a>
          </motion.article>
          
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <motion.input type="text" name='name' placeholder="Your Full Name" required
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.input type="email" name='email' placeholder="Your Email" required
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.textarea name='message' rows='7' placeholder="Your message for me" required
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.button type='submit' className='btn btn-primary'
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >Send message</motion.button>
        </form>
      </div>
    </section>
    </>
    
  );
};

export default Contact;
