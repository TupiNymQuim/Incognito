import React from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import { Card } from "../Card";
import { Header } from "../Header";
import { newsSearch, webSearch } from "../../services/brave";
import { useEffect } from "react";
import { WebResult, NewsResult } from "@/types/result-types";
import { useState } from "react";

export function Search() {
  const [loading, setLoading] = useState(false);
  const [webResults, setWebResults] = useState<WebResult[]>([]);
  const [newsResults, setNewsResults] = useState<NewsResult[]>([]);

  async function handleWebSearch() {
    try {
      setLoading(true);
      const data = await webSearch("Dog", 0);
      setWebResults(data);
      setLoading(false);
      console.log("Resultados web; ", data);
    } catch (err) {
      console.log("Error fetching web: ", err);
    }
  }

  async function handleNewsSearch() {
    try {
      setLoading(true);
      const data = await newsSearch("Dog", 0);
      setNewsResults(data);
      setLoading(false);
      console.log("Resultados news; ", data);
    } catch (err) {
      console.log("Error fetching news: ", err);
    }
  }

  useEffect(() => {
    handleNewsSearch();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <Header />
      {newsResults.map((item) => (
        <Card
          url={item.url}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
