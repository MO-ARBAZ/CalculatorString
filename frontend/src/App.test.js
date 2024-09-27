import { render, screen, fireEvent } from "@testing-library/react"; // Import necessary testing utilities from React Testing Library
import App from "./App"; // Import the App component to be tested

// Test suite for the App component
test("renders input and button", () => {
  // Render the App component within a virtual DOM for testing
  render(<App />);

  // Query the input element by its placeholder text
  const inputElement = screen.getByPlaceholderText(/enter numbers/i);

  // Query the button element by its text
  const buttonElement = screen.getByText(/calculate/i);

  // Assert that the input element is present in the document
  expect(inputElement).toBeInTheDocument();

  // Assert that the button element is present in the document
  expect(buttonElement).toBeInTheDocument();
});
