import { SearchUserResult } from "models/SearchUserResult";
import Link from "next/link";
import React from "react";
import styles from "./SearchListItem.module.scss";

interface props {
  user: SearchUserResult;
  index?: number;
}
export default function SearchListItem({ user, index = 0 }: props) {
  return (
    <Link
      className={styles.container}
      style={{ animationDelay: (index + 1) * 100 + "ms" }}
      href={{ pathname: "/[user]", query: { user: user.login } }}
    >
      <a className={styles.user} role="link">
        <img
          role="img"
          aria-label="pfp"
          className={styles.img}
          src={user.avatar_url}
          alt={`${user.login} profile picture.`}
        />
        <h1 className={styles.username}>{user.login}</h1>
      </a>
    </Link>
  );
}
