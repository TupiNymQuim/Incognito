import React from "react"
import styles from "./styles.module.css"
import Image from "next/image"
import logoImg from "../../assets/logo.png"
import searchImg from "../../assets/search.png"
import Head from "next/head"

export function Search() {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="stylesheet"
          			  href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
				</link>
			</Head>
			<div className={styles.header}>
				<div className={styles.headerContent}>
					<Image className={styles.headerLogo} alt="Logo" width={166} height={85} src={logoImg} ></Image>
					<div className={styles.inputDiv} >
						<Image className={styles.inputIcon} src={searchImg} ></Image>
						<input></input>
					</div>
				</div>
			</div>
		</div>
	)
}