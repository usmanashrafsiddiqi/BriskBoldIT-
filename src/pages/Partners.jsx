import React from 'react';
import { Button, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { KeyboardArrowDown as ArrowDownIcon } from '@mui/icons-material';

const Partners = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <h2>Our Partners</h2>
      <p>Explore our offerings for our partners below.</p>

      <Button
        variant="contained"
        onClick={handleMenuClick}
        endIcon={<ArrowDownIcon />}
        sx={{ marginBottom: '20px' }}
      >
        Explore Partners
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem component={Link} to="/customer" onClick={handleCloseMenu}>
          Customer
        </MenuItem>
        <MenuItem component={Link} to="/tools" onClick={handleCloseMenu}>
          Tools
        </MenuItem>
      </Menu>

      <p>Here, we showcase some of the key services and tools available for our partners.</p>
    </Box>
  );
};

export default Partners;
