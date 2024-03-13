import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";

const Team = () => {
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    lineHeight: 1.5,
    backgroundColor: "#AE8ABE",
    color: "white",
    marginBottom: "20px",
    "&:hover": {
      backgroundColor: "white",
      color: "#AE8ABE",
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  const stories = [
    {
      number: 1,
      title: "Design",
      content: "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision...",
    },
    {
      number: 2,
      title: "Engineering",
      content: "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation...",
    },
    {
      number: 3,
      title: "Marketing",
      content: "And then, a group of savvy marketers joined the team to spread the word and make the magic happen...",
    },
    {
      number: 4,
      title: "Growth",
      content: "Finally, a team of growth experts came on board to help the company reach new heights and expand its horizons...",
    },
    {
      number: 5,
      title: "Success",
      content: "And so, the company was born, and the rest is history...",
    },
    {
      number: 6,
      title: "Future",
      content: "The future is bright, and the company is ready to take on the world and make a difference...",
    }
    
  ];

  return (
    <>
      <Box
        sx={{
          color: theme.palette.white,
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container sx={{ textAlign: "left", zIndex: 2 }}>
          <Box sx={{ maxWidth: "100%" }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ textTransform: "uppercase", color: "white" }}
            >
              About <br /> Mindpulse
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              delectus totam. Incidunt vero voluptates rem ipsam atque libero
              omnis facilis quas, sint suscipit sunt deleniti nam necessitatibus
              quasi doloribus non sit! Commodi, accusantium illum? Quibusdam
              temporibus asperiores inventore nesciunt est praesentium corrupti
              iste nihil porro cupiditate eos quam excepturi, ex officia illum
              ipsa! Eaque rem aliquid incidunt reiciendis laboriosam obcaecati
              vel ullam omnis vero eum aut porro quibusdam sequi consequatur
              perspiciatis eos, excepturi quia a inventore reprehenderit, nam
              voluptatibus eligendi. Perspiciatis veniam nam reprehenderit
              assumenda vitae laboriosam animi minus illo obcaecati nobis quos
              omnis facilis aperiam ipsa, aliquam eaque natus.
            </Typography>
            <BootstrapButton
              variant="contained"
              component={Link}
              to="/contact"
              sx={{
                backgroundColor: theme.palette.purplish,
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 4,
                paddingRight: 4,
              }}
            >
                Nous contacter
            </BootstrapButton>
          </Box>
        </Container>
      </Box>
      <Box sx={{ py: 8, backgroundColor: "#121212" }}>
  <Container>
    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'white', mb: 4, textAlign: 'center' }}>
      Our Story
    </Typography>
    <Grid container spacing={4}>
      {stories.map((story, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Paper sx={{ padding: 3, backgroundColor: "#1e1e1e", color: 'white', mb: 2, display: 'flex</Grid>', flexDirection: 'column', justifyContent: 'center', minHeight: 200 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', minHeight: 64 }}>
              <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold', fontSize: '6rem', color: "#AE8AB</Box>E", width: 'auto', minWidth: '64px' }}>
                {story.number}
              </Typography>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: 'white', mb: 2, ml: 2 }}>
                {story.title}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: 'white' }}>
              {story.content}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>
    </>
  );
};

export default Team;
