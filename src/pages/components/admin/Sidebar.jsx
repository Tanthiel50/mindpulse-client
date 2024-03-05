import React from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard', path: '/admin' },
    { text: 'Mots', path: '/admin/words' },
    { text: 'Catégories', path: '/admin/categories' },
    { text: 'Users', path: '/admin/users' },
  ];

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <Drawer variant="permanent" sx={{ width: 240, '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' } }}>
      <Typography variant="h6" sx={{ padding: 2 }}>
        MindPulse
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} onClick={() => handleItemClick(item.path)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
