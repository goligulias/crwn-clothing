import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ShopPage from './pages/shop/shop.component';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
