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
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          className={styles.icon}
          width={30}
          height={30}
          alt="Icon"
          src={tupinymquim}
        ></Image>
        {title.length > 67 ? (
          <a target="_blank" href={url} className={styles.title}>
            {title.substring(0, 65) + "..."}
          </a>
        ) : (
          <a target="_blank" href={url} className={styles.title}>
            {title}
          </a>
        )}
      </div>
      <div className={styles.content}>
        <span className={styles.description}>
          {description.length > 252
            ? description.substring(0, 250) + "..."
            : description}
        </span>
      </div>
    </div>
  );
}
