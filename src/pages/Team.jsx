import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";
import { BootstrapButton } from "./components/BootstrapButton";
import UserProfileCards from "./components/team/UserCard";

const Team = () => {
  const stories = [
    {
      number: 1,
      title: "Design",
      content:
        "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision...",
    },
    {
      number: 2,
      title: "Engineering",
      content:
        "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation...",
    },
    {
      number: 3,
      title: "Marketing",
      content:
        "And then, a group of savvy marketers joined the team to spread the word and make the magic happen...",
    },
    {
      number: 4,
      title: "Growth",
      content:
        "Finally, a team of growth experts came on board to help the company reach new heights and expand its horizons...",
    },
    {
      number: 5,
      title: "Success",
      content: "And so, the company was born, and the rest is history...",
    },
    {
      number: 6,
      title: "Future",
      content:
        "The future is bright, and the company is ready to take on the world and make a difference...",
    },
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
              UNE ÉQUIPE NÉ D’UNE PROBLÉMATIQUE..
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "white" }}>
              MindPulse est né de l'observation que, au cours des 5 dernières
              années, de nombreuses entreprises ont constaté que malgré la
              communication agressive de nombreuses sociétés liées au marketing,
              à la communication, au design ou encore au développement web,
              proposent des solutions et offres présentées comme uniques et
              parfaites mais qui ne correspondent pas aux besoins et enjeux
              réels des entreprises. C'est pourquoi notre équipe, composée de
              trois experts passionnés par leurs domaines respectifs, aux aguets
              sur des évolutions technologiques ainsi que des solutions
              innovantes qui émergent chaque jour, vous propose aujourd'hui de
              débuter, ensemble, une aventure professionnelle afin de faire face
              à une concurrence grandissante !
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
              Votre solution ?
            </BootstrapButton>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          py: 8,
          background: "rgba(255, 255, 255, 0.16)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          webkitBackdropFilter: "blur(5px)",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "white",
              mb: 4,
              textAlign: "center",
            }}
          >
            DES PROFESSIONNELS AU SERVICE DE LA QUALITÉ..
          </Typography>
          <UserProfileCards />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <BootstrapButton
              component={Link}
              to="/accompagnement"
              variant="contained"
              sx={{
                backgroundColor: theme.palette.purplish,
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 4,
                paddingRight: 4,
              }}
            >
              Découvrir notre univers
            </BootstrapButton>
          </Box>
          {/* <Grid container spacing={4}>
      {stories.map((story, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Paper sx={{ padding: 3, backgroundColor: "#1e1e1e", color: 'white', mb: 2, display: 'flex</Grid>', flexDirection: 'column', justifyContent: 'center', minHeight: 200, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
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
    </Grid> */}
        </Container>
      </Box>
    </>
  );
};

export default Team;
