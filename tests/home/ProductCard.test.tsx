import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import ProductCard from '../../src/components/main/ProductCard.tsx';
import type { ProductType } from '../../src/components/main/ProductApi.tsx';

describe('product card buttons', () => {
  const mockProduct: ProductType = {
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
  };

  it('decrement/increment button should be in document', () => {
    const { getByTestId } = render(<ProductCard product={mockProduct} />);

    expect(getByTestId('decrement-btn')).toBeInTheDocument();
    expect(getByTestId('increment-btn')).toBeInTheDocument();
  });

  it('decrement button should not decrement number of items if it is 0', () => {
    const { getByTestId } = render(<ProductCard product={mockProduct} />);

    const decrementBtn = getByTestId('decrement-btn');
    const input = getByTestId('item-count') as HTMLInputElement;

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    expect(input.value).toBe('');
  });

  it('decrement button should decrement value if it is larger than 0', () => {
    const { getByTestId } = render(<ProductCard product={mockProduct} />);

    const decrementBtn = getByTestId('decrement-btn');
    const incrementBtn = getByTestId('increment-btn');
    const input = getByTestId('item-count') as HTMLInputElement;

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    fireEvent.click(decrementBtn);
    expect(input.value).toBe('1');
  });

  it('increment button should increment input value', () => {
    const { getByTestId } = render(<ProductCard product={mockProduct} />);

    const incrementBtn = getByTestId('increment-btn');
    const input = getByTestId('item-count') as HTMLInputElement;

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    expect(input.value).toBe('2');
  });
});
