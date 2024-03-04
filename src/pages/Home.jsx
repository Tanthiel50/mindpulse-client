
import { Typography, Box, Container, Grid, Paper, Button } from '@mui/material';
import {theme} from '../styles/theme';
import { styled } from '@mui/material/styles';

const Home = () => {
  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#AE8ABE',
    '&:hover': {
      backgroundColor: 'white',
      color:'#AE8ABE',
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  return (
    <>
      <Box sx={{ color: theme.palette.white, height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container sx={{ textAlign: 'left', position: 'relative', zIndex: 2 }}>
          <Box sx={{ maxWidth: '50%' }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ textTransform: 'uppercase' }}>
              Influence <br /> Your <br /> Audience
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <BootstrapButton variant="contained" sx={{ backgroundColor:theme.palette.purplish, paddingTop: 2, paddingBottom: 2, paddingLeft: 4, paddingRight: 4  }} >Read More</BootstrapButton>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -15, mb: 8 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper  sx={{ py: 4, px: 2, textAlign: 'center', height: '100%', borderRadius:'0'}}>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                96 %
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className='box2' sx={{ py: 4, px: 2, textAlign: 'center', height: '100%', borderRadius:'0', backgroundColor: theme.palette.black, color: theme.palette.white }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                96 %
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ py: 4, px: 2, textAlign: 'center', height: '100%', borderRadius:'0', backgroundColor: theme.palette.purplish, color: theme.palette.white }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                96 %
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ color: 'black', p: 8 }}>
        <Container maxWidth="md">
          <Typography gutterBottom component="div">
            <Typography>Une concurrence toujours plus présente</Typography>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
          <Button variant="outlined" color="inherit">Read More</Button>
        </Container>
      </Box>

      <Box sx={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography gutterBottom textAlign="center">
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <Typography>Marketing</Typography>
              </Typography>
              <Typography variant="body1">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <Typography>Marketing</Typography>
              </Typography>
              <Typography variant="body1">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <Typography>Marketing</Typography>
              </Typography>
              <Typography variant="body1">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <Typography>Marketing</Typography>
              </Typography>
              <Typography variant="body1">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <Typography>Marketing</Typography>
              </Typography>
              <Typography variant="body1">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <Typography>Marketing</Typography>
              </Typography>
              <Typography variant="body1">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <Typography>Marketing</Typography>
              </Typography>
              <Typography variant="body1">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <Typography>Marketing</Typography>
              </Typography>
              <Typography variant="body1">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <Typography>Marketing</Typography>
              </Typography>
              <Typography variant="body1">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

    </>
  );
};

export default Home;
