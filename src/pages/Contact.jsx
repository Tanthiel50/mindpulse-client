import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { theme } from "../styles/theme";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { toast } from "react-toastify";
import { BootstrapButton } from "./components/BootstrapButton";

const faqs = [
  {
    question: "Quels sont les services offerts par Mind Pulse ?",
    answer:
      "Nous vous proposons un accompagnement basé sur les piliers de l'acquisition de la conversion et sur votre stratégie de fidélisation de votre entreprise.",
  },
  {
    question: "Comment Minde Pulse mesure le résultats des campagnes mises en place ?",
    answer:
      "Les stratégies que nous développons pour vous se basent sur les données. Ainsi, nous mettons en place un suivi de vos données via des outils tels que SEMRUSH, GA4, Google Tag Manager, etc. De plus, nous définissons ensemble les KPI que vous souhaitez suivre pour évaluer la pertinence de nos actions et campagnes lors de notre accompagnement",
  },
  {
    question: "Quelle est la portée géographique ou la marché cible couvert par Mind Pulse ?",
    answer:
      "Notre volonté est d'apporter de l'aide à quiconque souhaite faire évoluer et développer son entreprise. Ainsi, peu importe la région, le département ou la ville, nous sommes là pour créer ensemble, sans nous limiter à de simples barrières telles que la distance.",
  },
  {
    question: "Combien coûte un accompagnement ?",
    answer:
      "Nous n'avons pas de prix fixes, car nous nous adaptons aux ressources et aux besoins des entreprises. C'est à travers un devis que nous déterminerons ensemble les tarifs.",
  },
  {
    question: "Comment Mind Pulse gère les situations d'urgence ou les ajustements rapides dans campagnes marketing ?",
    answer:
      "La qualité est notre première priorité ! Nous nous engageons à vous répondre dans les plus brefs délais en situation d'urgence",
  },
  {
    question: "Comment se déroule le processus de communication et de collaboration entre Mind Pulse et ses clients ?",
    answer:
      "Nous favorisons la communication par visioconférence, et selon les besoins, nous pouvons également nous rencontrer dans vos locaux.",
  },
  {
    question: "Quels sont les étapes du processus de travail avec Mind Pulse ?",
    answer:
      "Nous avons découpé notre processus de production en cinq étapes, à savoir : le premier contact, la définition de vos besoins, la proposition de votre devis, les modifications et la signature du contrat, la production et l'accompagnement, enfin le bilan et l'analyse du projet.",
  },
  {
    question: "Comment Mind pulse  peut-elle nous aider à atteindre nos objectifs marketing ?",
    answer:
      "Nous vous proposons d'auditer ensemble les besoins de votre entreprise afin de répondre à vos enjeux. Notre objectif principal est de définir clairement les plans d'actions nécessaires pour assurer le bon développement de votre société.",
  },
];

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [formData, setFormData] = useState({
    senderFirstName: "",
    senderLastName: "",
    senderEmail: "",
    senderCompany: "",
    senderPhone: "",
    subject: "",
    title: "",
    message: "",
  });

  const subjects = [
    "J'ai une question",
    "Je souhaite un devis",
    "Je souhaite un rdv",
  ];


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mindpulse.fr/api/messages",
        formData
      );
      toast.success("Votre message a bien été envoyé");
      setFormData({
        senderFirstName: "",
        senderLastName: "",
        senderEmail: "",
        senderCompany: "",
        senderPhone: "",
        subject: "",
        title: "",
        message: "",
      });
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // Si l'erreur contient une structure détaillée (par exemple, des champs spécifiques en erreur)
        if (typeof error.response.data.message === "object") {
          const messages = Object.values(error.response.data.message).join(
            ". "
          );
          toast.error(`Erreur : ${messages}`);
        } else {
          // Si l'erreur est une chaîne simple
          toast.error(`Erreur : ${error.response.data.message}`);
        }
      } else {
        // Message d'erreur générique si la réponse du back-end ne contient pas de détail
        toast.error("Une erreur est survenue lors de la création du mot.");
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          color: theme.palette.white,
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{ textTransform: "uppercase", color: "white" }}
                >
                  UN BESOIN ? <br />
UN PROJET ?<br />
UN CONSEIL ?<br />
CONTACTEZ-NOUS !
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: "white" }}>
                Chez MindPulse, que ce soit pour une simple
prise de contact, un audit de votre site web,
ou un complément d’informations sur nos
prestations, nos consultants en stratégie
digitale restent à votre disposition par
téléphone ou par mail.
Afin de répondre au mieux à vos besoins,
nous vous remercions de compléter le
formulaire ci-contre.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputLabel id="first-name-label" sx={{ color: "white" }}>Prénom*</InputLabel>
              <TextField
                id="senderFirstName"
                name="senderFirstName"
                value={formData.senderFirstName}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  backgroundColor: "white",
                  marginBottom: "20px",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="last-name-label" sx={{ color: "white" }}>Nom*</InputLabel>
              <TextField
                id="senderLastName"
                name="senderLastName"
                value={formData.senderLastName}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            </Grid>
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Société</InputLabel>
                  <TextField
                    name="senderCompany"
                    value={formData.senderCompany}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      backgroundColor: "white",
                      marginBottom: "20px",
                    }}
                  />
                  <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputLabel id="phone-label" sx={{ color: "white" }}>Téléphone</InputLabel>
              <TextField
                id="senderPhone"
                name="senderPhone"
                value={formData.senderPhone}
                onChange={handleChange}
                fullWidth
                sx={{
                  backgroundColor: "white",
                  marginBottom: "20px",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="email-label" sx={{ color: "white" }}>Email*</InputLabel>
              <TextField
                id="senderEmail"
                name="senderEmail"
                type="email"
                value={formData.senderEmail}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Sujet*</InputLabel>
                  <Select
                    labelId="subject-label"
                    name="subject"
                    fullWidth
                    value={formData.subject}
                    onChange={handleChange}
                    displayEmpty
                    required
                    sx={{
                      backgroundColor: "white",
                      marginBottom: "20px",
                    }}
                  >
                    <MenuItem value="" disabled>
                      Choisissez un sujet
                    </MenuItem>
                    {subjects.map((subject, index) => (
                      <MenuItem key={index} value={subject}>
                        {subject}
                      </MenuItem>
                    ))}
                  </Select>
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Titre*</InputLabel>
                  <TextField
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{
                      backgroundColor: "white",
                      marginBottom: "20px",
                    }}
                  />
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Message*</InputLabel>
                  <TextField
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{
                      backgroundColor: "white",
                      marginBottom: "20px",
                    }}
                  />
                  <BootstrapButton
                  variant="contained"
                  sx={{
                  backgroundColor: "#AE8ABE",
                  paddingTop: 2,
                  paddingBottom: 2,
                  paddingLeft: 4,
                  paddingRight: 4,
                }} 
                type="submit">
                  Envoyer
                  </BootstrapButton>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          background: 'rgba(255, 255, 255, 0.16)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)',
          webkitBackdropFilter: 'blur(5px)',
          color: "white",
          p: isMobile ? 2 : 8,
          pt: isMobile ? 4 : 10,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            mb: 6,
          }}
        >
          FAQ
        </Typography>
        <Container>
          <Grid container spacing={2}>
            {faqs.map((faq, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Accordion sx={{ background: "#333", color: "white", my: 1 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls={`panel${index}a-content`}
                    id={`panel${index}a-header`}
                  >
                    <Typography sx={{ fontWeight: "bold", flexGrow: 1 }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
