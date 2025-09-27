import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import Header from '../../src/components/header/Header';

describe('header button components should be in document', () => {
  it('basket button should be in document', () => {
    render(<Header />);

    expect(screen.getByTestId('basket-button')).toBeInTheDocument();
  });
});
