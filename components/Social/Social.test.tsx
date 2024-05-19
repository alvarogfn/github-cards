import { render } from "@testing-library/react";
import Social from "./Social";

describe("Social implementation", () => {
  it("should render a list", () => {
    const { getByRole } = render(<Social />);
    expect(getByRole("list")).toBeInTheDocument();
  });

  it("should render a list with four items", () => {
    const { getAllByRole } = render(<Social />);
    expect(getAllByRole("listitem").length).toEqual(4);
  });

  it("should render a list with four not available items", () => {
    const { getAllByText } = render(<Social />);
    expect(getAllByText(/not available/i).length).toEqual(4);
  });

  it("should render a list with four items", () => {
    const social = {
      blog: "blog",
      company: "company",
      twitter: "twitter",
      location: "location",
    };

    const { getByText } = render(<Social {...social} />);

    expect(getByText(social.blog)).toBeInTheDocument();
    expect(getByText(social.company)).toBeInTheDocument();
    expect(getByText(social.twitter)).toBeInTheDocument();
    expect(getByText(social.location)).toBeInTheDocument();
  });
});
