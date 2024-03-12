import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import ImageIcon from '@mui/icons-material/Image';
import TocIcon from '@mui/icons-material/Toc';

const sidebarWidth = '10%';

const routes = [
  { path: '/admin/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
  { path: '/admin/users', label: 'Utilisateurs', icon: <PeopleIcon /> },
  { path: '/admin/posts', label: 'Posts', icon: <ArticleIcon /> },
  { path: '/admin/categories', label: 'Catégories', icon: <TocIcon /> },
  { path: '/admin/images', label: 'Images', icon: <ImageIcon /> },
  { path: '/admin/message', label: 'Messages', icon: <EmailIcon /> },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRouteChange = (path) => {
    navigate(path);
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: sidebarWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: sidebarWidth, boxSizing: 'border-box' },
        }}
      >
        <List sx={{
          marginTop: '5rem',
        }}>
          {routes.map((route) => (
            <ListItem key={route.path} disablePadding>
              <ListItemButton
                selected={location.pathname === route.path}
                onClick={() => handleRouteChange(route.path)}
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
