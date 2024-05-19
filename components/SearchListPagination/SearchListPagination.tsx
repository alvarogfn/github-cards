import React from "react";
import styles from "./SearchListPagination.module.scss";

interface props {
  controls: {
    [key: string]: string | null;
  };

  handleClick: (href: string) => void;
}

export default function SearchListPagination({ controls, handleClick }: props) {
  return (
    <section className={styles.section}>
      {Object.keys(controls).map((label) => {
        return (
          <button
            role="button"
            aria-label={label}
            key={label}
            className={styles.button}
            disabled={typeof controls[label] !== "string" ? true : false}
            onClick={() => handleClick(controls[label]!)}
          >
            {label}
          </button>
        );
      })}
    </section>
  );
}
