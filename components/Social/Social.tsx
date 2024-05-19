import Image from "next/image";
import React from "react";
import styles from "./Social.module.scss";

interface props {
  location?: string | null;
  twitter?: string | null;
  blog?: string | null;
  company?: string | null;
}
export default function Social({ location, twitter, blog, company }: props) {
  const data = [
    {
      content: location,
      icon: "/location.svg",
    },
    {
      content: twitter,
      icon: "/twitter.svg",
    },
    {
      content: blog,
      icon: "/linking.svg",
    },
    {
      content: company,
      icon: "/building.svg",
    },
  ];
  return (
    <ul role="list" className={styles.list}>
      {data.map((item, index) => {
        return (
          <li
            role="listitem"
            className={`${styles.item} ${!item.content && styles.empty}`}
            key={index}
          >
            <Image role="img" src={item.icon} width={25} height={25} />
            <p role="paragraph">{item.content ?? "Not available"}</p>
          </li>
        );
      })}
    </ul>
  );
}
