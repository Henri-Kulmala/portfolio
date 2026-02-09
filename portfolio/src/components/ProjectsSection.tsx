
import styles from "./ProjectsSection.module.css";
import text from "../assets/styles/text.module.css";
import { ProjectCard, ProjectCardSm } from "./ProjectCard";
import { useRef } from "react";
import { useNavigate} from "react-router-dom";
import VariableProximity from "./VariableProximity";




import { EComImg, ProductManagerImg, RuokakomeroMockup, Shifter, Treenikamu } from "../assets/media";



export default function ProjectsSection() {

  const navigate = useNavigate();

  const containerRef = useRef<HTMLDivElement>(null);



  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.containerRow}>
        <div ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label={"Moi! Mä oon Henkka!"}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 1000, 'opsz' 9"
            toFontVariationSettings="'wght' 300, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <div className={styles.textContentHeader}>
          <h1 className={text.title3}>
            Full-Stack kehittäjä / Yrittäjä / opiskelija
          </h1>
        </div>
        <div className={styles.textContent}>
          <h1 className={text.title}>Asiakasprojektit</h1>
          <p className={text.body2}>
            Asiakasprojekteja, joita toteutan osana yritystoimintaani. Projektit
            kattavat koko kehitysprosessin aina suunnittelusta tekniseen
            toteutukseen ja julkaisuun. Työt on tehty oikeisiin
            tuotantoympäristöihin ja todellisiin tarpeisiin.
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
      <div className={styles.containerRow} id="projektit">
        <div className={styles.textContent}>
          <h1 className={text.title}>Omat projektit</h1>
          <p className={text.body2}>
            Henkilökohtaisia sekä ryhmätyö-projekteja, jotka ovat toteutettu
            osana AMK-opintoja. Projektit vaihtelevat pienistä teknisistä
            kokeiluista laajempiin kokonaisuuksiin.
          </p>
        </div>
        <div className={styles.projectsWrapper}>
          <div className={styles.projectCardsSm}>
            <ProjectCard
              title="Treenikamu-sovellus"
              description="Liikunta- ja hyvinvointisovellus"
              imgSrc={Treenikamu}
              onClick={() =>
                window.open(
                  "https://github.com/Henri-Kulmala/Treenikamu-app",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            />
            
            <ProjectCardSm
              title="Shifter-vuoronsuunnittelu"
              description="Vuoronhallintajärjestelmä myymälöille"
              imgSrc={Shifter}
              onClick={() =>
                window.open(
                  "https://github.com/Henri-Kulmala/Shifter--Vuoronsuunnittelu",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            />
          </div>
        </div>
        <div className={styles.projectsWrapper}>
          <div className={styles.projectCardsSm}>
            <ProjectCardSm
              title="Ruokakomero-sovellus"
              description="AI-avusteinen reseptisovellus"
              imgSrc={RuokakomeroMockup}
              onClick={() =>
                window.open(
                  "https://github.com/Ruokakomero/Ruokakomero-App",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
