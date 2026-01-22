import styles from "./HomeSection.module.css";
import text from "../assets/styles/text.module.css";
import { FaGithub } from "react-icons/fa";
import { profilePic } from "../assets/media";
import TechStack from "./TechStack";

import { useNavigate } from "react-router-dom";


export default function HomeSection() {
  const navigate = useNavigate();

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContentWrapper}>
          <h1 className={text.title}>Henri Kulmala</h1>
          <div className={styles.textContent}>
            <p className={text.body2}>Helsinki, Finland</p>
            <p className={text.body2}>
              BBA / Tradenomi (AMK), Information Technology
            </p>
            <p className={text.body2}>Available for internships / full-time</p>
          </div>

          <div className={styles.containerRow}>
            <button
              className={styles.contactButton}
              onClick={() => navigate("/contact")}>
              Ota yhteyttä
            </button>

            <button
              className={styles.iconButton}
              onClick={() =>
                window.open(
                  "https://github.com/Henri-Kulmala",
                  "_blank",
                  "noopener,noreferrer",
                )
              }>
              <FaGithub size={32} />
            </button>
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <img className={styles.image} src={profilePic} alt="" />
        </div>
      </div>

      <div className={styles.content} id="tenkiset-ydinosaamiset">
        <div className={styles.contentHeader}>
          <h1 className={text.title}>Tekniset ydinosaamiset</h1>
          <h2 className={text.h2color}>+3 vuotta kokemusta</h2>
          <p className={text.body2}>
            Alla on listattuna keskeisimmät teknologiat ja työkalut, joita olen
            käyttänyt projekteissani.
          </p>
        </div>
        

        <TechStack />
      </div>
      
      
    </div>
  );
}
