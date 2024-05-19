import { getByRole, render } from "@testing-library/react";
import { SearchUserResult } from "models/SearchUserResult";
import SearchListItem from "./SearchListItem";

const mockUser: SearchUserResult = {
  login: "alvarogfn",
  id: 62889807,
  avatar_url: "https://avatars.githubusercontent.com/u/62889807?v=4",
};

describe("should test SearchListItem implementation", () => {
  it("should render the login name", () => {
    const { getByText } = render(<SearchListItem user={mockUser} />);
    expect(getByText(mockUser.login)).toBeInTheDocument();
  });

  it("should render the img pfp", () => {
    const { getByRole } = render(<SearchListItem user={mockUser} />);
    expect(getByRole("img")).toBeInTheDocument();
  });

  it("should render a link to nickname", () => {
    const { getByRole } = render(<SearchListItem user={mockUser} />);
    expect(getByRole("link").getAttribute("href")).toContain(
      `/${mockUser.login}`
    );
  });
});
