import styles from "./styles.module.css";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import searchImg from "../../assets/search.png";
import { useState } from "react";

export function Header() {
  const [selected, setSelected] = useState("");

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Image
          className={styles.headerLogo}
          alt="Logo"
          width={166}
          height={85}
          src={logoImg}
        ></Image>
        <div className={styles.inputDiv}>
          <Image
            alt="Magnifier"
            className={styles.inputIcon}
            src={searchImg}
          ></Image>
          <input></input>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => setSelected("Web")} className={styles.button}>
          Web
        </button>
        <button
          type="button"
          onClick={() => setSelected("Images")}
          className={styles.button}
        >
          Images
        </button>
        <button onClick={() => setSelected("News")} className={styles.button}>
          News
        </button>
      </div>
    </div>
  );
}
