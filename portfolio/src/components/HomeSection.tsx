import React, { useState } from "react";
import styles from "./HomeSection.module.css";
import text from "../assets/styles/text.module.css";
import { IoChevronDown } from "react-icons/io5";
import { profilePic } from "../assets/media";
import { IconCarousel } from "./IconCarousel";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

export default function HomeSection({ scrollTo }: { scrollTo: () => void }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.textContent}>
          <h1 className={text.title}>Henri Kulmala</h1>
          <p className={text.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            obcaecati sint distinctio qui repellat vel, soluta autem earum
            officia maxime provident id ea at ipsam.
          </p>
          <div className={styles.containerRow}>
            <button className={styles.contactButton} onClick={openContactModal}>
              Ota yhteyttä
            </button>
            <Modal isOpen={isContactOpen} onClose={closeContactModal}>
              {isContactOpen && <ContactForm />}
            </Modal>
          </div>
        </div>
        <div className={styles.content}>
          <img className={styles.image} src={profilePic} alt="" />
        </div>
      </div>
      <div className={styles.heroFooter}>
        <div className={styles.iconContainer}>
          <IconCarousel />
        </div>
        <div className={styles.scrollDown}>
          <IoChevronDown className={styles.icon} onClick={scrollTo} />
        </div>
      </div>
    </div>
  );
}
