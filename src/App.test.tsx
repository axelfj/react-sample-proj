import { render, screen } from "@testing-library/react";

import App from "./App";
import React from "react";

test("renders the home page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the real reactivation/i);
  expect(linkElement).toBeInTheDocument();
});
