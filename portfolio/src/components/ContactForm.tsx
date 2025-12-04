import React, { useState } from "react";
import { FiUser, FiMail, FiPhone, FiMessageCircle } from "react-icons/fi";
import styles from "./ContactForm.module.css";
import text from "../assets/styles/text.module.css";



export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "f7d5d3d4-2027-4c5e-87db-8cf503d2a73f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(
      data.success
        ? "Kiitos viestistä! Vastaan sinulle pikimmiten!"
        : "Jokin meni pieleen. Yritä uudestaan."
    );
  };

  return (
    <form className={styles.contactForm} onSubmit={onSubmit}>
      <h1 className={text.title}>Ota yhteyttä</h1>

      <div className={styles.field}>
        <label htmlFor="first_name" className={styles.label}>
          Etunimi
        </label>
        <div className={styles.inputWrapper}>
          <FiUser className={styles.icon} aria-hidden="true" />
          <input
            id="first_name"
            type="text"
            name="first_name"
            className={styles.input}
            placeholder="Etunimi"
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="last_name" className={styles.label}>
          Sukunimi
        </label>
        <div className={styles.inputWrapper}>
          <FiUser className={styles.icon} aria-hidden="true" />
          <input
            id="last_name"
            type="text"
            name="last_name"
            className={styles.input}
            placeholder="Sukunimi"
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Sähköposti
        </label>
        <div className={styles.inputWrapper}>
          <FiMail className={styles.icon} aria-hidden="true" />
          <input
            id="email"
            type="email"
            name="email"
            className={styles.input}
            placeholder="nimi@esimerkki.fi"
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="phone" className={styles.label}>
          Puhelinnumero
        </label>
        <div className={styles.inputWrapper}>
          <FiPhone className={styles.icon} aria-hidden="true" />
          <input
            id="phone"
            type="tel"
            name="phone"
            className={styles.input}
            placeholder="+358 40 123 4567"
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Kerro lisää
        </label>
        <div className={styles.inputWrapper + " " + styles.textareaWrapper}>
          <FiMessageCircle className={styles.icon} aria-hidden="true" />
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            placeholder="Kuvaile lyhyesti, mistä on kyse."
            required
          />
        </div>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Lähetä viesti
      </button>

      <div className={styles.honeypot}>
        <label htmlFor="website">Do not fill this field</label>
        <input id="website" name="website" type="text" autoComplete="off" />
      </div>

      {result && <p className={styles.result}>{result}</p>}
    </form>
  );
}
