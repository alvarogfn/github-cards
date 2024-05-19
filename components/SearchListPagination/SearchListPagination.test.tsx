import { fireEvent, render } from "@testing-library/react";
import SearchListPagination from "./SearchListPagination";

describe("SearchListPagination implementation", () => {
  it("should call handleClick for all buttons", () => {
    const controls = {
      first: "first",
      prev: "prev",
      next: "next",
      last: "last",
    };

    const mockClick = jest.fn();

    const { getByRole } = render(
      <SearchListPagination controls={controls} handleClick={mockClick} />
    );

    Object.keys(controls).forEach((key) => {
      fireEvent.click(getByRole("button", { name: key }));
    });

    Object.keys(controls).forEach((key) => {
      expect(mockClick).toHaveBeenCalledWith(key);
    });
  });

  it("should render all buttons disabled", () => {
    const controls = {
      first: null,
      prev: null,
      next: null,
      last: null,
    };

    const mockClick = jest.fn();

    const { getByRole } = render(
      <SearchListPagination controls={controls} handleClick={mockClick} />
    );

    Object.keys(controls).forEach((key) => {
      expect(
        getByRole("button", { name: key }).getAttribute("disabled")
      ).toBeFalsy();
    });
  });

  it("should render the buttons with correct labels", () => {
    const controls: { [key: string]: string } = {
      first: "first",
      prev: "prev",
      next: "next",
      last: "last",
    };

    const mockClick = jest.fn();

    const { getByRole } = render(
      <SearchListPagination controls={controls} handleClick={mockClick} />
    );

    Object.keys(controls).forEach((key) => {
      expect(getByRole("button", { name: key }).textContent).toContain(
        controls[key]
      );
    });
  });
});
