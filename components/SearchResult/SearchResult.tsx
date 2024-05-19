import { handleUserRequestByURL, searchUsers } from "../../API";
import { SearchUserResult } from "models/SearchUserResult";
import React from "react";
import SearchListItem from "../SearchListItem/SearchListItem";
import Loading from "../utils/Loading/Loading";
import styles from "./SearchResult.module.scss";
import NotFound from "../utils/NotFound/NotFound";
import SearchListPagination from "../SearchListPagination/SearchListPagination";
import { useRouter } from "next/router";

interface props {
  username: string;
  close: Function;
}

export default function SearchResult({ username, close }: props) {
  const router = useRouter();
  const [users, setUsers] = React.useState<SearchUserResult[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);

  const [pageControls, setPageControls] = React.useState<{
    [key: string]: string | null;
  }>({});

  React.useEffect(() => {
    setLoading(true);
    searchUsers(username, 5)
      .then((r) => {
        setUsers(r.items);
        setPageControls(r.controls);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [username, setLoading, setUsers, setPageControls, setError]);

  function handleRequest(url: string) {
    setLoading(true);
    handleUserRequestByURL(new URL(url))
      .then((r) => {
        setUsers(r.items);
        setPageControls(r.controls);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }

  React.useEffect(() => {
    return () => close();
  }, [router.asPath]);

  return (
    <section role="listbox" aria-label="profiles" className={styles.container}>
      <button
        role="button"
        aria-label="button-close"
        className={styles.close}
        onClick={() => close()}
      >
        close
      </button>
      <Loading className={styles.loading} isLoading={loading}>
        <NotFound isError={error}>
          <div>
            <ul role="list" aria-label="profiles-list" className={styles.list}>
              {users.map((item, index) => {
                return (
                  <li key={item.id}>
                    <SearchListItem user={item} index={index} />
                  </li>
                );
              })}
            </ul>
            <SearchListPagination
              controls={pageControls}
              handleClick={handleRequest}
            />
          </div>
        </NotFound>
      </Loading>
    </section>
  );
}
