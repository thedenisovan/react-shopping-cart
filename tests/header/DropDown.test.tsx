import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import DropDown from '../../src/components/header/DropDown';

describe('header dropdown menu', () => {
  it('nav element and dropdown button should be in document', () => {
    render(<DropDown />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-btn')).toBeInTheDocument();
  });

  it('drop down menu should not be in document initially', () => {
    render(<DropDown />);

    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
  });

  it('dropdown menu should be in document after click event', () => {
    render(<DropDown />);

    const dropdownButton = screen.getByTestId('dropdown-btn');

    fireEvent.click(dropdownButton);
    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();
  });
});
