import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#121212",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            {/* <Typography variant="h5">
              Mind Pulse
            </Typography> */}
          </Grid>
          <Grid item xs={12}
          sx={{
            width: "100%"
          }}
          >
            <Typography 
            variant="subtitle1"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
            >
            <Container sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row"
              },
              justifyContent: "space-between",
            }}>
              <Link to="/#" style={{ color: "white" }}>
                Mentions légales
              </Link>
              <Link to="/#" style={{ color: "white" }}>
                Charte de confidentialité
              </Link>
              <Link to="/login" style={{ color: "white" }}>
                Login
              </Link>
              <Link to="/admin" 
              style={{ 
                color: "white" 
                }}
                >
                Administration
              </Link>
            </Container>


            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;