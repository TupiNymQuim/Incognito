import React, { useState } from "react";
import Head from "next/head";
import Link from 'next/link';
{/*import { useWindowSize } from "@uidotdev/usehooks";*/}
import styles from '../styles/navbar.module.css'

const Footer = () =>
{

  return (
    <nav className={styles.nav}>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
            </link>
        </Head>

    </nav>
  );
};

export default Footer;