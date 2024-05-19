import { render } from "@testing-library/react";
import NotFound from "./NotFound";

describe("not found implementation", () => {
  it("should render a NotFound component", () => {
    const { container } = render(<NotFound isError={true} />);
    expect(container).toHaveTextContent(/Sorry, I couldn't find anything./i);
  });

  it("should not render a NotFound and return the children", () => {
    const { container } = render(<NotFound isError={false}>found</NotFound>);
    expect(container).toHaveTextContent("found");
  });

  it("should render with className passed by parameter", () => {
    const { container } = render(<NotFound isError={true} className="test" />);
    expect(container.firstChild).toHaveClass("test");
  });
});
