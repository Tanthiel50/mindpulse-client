// DataBox.jsx
import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomPaper = styled(Paper)({
  cursor: 'pointer',
  height: 200,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

export const DataBox = ({ background, title, description, color }) => (
  <Grid item xs={12} sm={6} md={4}>
    <CustomPaper sx={{ 
        backgroundColor: background, 
        color: color 
        }} 
    elevation={3}
    >
      <Typography 
      variant="h5" 
      component="h3"
      >
        {title}
      </Typography>
      <Typography 
      variant="body2" 
      sx={{ 
        mt: 1 
        }}
    >
        {description}
      </Typography>
    </CustomPaper>
  </Grid>
);
