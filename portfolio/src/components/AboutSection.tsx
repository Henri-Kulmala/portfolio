
import styles from "./AboutSection.module.css";
import text from "../assets/styles/text.module.css";
import { KKHenkka, HettaPallas, Saaris } from "../assets/media";


export default function AboutSection() {



  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.content}>
        <div className={styles.containerCol}>
          <div className={styles.textContent} id="hieman-minusta">
            <h1 className={text.title}>Hieman minusta</h1>
            <p className={text.body2}>
              Hei! Olen Henri, 25-vuotias ohjelmistokehittäjä ja yrittäjä
              Helsingistä. Opiskelen parhaillaan tietojenkäsittelyn Tradenomiksi
              Haaga-Helian ammattikorkeakoulussa, ja yhdistän opintojen ohella
              käytännön kehitystyötä asiakasprojekteihin ja omiin sovelluksiin.
            </p>
            <p className={text.body2}>
              Minua kiinnostaa erityisesti ohjelmistojen suunnittelu
              kokonaisuuksina: miten tekniset ratkaisut tukevat todellisia
              käyttötarpeita ja miten järjestelmästä saadaan samalla selkeä,
              kestävä ja helposti ylläpidettävä. Työskentelen sujuvasti sekä
              frontend- että backend-kehityksen parissa, ja minulla on kokemusta
              mm. React-, React Native-, Node.js- ja Java-pohjaisista ratkaisuista.
            </p>
            <p className={text.body2}>
              Kun olen <em>offline</em>, minut löytää liikkumasta ja läheisten
              seurasta. Olen insinöörimielinen tekijä, ja minut tunnetaan
              parhaiten siitä, että työstän lähes aina jotakin projektia – usein
              sellaista, joka syntyy konkreettisesta ongelmasta tai
              kehitystarpeesta. Uskon vahvasti siihen, että jokainen ongelma on
              ratkaistavissa, kunhan se pilkotaan tarpeeksi pieniin ja
              ymmärrettäviin osiin.
            </p>
            <p className={text.body2}>
              Etsin jatkuvasti tapoja kehittyä ohjelmistokehittäjänä ja
              laajentaa osaamistani erityisesti tuotantokelpoisten sovellusten,
              arkkitehtuurin ja DevOps-käytäntöjen parissa. Minulle tärkeää on
              myös ymmärtää liiketoiminnan näkökulma teknisten ratkaisujen
              taustalla.
            </p>
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
