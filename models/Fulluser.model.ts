export interface FullUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}
