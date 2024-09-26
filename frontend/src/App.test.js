import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders input and button', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/enter numbers/i);
  const buttonElement = screen.getByText(/calculate/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
