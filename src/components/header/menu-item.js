import React, { useState } from 'react';
import { Container, Box, AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

const MenuPag = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [t]= useTranslation("app");

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POKEDEXxxxxxxxxxxxxxxxx
            </Typography>
            <Button color="inherit">{t('menuItemFeatures.Login')}</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClick}>
        <MenuItem onClick={() => console.log('Item 1 clicked')}>Item 1</MenuItem>
        <MenuItem onClick={() => console.log('Item 2 clicked')}>Item 2</MenuItem>
        <MenuItem onClick={() => console.log('Item 3 clicked')}>Item 3</MenuItem>
      </Menu>
    </Container>
  );
};

export default MenuPag;
