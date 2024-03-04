
import { Typography, Box, Container, Grid, Paper, Button } from '@mui/material';
import {theme} from '../styles/theme';
import { styled } from '@mui/material/styles';

const data = [
  { color: '#FFADAD', title: 'Marketing', description: 'Innovative and effective design solutions.' },
  { color: '#FFD6A5', title: 'Development', description: 'High-quality web and mobile app development.' },
  { color: '#FFD6A5', title: 'Development', description: 'High-quality web and mobile app development.' },
  { color: '#FFD6A5', title: 'Development', description: 'High-quality web and mobile app development.' },
  { color: '#FFD6A5', title: 'Development', description: 'High-quality web and mobile app development.' },
  { color: '#FFD6A5', title: 'Development', description: 'High-quality web and mobile app development.' },
  // { color: '#FFD6A5', title: 'Development', description: 'High-quality web and mobile app development.' },
  // { color: '#FFD6A5', title: 'Development', description: 'High-quality web and mobile app development.' },
  // { color: '#FFD6A5', title: 'Development', description: 'High-quality web and mobile app development.' },
];

const CustomPaper = styled(Paper)({
  cursor: 'pointer',
  height: 200,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

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
      <Box sx={{ color: theme.palette.white, minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container sx={{ textAlign: 'left', position: 'absolute', zIndex: 2 }}>
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

      <Container maxWidth="lg" sx={{ mt: -15, mb: 8}}>
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

      <Box sx={{ p: 8, backgroundColor: theme.palette.background, color: theme.palette.white }}>
        <Container maxWidth="md">
          <Grid container spacing={4} alignItems="center">
            {/* Colonne Image */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                sx={{
                  width: '100%', 
                  height: 'auto',
                }}
                src="https://img.freepik.com/premium-vector/chart-column-graph-infographic-element_627350-4.jpg?size=626&ext=jpg" 
                alt="Description de l'image"
              />
            </Grid>
            {/* Colonne Texte */}
            <Grid item xs={12} md={6}>
              <Typography gutterBottom component="h2" variant="h2" sx={{color: theme.palette.purplish }}>
                Une concurrence toujours plus présente
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ paddingBottom: 4, paddingTop: 4, }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <BootstrapButton variant="contained" sx={{ backgroundColor:theme.palette.purplish, paddingTop: 2, paddingBottom: 2, paddingLeft: 4, paddingRight: 4  }}>Read More</BootstrapButton>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, py: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CustomPaper sx={{ backgroundColor: item.color }} elevation={3}>
                <Typography variant="h5" component="h3" sx={{ color: '#fff' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff', mt: 1 }}>
                  {item.description}
                </Typography>
              </CustomPaper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
      </Box>

    </>
  );
};

export default Home;
