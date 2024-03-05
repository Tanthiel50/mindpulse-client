import React, { useState } from 'react';
import { Typography, Paper, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomPaper = styled(Paper)(({ theme }) => ({
  cursor: 'pointer',
  height: 200,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  transition: '0.3s ease-in-out', 

}));

const IconWrapper = styled(Box)(({ theme, hover }) => ({
  visibility: hover ? 'hidden' : 'visible',
  fontSize: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  transition: 'opacity 0.3s ease-in-out',
  opacity: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}));

export const DataBox = ({ background, title, description, color, IconComponent }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <CustomPaper
        sx={{ backgroundColor: background, color: color }}
        elevation={3}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IconWrapper hover={hover}>
          {React.createElement(IconComponent, { style: { fontSize: '80%', color: color } })}
        </IconWrapper>
        <ContentWrapper sx={{ opacity: hover ? 1 : 0 }}>
          <Typography variant="h6" component="h3" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {description}
          </Typography>
        </ContentWrapper>
      </CustomPaper>
    </Grid>
  );
};
