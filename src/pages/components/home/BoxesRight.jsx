import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Typography, Paper } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CachedIcon from '@mui/icons-material/Cached';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import {theme} from '../../../styles/theme';

const StyledPaper = ({ children }) => (
  <Paper style={{ padding: 16, textAlign: 'center', color: 'white', backgroundClip: theme.palette.bluish }}>
    {children}
  </Paper>
);

const IconBox = ({ children }) => (
  <Box style={{ padding: 16 }}>{children}</Box>
);

const BoxesRight = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {!isMobile && (
        <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background, paddingBottom: 15 }}>
          <Grid container spacing={0} alignItems="stretch">
            <Grid item xs={2}>
              <StyledPaper>
                <IconBox>
                  <AcUnitIcon style={{ fontSize: 50 }} />
                </IconBox>
                <Typography variant="subtitle1">ACQUISITION</Typography>
                <Typography variant="body2">Explication de l'acquisition.</Typography>
              </StyledPaper>
            </Grid>
            <Grid item xs={2}>
              <StyledPaper>
                <IconBox>
                  <CachedIcon style={{ fontSize: 50 }} />
                </IconBox>
                <Typography variant="subtitle1">CONVERSION</Typography>
                <Typography variant="body2">Explication de la conversion.</Typography>
              </StyledPaper>
            </Grid>
            <Grid item xs={2}>
              <StyledPaper>
                <IconBox>
                  <LoyaltyIcon style={{ fontSize: 50 }} />
                </IconBox>
                <Typography variant="subtitle1">FIDÉLISATION</Typography>
                <Typography variant="body2">Explication de la fidélisation.</Typography>
              </StyledPaper>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default BoxesRight;