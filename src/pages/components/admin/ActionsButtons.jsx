import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const ActionButtons = ({ row }) => {
    const navigate = useNavigate();
  
    const handleEdit = () => {
      navigate(`/admin/users/edit/${row.id}`);
    };
  
    const handleDelete = () => {
      navigate(`/admin/users/delete/${row.id}`);
    };
  
    return (
      <>
        <Button onClick={handleEdit}>
          <EditIcon />
        </Button>
        <Button onClick={handleDelete}>
          <DeleteIcon />
        </Button>
      </>
    );
  };

export default ActionButtons