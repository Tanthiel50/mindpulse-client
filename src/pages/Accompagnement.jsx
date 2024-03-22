import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";
import HighlightedSection from "./components/HighlightedSection";
import ServicesGrid from "./components/ServiceGrid";
import { BootstrapButton } from "./components/BootstrapButton";
import customCoding from "../assets/picto/customCoding.svg";
import manConferance from "../assets/picto/man-conferance.svg";
import audienceTargeting from "../assets/picto/audienceTargeting.svg";
import pipeline from "../assets/picto/pipeline.svg";
import keywordRanking from "../assets/picto/keywordRanking.svg";
import viralMarketing from "../assets/picto/viralMarketing.svg";

const Accompagnement = () => {
  const imageUrl = "https://source.unsplash.com/1600x900/?business";

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
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{ textTransform: "uppercase", color: "white" }}
              >
                VOUS PROPOSER UN PARCOURS ADAPTÉ À VOS
                BESOINS !
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: "white" }}>
                Afin de ne pas vous faire perdre de temps tout en restant clair,
                nous vous proposons de discuter de votre projet directement
                ensemble. Nous déterminerons les enjeux qui définiront votre
                projet, qu'il s'agisse de marketing, de communication, de design
                ou encore de développement web !
              </Typography>
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
                Nous contacter
              </BootstrapButton>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                src={imageUrl}
                alt="Description de l'image"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.16)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          webkitBackdropFilter: "blur(5px)",
          paddingBottom: 4,
        }}
      >
        <Box>
          <HighlightedSection
            title="RÉPONDRE À VOS OBJECTIFS !"
            text="Que vous soyez une entreprise récente, moderne, établie depuis de nombreuses
          années, proposant des ventes de produits ou des solutions digitalisées, peu importe
          votre marché, nous trouverons la solution pour répondre à vos besoins !
          "
          />
        </Box>
        <ServicesGrid
          title=" "
          services={[
            { icon: customCoding, title: "Concevoir ou refondre votre site" },
            {
              icon: keywordRanking,
              title: "Créer votre stratégie digitale",
            },
            { icon: viralMarketing, title: "Développer votre audience" },
            { icon: pipeline, title: "Générez plus de contacts qualifiés" },
            {
              icon: audienceTargeting,
              title: "Repenser votre stratégie de vente",
            },
            { icon: manConferance, title: "Vous former directement en intra" },
          ]}
        />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "white",
              paddingTop: 8,
              paddingBottom: 4,
              textAlign: "center",
            }}
          >
            Une question ? Un projet ?
          </Typography>
          <BootstrapButton
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              backgroundColor: theme.palette.purplish,
              paddingTop: 2,
              paddingBottom: 2,
              paddingLeft: 4,
              paddingRight: 4,
              width: "30%",
              textAlign: "center",
            }}
          >
            Contactez nous
          </BootstrapButton>
        </Container>
      </Box>
      <Box></Box>
    </>
  );
};

export default Accompagnement;
