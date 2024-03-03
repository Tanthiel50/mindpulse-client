
import { Typography, Box, Container, Grid, Paper, Button } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box sx={{ color: '#fff', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container sx={{ textAlign: 'left', position: 'relative', zIndex: 2 }}>
          <Box sx={{ maxWidth: '50%' }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ textTransform: 'uppercase' }}>
              Influence <br /> Your <br /> Audience
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Button variant="contained">Read More</Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -15, mb: 8 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper  sx={{ py: 4, px: 2, textAlign: 'center', height: '100%', borderRadius:'0' }}>
              <Typography variant="h3" component="p" sx={{ fontWeight: 'bold' }}>
                96 %
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className='box2' sx={{ py: 4, px: 2, textAlign: 'center', height: '100%', borderRadius:'0' }}>
              <Typography variant="h3" component="p" sx={{ fontWeight: 'bold' }}>
                96 %
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ py: 4, px: 2, textAlign: 'center', height: '100%', borderRadius:'0' }}>
              <Typography variant="h3" component="p" sx={{ fontWeight: 'bold' }}>
                96 %
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ color: 'white', p: 8 }}>
        <Container maxWidth="md">
          <Typography gutterBottom>
            <h3>Une concurrence toujours plus présente</h3>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
          <Button variant="outlined" color="inherit">Read More</Button>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#000', color: '#fff', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography gutterBottom textAlign="center">
        </Typography>
        <Grid container>
          {/* Repeat for each service */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <h5>Marketing</h5>
              </Typography>
              <Typography variant="body2">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <h5>Marketing</h5>
              </Typography>
              <Typography variant="body2">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <h5>Marketing</h5>
              </Typography>
              <Typography variant="body2">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <h5>Marketing</h5>
              </Typography>
              <Typography variant="body2">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <h5>Marketing</h5>
              </Typography>
              <Typography variant="body2">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <h5>Marketing</h5>
              </Typography>
              <Typography variant="body2">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <h5>Marketing</h5>
              </Typography>
              <Typography variant="body2">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <h5>Marketing</h5>
              </Typography>
              <Typography variant="body2">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                <h5>Marketing</h5>
              </Typography>
              <Typography variant="body2">
                Innovative and effective design solutions for business of our clients. Our team of experienced designers and marketing professionals work closely.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Add Footer */}
    </>
  );
};

export default Home;
