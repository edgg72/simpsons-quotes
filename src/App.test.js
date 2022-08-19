import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test("Placeholder text on search input", () => {
  render(<App />);
  const searchInput = screen.getByRole("searchInput");

  expect(searchInput.placeholder).toBe("Type a character, then press Enter or click Search")
});

test("User should be able to type inside the input", () => {
  render(<App />);
  const searchInput = screen.getByRole("searchInput");
  userEvent.type(searchInput, "homer");
  expect(searchInput.value).toBe("homer")
})

test("Search button text content", () => {
  render(<App />);
  const searchButton = screen.getByRole("searchButton");
  expect(searchButton.textContent).toBe("Search");
});



