import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import React, { useState } from "react";




export default function Home()
{
  return (
    <div>
      <div className={styles.header}>
        <Head>
            <title>Incognito</title>
        </Head>

      </div>
      <div className={styles.container}>
        <main>
          <div className={styles.lg_bar}>
            <h1>Incognito</h1>
          </div>
        </main>
      </div>
    </div>
  );
}
