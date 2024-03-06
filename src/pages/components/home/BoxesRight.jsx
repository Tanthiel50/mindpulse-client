// InfoBox.jsx
import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '50%',
  borderRadius: 0,
  color: "white",
  background: "rgb(131,144,200)",
  background: "linear-gradient(0deg, rgba(131,144,200,1) 0%, rgba(174,138,190,1) 100%)",
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // padding: theme.spacing(2),
  borderRadius: '50%',
  marginBottom: theme.spacing(3), 
}));



const BoxesRight = ({ icon: Icon, title, description }) => {
  return (
    <Grid item xs={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <StyledPaper>
        <IconBox>
          <Icon sx = {{
            padding: "1rem",
            borderRadius: "50%",
            fontSize: "5rem",
            // background: "#121212", 
          }} />
        </IconBox>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </StyledPaper>
    </Grid>
  );
};

export default BoxesRight;
