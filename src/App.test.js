import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

it("Testing select component", async () => {
  const userAction = userEvent.setup();
  const { container } = render(<App />);
  const dropDown = screen.getByText(/Select/i);
  await userAction.click(dropDown);
  const menu = container.getElementsByClassName("Select__menu");
  expect(menu[0]).toBeInTheDocument();
  const option2 = screen.getByText(/option 2/i).textContent;
  console.log(option2);
});
