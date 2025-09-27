import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import svg from '../../utils/svgRepo';

export default function DropDown() {
  // State to close/open dashboard
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openDashboard = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeDashboard = () => {
    setAnchorEl(null);
  };

  //   const underlineCurrPage = () = {

  //   }

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
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem
          onClick={closeDashboard}
          className='w-[100px]! text-gray-800! font-medium!'
        >
          <p className='text-l'>Home</p>
        </MenuItem>
        <MenuItem
          onClick={closeDashboard}
          className='w-[100px]! text-gray-800! font-medium!'
        >
          <p className='text-l'>Shop</p>
        </MenuItem>
        <MenuItem
          onClick={closeDashboard}
          className='w-[100px]! text-gray-800! font-medium!'
        >
          <p className='text-l'>Basket</p>
        </MenuItem>
      </Menu>
    </div>
  );
}
