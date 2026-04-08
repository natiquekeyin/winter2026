import { test, expect, describe } from "vitest";
import AddPeriod from "./AddPeriod";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Add Period", () => {
  render(<AddPeriod />);
  test("Add Period renders correctly", () => {
    const txtElement = screen.getByText(/hello/i);
    expect(txtElement).toBeInTheDocument();
  });

  test("Add Period works with name and period", () => {
    render(<AddPeriod name="Alan" />);
    const txtElement = screen.getByText("Hello Alan.");
    expect(txtElement).toBeInTheDocument();
  });
});
