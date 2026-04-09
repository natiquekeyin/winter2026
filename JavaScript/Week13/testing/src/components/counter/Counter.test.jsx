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
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after user enters 10 and clicks set button", async () => {
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "200");
    expect(amountInput).toHaveValue(200);
    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("20");
  });

  test("elements are focused in the right order", async () => {
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.tab();
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});

// Coercion???  10 == "10" TRUE | 10 === "10" FALSE
