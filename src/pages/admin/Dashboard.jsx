import React from 'react';
import Sidebar from '../components/admin/Sidebar';
import TableView from '../components/admin/TableView';
import Box from '@mui/material/Box';

const Dashboard = () => {
  return (
    <Box 
    sx={{ 
      display: 'flex',
      height: '100vh' 
      }}
      >
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <TableView
        title="Utilisateurs"
        createPath="/admin/users/create"
        tableHeaders={['ID', 'Nom', 'Email', 'Rôle']}
        fetchUrl="/users"
      />
    </Box>
  </Box>
  );
};

export default Dashboard;
