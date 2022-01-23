import { render, screen } from '@testing-library/react';
import App from './containers/Core';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
