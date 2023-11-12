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
        <ul className={styles.list}>
            <li className={styles.navbar}>
                <i href="/">About</i>
                <i class="fa-regular fa-circle"></i>
                <i class="fa-regular fa-circle"></i>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;