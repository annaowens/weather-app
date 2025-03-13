import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Weather App header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Weather App/i);
  expect(headerElement).toBeInTheDocument();
});
