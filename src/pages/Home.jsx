import { Typography, Box, Container, Grid, Paper, Button } from "@mui/material";
import { theme } from "../styles/theme";
import { styled } from "@mui/material/styles";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CachedIcon from "@mui/icons-material/Cached";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import PercentageBoxes from "./components/home/PercentageBoxes";
import BoxesRight from "./components/home/BoxesRight";
import { DataBox } from "./components/home/DataBox";
import SvgAcquisition from "../assets/pictoReact/Acquisition";
import SvgAnyPicto from "../assets/picto/activeSearch.jsx";
import InfoBox from "./components/home/InfoBoxe";
import SvgConversion from "../assets/picto/conversion.jsx";
import SvgFidelisation from "../assets/pictoReact/Fidelisation";
import SvgManBrainGear from "../assets/pictoReact/ManBrainGear";
import SvgViralMarketing from "../assets/pictoReact/ViralMarketing";
import SvgTargetKeywords from "../assets/pictoReact/TargetKeywords";
import SvgWebsiteOptimisation from "../assets/pictoReact/WebsiteOptimization";
import SvgAudienceTargeting from "../assets/pictoReact/AudienceTargeting";
import SvgBarchartGearCircular from "../assets/pictoReact/BarchartGearCircular";
import SvgManTalkingMarketing from "../assets/pictoReact/ManTalkingMarketing";
import SvgSeoMonitoring from "../assets/pictoReact/SeoMonitoring";
import SvgResponsiveWebDesign from "../assets/pictoReact/ResponsiveWebDesign";
import SvgKeywordRanking from "../assets/pictoReact/KeywordRanking";
import { Link } from "react-router-dom";
import { BootstrapButton } from "./components/BootstrapButton";
import HomeChart from "../HomeChart.jsx";

const data = [
  {
    icon: SvgViralMarketing,
    background: "#000",
    title: "Marketing & communication",
    color: "white",
  },
  {
    icon: SvgTargetKeywords,
    background: "#AE8ABE",
    title: "positionnement",
    color: "white",
  },
  {
    icon: SvgWebsiteOptimisation,
    background: "#8390C8",
    title: "developpement web",
    color: "white",
  },
  {
    icon: SvgAudienceTargeting,
    background: "#AE8ABE",
    title: "strategie commerciale",
    color: "white",
  },
  {
    icon: SvgBarchartGearCircular,
    background: "#fff",
    title: "audit",
    color: "black",
  },
  {
    icon: SvgManTalkingMarketing,
    background: "#000",
    title: "analyse",
    color: "white",
  },
  {
    icon: SvgSeoMonitoring,
    background: "#000",
    title: "veille",
    color: "white",
  },
  {
    icon: SvgResponsiveWebDesign,
    background: "#8390C8",
    title: "ux/ui",
    color: "white",
  },
  {
    icon: SvgKeywordRanking,
    background: "#fff",
    title: "data",
    color: "black",
  },
];

const Home = () => {

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
        <Container
          sx={{
            textAlign: "left",
            position: "absolute",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              maxWidth: "50%",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                textTransform: "uppercase",
              }}
            >
              Influencez <br /> votre
              <br /> audience
            </Typography>
            <Typography
              id="citation"
              variant="body1"
              sx={{
                mb: 4,
                fontStyle: "italic",
              }}
            >
              " Ce n'est pas le plus fort de l'espèce qui survit, ni le plus
              intelligent. C'est celui qui sait le mieux s'adapter au
              changement. " - Charles Darwin
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
              }}
            >
              Et il en va de-même pour les entreprises..
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
                textAlign: "center",
              }}
            >
              Je commence l'aventure
            </BootstrapButton>
          </Box>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          mt: 0,
          mb: 8,
        }}
      >
        <Grid container justifyContent="center">
          <PercentageBoxes
            percentage="250 000"
            description="En moyenne c’est 250 000
          entreprises crées chaque
          années en france.
          "
            backgroundColor="theme.palette.white"
            color="theme.palette.black"
          />
          <PercentageBoxes
            percentage="63 %"
            description="Aujourd’hui les chances de
            survie d’une entreprise face à la
            concurrence sont de 63%."
            backgroundColor="black"
            color="white"
          />
          <PercentageBoxes
            percentage="85 %"
            description="85 % des entreprises
            estiment qu'elles ne sont pas à
            jour face à la concurrence.
            "
            backgroundColor="#AE8ABE"
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
          maxWidth="lg"
          sx={{
            paddingBottom: 8,
            paddingTop: 8,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                width: "100%",
                height: "auto",
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              <Box component={HomeChart} alt="Description de l'image" />
            </Grid>
            {/* Colonne Texte */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                width: "100%",
                height: "auto",
              }}
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
                Nous constatons chaque année une augmentation de plus en plus
                importante dans la création de nouvelles entreprises en France,
                que ce soit de la part des Français eux-mêmes ou des pays
                extérieurs. Il est clair qu'une augmentation de la création de
                sociétés entraîne inévitablement le développement d'une
                concurrence de plus en plus présente sur tous les types de
                marchés professionnels.
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  paddingBottom: 4,
                  fontWeight: "bold",
                }}
              >
                Une question se pose alors : comment se démarquer ? Comment se
                développer face à un tel afflux de sociétés concurrentes ?
              </Typography>
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
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "white",
            paddingTop: 8,
            textAlign: "center",
            maxWidth: "50%",
            margin: "auto",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Par ou commencer l’optimisation de mon entreprise ?
        </Typography>
        <Typography
          component="body"
          sx={{
            color: "white",
            paddingTop: 8,
            paddingBottom: 8,
            textAlign: "center",
            maxWidth: "50%",
            margin: "auto",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Avant de se poser ce genre de question, il est bon de comprendre et de
          se remémorer les grands points sur le fonctionnement du cycle de vie
          d'une entreprise..
        </Typography>
        <Grid container spacing={0}>
          <InfoBox
            Icon={SvgAcquisition}
            title="ACQUISITION"
            description="Il s'agit là du premier
      stade visant à développer
      la stratégie inbound et
      outbound de l'entreprise.
      Il précède naturellement
      la vente, car primordial,
      pour générer l'entrée
      d'un lead, d'un client, d'un
      partenaire. Ce processus
      est souvent sous-estimé
      par les entreprises et finit
      donc par poser des
      problèmes, généralement
      aux jeunes start-up et aux
      entreprises trop étroites
      d'esprit.
      "
          />
          <InfoBox
            Icon={SvgConversion}
            title="CONVERSION"
            description="Nous entrons dans notre
      deuxième étape, la
      conversion. C'est ici que
      se posent les questions
      entourant le
      tunnel/l'entonnoir de
      vente et la logique
      commerciale que nous
      souhaitons instaurer. Elle
      s'applique aussi bien à
      un site internet qu'à un
      processus de vente
      commercial traditionnel.
      Elle varie en fonction du
      produit/service et de la
      vision de l'entreprise.
      
      "
          />
          <InfoBox
            Icon={SvgFidelisation}
            title="FIDÉLISATION"
            description="Une phase que bon nombre
      d'entreprises négligent, ou
      plutôt n'arrivent pas à
      comprendre la profondeur
      qu'elle représente. Il est
      nécessaire de définir les
      leviers et surtout la vision de
      votre stratégie de fidélisation
      : apporter une valeur
      ajoutée, un sentiment de
      considération, ou bien une
      simple vente. Les entreprises
      les plus en vue sur le marché
      ont parfaitement compris
      l'importance de cette
      stratégie et l'appliquent au
      quotidien, démontrant ainsi
      son importance.
      
      "
          />
          <InfoBox
            Icon={SvgManBrainGear}
            title="DISRUPTION"
            description="Du latin disruptum, signifiant briser en morceaux, faire éclater.Il s'agit d'un
      terme nouveau voire inconnu
      pour de nombreuses
      entreprises, et pourtant il
      applique un concept existant
      depuis la nuit des temps. Dans
      notre contexte professionnel,
      il s'agit donc de prendre un
      processus existant, de le
      disloquer et de le séquencer
      afin d'en créer un nouveau, de
      proposer une solution
      nouvelle basée sur les
      préceptes précédents, pour
      une solution, un produit, ou
      une entreprise.
      
      "
          />
        </Grid>
      </Box>

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
            textAlign: "center",
          }}
        >
          Un accompagnement sur tout les plans est-il envisageable ?
        </Typography>
        <Typography
          component="body"
          sx={{
            color: "white",
            paddingTop: 8,
            paddingBottom: 8,
            textAlign: "center",
          }}
        >
          Chez MindPulse, nous ne vous proposons pas simplement un "site
          internet", "une stratégie" ou encore "un processus de vente lambda",
          mais une solution adaptée à vos besoins, une solution conçue pour
          répondre aux besoins et enjeux de votre entreprise ainsi que de votre
          clientèle. Découvrez les domaines dans lesquels nous souhaitons
          apporter notre expertise, et attendons avec impatience notre premier
          contact !
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
          }}
        >
          Commencer l’aventure !
        </BootstrapButton>
      </Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              py: 4,
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              {data.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <DataBox
                    background={item.background}
                    title={item.title}
                    description={item.description}
                    color={item.color}
                    IconComponent={item.icon}
                  />
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
