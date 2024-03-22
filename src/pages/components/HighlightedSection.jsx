import React from 'react';
import { Box, Typography, Container, Button, useTheme } from '@mui/material';

const HighlightedSection = ({ title, text, highlightedText }) => {
  const theme = useTheme();

  const styles = {
    section: {
        // background: 'rgba(255, 255, 255, 0.16)',
        // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        // backdropFilter: 'blur(5px)',
        // webkitBackdropFilter: 'blur(5px)',
      color: theme.palette.common.white,
      
    },
    container: {
      maxWidth: 'lg', 
    //   background: '#121212',
      padding: theme.spacing(6, 0), 
      textAlign: 'center',
    },
    highlight: {
      display: 'inline-block', 
      fontFamily: 'Archivo, sans-serif',
      padding: theme.spacing(1, 2),
      margin: theme.spacing(2, 0),
      // border: `1px solid ${theme.palette.common.white}`, 
      textTransform: 'uppercase',
      cursor: 'default',
      // backgroundColor: '#8390C8',
    },
  };

  return (
    <Box sx={styles.section}>
      <Container sx={styles.container}>
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
        {/* <Box component="span" sx={styles.highlight}>
          {highlightedText}
        </Box> */}
      </Container>
    </Box>
  );
};

export default HighlightedSection;


