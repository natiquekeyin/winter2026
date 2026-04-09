import { test, expect, describe } from "vitest";
import Skills from "./Skills";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  test("renders correctly", async () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(3);

    const loginButton = screen.getByRole("button", { name: "Log In" });
    expect(loginButton).toBeInTheDocument();

    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();

    const startLearningButton1 = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      },
    );
    expect(startLearningButton1).toBeInTheDocument();
  });
});
