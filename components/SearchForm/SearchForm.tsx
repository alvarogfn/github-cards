import Image from "next/image";
import React from "react";
import styles from "./SearchForm.module.scss";

interface props {
  onSubmit: (value: string) => void;
}

export default function SearchForm({ onSubmit }: props) {
  const [value, setValue] = React.useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onSubmit(value);
  }

  return (
    <form
      role="form"
      aria-label="search"
      className={styles.form}
      onSubmit={(event) => handleSubmit(event)}
    >
      <label className={styles.label} title="Search a github user by username">
        <Image
          className={styles.icon}
          src="/search.svg"
          width={25}
          height={25}
        />
        <input
          role="textbox"
          className={styles.input}
          onChange={({ target: { value } }) => setValue(value)}
          value={value}
          name="search"
          placeholder="Search a github username..."
        />
      </label>
      <button
        role="button"
        aria-label="submit"
        className={styles.search}
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
