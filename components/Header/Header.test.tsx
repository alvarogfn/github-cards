import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Header from "./Header";

describe("header implementation", () => {
  it("should render a form", async () => {
    const { getByRole } = render(<Header />);
    await waitFor(() => {
      expect(getByRole("form")).toBeInTheDocument();
    });
  });

  it("should render results if form is submitted", async () => {
    const { findByPlaceholderText, findByRole } = render(<Header />);

    fireEvent.change(
      await findByPlaceholderText("Search a github username..."),
      {
        target: { value: "alvarogfn" },
      }
    );

    fireEvent.submit(await findByRole("button", { name: "submit" }));

    await act(async () => {});

    expect(
      await findByRole("listbox", { name: /profiles/i })
    ).toBeInTheDocument();
  });
});
