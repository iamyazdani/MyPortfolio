import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id='experience'>

            <motion.h5
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >What skills I have</motion.h5>

            <motion.h2
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >My Experience</motion.h2>

            <div className="container experience__container">
                <motion.div className="experience__frontEnd"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <h3>Front End Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>HTML5</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>CSS3</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap5</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>ReactJS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>NextJS</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Redux</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Git & GitHub</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        {/* <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Chakra UI</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article> */}
                        {/* <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Framer Motion</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article> */}
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>WordPress</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                    </div>
                </motion.div>

                <motion.div className="experience__backEnd"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <h3>Back End Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Core Java</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        {/* <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article> */}
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Oracle</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>NodeJS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>ExpressJS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Postman</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}

export default Experience;
