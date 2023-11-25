import React from 'react';
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer id="footer">
            <motion.a href="#" className="footer__logo"
                initial={{ opacity: 0, scale: 2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >Gulam Yazdani</motion.a>

            <ul className="permalinks"
            >
                <motion.li
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                ><a href="#">Home</a><span>|</span></motion.li>

                <motion.li
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                ><a href="#about">About</a><span>|</span></motion.li>

                <motion.li
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                ><a href="#experience">Experience</a><span>|</span></motion.li>

                <motion.li
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                ><a href="#portfolio">Portfolio</a><span>|</span></motion.li>

                <motion.li
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                ><a href="#contact">Contact</a></motion.li>
                
            </ul>

            <div className="footer__socials">

                <motion.a href="https://www.linkedin.com/in/gulam-yazdani-4b2201227/" target="_blank"
                    initial={{ opacity: 0, translateY: -50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <BsLinkedin />
                </motion.a>

                <motion.a href="https://github.com/iamyazdani/" target="_blank"
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaGithub />
                </motion.a>

                <motion.a href="https://twitter.com/iamyazdani_" target="_blank"
                    initial={{ opacity: 0, translateY: -50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaTwitter />
                </motion.a>

            </div>

            <div className="footer__copyright">
                <h5>Copyright &copy; 2023 Gulam Yazdani</h5>
            </div>

        </footer>
    )
}

export default Footer;
