import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import Image from "next/image";
import NavBar from "../components/navbar"
import { useRouter } from 'next/router';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter(); // Get the router object using the useRouter hook

  // const handleSearch = () => {
  //   console.log('Search value:', searchValue);


  //   // Use the router object to navigate to the "/about" page
  //   router.push('/about');
  //   return searchValue;
  // };

  async function handleSearch(newInput: string) {
    if (newInput == "") {
      return;
    }
    try {
      setLoading(true);
      const data = await webSearch(newInput, 0);
      setResults(data);
      setLoading(false);
      console.log("Results after search; ", data);
    } catch (err) {
      console.log("Error fetching news: ", err);
    }
  }

  return (
    <div>
      <div className={styles.header}>
        <Head>
          <title>Incognito</title>
          <NavBar></NavBar>
        </Head>
      </div>
      <div className={styles.container}>
        <main>
          <div className={styles.lg_bar}>
            <Image src="/logo.png" width={500} height={500}>
            </Image>
            <SearchBar
              className={styles.search_bar}
              placeholder="search the web untracked"
              value={searchValue}
              onChange={(newValue) => setSearchValue(newValue)}
              onRequestSearch={handleSearch}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
