import { useState } from "react";
import styles from "./HomeSection.module.css";
import text from "../assets/styles/text.module.css";
import { IoChevronDown } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
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
          <div className={styles.containerRow}>
            <button className={styles.contactButton} onClick={openContactModal}>
              Ota yhteyttä
            </button>
            <button
              className={styles.iconButton}
              onClick={() =>
                window.open(
                  "https://github.com/Henri-Kulmala",
                  "_blank",
                  "noopener,noreferrer"
                )
              }>
              <FaGithub size={32} />
            </button>
            <Modal isOpen={isContactOpen} onClose={closeContactModal}>
              {isContactOpen && <ContactForm />}
            </Modal>
          </div>
          <h1 className={text.title}>Henri Kulmala</h1>
          <p className={text.textDark}>
            Helsinki, Finland · Open to remote / hybrid
          </p>
          <p className={text.textDark}>
            BBA / Tradenomi (AMK), Information Technology
          </p>
          <p className={text.textDark}>Available for internships / full-time</p>

          <p className={text.textDark}>
            React · React Native · TypeScript · Node.js · REST APIs
          </p>
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
