// TreeAppTest.js
import { render, screen } from '@testing-library/react';
import TreeApp from './TreeApp';

test('renders the main tree app', () => {
  render(<TreeApp />);
  const linkElement = screen.getByText(/tree app/i);
  expect(linkElement).toBeInTheDocument();
});
