import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { badgeClasses } from '@mui/material/Badge';
import DropDown from './DropDown';
import { Link } from 'react-router';
import type { ProductType } from '../main/ProductApi';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

interface HeaderProps {
  products: ProductType[];
}

export default function Header({ products }: HeaderProps) {
  const addedProducts = products.filter((prod) => prod.quantity > 0);
  const sum = addedProducts.reduce((acc, cur) => acc + cur.quantity, 0);
  console.log(sum);

  return (
    <header className='flex items-center justify-between h-[5vh] bg-gray-200'>
      {/* Group for side bar dropdown menu button*/}
      <DropDown></DropDown>
      <h1 className='text-3xl font-bold tracking-widest text-gray-800 mb-0 md:text-5xl!'>
        BRAND
      </h1>
      <Link to='basket'>
        {/* Group basket icon */}
        <IconButton
          aria-label='delete'
          className='mr-5!'
          data-testid='basket-button'
        >
          <ShoppingCartIcon />
          <CartBadge badgeContent={sum} color='primary' overlap='circular' />
        </IconButton>
      </Link>
    </header>
  );
}
