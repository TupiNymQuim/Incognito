import React from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import { Card } from "../Card";
import { Header } from "../Header";
import { useState } from "react";
import { webSearch, newsSearch } from "@/services/brave";
import { Button } from "antd";
import { useEffect } from "react";
import { Skeleton } from "antd";
import { NewsResult, WebResult } from "@/types/result-types";

export function Search() {
  const [results, setResults] = useState<NewsResult[] | WebResult[]>([]);
  const [currentInput, setCurrentInput] = useState("Dog");
  const [resultType, setResultType] = useState("Web");
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  async function handleSearch(newInput: string) {
    if (newInput == "") {
      return;
    }
    try {
      setLoading(true);
      let data;
      if (resultType == "Web") {
        data = await webSearch(newInput, 0);
      } else {
        data = await newsSearch(newInput, 0);
      }
      setResults(data);
      setCurrentInput(newInput);
      setLoading(false);
      console.log("Results after search; ", data);
    } catch (err) {
      console.log("Error fetching news: ", err);
    }
  }

  async function handleChangeType(newType: string) {
    if (resultType == newType) {
      return;
    }
    try {
      let data;
      setLoading(true);
      if (newType == "Web") {
        data = await webSearch(currentInput, 0);
      } else {
        data = await newsSearch(currentInput, 0);
      }
      setResults(data);
      setResultType(newType);
      setLoading(false);
      console.log("Results after change type; ", data);
    } catch (err) {
      console.log("Error while changing type: ", err);
    }
  }

  async function handleChangePage(page: number) {
    if (page == currentPage) {
      return;
    }
    try {
      let data;
      setLoading(true);
      if (resultType == "Web") {
        data = await webSearch(currentInput, page);
      } else {
        data = await newsSearch(currentInput, page);
      }
      setResults(data);
      setCurrentPage(page);
      setLoading(false);
      console.log("Resultados change page; ", data);
    } catch (err) {
      console.log("Error while changing page: ", err);
    }
  }

  useEffect(() => {
    handleSearch(currentInput);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <Header
        currentInput={currentInput}
        resultType={resultType}
        handleSearch={handleSearch}
        handleChangeType={handleChangeType}
      />
      {loading ? (
        <>
          {[...Array(3)].map((_, index) => (
            <Skeleton.Input
              key={index}
              style={{
                width: 979,
                height: 152,
                marginLeft: 279,
                marginTop: 48,
                borderRadius: 38,
              }}
              active
            />
          ))}
        </>
      ) : (
        results.map((item) => (
          <Card
            // favicon={item.meta_url.favicon}
            url={item.url}
            title={item.title}
            description={item.description}
          />
        ))
      )}
      <div className={styles.pages}>
        {[...Array(6)].map((_, index) => (
          <Button
            className={styles.page}
            onClick={() => handleChangePage(index)}
          >
            {index}
          </Button>
        ))}
      </div>
    </div>
  );
}
