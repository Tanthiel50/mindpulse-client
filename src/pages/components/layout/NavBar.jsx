import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {ReactComponent as Logo} from '../../../../src/assets/logo/logo1.svg';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const trigger = useScrollTrigger();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo style={{ height: "20%", width: "50%" }}/>
      </Typography>
      <List>
        {['Home', 'Mind Pulse', 'Notre Accompagnement', 'Contact', 'Blog'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
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
              <Typography 
              sx={{ 
                paddingX: 5 
                }}
                >
                  HOME
              </Typography>
              <Typography 
              sx={{ 
                paddingX: 5 
                }}
              >
                MIND PULSE
              </Typography>
              <Typography 
              sx={{ 
                paddingX: 5 
                }}
              >
                NOTRE ACCOMPAGNEMENT
              </Typography>
              <Typography 
              sx={{ 
                paddingX: 5 
              }}>
                CONTACT
              </Typography>
              <Typography 
              sx={{ 
                paddingX: 5 
                }}
              >
                BLOG
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
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
