import styles from "./styles.module.css";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import searchImg from "../../assets/search.png";
import { ReadOutlined, GlobalOutlined } from "@ant-design/icons";
import { useState } from "react";

type Props = {
  currentInput: string;
  resultType: string;
  handleSearch: (newInput: string) => void;
  handleChangeType: (newType: string) => void;
};

export function Header({
  currentInput,
  resultType,
  handleSearch,
  handleChangeType,
}: Props) {
  const [input, setInput] = useState(currentInput);

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
          <input
            onKeyDown={(e) => e.key === "Enter" && handleSearch(input)}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
      </div>
      <div className={styles.buttons}>
        <button
          className={resultType === "Web" ? styles.activeButton : styles.button}
          onClick={() => handleChangeType("Web")}
        >
          <GlobalOutlined /> Web
        </button>
        <button
          className={
            resultType === "News" ? styles.activeButton : styles.button
          }
          onClick={() => handleChangeType("News")}
        >
          <ReadOutlined /> News
        </button>
      </div>
    </div>
  );
}
