import styles from "./styles.module.css";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import searchImg from "../../assets/search.png";
import { ReadOutlined, GlobalOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Input } from "antd";

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
  const { Search } = Input;

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
        <Search
          className={styles.searchBar}
          placeholder="search the web untracked"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSearch={handleSearch}
          size="large"
        />
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
