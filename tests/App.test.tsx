import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../src/App';

describe('tests for elements being in docs', () => {
  it('h1 should be in document', () => {
    render(<App />);
    screen.debug();

    const heading = screen.getByRole('heading');

    // Check if element is in the document
    expect(heading).toBeInTheDocument();
  });
});
