import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SearchResult from "./SearchResult";
import API from "../../API";

const mockedData = {
  items: [
    {
      login: "alvarogfn",
      id: 62889807,
      avatar_url: "https://avatars.githubusercontent.com/u/62889807?v=4",
    },
  ],
  controls: {
    first: "",
    prev: "",
    next: "",
    last: "",
  },
  total: 1,
};

jest.mock("../../API.ts");

describe("search result implementation", () => {
  const mockedAPI = API as jest.Mocked<typeof API>;

  beforeEach(() => {
    mockedAPI.searchUsers.mockResolvedValue(mockedData);
  });

  afterEach(() => {
    mockedAPI.searchUsers.mockClear();
  });

  it("should test if button is clicked", async () => {
    const mockClose = jest.fn();
    jest.doMock("../../API.ts", () => {
      return {};
    });

    const { getByRole } = render(
      <SearchResult username="test" close={mockClose} />
    );

    fireEvent.click(getByRole("button", { name: /button-close/i }));

    await waitFor(() => expect(mockClose).toHaveBeenCalled());
  });

  it("should test if error appear when api throws an error", async () => {
    mockedAPI.searchUsers.mockRejectedValue(null);

    const { getByRole } = render(
      <SearchResult username="test" close={() => {}} />
    );

    await waitFor(() =>
      expect(getByRole("img", { name: /not-found/i })).toBeInTheDocument()
    );
  });

  it("should test if loading appear and disappear when component start", async () => {
    const { queryByText } = render(
      <SearchResult username="test" close={() => {}} />
    );

    await waitFor(() => queryByText("Loading"));
    await waitForElementToBeRemoved(() => queryByText("Loading"));
  });

  it("should test if a list appear after loading", async () => {
    const { getByRole, getAllByRole } = render(
      <SearchResult username="test" close={() => {}} />
    );

    await waitFor(() =>
      expect(getByRole("list", { name: /profiles-list/i })).toBeInTheDocument()
    );
  });

  it("should test if render returned data", async () => {
    const { getByText } = render(
      <SearchResult username="test" close={() => {}} />
    );

    await waitFor(() =>
      expect(getByText(mockedData.items[0].login)).toBeInTheDocument()
    );
  });
});
