import { test, expect, describe } from "vitest";
import Application from "./Application";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Application", () => {
  test("Application renders correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Bio");
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByDisplayValue("Alan");
    expect(nameElement3).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const jobLocationElement2 = screen.getByTestId("options");
    expect(jobLocationElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const pageHeading2 = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageHeading2).toBeInTheDocument();
  });
});
