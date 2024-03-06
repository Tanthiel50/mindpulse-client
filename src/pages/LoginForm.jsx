import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserProvider';
import { axiosInstance } from '../http-common/axios-configuration';
import { toast } from 'react-toastify';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.post('/login', {
        email,
        password,
      });

      // Stocker le token dans le localStorage
      localStorage.setItem('token', response.data.token);

      // Mettre à jour l'état de l'utilisateur
      setUser(response.data.user);
      toast.success('Connexion réussie');
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Erreur lors de la connexion');
    }
  };

  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    lineHeight: 1.5,
    backgroundColor: "#AE8ABE",
    "&:hover": {
      backgroundColor: "white",
      color: "#AE8ABE",
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography 
          component="h1" 
          variant="h5"
          sx={{
            color: "white" 
          }}
          >
            Connexion
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
  margin="normal"
  required
  fullWidth
  id="email"
  label="Adresse email"
  name="email"
  autoComplete="email"
  autoFocus
  value={email}
  onChange={handleEmailChange}
  sx={{
    backgroundColor: "white"
  }}
/>
<TextField
  margin="normal"
  required
  fullWidth
  name="password"
  label="Mot de passe"
  type="password"
  id="password"
  autoComplete="current-password"
  value={password}
  onChange={handlePasswordChange}
  sx={{
    backgroundColor: "white"
  }}
/>
            <BootstrapButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </BootstrapButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}