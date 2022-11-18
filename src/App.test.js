import { render, screen } from '@testing-library/react';
import App from './App';

test('sucess', () => {
  render(<App />);
  const linkElement = screen.getByText("submit");
  expect(linkElement).toBeInTheDocument();
});
