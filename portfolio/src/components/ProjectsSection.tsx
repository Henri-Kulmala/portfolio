
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
          <p className={text.body}>
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
        <div className={styles.containerRow}>
          <div className={styles.projectInfo}>
            <h1 className={text.title2}>
              Bölen Hella - verkkokauppa & tuotehallinta
            </h1>
            <p className={text.body}>
              Product Manager on kevyt mutta toiminnallisesti kattava
              full-stack-verkkosovellus rakenteisen tuotetiedon hallintaan ja
              julkaisuun. Sovellus on suunniteltu tilanteisiin, joissa
              täysimittainen sisällönhallintajärjestelmä olisi ylimitoitettu,
              mutta tuotetiedon hallinnalta vaaditaan silti selkeyttä, nopeutta
              ja luotettavuutta. Ratkaisu soveltuu erityisesti pienille
              yrityksille ja sisäiseen käyttöön.
            </p>

            <div className={styles.projectInfoContent}>
              <h1 className={text.header}>Tekninen toteutus</h1>
              <p className={text.body}>
                Järjestelmä koostuu React + Vite -pohjaisesta
                admin-käyttöliittymästä sekä Next.js:llä toteutetusta
                API-backendistä. Backend käyttää Prisma ORM:ää ja pilvipohjaista
                PostgreSQL-tietokantaa (Neon), joka sijaitsee EU-alueella.
                Autentikointi on toteutettu Supabase Authilla, ja koko
                kokonaisuus on julkaistu pilviympäristöihin: frontend cPanelissa
                ja backend Render-palvelussa.
              </p>
              <h1 className={text.header}>Tietoturva ja käyttö</h1>
              <p className={text.body}>
                Tietoturva on huomioitu sovelluksen kaikilla tasoilla:
                API-reitit on suojattu token-pohjaisella varmennuksella,
                CORS-käytännöt on rajattu tarkasti ja kaikki yhteydet ovat
                SSL-suojattuja. Sovellus ei käsittele henkilötietoja tai
                maksutietoja, vaan ainoastaan tuotemetatietoa. Ylläpitäjä voi
                kirjautumisen jälkeen lisätä, muokata, poistaa ja hakea
                tuotteita, ja muutokset synkronoituvat automaattisesti
                tietokantaan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerRow}>
        <div className={styles.textContent}>
          <h1 className={text.title}>Omat projektit</h1>
          <p className={text.body}>
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
