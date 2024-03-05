import { Typography, Box, Container, Grid, Paper, Button } from "@mui/material";
import { theme } from "../styles/theme";
import { styled } from "@mui/material/styles";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CachedIcon from "@mui/icons-material/Cached";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import PercentageBoxes from "./components/home/PercentageBoxes";
import BoxesRight from "./components/home/BoxesRight";
import { DataBox } from "./components/home/DataBox";

const data = [
  {
    icon: AcUnitIcon,
    background: "#000",
    title: "Marketing",
    description: "Innovative and effective design solutions.",
    color: "white",
  },
  {
    icon: CachedIcon,
    background: "#AE8ABE",
    title: "Communication",
    description: "High-quality web and mobile app development.",
    color: "white",
  },
  {
    icon: LoyaltyIcon,
    background: "#8390C8",
    title: "UI/UX",
    description: "High-quality web and mobile app development.",
    color: "white",
  },
  {
    icon: AcUnitIcon,
    background: "#AE8ABE",
    title: "Stratégie",
    description: "High-quality web and mobile app development.",
    color: "white",
  },
  {
    icon: CachedIcon,
    background: "#fff",
    title: "SEO/SEA",
    description: "High-quality web and mobile app development.",
    color: "black",
  },
  {
    icon: LoyaltyIcon,
    background: "#000",
    title: "DEV",
    description: "High-quality web and mobile app development.",
    color: "white",
  },
  {
    icon: AcUnitIcon,
    background: "#000",
    title: "Data",
    description: "High-quality web and mobile app development.",
    color: "white",
  },
  {
    icon: CachedIcon,
    background: "#8390C8",
    title: "Positionnement",
    description: "High-quality web and mobile app development.",
    color: "white",
  },
  {
    icon: LoyaltyIcon,
    background: "#fff",
    title: "Analyse",
    description: "High-quality web and mobile app development.",
    color: "black",
  },
];


const Home = () => {
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
        <Container sx={{ textAlign: "left", position: "absolute", zIndex: 2 }}>
          <Box sx={{ maxWidth: "50%" }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ textTransform: "uppercase" }}
            >
              Influence <br /> Your <br /> Audience
            </Typography>
            <Typography 
            variant="body1" 
            sx={{ 
              mb: 4 
            }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <BootstrapButton
              variant="contained"
              sx={{
                backgroundColor: theme.palette.purplish,
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 4,
                paddingRight: 4,
              }}
            >
              Read More
            </BootstrapButton>
          </Box>
        </Container>
      </Box>

      <Container 
      maxWidth="lg" 
      sx={{ 
        mt: 0, 
        mb: 8 
        }}
        >
        <Grid 
        container 
        justifyContent="center"
        >
          <PercentageBoxes 
          percentage="96 %"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          backgroundColor="theme.palette.white" 
          color="theme.palette.black"
          />
          <PercentageBoxes
            percentage="96 %"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            backgroundColor= 'black'
            color="white"
          />
          <PercentageBoxes
            percentage="96 %"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            backgroundColor= '#AE8ABE'
            color="white"
          />
        </Grid>
      </Container>

      <Box
        sx={{
          p: 8,
          backgroundColor: theme.palette.background,
          color: theme.palette.white,
        }}
      >
        <Container 
        maxWidth="md"
        >
          <Grid 
          container 
          spacing={4} 
          alignItems="center"
          >
            <Grid 
            item 
            xs={12} 
            md={6}
            >
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
                src="https://img.freepik.com/premium-vector/chart-column-graph-infographic-element_627350-4.jpg?size=626&ext=jpg"
                alt="Description de l'image"
              />
            </Grid>
            {/* Colonne Texte */}
            <Grid 
            item 
            xs={12} 
            md={6}
            >
              <Typography
                gutterBottom
                component="h2"
                variant="h2"
                sx={{ color: theme.palette.purplish }}
              >
                Une concurrence toujours plus présente
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ paddingBottom: 4, paddingTop: 4 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <BootstrapButton
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.purplish,
                  paddingTop: 2,
                  paddingBottom: 2,
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                Read More
              </BootstrapButton>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: theme.palette.background,
          paddingBottom: 15,
        }}
      >
        <Grid 
        container 
        spacing={0} 
        alignItems="stretch"
        >
          <BoxesRight
          icon={AcUnitIcon} 
          title="ACQUISITION" 
          description="Explication de l'acquisition." 
          />
          <BoxesRight
          icon={CachedIcon} 
          title="CONVERSION" 
          description="Explication de la conversion." 
          />
          <BoxesRight
          icon={LoyaltyIcon} 
          title="FIDÉLISATION" 
          description="Explication de la fidélisation." 
          />
        </Grid>
      </Box>

      <Box
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center" 
        }}
      >
        <Container 
        maxWidth="lg"
        >
          <Box 
          sx={{ 
            flexGrow: 1, 
            py: 4 
            }}
            >
            <Grid 
            container 
            spacing={2} 
            justifyContent="center"
            >
              {data.map((item, index) => (
                <DataBox
                key={index}
                background={item.background}
                title={item.title}
                description={item.description}
                color={item.color}
                IconComponent={item.icon}
              />
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
