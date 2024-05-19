import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchResult from "../SearchResult/SearchResult";
import styles from "./Header.module.scss";

export default function Header() {
  const [search, setSearch] = React.useState<null | string>(null);

  function closeResults() {
    setSearch(null);
  }

  return (
    <header className={styles.container}>
      <SearchForm onSubmit={setSearch} />
      {search && <SearchResult username={search} close={closeResults} />}
    </header>
  );
}
