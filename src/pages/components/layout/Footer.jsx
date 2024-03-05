
import { Box, Container, Grid, Typography } from "@mui/material";

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
            <Typography variant="h5">
              Mind Pulse
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {`${new Date().getFullYear()} | Link 1 | Link 2 | Link 3`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;