import { render } from "@testing-library/react";
import Status from "./Status";

const data = { repos: 1, following: 2, followers: 3 };

describe("status implementation", () => {
  it("should render a table with six cells", () => {
    const { getByRole, getAllByRole } = render(<Status {...data} />);
    expect(getByRole("table")).toBeInTheDocument();
    expect(getAllByRole("cell").length).toEqual(6);
  });

  it("should render three specified table head cells", () => {
    const { getByText } = render(<Status {...data} />);
    expect(getByText(/repos/i)).toBeInTheDocument();
    expect(getByText(/following/i)).toBeInTheDocument();
    expect(getByText(/followers/i)).toBeInTheDocument();
  });

  it("should render three specified table body cells", () => {
    const { getByText } = render(<Status {...data} />);
    expect(getByText(data.repos)).toBeInTheDocument();
    expect(getByText(data.following)).toBeInTheDocument();
    expect(getByText(data.repos)).toBeInTheDocument();
  });
});
