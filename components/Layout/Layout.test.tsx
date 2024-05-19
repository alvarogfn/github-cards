import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("layout implementation", () => {
  it("should render children inside main tag", () => {
    const div = <div data-testid="test">Test</div>;
    const { getByTestId } = render(<Layout children={div} />);
    expect(getByTestId("test")).toBeInTheDocument();
  });
});
