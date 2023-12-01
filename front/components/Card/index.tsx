import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import tupinymquim from "../../assets/tupinymquim.png";

type Props = {
  url: string;
  title: string;
  description: string;
};

export function Card({ url, title, description }: Props) {
  return (
    <div className="h-36 mt-2 bg-cardBgColor p-2 rounded-md">
      <div className={styles.header}>
        <Image
          className={styles.icon}
          width={30}
          height={30}
          alt="Icon"
          src={tupinymquim}
        ></Image>
        <a target="_blank" href={url} className={styles.title}>
          {title}
        </a>
      </div>
      <div className={styles.content}>
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  );
}
