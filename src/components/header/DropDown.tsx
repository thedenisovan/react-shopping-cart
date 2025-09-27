import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import svg from '../../utils/svgRepo';

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
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={openDashboard}
        data-testid='hamburgerBtn'
      >
        <img src={svg.dashSvg} className='w-9' />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={closeDashboard}
        slotProps={{}}
      >
        <MenuItem
          onClick={() => {
            changeCurrentActivePage('home');
            closeDashboard();
          }}
          className={`w-[100px]! text-gray-800! font-medium! ${
            currentPage === 'home' && 'bg-gray-200!' // Sets curr active page style to home page
          }`}
        >
          <p className='text-l'>Home</p>
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeCurrentActivePage('shop');
            closeDashboard();
          }}
          className={`w-[100px]! text-gray-800! font-medium! ${
            currentPage === 'shop' && 'bg-gray-200!' // Sets curr active page style to home page
          }`}
        >
          <p className='text-l'>Shop</p>
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeCurrentActivePage('basket');
            closeDashboard();
          }}
          className={`w-[100px]! text-gray-800! font-medium! ${
            currentPage === 'basket' && 'bg-gray-200!' // Sets curr active page style to home page
          }`}
        >
          <p className='text-l'>Basket</p>
        </MenuItem>
      </Menu>
    </div>
  );
}
