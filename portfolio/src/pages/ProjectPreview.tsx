import React from 'react'
import styles from './ProjectPreview.module.css'
import text from '../assets/styles/text.module.css'
import { IoIosArrowRoundBack } from "react-icons/io";
import { EcomLanding } from "../assets/media";

export function BolenHella() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
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
                Wordpress, Woocommerce, Javascript, PHP, HTML, Adobe Illustrator
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src={EcomLanding}
            alt="Bölen Hella verkkokauppa"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={text.title2}> Tarve & Tavoite</h1>
          <p className={text.body2}>
            Bölen Hella on paikallinen ruokakauppa, joka palvelee asiakkaitaan
            laadukkailla tuotteilla ja erinomaisella asiakaspalvelulla. Tämän
            projektin tavoitteena oli luoda käyttäjäystävällinen ja
            visuaalisesti houkutteleva verkkokauppa, joka heijastaa Bölen Hellan
            arvoja ja tarjoaa sujuvan ostokokemuksen asiakkaille.
          </p>
        </div>
      </div>

      <div className={styles.container}></div>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={text.title2}> Toteutus</h1>
          <p className={text.body2}>
            Verkkokaupan suunnittelussa keskityin käyttäjäkokemukseen ja
            helppokäyttöisyyteen. Käytin WordPressiä ja Woocommercea, jotka
            tarjoavat joustavan alustan verkkokaupan rakentamiseen. Jatkuva
            kommunikaatio asiakkaan kanssa varmisti , että verkkokauppa vastasi
            heidän tarpeitaan ja odotuksiaan.
          </p>
        </div>
        {/* Roadmap toteutuksen pääkohdista*/}
        <div className={styles.imageWrapper}>
          <img
            src={EcomLanding}
            alt="Bölen Hella verkkokauppa"
            className={styles.image}
          />
        </div>
      </div>

      {/* Gif-video scrolldown*/}

      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={text.title2}> Räätälöity Wordpress-lisäosa </h1>
          <p className={text.body2}>
            Jatkokehitin avoimen lähdekoodin Worpress-lisäosaa "Weight-based
            product pricing", joka mahdollistaa verkkokaupan tuotteiden
            hinnoittelun tuotteen painon mukaan. Lisäosa vaati useita
            mukautuksia ja parannuksia, jotta se vastaisi Bölen Hellan
            erityistarpeita. Nämä parannukset sisälsivät mm. paremman
            yhteensopivuuden Woocommerce-alustan kanssa, käyttäjäystävällisemmän
            hallintapaneelin ja lisäominaisuuksia, jotka helpottavat tuotteiden
            hallintaa ja hinnoittelua. Lisäosan kehittäminen vaati ymmärrystä
            teknisen toteutuksen lisäksi myös Wordpress arkkitehtuurin
            ydintoiminnallisuuksista.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BolenHella;