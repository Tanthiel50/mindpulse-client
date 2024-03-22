import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';


const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: "rgb(131,144,200)",
  background: "linear-gradient(0deg, rgba(131,144,200,1) 0%, rgba(174,138,190,1) 100%)", 
  padding: '16px', 
}));


const InfoBox = ({ Icon, title, description }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
    <Box sx={{ display: { xs: 'none', sm: 'flex', flexDirection: 'column', },  }}>
      <IconContainer sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        <Icon />
      </IconContainer>
      <Box
          sx={{
            padding: '16px',
            backgroundColor: 'transparent',
            color: 'white',
            textAlign: 'center',
          }}
        >
        <Typography variant="h5" component="h2">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default InfoBox;
