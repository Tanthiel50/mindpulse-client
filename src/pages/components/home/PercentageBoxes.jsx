// PercentageBox.jsx
import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  borderRadius: 0,
}));

const PercentageBoxes = ({ percentage, description, backgroundColor, color }) => {
  return (
    <Grid item xs={12} sm={4}>
      <StyledPaper sx={{ backgroundColor, color }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          {percentage}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </StyledPaper>
    </Grid>
  );
};

export default PercentageBoxes;
