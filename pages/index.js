import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Home Page</a>
        </h1>
      </main>
    </div>
  );
}
