import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/mini commerce app/i);
  expect(linkElement).toBeInTheDocument();
});

test("next button", async () => {
  render(<App />);
  await waitForElementToBeRemoved(() =>
    screen.queryAllByTestId("skeleton-wrapper")
  );
});
