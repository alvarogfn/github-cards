import Image from "next/image";
import React from "react";
import styles from "./Status.module.scss";

interface props {
  repos: number;
  following: number;
  followers: number;
}
export default function Status({ repos, following, followers }: props) {
  return (
    <table role="table" className={styles.table}>
      <thead>
        <tr>
          <td role="cell" aria-label="repos">
            Repos
          </td>
          <td role="cell" aria-label="followers">
            Followers
          </td>
          <td role="cell" aria-label="following">
            Following
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td role="cell">{repos}</td>
          <td role="cell">{followers}</td>
          <td role="cell">{following}</td>
        </tr>
      </tbody>
    </table>
  );
}
