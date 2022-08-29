import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  test("Renders without crashing", () => {
    render(<Header />);
  });

  test("Displays correct header text", () => {
    render(<Header />);
    expect(screen.queryByText("球球的前端奶茶屋")).toBeInTheDocument();
  });
});
