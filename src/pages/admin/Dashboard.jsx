import React from 'react';
import { Button, TableCell, TableRow } from '@mui/material';
import Navbar from '../components/layout/NavBar';
import Sidebar from '../components/admin/Sidebar';
import GenericTablePage from '../components/admin/GenericTablePage';

const Dashboard = () => {
  return (
    <>
      <div 
      style={{ 
        display: 'flex', 
        }}
        >
        <Sidebar />
        <div style={{ marginLeft: '240px', padding: '1rem' }}>
          <GenericTablePage
            title="Exemple de tableau"
            createPath="/admin/exemple/create"
            fetchDataUrl="http://127.0.0.1:8000/api/users"
            deleteDataUrl="http://127.0.0.1:8000/api/users"
            editPathPrefix="/admin/users"
            columns={['ID', 'Nom', 'Description']}
            mapDataToRow={(handleEditClick, handleDelete) => (item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEditClick(item.id)}>Modifier</Button>
                  <Button onClick={() => handleDelete(item.id)}>Supprimer</Button>
                </TableCell>
              </TableRow>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
