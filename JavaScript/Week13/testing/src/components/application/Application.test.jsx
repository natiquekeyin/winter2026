import { test, expect, describe } from "vitest";
import Application from "./Application";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Application", () => {
  test("Application renders correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
