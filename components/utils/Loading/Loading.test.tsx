import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("test loading implementation", () => {
  it("should render a loading component", () => {
    const isLoading = true;
    const { container } = render(<Loading isLoading={isLoading} />);
    expect(container).toHaveTextContent("Loading");
  });

  it("should not render a Loading and return the children", () => {
    const isLoading = false;
    const { container } = render(
      <Loading isLoading={isLoading}>Loaded</Loading>
    );
    expect(container).toHaveTextContent("Loaded");
  });

  it("should render with className passed by parameter", () => {
    const { container } = render(<Loading isLoading={true} className="test" />);
    expect(container.firstChild).toHaveClass("test");
  });
});
