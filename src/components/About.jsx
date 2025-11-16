import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
//import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hi! I'm Shadan Namazifard, a fourth-year Honours Computer Science student at UBC graduating in May 2026 with a passion for blending engineering, creativity, and AI. My main interests lie in computer vision, especially image and video diffusion models, and building intelligent systems that push how we interact with media.
        I’ve had the opportunity to intern at Rivian as an iOS developer and twice at Apple on the Video Apps team, shaping real features inside world-class products.
        My latest project, ArtVision AI, brings together everything I love—vision, creativity, and computational design.<br>
        </br>
        
        Check out my latest project <a href="#demo" style={{ fontWeight: 'bold', color: '#A9EFEE' }}>ArtVision AI</a> which brings this vision to life!
        <br></br>
        {/* I am currently a Software Engineer Intern at Rivian, working in the iOS Developement sector under the
         Mobile Development team. On the side I am continously expanding my knowlege in areas such as machine 
        learning and experimenting with different technologies. */}

      </motion.p>

     
    </>
  );
};

export default SectionWrapper(About, "about");
