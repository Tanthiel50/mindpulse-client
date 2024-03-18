import React from 'react';
import { Box, Typography, Grid, useTheme, Container } from '@mui/material';

const ServiceCard = ({ icon, title }) => {
  const theme = useTheme();

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
    backgroundColor: "#121212",
    color: theme.palette.common.white,
    height: '100%',
    border: `1px solid black`,
    // boxShadow: theme.shadows[4],
    marginBottom: theme.spacing(2),
  };

  const iconStyle = {
    width: 60, 
    height: 60,
    marginBottom: theme.spacing(2),
    '& img': {
      fill: "#8390C8",
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} sx={{}}>
      <Box sx={cardStyle}>
        <Box component="img" src={icon} alt={title} sx={iconStyle} />
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    </Grid>
  );
};

const ServicesGrid = ({ services, title }) => {
    return (
      <Box
        sx={{
        //   py: 4,
          px: 2,
          paddingBottom: 4,
          background: 'rgba(255, 255, 255, 0.16)',
        //   boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ color: 'white', textAlign: 'left', mb: 3 }}>
            {title}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} />
            ))}
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default ServicesGrid;
