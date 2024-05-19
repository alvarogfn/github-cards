import { render, screen } from "@testing-library/react";
import User from "./index";

const user = {
  login: "alvarogfn",
  html_url: "https://github.com/alvarogfn",
  avatar_url: "https://avatars.githubusercontent.com/u/62889807?v=4",
  name: "Alvaro Guimarães",
  company: "@Ilegra",
  blog: "https://alvarogfn.tech",
  location: "Brazil, MG",
  email: "alvaro.neto@ilegra.com",
  hireable: true,
  bio: "I like potatos",
  twitter_username: "kasokinho",
  created_at: "2020-03-30T13:26:04Z",
  public_repos: 13,
  followers: 20,
  following: 49,
};

it("should render the bio", () => {
  const { getByText } = render(<User {...user} />);
  expect(getByText(user.bio)).toBeInTheDocument();
});

it("should render the login", () => {
  const { getByText } = render(<User {...user} />);
  expect(getByText(`@${user.login}`)).toBeInTheDocument();
});

it("should render the login anchor", () => {
  const { getByRole } = render(<User {...user} />);
  expect(getByRole("link").getAttribute("href")).toEqual(user.html_url);
});

it("should render the name", () => {
  const { getByText } = render(<User {...user} />);
  expect(getByText(user.name)).toBeInTheDocument();
});

it("should render the pfp", () => {
  const { getByRole } = render(<User {...user} />);
  expect(getByRole("img", { name: "pfp" }).getAttribute("src")).toEqual(
    user.avatar_url
  );
});

it("should render 'no bio' when bio is null", () => {
  const { getByText } = render(<User {...user} bio={null} />);
  expect(getByText("No bio...")).toBeInTheDocument();
});

it("should render created at", () => {
  const { getByText } = render(<User {...user} />);

  const date = new Date(user.created_at).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  expect(getByText(`Joined at ${date}`)).toBeInTheDocument();
});
