import { describe } from "vitest";
import Counter from "./Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//import { onTestFailed } from "vitest";

describe("Counter tests", () => {
  it("should do something", () => {
    // const comp = Counter({ initial: 0 });
    render(<Counter initial={0} />);
    // const renderedCount = screen.getByTestId("renderedCount");
    // const renderedCountByText = screen.getByText(/Count is:/i);
    // console.log(renderedCountByText);

    // const buttons = screen.getAllByRole("button");
    // console.log(buttons.length);

    const countOutput = "0";
    const countHeader = screen.getByText(countOutput);
    expect(countHeader).toBeInTheDocument();
  });

  it("should increment the count", async () => {
    const user = userEvent.setup();
    render(<Counter initial={0} />);

    const countHeader = screen.getByTestId("renderedCount");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(incrementButton);
    expect(countHeader).toHaveTextContent("1");
  });

  it("should decrement the count", async () => {
    const user = userEvent.setup();
    render(<Counter initial={1} />);

    const countHeader = screen.getByTestId("renderedCount");
    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await user.click(decrementButton);
    expect(countHeader).toHaveTextContent("0");
  });

  it("should not decrement the count below 0", async () => {
    const user = userEvent.setup();
    render(<Counter initial={0} />);

    const countHeader = screen.getByTestId("renderedCount");
    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await user.click(decrementButton);
    expect(countHeader).toHaveTextContent("0");
  });

  it("should not increment above 16", async () => {
    const user = userEvent.setup();
    render(<Counter initial={0} />);

    const countHeader = screen.getByTestId("renderedCount");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    const clickPromises = new Array(100)
      .fill(null)
      .map((_) => user.click(incrementButton));

    await Promise.all(clickPromises);

    expect(countHeader).toHaveTextContent("16");
  });

  it("should not increment above 17 if max is 17", async () => {
    const user = userEvent.setup();
    render(<Counter initial={0} max={17} />);

    const countHeader = screen.getByTestId("renderedCount");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    const clickPromises = new Array(100)
      .fill(null)
      .map((_) => user.click(incrementButton));

    await Promise.all(clickPromises);

    expect(countHeader).toHaveTextContent("17");
  });

  it("should not decrement below 10 if 10 is min", async () => {
    const user = userEvent.setup();
    render(<Counter initial={11} min={10} />);

    const countHeader = screen.getByTestId("renderedCount");
    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    const clickPromises = new Array(100)
      .fill(null)
      .map((_) => user.click(decrementButton));

    await Promise.all(clickPromises);

    expect(countHeader).toHaveTextContent("10");
  });
});
