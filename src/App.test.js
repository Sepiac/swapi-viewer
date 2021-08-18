import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a star wars character', () => {
  render(<App />);
  const linkElement = screen.getByTestId('star-wars-character');
  expect(linkElement).toBeInTheDocument();
});
