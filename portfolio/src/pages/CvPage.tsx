import styles from "./CvPage.module.css";
import text from "../assets/styles/text.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CvRoadmap, CvRoadmapSm } from "../components/CvRoadmap";
import { useNavigate } from "react-router-dom";

export default function BolenHella() {

    const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <button className={styles.back} onClick={() => navigate("*")}>
          <IoIosArrowRoundBack className={styles.icon} />
          <span className={text.textDark}> Takaisin </span>
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={text.title2}>Ansioluettelo - Henri Kulmala</h1>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={text.titleLight}>Työkokemus</h1>
        </div>

        <div className={styles.content}>
          <CvRoadmap
            items={[
              {
                title: "Yrittäjä/Ohjelmistokehittäjä",
                org: "Tmi Henri Kulmala",
                period: "2025-",
                tags: [
                  "Ohjelmisto-ja web-kehitys",
                  "Asiakasprojektit",
                  "Tietotekninen tuki",
                ],
                description: (
                  <>
                    Toimin itsenäisenä ohjelmisto- ja web-kehittäjänä
                    asiakasprojekteissa. Vastaan koko toteutuksesta
                    suunnittelusta julkaisuun, mukaan lukien tekniset ratkaisut,
                    ylläpidon ja asiakastuen. Työ painottuu käytännönläheisiin
                    ratkaisuihin, selkeään dokumentaatioon ja asiakkaan arjen
                    helpottamiseen{" "}
                  </>
                ),
              },
            ]}
          />
        </div>
        <div className={styles.inner}>
          <div className={styles.textContent}>
            <h1 className={text.titleLight}>Asiakasprojektit</h1>
          </div>
          <div className={styles.innerContent}>
            <CvRoadmapSm
              items={[
                {
                  title: "Kirjahankkeen tekninen tuki ja konsultaatio",
                  org: "Tmi Henri Kulmala",
                  period: "8/2025-11/2025",
                  tags: [
                    "Mediakirjaston ylläpito",
                    "Kuvan-ja videon käsittely",
                    "Oikoluku",
                    "Tietotekninen tuki",
                    "Kuvitus",
                  ],
                  description: (
                    <>
                      Toimin teknisenä tukena kirjan{" "}
                      <em className={text.emphasis}>
                        {" "}
                        Alaraajat - Tutkiminen, hoito ja kuntoutus{" "}
                      </em>{" "}
                      kirjahankkeessa. Työnkuvaan kuului mm. laajan
                      mediakirjaston ylläpitäminen, kuvien ja videoiden
                      muokkaus, oikoluku, kuvitus sekä tietoteknisen tuki ja
                      ohjeistus. Työskentelin kirjalilijoiden, kustantajan sekä
                      kirjan taittajan kanssa projektin aikana.
                    </>
                  ),
                },
              ]}
            />
          </div>
          <div className={styles.innerContent}>
            <CvRoadmapSm
              items={[
                {
                  title: "Catering-palvelun verkkokauppa",
                  org: "Tmi Henri Kulmala",
                  period: "8/2025-",
                  tags: [
                    "Wordpress",
                    "React",
                    "Node.js",
                    "Graafinen suunnittelu",
                  ],
                  description: (
                    <>
                      Suunnittelin ja toteutin Wordpress-pohjaisen verkkokaupan
                      catering-palvelulle.  Toteutus sisältää verkkokauppasivujen
                      lisäksi räätälöidyn Wordpress-lisäosan sekä
                      React/Node.js-pohjaisen web-sovelluksen tuotteiden
                      esittelyä ja hallintaa varten.
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.content}>
          <CvRoadmap
            items={[
              {
                title: "K-Supermarket Nummela–Tripla",
                org: "Tmi PI Juhana Miettinen (2017-2019/2023-) & Tomi T.Mattila Oy (2019-2023) ",
                period: "2017–2026",
                tags: [
                  "Asiakaspalvelu",
                  "Perehdytystehtävät",
                  "Somen ylläpito",
                ],
                description: (
                  <>
                    Monipuoliset myymälän päivittäiset työtehtävät
                    asiakaspalvelussa, kassalla ja osastotyössä. Toimin
                    K-Supermarket Nummelassa kassa- ja postipäädyn
                    vastuuhenkilönä sekä uusien työntekijöiden perehdyttäjänä.
                    Lisäksi vastasin K-Supermarket Nummela-liikkeen sosiaalisen
                    median sisällöistä. Nykyisin työskentelen K-Supermarket
                    Triplassa asiakaspelvelussa postipisteellä, osastolla ja
                    kassalla.
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={text.titleLight}>Koulutus</h1>
        </div>
        <div className={styles.content}>
          <CvRoadmap
            items={[
              {
                title: "Tradenomi, Tietojenkäsittely - Ohjelmistokehitys",
                org: "Haaga-Helian Ammattikorkeakoulu, Helsinki",
                period: "8/2023-",

                description: (
                  <>
                    Suoritan parhaillaan tietojenkäsittelyn tradenomin
                    tutkintoa, ohjelmistokehitykseen erikoistuneena.
                    Suorittamiini kursseihin sisältyy mm.
                    Ohjelmistoprojekti-kursseja, eri koodikielten syventäviä
                    kursseja ja DevOps-aiheisia kursseja.
                    Ohjelmistoprojekti-kursseilla toiminut
                    ryhmän-/tiiminvetäjänä. Arvioitu valmistumisaika 12/2026.
                  </>
                ),
              },
            ]}
          />
        </div>
        <div className={styles.content}>
          <CvRoadmap
            items={[
              {
                title: "Reserviupseeritutkinto",
                org: "Reserviupseerikoulu, Hamina",
                period: "5/2021-8/2021",
                tags: ["K258"],
                description: (
                  <>
                    Suoritin reserviupseerikoulun kranaatinheitinlinjalla
                    kiitettävillä, keskiarvoa paremmalla arvosanalla. Ennen
                    reserviupseerikoulua suoritin aliupseerikoulun
                    Santahaminassa, Helsingissä, aliupseerioppilaiden
                    priimuksena.
                  </>
                ),
              },
            ]}
          />
        </div>
        <div className={styles.content}>
          <CvRoadmap
            items={[
              {
                title: "Ylioppilas",
                org: "Vihdin Lukio, Vihti",
                period: "2017-2020",
                description: (
                  <>
                    Toimin lukiovuosina opiskelijakunnan hallituksen jäsenenä,
                    ylläpidin Luurihuolto NY-yritystä ja ansaitsin arvosanan 10
                    lukiodiplomin kuvataiteesta.
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
