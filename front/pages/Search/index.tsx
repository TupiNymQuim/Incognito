import styles from "./styles.module.css";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { useState } from "react";
import { webSearch, newsSearch } from "@/services/search";
import { Button } from "antd";
import { useEffect } from "react";
import { NewsResult, WebResult } from "@/types/result-types";
import { useRouter } from "next/router";
import { Skeleton } from "@/components/ui/skeleton";

export default function Search() {
  const router = useRouter();
  const searchFromHome = router.query.searchFromHome as string;
  const [results, setResults] = useState<NewsResult[] | WebResult[]>([]);
  const [currentInput, setCurrentInput] = useState(searchFromHome);
  const [resultType, setResultType] = useState("Web");
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSearch(newInput: string) {
    if (newInput == "") {
      return;
    }
    try {
      setLoading(true);
      setErrorMsg("");
      let data;
      if (resultType == "Web") {
        data = await webSearch(newInput, 0);
      } else {
        data = await newsSearch(newInput, 0);
      }
      setResults(data);
      setCurrentInput(newInput);
      setLoading(false);
    } catch (err) {
      setErrorMsg("Error while fetching for results.");
      setLoading(false);
      console.log("Error fetching search: ", err);
    }
  }

  async function handleChangeType(newType: string) {
    if (resultType == newType) {
      return;
    }
    try {
      let data;
      setLoading(true);
      setErrorMsg("");
      if (newType == "Web") {
        data = await webSearch(currentInput, 0);
      } else {
        data = await newsSearch(currentInput, 0);
      }
      setResults(data);
      setResultType(newType);
      setCurrentPage(0);
      setLoading(false);
      console.log("Results after change type; ", data);
    } catch (err) {
      setErrorMsg("Error while changing type.");
      setLoading(false);
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
      setErrorMsg("");
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
      setErrorMsg("Error while changing page.");
      setLoading(false);
      console.log("Error while changing page: ", err);
    }
  }

  useEffect(() => {
    handleSearch(currentInput);
  }, []);

  return (
    <div className={styles.container}>
      <Header
        currentInput={currentInput}
        resultType={resultType}
        handleSearch={handleSearch}
        handleChangeType={handleChangeType}
      />
      {loading && (
        <div>
          {[...Array(4)].map((_, index) => (
            <Skeleton className="h-36 mt-2" />
          ))}
        </div>
      )}
      <div className={styles.content}>
        {errorMsg == "" && !loading ? (
          results.map((item, index) => (
            <Card
              key={index}
              url={item.url}
              title={item.title}
              description={item.description}
            />
          ))
        ) : (
          <span>{errorMsg}</span>
        )}
      </div>
      <div className={styles.pages}>
        {errorMsg == "" &&
          !loading &&
          [...Array(6)].map((_, index) => (
            <Button
              key={index}
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
