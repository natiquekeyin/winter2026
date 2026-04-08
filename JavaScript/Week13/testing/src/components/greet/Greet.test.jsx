import { test, expect, describe } from "vitest";
import Greet from "./Greet";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

test("Greet component has hello or world text", () => {
  render(<Greet />);
  const heading = screen.getByText("hello world", { exact: false });
  expect(heading).toBeInTheDocument();
});
