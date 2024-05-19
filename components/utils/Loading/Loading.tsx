import React from "react";
import styles from "../Loading/Loading.module.scss";

interface props {
  isLoading: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function Loading({ isLoading, children, className }: props) {
  return (
    <>
      {isLoading ? (
        <section className={`${styles.container} ${className}`}>
          <div className={styles.loading}></div>
          <p className={styles.phrase}>Loading</p>
        </section>
      ) : (
        children
      )}
    </>
  );
}
