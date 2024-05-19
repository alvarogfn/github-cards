import Social from "@/components/Social/Social";
import Status from "@/components/Status/Status";
import { getUserByName } from "../../API";
import { FullUser } from "models/Fulluser.model";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import styles from "./styles.module.scss";

interface props extends FullUser {}

export default function User(data: props) {
  return (
    <>
      <Head>
        <title>{`@${data.login}`}</title>
        <meta
          property="og:title"
          content={`@${data.login}'s github profile.`}
        />
        <meta property="og:description" content={data.bio ?? ""} />
        <meta property="og:image" content={data.avatar_url} />
      </Head>
      <section className={styles.container}>
        <img
          role="img"
          aria-label="pfp"
          src={data.avatar_url}
          className={styles.pfp}
        />
        <h1 className={styles.name}>{data.name}</h1>
        <a
          role="link"
          className={styles.username}
          href={data.html_url}
          target="_blank"
        >
          @{data.login}
        </a>
        <p className={styles.bio}>{data.bio ?? "No bio..."}</p>

        <p className={styles.createdAt}>
          Joined at{" "}
          {new Date(data.created_at).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
        <section className={styles.status}>
          <Status
            repos={data.public_repos}
            followers={data.followers}
            following={data.following}
          />
        </section>
        <section className={styles.social}>
          <Social
            blog={data.blog}
            company={data.company}
            location={data.location}
            twitter={data.twitter_username}
          />
        </section>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params || !context.params["user"]) return { notFound: true };

  let { user } = context.params;

  if (typeof user !== "string") user = user.join("");

  try {
    const data = await getUserByName(user);
    return {
      props: data,
    };
  } catch (_) {
    return {
      notFound: true,
    };
  }
};
