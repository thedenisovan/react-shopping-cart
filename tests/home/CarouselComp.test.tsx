import '@testing-library/jest-dom/vitest';
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CarouselComp from '../../src/components/main/home/CarouselComp';

describe('carousel component', () => {
  it('carousel container should be in the document', () => {
    render(<CarouselComp />);

    expect(screen.getByTestId('carousel-container')).toBeInTheDocument();
  });

  it('only first carousel slide should be active initially', () => {
    render(<CarouselComp />);

    expect(screen.getByTestId('first-slide')).toHaveClass('active');

    // second and third slide should not be active
    expect(screen.getByTestId('second-slide')).not.toHaveClass('active');
    expect(screen.getByTestId('third-slide')).not.toHaveClass('active');
  });

  it('slides should change after 5s', async () => {
    vi.useFakeTimers();
    render(<CarouselComp />);

    vi.advanceTimersByTime(5000);

    await vi.waitFor(() => {
      expect(screen.getByTestId('second-slide')).toHaveClass('active');
    });
  });
});
