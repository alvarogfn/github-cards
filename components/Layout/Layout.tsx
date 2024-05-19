import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";

interface props {
  children: React.ReactNode;
}

export default function index({ children }: props) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>{children}</main>
    </div>
  );
}
