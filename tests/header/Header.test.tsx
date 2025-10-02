import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import type { ProductType } from '../../src/components/main/ProductApi';
import Header from '../../src/components/header/Header';

describe('header button components should be in document', () => {
  const mockProduct: ProductType[] = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
      rating: {
        rate: 3.9,
        count: 120,
      },
      quantity: 0,
    },
  ];

  it('basket button should be in document', () => {
    render(<Header products={mockProduct} />);

    expect(screen.getByTestId('basket-button')).toBeInTheDocument();
  });
});
