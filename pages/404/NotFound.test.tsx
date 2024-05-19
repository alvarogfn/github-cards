import { render } from "@testing-library/react";
import NotFound from "./index";

it("should render a redirect button to initial page", () => {
  const { getByRole } = render(<NotFound />);
  const a = getByRole("link");
  expect(a).toHaveTextContent(/go back$/i);
  expect(a).toHaveAttribute("href", "/alvarogfn");
});

it("should render a text when rendered", () => {
  const { getByText } = render(<NotFound />);
  expect(getByText("We couldn't find this profile.")).toBeDefined();
  expect(getByText("Is the username correct?")).toBeDefined();
});

it("should render a svg", () => {
  const { getByAltText } = render(<NotFound />);
  expect(getByAltText("Alert")).toBeDefined();
});
