import '@testing-library/jest-dom/vitest';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import Header from '../../src/components/header/Header';

describe('header button components should be in document', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('hamburger button should be in document', () => {
    expect(screen.getByTestId('hamburgerBtn')).toBeInTheDocument();
  });
  it('basket button should be in document', () => {
    expect(screen.getByTestId('basketBtn')).toBeInTheDocument();
  });
});
