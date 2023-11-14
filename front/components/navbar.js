import React, { useState } from "react";
import Head from "next/head";
import Link from 'next/link';
import styles from '../styles/navbar.module.css'

const Navbar = () =>
{

  return (
    <nav>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"/>
        </Head>
        <div className={styles.list}>
          <Link href="/about">
            <li className={styles.navbar}>
                <i>
                  <h4>About</h4>
                </i>
                <i className="fa-solid fa-circle" style={{ color: "#ffffff" }}></i>
                <i className="fa-solid fa-circle" style={{ color: "#ffffff" }}></i>
            </li>
          </Link>
        </div>
    </nav>
  );
};

export default Navbar;