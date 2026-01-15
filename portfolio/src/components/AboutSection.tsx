import  { useState } from "react";
import styles from "./AboutSection.module.css";
import text from "../assets/styles/text.module.css";
import { KKHenkka, HettaPallas, Saaris } from "../assets/media";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

type AboutSectionProps = {
  onOpenContact?: () => void;
};

export default function AboutSection({ }: AboutSectionProps) {



  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.content}>
        <div className={styles.containerCol}>
          <div className={styles.textContent}>
            <h1 className={text.title}>Hieman minusta</h1>
            <p className={text.body2}>
              Hei! Olen Henri, intohimoinen ohjelmistokehittäjä, jolla on vahva
              halu luoda innovatiivisia ratkaisuja. Taustani on
              tietojenkäsittelytieteessä ja minulla on usean vuoden kokemus
              alalta. Erikoistun web-sovellusten kehittämiseen siten, että ne
              ovat sekä toiminnallisia että käyttäjäystävällisiä.
            </p>
            <p className={text.body2}>
              Kun en koodaa, minut löytää usein ulkoilemasta, lukemasta
              teknologia-aiheisia blogeja tai kokeilemassa uusia
              ohjelmointikieliä ja -kehyksiä. Olen aina halukas oppimaan uutta
              ja tarttumaan uusiin haasteisiin.
            </p>
          </div>

          <div className={styles.buttonsWrapper}>
            <button className={styles.contactButton} onClick={toggleModal}>
              Ota yhteyttä
            </button>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
              <ContactForm />
            </Modal>

            <button
              className={styles.contactButton}
              onClick={() => navigate("/cv")}>
              CV
            </button>
          </div>
        </div>
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
