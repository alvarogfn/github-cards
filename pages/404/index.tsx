import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>We couldn't find this profile.</h1>
      <h2 className={styles.subtitle}>Is the username correct?</h2>
      <Image src="/alert.svg" width={200} height={200} alt="Alert" />
      <Link href={{ pathname: "/alvarogfn" }}>
        <a className={styles.return}>Go Back</a>
      </Link>
    </div>
  );
}
