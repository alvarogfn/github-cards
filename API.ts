import { FullUser } from "models/Fulluser.model";
import { SearchUserResult } from "models/SearchUserResult";
import "dotenv/config";

export const END_POINT = "https://api.github.com";

const TOKEN = process.env.TOKEN; // change to your own

const HEADERS = new Headers(
  TOKEN
    ? {
        Authorization: `token ${TOKEN}`,
      }
    : {}
);

export function getHeaderLinks(link: string) {
  return link.split(",").reduce((acc: { [key: string]: string }, link) => {
    const [, url, rel] = link.match(/<(.*)>; rel="(\w*)"/) ?? [];
    acc[rel] = url;
    return acc;
  }, {});
}

export async function handleUserRequestByURL(url: URL) {
  const response = await fetch(url.href, { headers: HEADERS });

  const { status, headers } = response;
  const link = headers.get("link") ?? "";

  const { first, next, prev, last } = getHeaderLinks(link);

  const json = await response.json();

  if (status > 400) throw new Error(json);

  const {
    items,
    total_count,
  }: { items: SearchUserResult[]; total_count: number } = json;

  return { items, total: total_count, controls: { first, prev, next, last } };
}

export async function searchUsers(
  username: string,
  limit: number = 10,
  page: number = 1
) {
  const url = new URL("search/users", END_POINT);

  url.searchParams.append("q", username);
  url.searchParams.append("per_page", limit.toString());
  url.searchParams.append("page", page.toString());

  return handleUserRequestByURL(url);
}

export async function getUserByName(username: string) {
  const url = new URL(`users/${username}`, END_POINT);

  const response = await fetch(url.href, {
    headers: HEADERS,
  });

  const { status } = response;

  if (status > 400) throw new Error(response.statusText);

  const json: FullUser = await response.json();

  return json;
}

const functions = {
  END_POINT,
  getHeaderLinks,
  getUserByName,
  handleUserRequestByURL,
  searchUsers,
};

export default functions;
