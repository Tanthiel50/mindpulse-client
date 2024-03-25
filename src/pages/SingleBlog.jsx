import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  CardMedia,
  TableCell,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Breadcrumbs,
} from "@mui/material";
import { axiosInstance } from "../http-common/axios-configuration";
import { toast } from "react-toastify";
import { BootstrapButton } from "./components/BootstrapButton";
import { Link as RouterLink } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const subjects = [
  "J'ai une question",
  "Je souhaite un devis",
  "Je souhaite un rdv",
];

const SingleBlog = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const articleTitle = post ? post.title : 'Loading...';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const categoryName = post?.category || 'Loading...';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
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

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axiosInstance.get(`/posts/${slug}`);
        setPost(response.data);
      } catch (error) {
        toast.error("Erreur lors de la récupération de l'article");
        console.error(
          "Erreur lors de la récupération des détails de l'article",
          error
        );
      }
    };

    fetchPostDetails();
  }, [slug]);

  if (!post) {
    return <Typography>Chargement...</Typography>;
  }

  return (
    <Container>
      <Box sx={{ textAlign: 'center', paddingTop: '5rem',  }}>
          <Typography variant="overline" display="block" gutterBottom>
            {post.category}{" "}
          </Typography>
          <Typography
            variant="h2" 
            gutterBottom
            sx=
            {{ 
              color: "white" 
            }}
          >
            {post.title}
          </Typography>
          <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
        <Link component={RouterLink} to="/">
          Home
        </Link>
        <Link component={RouterLink} to="/blog">
          Blog
        </Link>
        <Typography color="text.primary">{articleTitle}</Typography>
      </Breadcrumbs>
          <Typography variant="subtitle1" color="text.secondary">
            {new Date(post.publishedAt).toLocaleDateString()}
          </Typography>
        </Box>
        <Grid item xs={12}>
        <CardMedia
          component="img"
          image={post.thumbnail_url}
          alt={post.title}
          sx={{ width: "100%", height: "auto" }}
        />
        </Grid>
        <Container
          xs={12}
          md={8}
          sx={{
            py: 8, 
            background: 'rgba(255, 255, 255, 0.16)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
            webkitBackdropFilter: 'blur(5px)',
          }}
        >
          <Grid container >
          <Grid item xs={12} md={8}>
          <Typography variant="body1" 
          gutterBottom 
          component='div'
          sx={{
            paddingRight: '2rem',
          }}>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{
          position: 'sticky',
          top: '10vh', 
          height: 'fit-content',
        }}>
          {/* Le formulaire */}
          <form
            onSubmit={handleSubmit}
            style={{ padding: '16px',  borderRadius: '8px' }}
          >
            <Typography variant="h3" gutterBottom sx={{ color:"white" }}>
              Let's stay in touch
            </Typography>
            <InputLabel id="subject-label" sx={{ color: "white" }}>
              Prénom
            </InputLabel>
            <TextField
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
            <InputLabel id="subject-label" sx={{ color: "white" }}>
              Nom
            </InputLabel>
            <TextField
              name="senderLastName"
              value={formData.senderLastName}
              onChange={handleChange}
              fullWidth
              required
              sx={{
                backgroundColor: "white",
                marginBottom: "20px",
              }}
            />
            <InputLabel id="subject-label" sx={{ color: "white" }}>
              Email
            </InputLabel>
            <TextField
              name="senderEmail"
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
            <InputLabel id="subject-label" sx={{ color: "white" }}>
              Sujet
            </InputLabel>
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
            <InputLabel id="subject-label" sx={{ color: "white" }}>
              Titre
            </InputLabel>
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
            <InputLabel id="subject-label" sx={{ color: "white" }}>
              Message
            </InputLabel>
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
              type="submit"
            >
              Envoyer
            </BootstrapButton>
          </form>
        </Grid>
      </Grid>
    </Container>
    </Container>
  );
};

export default SingleBlog;
