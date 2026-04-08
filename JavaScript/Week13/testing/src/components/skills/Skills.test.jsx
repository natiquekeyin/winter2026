import { test, expect, describe } from "vitest";
import Skills from "./Skills";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(3);
  });
});
