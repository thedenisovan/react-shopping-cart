import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import App from '../src/components/App';

describe('tests for elements being in docs', () => {
  it('header component should be in document', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Check if header component is in the document
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
