import React from "react";
import styles from "./ProjectPreview.module.css";
import text from "../assets/styles/text.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { EcomLanding, EcomVideo, EcomPlugin, EcomCatering, ScreenCap, LoginScreen, PMListing } from "../assets/media";
import { useParams, Navigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import LeftNav, { type Section } from "../components/LeftNav";
import { useActiveSection } from "../hooks/useActiveSection";

const SECTIONSBH: Section[] = [
  { id: "kuvausbh", label: "Kuvaus" },
  { id: "tavoitebh", label: "Tavoite" },
  { id: "toteutusbh", label: "Toteutus" },
  { id: "plugin", label: "Lisäosa" },
]

const SECTIONSPM: Section[] = [
  { id: "kuvauspm", label: "Kuvaus" },
  { id: "tavoitepm", label: "Tavoite" },
  { id: "toteutuspm", label: "Toteutus" },
  { id: "jatko", label: "Jatkokehitys" },
];





export function BolenHella() {

   const activeSection = useActiveSection(
     SECTIONSBH.map((section) => section.id)
   );

   const handleNavigate = (id: string) => {
     const el = document.getElementById(id);
     if (!el) return;

     el.scrollIntoView({ behavior: "smooth", block: "start" });
     window.history.replaceState(null, "", `#${id}`);
   };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <LeftNav
          sections={SECTIONSBH}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      </div>
      <div className={styles.header} id="kuvausbh">
        <button className={styles.back} onClick={() => window.history.back()}>
          <IoIosArrowRoundBack className={styles.icon} />
          <span className={text.textDark}> Projektit </span>
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={text.title}> Bölen Hella verkkokauppa </h1>
          <p className={text.body2}>
            {" "}
            Verkkokauppa K-Supermarket Triplan Catering-palvelulle{" "}
          </p>
          <div className={styles.row}>
            <div className={styles.column}>
              <p className={text.textDark}>Ajankohta</p>
              <p className={text.body}>2025-</p>
            </div>
            <div className={styles.column}>
              <p className={text.textDark}>Työkalut</p>
              <p className={text.body}>
                Wordpress, Woocommerce, Javascript, PHP, Adobe Illustrator
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata">
            <source src={EcomVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={styles.container} id="tavoitebh">
        <div className={styles.textContent}>
          <h1 className={text.title2}>Tarve &amp; Tavoite</h1>
          <p className={text.body2}>
            Bölen Hella eli K-Supermarket Triplan keittiö & palvelutiski, joka palvelee asiakkaitaan
            laadukkailla tuotteilla ja henkilökohtaisella asiakaspalvelulla. 
            Projektin lähtökohtana oli tarve tuoda Bölen Catering-palvelut selkeämmin
            saataville myös verkossa ja helpottaa tilaamista erityisesti
            ennakkotilausten osalta.
          </p>
          <p className={text.body2}>
            Tavoitteena oli toteuttaa käyttäjäystävällinen ja visuaalisesti
            houkutteleva verkkokauppa, joka heijastaa Bölen Hellan/Cateringin brändiä ja
            arvoja, mutta toimii samalla käytännöllisenä työkaluna sekä
            asiakkaille että henkilökunnalle. Verkkokaupan tuli olla helposti
            ylläpidettävä, skaalautuva ja yhteensopiva asiakkaan olemassa
            olevien järjestelmien kanssa.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={EcomLanding}
            alt="Bölen Hella verkkokauppa"
          />
        </div>
      </div>

      <div className={styles.container} id="toteutusbh">
        <div className={styles.textContent}>
          <h1 className={text.title2}>Toteutus</h1>
          <p className={text.body2}>
            Verkkokaupan toteutuksessa keskityin erityisesti selkeään
            käyttäjäkokemukseen ja sujuvaan ostopolkuun. Ratkaisun pohjaksi
            valittiin WordPress ja WooCommerce, jotka tarjoavat joustavan ja
            laajennettavan alustan verkkokaupan rakentamiseen sekä helpon
            hallintaliittymän asiakkaan päivittäiseen käyttöön.
          </p>
          <p className={text.body2}>
            Toteutuksessa huomioitiin sekä tekniset että visuaaliset
            vaatimukset. Käyttöliittymää räätälöitiin JavaScriptin ja PHP:n
            avulla, ja ulkoasu suunniteltiin tukemaan Bölen Hellan ilmettä.
            Jatkuva yhteistyö asiakkaan kanssa mahdollisti iteratiivisen
            kehitystyön, jossa toiminnallisuuksia voitiin tarkentaa ja parantaa
            projektin edetessä.
          </p>
        </div>
        {/* Roadmap toteutuksen pääkohdista*/}
        <div className={styles.imageWrapper}>
          <img
            src={EcomCatering}
            alt="Bölen Hella verkkokauppa"
            className={styles.image}
          />
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={EcomCatering}
            alt="Bölen Hella verkkokauppa"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={text.title2}>Räätälöity WordPress-lisäosa</h1>
          <p className={text.body2}>
            Osana projektia jatkokehitin avoimen lähdekoodin WordPress-lisäosaa
            <em>Weight-based product pricing</em>, joka mahdollistaa tuotteiden
            hinnoittelun painon perusteella. Tämä toiminnallisuus oli keskeinen
            catering-tuotteiden hinnoittelussa, mutta vaati merkittäviä
            mukautuksia vastatakseen Bölen Hellan erityistarpeita.
          </p>
          <p className={text.body2}>
            Kehitystyö sisälsi lisäosan rakenteen muokkaamista, paremman
            WooCommerce-yhteensopivuuden toteuttamista sekä hallintapaneelin
            käytettävyyden parantamista. Työ edellytti syvempää ymmärrystä
            WordPressin ja WooCommercen ydintoiminnallisuuksista,
            tapahtumamallista sekä tietorakenteista. Lopputuloksena syntyi
            ratkaisu, joka helpottaa tuotteiden hallintaa ja vähentää
            manuaalista työtä hinnoittelussa.
          </p>
        </div>
      </div>

      <div className={styles.imageWrapper} id="plugin">
        <img
          src={EcomPlugin}
          alt="Verkkokaupan lisäosa"
          className={styles.image}
        />
      </div>
    </div>
  );
}

export function Tuotehallinta() {

     const activeSection = useActiveSection(
       SECTIONSPM.map((section) => section.id)
     );

     const handleNavigate = (id: string) => {
       const el = document.getElementById(id);
       if (!el) return;

       el.scrollIntoView({ behavior: "smooth", block: "start" });
       window.history.replaceState(null, "", `#${id}`);
     };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <LeftNav
          sections={SECTIONSPM}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      </div>
      <div className={styles.header}>
        <button className={styles.back} onClick={() => window.history.back()}>
          <IoIosArrowRoundBack className={styles.icon} />
          <span className={text.textDark} id="kuvauspm">
            {" "}
            Projektit{" "}
          </span>
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={text.title}> Bölen Hella Tuotehallinta-sovellus </h1>
          <p className={text.body2}>
            <p className={text.body}>
              Tuotehallintasovellus on kevyt mutta toiminnallisesti kattava
              full-stack-verkkosovellus rakenteisen tuotetiedon hallintaan ja
              julkaisuun. Sovellus on suunniteltu tilanteisiin, joissa
              täysimittainen sisällönhallintajärjestelmä olisi ylimitoitettu,
              mutta tuotetiedon hallinnalta vaaditaan silti selkeyttä, nopeutta
              ja luotettavuutta. Ratkaisu soveltuu erityisesti pienille
              yrityksille ja sisäiseen käyttöön.
            </p>
          </p>
          <div className={styles.row}>
            <div className={styles.column}>
              <p className={text.textDark}>Ajankohta</p>
              <p className={text.body}>2025-</p>
            </div>
            <div className={styles.column}>
              <p className={text.textDark}>Työkalut</p>
              <p className={text.body}>
                React, Next.js, cPanel/Passanger, MySQL/Kysely
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <button
                className={styles.iconButton}
                onClick={() =>
                  window.open(
                    "https://github.com/Henri-Kulmala/ProductManager",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }>
                <FaGithub size={32} />
              </button>
            </div>
            <div className={styles.column}>
              <p className={text.textDark}>GitHub-repositorio</p>
              <p className={text.body}>
                Yksityiskohtaisempaa tietoa projektista löydät
                GitHub-repositoriosta
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.imageWrapper}>
          <img
            src={LoginScreen}
            alt="Hallintapaneelin kirjautuminen"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={text.title2} id="tavoitepm">
            Tarve &amp; Tavoite
          </h1>
          <p className={text.body2}>
            Asiakas tarvitsi ratkaisun tuotetietojen keskitettyyn hallintaan
            sekä tuotteiden esittelyä helpottavaan tuotekatalogiin. Aiemmin
            tuotetiedot olivat hajallaan, eikä niiden päivittäminen tai ylläpito
            ollut tehokasta tai skaalautuvaa.
          </p>
          <p className={text.body2}>
            Tavoitteena oli toteuttaa selkeä ja helposti käytettävä
            hallintapaneeli, jonka avulla tuotteiden lisäys, muokkaus ja
            massatuonti onnistuvat ilman teknistä osaamista. Samalla haluttiin
            erillinen, kevyt tuotelistaus-sivusto, joka hyödyntää samaa
            tietokantaa ja tarjoaa ajantasaisen näkymän tuotteisiin
            loppukäyttäjille.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata">
            <source src={ScreenCap} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={text.title2} id="toteutuspm">
            {" "}
            Toteutus
          </h1>
          <p className={text.body2}>
            Järjestelmä koostuu React + Vite -pohjaisesta
            admin-käyttöliittymästä ja tuotelistaus-sivusta sekä Next.js:llä
            toteutetusta API-backendistä. Backendin tietokantakerros on
            toteutettu <em>Kyselyllä (TypeScript SQL query builder)</em>, joka
            tarjoaa täysin tyypitetyt SQL-kyselyt ilman erillistä
            runtime-query-engineä. Tämä lähestymistapa parantaa järjestelmän
            ennustettavuutta, helpottaa virheenkorjausta ja varmistaa paremman
            yhteensopivuuden perinteisessä cPanel / Passenger
            -julkaisuympäristössä.
          </p>
        </div>
        <div className={styles.row}>
          <div className={styles.imageWrapper}>
            <img
              src={PMListing}
              alt="Bölen Hella verkkokauppa"
              className={styles.image}
            />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={text.title2} id="jatko">
            Jatkokehitys &amp; opit
          </h1>
          <p className={text.body2}>
            Projekti osoitti, että kevyt ja tarkoitukseen räätälöity ratkaisu
            voi vastata liiketoiminnan tarpeisiin tehokkaammin kuin
            yleiskäyttöinen sisällönhallintajärjestelmä. Selkeä arkkitehtuuri,
            rajattu toiminnallisuus ja hallittu tietomalli tekevät sovelluksesta
            helposti ylläpidettävän ja laajennettavan myös jatkokehitystä
            ajatellen.
          </p>
          <p className={text.body2}>
            Kehitystyön aikana painopiste oli erityisesti käytännön
            tuotantoympäristön vaatimuksissa: suorituskyvyssä, luotettavuudessa
            ja yhteensopivuudessa perinteisen hosting-ympäristön kanssa.
            Projekti vahvisti ymmärrystä full-stack-sovelluksen
            kokonaisvaltaisesta toteutuksesta aina tietokantakerroksesta
            käyttöliittymään ja julkaisuun saakka.
          </p>
        </div>
      </div>
    </div>
  );
}





const projectComponents: Record<string, React.ComponentType> = {
  "bolen-hella": BolenHella,
  tuotehallinta: Tuotehallinta,
};

export default function ProjectPreview() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/projects" replace />;

  const Selected = projectComponents[slug];

  if (!Selected) return <Navigate to="/projects" replace />;

  return <Selected />;
}


