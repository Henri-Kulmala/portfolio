
import styles from "./ProjectsSection.module.css";
import text from "../assets/styles/text.module.css";
import { ProjectCard, ProjectCardSm } from "./ProjectCard";
import { useNavigate } from "react-router-dom";



import { EComImg, ProductManagerImg, RuokakomeroMockup, Treenikamu } from "../assets/media";



export default function ProjectsSection() {

  const navigate = useNavigate();

  


  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.containerRow}>
        <div className={styles.textContent}>
          <h1 className={text.title}>Kehitetään parhaillaan</h1>
          <p className={text.body2}>
            Tässä osiossa esiteltävät projektit ovat parhaillaan työn alla. Ne
            kehittyvät aktiivisesti ja sisältö, toiminnallisuudet sekä
            visuaalinen ilme voivat vielä muuttua.
          </p>
        </div>
        <div className={styles.projectsWrapper}>
          <div className={styles.projectCards}>
            <ProjectCardSm
              title="Tuotehallinta"
              description="Tuotehallintasovellus"
              imgSrc={ProductManagerImg}
              onClick={() => navigate("/projects/tuotehallinta")}
            />

            <ProjectCard
              title="Bölen Hella"
              description="Verkkokauppa"
              imgSrc={EComImg}
              onClick={() => navigate("/projects/bolen-hella")}
            />
          </div>
        </div>
        
      </div>
      <div className={styles.containerRow}>
        <div className={styles.textContent}>
          <h1 className={text.title}>Omat projektit</h1>
          <p className={text.body2}>
            Henkilökohtaisia projekteja, jotka on toteutettu vapaa-ajalla,
            kokeilumielessä sekä osana AMK-opintoja. Projektit vaihtelevat
            pienistä teknisistä kokeiluista laajempiin kokonaisuuksiin.
          </p>
        </div>
        <div className={styles.projectsWrapper}>
          <div className={styles.projectCards}>
            <ProjectCardSm
              title="Treenikamu-sovellus"
              description="Liikunta- ja hyvinvointisovellus"
              imgSrc={Treenikamu}
              onClick={() =>
                window.open(
                  "https://github.com/Henri-Kulmala/Treenikamu-app",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            />

            <ProjectCardSm
              title="Ruokakomero"
              description="AI-avusteinen reseptisovellus"
              imgSrc={RuokakomeroMockup}
              onClick={() =>
                window.open(
                  "https://github.com/Ruokakomero/Ruokakomero-App",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
