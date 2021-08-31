import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders a star wars character', async () => {
  render(<App />);
  let linkElement;
  await waitFor(() => {
    linkElement = screen.getByTestId('star-wars-character');
  }, {timeout: 1000});
  expect(linkElement).toBeInTheDocument();
});
