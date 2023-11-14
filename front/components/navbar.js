import React, { useState } from "react";
import Head from "next/head";
import Link from 'next/link';
{/*import { useWindowSize } from "@uidotdev/usehooks";*/}
import styles from '../styles/navbar.module.css'

const Navbar = () =>
{

  return (
    <nav>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
            </link>
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