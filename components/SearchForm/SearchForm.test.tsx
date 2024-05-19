import { fireEvent, render } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("SearchForm implementation", () => {
  it("should render a form", () => {
    const { getByRole } = render(<SearchForm onSubmit={() => {}} />);
    expect(getByRole("form")).toBeInTheDocument();
  });

  it("should a input with placeholder", () => {
    const { getByPlaceholderText } = render(<SearchForm onSubmit={() => {}} />);
    expect(
      getByPlaceholderText("Search a github username...")
    ).toBeInTheDocument();
  });

  it("should call onsubmit when its submited", () => {
    const onSubmit = jest.fn();

    const { getByRole } = render(<SearchForm onSubmit={onSubmit} />);

    getByRole("button").click();
    getByRole("textbox", { name: /name/i });
    expect(onSubmit).toHaveBeenCalled();
  });

  it("should call onsubmit with correct parameter", () => {
    const onSubmit = jest.fn();

    const { getByRole, getByPlaceholderText } = render(
      <SearchForm onSubmit={onSubmit} />
    );

    fireEvent.change(getByPlaceholderText("Search a github username..."), {
      target: { value: "test" },
    });

    getByRole("button").click();

    expect(onSubmit).toHaveBeenCalledWith("test");
  });
});
