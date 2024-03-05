// InfoBox.jsx
import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  borderRadius: 0,
  color: "white",
  background: "#121212",
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderRadius: '50%',
  marginBottom: theme.spacing(2),
  fontSize: "15rem",
}));



const BoxesRight = ({ icon: Icon, title, description }) => {
  return (
    <Grid item xs={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <StyledPaper>
        <IconBox>
          <Icon sx = {{
            padding: "1rem",
            borderRadius: "50%",
            background: "rgb(131,144,200)",
            background: "linear-gradient(0deg, rgba(131,144,200,1) 0%, rgba(174,138,190,1) 100%)",
          }} />
        </IconBox>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </StyledPaper>
    </Grid>
  );
};

export default BoxesRight;
