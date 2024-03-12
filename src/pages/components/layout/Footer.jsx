import { Box, Container, Grid, Typography, Link as MuiLink } from "@mui/material";
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../../../src/assets/logo/logo1.svg';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
  const footerStyle = {
    backgroundColor: "#121212",
    padding: "2rem 0",
    color: "white",
    borderTop: "1px solid white",
  };

  const linkStyle = {
    color: "white", 
    textDecoration: "none", 
    marginY: "0.5rem", 
    display: "block",
    '&:hover': {
      textDecoration: "underline", 
    },
    fontFamily: 'Archivo', 
  };

  return (
    <Box component="footer" sx={footerStyle}>
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={4} sx={{ display: "flex", flexDirection: "column" , justifyContent: "center", alignItems: "center" }}>
            <Logo style={{ height: "40%", width: "50%" }}/>
            <Typography variant="h6" gutterBottom >
              MindPulse
            </Typography>
            <Typography variant="caption" sx={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod commodi aut pariatur debitis sunt harum facilis temporibus eius nisi at sed iste in laboriosam neque accusamus autem ut quo incidunt adipisci, rem aliquid. Sequi minima nemo quo quibusdam consequatur! Mollitia aperiam nemo temporibus assumenda provident ullam fugit vel. Nisi?
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{
              color: "#8390C8",
            }}>NAVIGATION</Typography>
            <MuiLink component={Link} to="/" sx={linkStyle}>
              HOME
            </MuiLink>
            <MuiLink component={Link} to="/accompagnement" sx={linkStyle}>
              ACCOMPAGNEMENT
            </MuiLink>
            <MuiLink component={Link} to="/blog" sx={linkStyle}>BLOG</MuiLink>
            <MuiLink component={Link} to="/contact" sx={linkStyle}>CONTACT</MuiLink>
          </Grid>
          <Grid item xs={6} sm={2} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{
              color: "#8390C8",
            }}>AUTRES</Typography>
            <MuiLink component={Link} to="/" sx={linkStyle}>CONFIDENTIALITE</MuiLink>
            <MuiLink component={Link} to="/" sx={linkStyle}>MENTIONS LEGALES</MuiLink>
            <MuiLink component={Link} to="/login" sx={linkStyle}>CONNEXION</MuiLink>
          </Grid>
          <Grid item xs={12} sm={2} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{
              color: "#8390C8",
            }}>SOCIAL</Typography>
            <MuiLink component={Link} to="/" sx={linkStyle}> <XIcon /> </MuiLink>
            <MuiLink component={Link} to="/" sx={linkStyle}><LinkedInIcon/></MuiLink>
            <MuiLink component={Link} to="/" sx={linkStyle}><FacebookIcon/></MuiLink>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;