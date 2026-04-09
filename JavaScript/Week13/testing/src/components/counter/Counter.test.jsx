import { test, expect, describe } from "vitest";
import Counter from "./Counter";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import user from "@testing-library/user-event";

describe("Counter", () => {
  render(<Counter />);
  test("renders correctly", () => {
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();

    const countElement2 = screen.getByRole("heading");
    expect(countElement2).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });
});
