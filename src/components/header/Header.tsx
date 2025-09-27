import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { badgeClasses } from '@mui/material/Badge';

import DropDown from './DropDown';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function Header() {
  return (
    <header className='flex items-center justify-between h-[5vh]'>
      {/* Group for side bar dropdown menu button*/}
      <DropDown></DropDown>
      <h1 className='text-3xl font-bold tracking-widest text-gray-800'>
        BRAND
      </h1>
      {/* Group basket icon */}
      <IconButton aria-label='delete' className='mr-5!' data-testid='basketBtn'>
        <ShoppingCartIcon />
        <CartBadge badgeContent={0} color='primary' overlap='circular' />
      </IconButton>
    </header>
  );
}
