import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const ActionButtons = ({ row, onEdit, onDelete }) => {
    const navigate = useNavigate();
  
    const handleEdit = () => {
      if (onEdit) onEdit(row.id);
    };
  
    const handleDelete = () => {
      if (onDelete) onDelete(row.id);
    };
  
    return (
      <>
        <Button onClick={handleEdit}>
          <EditIcon sx={{
            color: "black"
          }} 
          />
        </Button>
        <Button onClick={handleDelete}>
          <DeleteIcon sx={{
            color: "red"
          }}  
          />
        </Button>
      </>
    );
  };

export default ActionButtons