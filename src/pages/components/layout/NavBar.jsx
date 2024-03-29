import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {ReactComponent as Logo} from '../../../../src/assets/logo/logo1.svg';
import { Link as RouterLink } from 'react-router-dom';


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const trigger = useScrollTrigger();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "TEAM", path: "/team" },
    { name: "ACCOMPAGNEMENT", path: "/accompagnement" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2 }}>
      <Logo style={{ height: "20%", width: "50%" }}/>
    </Typography>
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item.name} component={RouterLink} to={item.path}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  </Box>
);

  

  return (
    <>
      <AppBar position="fixed"         
      sx={{ 
          backgroundColor: trigger ? '#121212' : 'transparent', 
          transition: 'background-color 0.8s',
        }}
      >
        <Toolbar>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {menuItems.map((item) => (
                <RouterLink 
                  key={item.name}
                  to={item.path}
                  style={{ 
                    padding: "0 20px", 
                    color: "white", 
                    textDecoration: "none",
                    textTransform: "uppercase" ,
                    fontFamily: 'Archivo',
                  }}
                >
                  {item.name}
                </RouterLink>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
