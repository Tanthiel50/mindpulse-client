import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";
import HighlightedSection from "./components/HighlightedSection";
import ServicesGrid from "./components/ServiceGrid";
import acquisition from "../assets/picto/acquisition.svg";
import activeSearch from "../assets/picto/activeSearch.svg";
import anchor from "../assets/picto/anchor.svg";

const Accompagnement = () => {
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
      <Box>
        <HighlightedSection
          title="Marketing"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          highlightedText="Our maketing services include:"
        />
      </Box>
      <ServicesGrid
        title="User Experience (UX) Design"
        services={[
          { icon: acquisition, title: "User Research and Persona Development" },
          {
            icon: activeSearch,
            title: "Information Architecture and Wireframing",
          },
          { icon: anchor, title: "User Interface (UI) Design" },
          { icon: acquisition, title: "User Research and Persona Development" },
          {
            icon: activeSearch,
            title: "Information Architecture and Wireframing",
          },
          { icon: anchor, title: "User Interface (UI) Design" },
        ]}
      /><Box>
      <HighlightedSection
        title="Communication"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        highlightedText="Our communication services include:"
      />
    </Box>
    <ServicesGrid
      title="Communication"
      services={[
        { icon: acquisition, title: "User Research and Persona Development" },
        {
          icon: activeSearch,
          title: "Information Architecture and Wireframing",
        },
        { icon: anchor, title: "User Interface (UI) Design" },
        { icon: acquisition, title: "User Research and Persona Development" },
        {
          icon: activeSearch,
          title: "Information Architecture and Wireframing",
        },
        { icon: anchor, title: "User Interface (UI) Design" },
      ]}
    />
    </>
  );
};

export default Accompagnement;
