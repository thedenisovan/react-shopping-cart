import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import svg from '../../utils/svgRepo';
import { Link } from 'react-router';

export default function DropDown() {
  // State to close/open dashboard
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // State to indicate current active page in dropdown component
  const [currentPage, setCurrentPage] = React.useState<string>('home');
  const open = Boolean(anchorEl);

  const openDashboard = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeDashboard = () => {
    setAnchorEl(null);
  };

  const changeCurrentActivePage = (activePage: string) => {
    setCurrentPage(activePage);
  };

  return (
    <nav>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={openDashboard}
        data-testid='dropdown-btn'
      >
        <img src={svg.dashSvg} className='w-9' />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={closeDashboard}
        slotProps={{}}
        data-testid='dropdown-menu'
      >
        <Link to='/' className='!no-underline'>
          <MenuItem
            onClick={() => {
              changeCurrentActivePage('home');
              closeDashboard();
            }}
            className={`w-[100px]! text-gray-800! font-medium! ${
              currentPage === 'home' && 'bg-gray-200!' // Sets curr active page style to home page
            }`}
          >
            <p className='text-black'>Home</p>
          </MenuItem>
        </Link>
        <Link to='shop' className='!no-underline'>
          <MenuItem
            onClick={() => {
              changeCurrentActivePage('/shop');
              closeDashboard();
            }}
            className={`w-[100px]! text-gray-800! font-medium! ${
              currentPage === '/shop' && 'bg-gray-200!' // Sets curr active page style to home page
            }`}
          >
            <p className='text-black'>Shop</p>
          </MenuItem>
        </Link>
        <Link to='basket' className='!no-underline'>
          <MenuItem
            onClick={() => {
              changeCurrentActivePage('/basket');
              closeDashboard();
            }}
            className={`w-[100px]! text-gray-800! font-medium! ${
              currentPage === '/basket' && 'bg-gray-200!' // Sets curr active page style to home page
            }`}
          >
            <p className='text-black'>Basket</p>
          </MenuItem>
        </Link>
      </Menu>
    </nav>
  );
}
