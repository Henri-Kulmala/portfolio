import React from "react";
import styles from "./ProjectsSection.module.css";
import text from "../assets/styles/text.module.css";
import { ProjectCard, ProjectCardSm } from "./ProjectCard";
import { useNavigate } from "react-router-dom";



import { EComImg, ProductManagerImg, RuokakomeroMockup } from "../assets/media";



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
          <div className={styles.projectCard}>
            <ProjectCard
              cardTitle="Bölen Hella"
              cardDescription="Verkkokauppa"
              imgSrc={EComImg}
              onClick={() => navigate('/projects/bolen-hella')}
            />
          </div>
          <div className={styles.projectCard}>
            <ProjectCardSm
              cardTitleSm="Tuotehallinta"
              cardDescriptionSm="Tuotehallintasovellus"
              imgSrcSm={ProductManagerImg}
              imgSmall={false}
              onClick={() => navigate('/projects/tuotehallinta')}
            />
          </div>
        </div>
        <div className={styles.containerRow}>
          <div className={styles.projectInfo}>
            <h1 className={styles.infoTitle}>
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
              <h1 className={styles.infoSubTitle}>Tekninen toteutus</h1>
              <p className={text.body}>
                Järjestelmä koostuu React + Vite -pohjaisesta
                admin-käyttöliittymästä sekä Next.js:llä toteutetusta
                API-backendistä. Backend käyttää Prisma ORM:ää ja pilvipohjaista
                PostgreSQL-tietokantaa (Neon), joka sijaitsee EU-alueella.
                Autentikointi on toteutettu Supabase Authilla, ja koko
                kokonaisuus on julkaistu pilviympäristöihin: frontend cPanelissa
                ja backend Render-palvelussa.
              </p>
              <h1 className={styles.infoSubTitle}>Tietoturva ja käyttö</h1>
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
          <div className={styles.projectCard}>
            <ProjectCardSm
              cardTitleSm="Ruokakomero"
              cardDescriptionSm="AI-avusteinen reseptisovellus"
              imgSrcSm={RuokakomeroMockup}
              imgSmall={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
