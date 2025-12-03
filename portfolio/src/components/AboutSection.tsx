import React, { useState } from 'react'
import styles from './AboutSection.module.css'
import { KKHenkka, HettaPallas, Saaris } from '../assets/media';
import {InfoCardFront, InfoCardBack} from './InfoCard';
import {motion} from 'framer-motion';

export default function AboutSection() {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);
    const handleClick = () => setIsFlipped(!isFlipped);


  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.containerRow}>
        <div className={styles.textContent}>
          <h1 className={styles.sectionTitle}>Hieman minusta</h1>
          <p className={styles.sectionParagraph}>
            Hello! I'm Henri, a passionate software developer with a love for
            creating innovative solutions. With a background in computer science
            and years of experience in the industry, I specialize in building
            web applications that are both functional and user-friendly.
          </p>
          <p className={styles.sectionParagraph}>
            When I'm not coding, you can find me exploring the outdoors, reading
            tech blogs, or experimenting with new programming languages and
            frameworks. I'm always eager to learn and take on new challenges.
          </p>
        </div>
        <div className={styles.content}></div>
      </div>
      <div className={styles.card} onClick={handleClick}>
        <motion.div
          className={styles.infoCardWrapper}
          initial={false}
          animate={{ rotateX: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, ease: "easeInOut"  }}
          onAnimationComplete={() => setIsAnimating(false)}>
          <InfoCardFront />
          <InfoCardBack />
        </motion.div>
      </div>

      <div className={styles.containerRow}>
        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src={KKHenkka} alt="Karhunkierros" />
          </div>
          <div className={styles.imgContainer}>
            <img src={HettaPallas} alt="Hetta-Pallas" />
          </div>
          <div className={styles.imgContainer}>
            <img src={Saaris} alt="Saariselkä" />
          </div>
        </div>
      </div>
    </div>
  );
}
