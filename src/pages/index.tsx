import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>CenCiviC Blog</title>
        <meta name="description" content="blog made by cencivic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="logo.ico" />
      </Head>
      <main className={styles.wrap}>
        <span>hello</span>
      </main>
    </>
  );
}
