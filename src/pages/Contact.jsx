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

const faqs = [
  {
    question: "What services does MindPulse provide?",
    answer:
      "MindPulse offers a range of services including design, engineering, and project management...",
  },
  {
    question: "How do I get started?",
    answer:
      "To get started, simply fill out the contact form on our website and we will be in touch shortly...",
  },
  {
    question: "What is the cost of your services?",
    answer:
      "The cost of our services varies depending on the project. Once we have more information about your project...",
  },
  {
    question: "What is the timeline for project completion?",
    answer:
      "The timeline for project completion varies depending on the project. Once we have more information about your project...",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in a wide range of industries including tech, e-commerce, and non-profit...",
  },
  {
    question: "What makes your services unique?",
    answer:
      "Our team is made up of some of the most talented individuals in the industry...",
  },
  {
    question: "What is the cost of your services?",
    answer:
      "The cost of our services varies depending on the project. Once we have more information about your project...",
  },
  {
    question: "What is the timeline for project completion?",
    answer:
      "The timeline for project completion varies depending on the project. Once we have more information about your project...",
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
    "General Inquiry",
    "Customer Support",
    "Technical Issue",
    "Billing and Payments",
    "Feedback",
  ];

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/messages",
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
                  Let's <br /> get <br /> in touch
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: "white" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <form onSubmit={handleSubmit}>
                <InputLabel id="subject-label" sx={{ color: "white" }}>Prénom</InputLabel>
                  <TextField
                    name="senderFirstName"
                    label="Prénom"
                    value={formData.senderFirstName}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{
                      backgroundColor: "white",
                      marginBottom: "20px",
                    }}
                  />
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Nom</InputLabel>
                  <TextField
                    name="senderLastName"
                    label="Nom"
                    value={formData.senderLastName}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{
                      backgroundColor: "white",
                      marginBottom: "20px",
                    }}
                  />
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Société</InputLabel>
                  <TextField
                    name="senderCompany"
                    label="Société"
                    value={formData.senderCompany}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      backgroundColor: "white",
                      marginBottom: "20px",
                    }}
                  />
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Téléphone</InputLabel>
                  <TextField
                    name="senderPhone"
                    label="Téléphone"
                    value={formData.senderPhone}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      backgroundColor: "white",
                      marginBottom: "20px",
                    }}
                  />
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Email</InputLabel>
                  <TextField
                    name="senderEmail"
                    label="Email"
                    type="email"
                    value={formData.senderEmail}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{
                      backgroundColor: "white",
                      marginBottom: "20px",
                    }}
                  />
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Sujet</InputLabel>
                  <Select
                    labelId="subject-label"
                    name="subject"
                    label="Sujet"
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
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Titre</InputLabel>
                  <TextField
                    name="title"
                    label="Titre"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{
                      backgroundColor: "white",
                      marginBottom: "20px",
                    }}
                  />
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Message</InputLabel>
                  <TextField
                    name="message"
                    label="Message"
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
                  <BootstrapButton type="submit">Envoyer</BootstrapButton>
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
          Frequently Asked Questions
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
