import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Grid, Container, TextField, InputAdornment, Button, ButtonGroup, useTheme, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const posts = [
  {
    title: 'Cyber Security',
    subtitle: 'The Ever-Evolving Cybersecurity Landscape',
    date: 'June 26, 2023',
    image: 'https://www.kasradesign.com/wp-content/uploads/2023/09/The-Best-Illustration-Companies-of-2023.jpg',
    category: 'Cyber Security'
  },
  {
    title: 'Metaverse',
    subtitle: 'The Unstoppable Rise Of The Metaverse',
    date: 'September 9, 2023',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrCSPG9-XlmdR4rgzLZRU9USw9JkJOzzhhbbfSgIRxCo93tz-X0v8LXLfXz6L2RJP--Q&usqp=CAU',
    category: 'Metaverse'
  },
  {
    title: 'Artificial Intelligence (AI)',
    subtitle: 'The Future Of Artificial Intelligence (AI)',
    date: 'March 22, 2023',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3bb5f691632079.5e372adaa9f70.png',
    category: 'Artificial Intelligence (AI)'
  }
];

const categories = ['All', 'Cyber Security', 'Metaverse', 'Artificial Intelligence (AI)'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredPosts = activeCategory === 'All' ? posts : posts.filter(post => post.category === activeCategory);

  return (
    <Box sx={{ flexGrow: 1, color: 'white', p: 3, minHeight: "100vh", paddingTop:"10rem" }}>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom textAlign="center" sx={{ mb: 4 }}>
          Mind Pulse: The Tech Heartbeat
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <TextField
            placeholder="Search Article..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: 'white' }}/>
                </InputAdornment>
              ),
              style: { color: 'white' }
            }}
            variant="outlined"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 1,
              input: { color: 'white' },
              width: '50%'
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <ButtonGroup variant="contained" orientation={isMobile ? 'vertical' : 'horizontal'} aria-label="outlined primary button group">
            {categories.map((category, index) => (
              <Button
                key={index}
                onClick={() => handleCategoryClick(category)}
                sx={{
                  backgroundColor: activeCategory === category ? '#AE8ABE' : 'transparent',
                  '&:hover': {
                    backgroundColor: activeCategory === category ? '#AE8ABE' : 'rgba(255, 255, 255, 0.1)',
                  },
                  mb: isMobile ? 1 : 0,
                }}
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        <Grid container spacing={4}>
          {filteredPosts.map((post, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ backgroundColor: '#1e1e1e', color: 'white', borderRadius: '0' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2">
                    {post.subtitle}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {post.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;