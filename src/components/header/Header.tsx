import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { badgeClasses } from '@mui/material/Badge';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function Header() {
  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <header className='flex items-center justify-between'>
      {/* Group for side bar dropdown menu */}
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label='text alignment'
      >
        <ToggleButton
          value='left'
          aria-label='left aligned'
          color='primary'
          className='bg-white! border-0!'
        >
          <FormatAlignLeftIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <h1 className='text-3xl font-medium tracking-widest text-blue-500'>
        BRAND
      </h1>
      {/* Group basket icon */}
      <IconButton aria-label='delete' className='mr-5!'>
        <ShoppingCartIcon color='primary' />
        <CartBadge badgeContent={1} color='primary' overlap='circular' />
      </IconButton>
    </header>
  );
}
