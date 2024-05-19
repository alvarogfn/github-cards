import Image from "next/image";
import React from "react";
import styles from "./NotFound.module.scss";

interface props {
  isError: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function NotFound({ isError, children, className }: props) {
  return (
    <>
      {isError ? (
        <section className={`${styles.container} ${className}`}>
          <p className={styles.phrase}>Sorry, I couldn't find anything.</p>
          <Image
            role="img"
            aria-label="not-found"
            src="/sad.svg"
            width={100}
            height={100}
          />
        </section>
      ) : (
        children
      )}
    </>
  );
}
