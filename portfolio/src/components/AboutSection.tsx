import React, { useState } from "react";
import styles from "./AboutSection.module.css";
import text from "../assets/styles/text.module.css";
import { KKHenkka, HettaPallas, Saaris } from "../assets/media";
import { InfoCardFront, InfoCardBack } from "./InfoCard";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import Modal from "./Modal";

type AboutSectionProps = {
  onOpenContact: () => void;
};

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const handleClick = () => setIsFlipped(!isFlipped);

  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.containerRow}>
        <div className={styles.textContent}>
          <h1 className={text.title}>Hieman minusta</h1>
          <p className={text.body}>
            Hello! I'm Henri, a passionate software developer with a love for
            creating innovative solutions. With a background in computer science
            and years of experience in the industry, I specialize in building
            web applications that are both functional and user-friendly.
          </p>
          <p className={text.body}>
            When I'm not coding, you can find me exploring the outdoors, reading
            tech blogs, or experimenting with new programming languages and
            frameworks. I'm always eager to learn and take on new challenges.
          </p>
        </div>
        <div className={styles.content}></div>
      </div>

      <div className={styles.containerRow}>
        <button className={styles.contactButton} onClick={toggleModal}>Ota yhteyttä</button>
        <Modal
          isOpen={openModal} onClose={() => setOpenModal(false)}>
          <ContactForm />
        </Modal>
      </div>

      <div className={styles.card} onClick={handleClick}>
        <motion.div
          className={styles.infoCardWrapper}
          initial={false}
          animate={{ rotateX: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
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
