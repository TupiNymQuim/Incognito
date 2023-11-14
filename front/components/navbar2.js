import React, { useState } from "react";
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';
{/*import { useWindowSize } from "@uidotdev/usehooks";*/}
import styles from '../styles/navbar.module.css'

const Navbar2 = () =>
{

  return (
    <nav className={styles.nav}>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
            </link>
        </Head>

                <Link href="/">
                    <Image src="/logo.png" width={100} height={100} className={styles.image}></Image>
                </Link>
                <div className={styles.to_flex_end}>
                    <Link href="/about">
                        <div className={styles.navbar}>
                            <i>
                                <h4>About</h4>
                            </i>
                            <i className="fa-solid fa-circle" style={{ color: "#ffffff" }}></i>
                            <i className="fa-solid fa-circle" style={{ color: "#ffffff" }}></i>
                        </div>
                    </Link>
                </div>
            
        
    </nav>
  );
};

export default Navbar2;