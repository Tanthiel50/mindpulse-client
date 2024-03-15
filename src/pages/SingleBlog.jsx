import React, { useState } from "react";
import { Box, Container, Grid, Typography, TextField, InputLabel, Select, MenuItem, Button, styled, CardMedia } from '@mui/material';
import { theme } from "../styles/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { toast } from "react-toastify";
import axios from "axios";


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

const SingleBlog = () => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
    <Container >
      <Box sx={{ textAlign: 'center', paddingTop: '5rem',  }} >
        <Typography variant="overline" display="block" gutterBottom>
          Cyber Security
        </Typography>
        <Typography variant="h2" gutterBottom>
          The Ever-Evolving Cybersecurity Landscape
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          June 26, 2023 | 5 min read
        </Typography>
      </Box>
      <CardMedia
        component="img"
        image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3bb5f691632079.5e372adaa9f70.png" 
        alt="The Ever-Evolving Cybersecurity Landscape"
        sx={{ width: '100%', height: 'auto' }}
      />
      <Container sx={{ 
            py: 8, 
            background: 'rgba(255, 255, 255, 0.16)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
            webkitBackdropFilter: 'blur(5px)',
          }}>
      <Grid container >
        <Grid item xs={12} md={8}>
          <Typography variant="body1" gutterBottom sx={{
            paddingRight: '2rem',
          }}>
            {/* Ici, le contenu de l'article */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a nisi nam delectus. Voluptatem veritatis ea error nihil nesciunt atque, nemo ratione distinctio reiciendis, beatae impedit illo dolores et labore dolorem assumenda, consequatur commodi aut. Dicta aliquid vero inventore dolor vel optio, iste nisi sit repellendus itaque, assumenda velit voluptatem dolores earum atque eos. Numquam quo quibusdam aliquam animi nulla. Cum amet et dolorum nesciunt quisquam ipsum quod dolorem, beatae necessitatibus rem atque facere error at neque ad tempora eius. Odit, ea dicta beatae eius dolorum quod deleniti aut excepturi et quia enim maxime laboriosam nisi quas. Sunt totam ipsa saepe atque eveniet alias nulla hic excepturi deserunt voluptate eaque doloremque, sit nisi ipsam provident assumenda non soluta natus quidem commodi eum tempore labore tempora. Placeat laborum beatae commodi ab nihil, accusamus ut molestias voluptates ratione deserunt vel nostrum. Obcaecati consectetur enim consequuntur quod omnis rerum, possimus dolore labore voluptatem eligendi autem soluta non eaque ipsum dolores perferendis quasi repellendus. Provident tempore cumque ipsam magnam quaerat qui, nemo nam repellendus cupiditate harum officia ipsum voluptates quod sed perspiciatis vel. Est enim sed nesciunt a incidunt earum excepturi ad fugiat harum, nostrum dolor magnam distinctio? Delectus doloremque excepturi, veritatis possimus itaque quos numquam praesentium cum accusamus eveniet. Aliquam facere culpa libero pariatur cum asperiores vitae vel doloribus nesciunt soluta quae veniam quo exercitationem, quia quaerat iure obcaecati vero architecto illo totam. Numquam aut vel dignissimos blanditiis quisquam fugiat temporibus perspiciatis id laborum nostrum repellat ratione, hic doloremque. Nihil eveniet itaque nemo totam dolor rerum officiis molestias, perferendis esse commodi quos quo laudantium culpa quod? Harum tempora amet consectetur ducimus quos accusantium. Saepe ut molestiae officia suscipit ducimus, soluta pariatur aut corporis ipsam dignissimos hic ab error eveniet repudiandae quas harum, alias ullam ea dolorem rerum vel deleniti totam. Sint consectetur sed eveniet iure repudiandae molestias minus culpa ipsum, quae itaque recusandae quas earum necessitatibus ratione dolores eaque odio. Alias distinctio dolore assumenda iste dignissimos omnis hic beatae corporis aspernatur aliquam maiores, soluta, voluptate voluptates eaque. Tenetur excepturi, libero amet labore corporis odio facere molestiae at quidem delectus autem necessitatibus vero deleniti consequuntur veniam officiis totam blanditiis! Repudiandae voluptatibus nobis est iure odio eos sequi voluptatem aliquid totam atque illum laborum quas, eveniet magni tempora officia veritatis deserunt. Commodi nostrum, minus maiores facere sunt obcaecati labore et dolores possimus esse architecto asperiores rem veniam consequatur veritatis id accusamus pariatur iusto numquam quaerat rerum ullam aspernatur! Eius temporibus neque nulla quisquam, quam minus harum eveniet, animi, repellat obcaecati aut illo laudantium nisi quasi voluptas eligendi adipisci. Ipsum itaque consectetur illum repudiandae explicabo at, veritatis libero nostrum, qui, labore inventore nobis quis odit commodi. Blanditiis sequi quisquam commodi, quo fugit possimus atque sunt, ipsa harum, corporis ipsum hic corrupti exercitationem suscipit tempore nobis eos consequatur. Corrupti similique beatae quia, id enim cum impedit facere? Incidunt pariatur laboriosam accusamus distinctio voluptas voluptates consectetur asperiores, cumque perspiciatis reprehenderit, odio dolorum iste sint minima quod mollitia explicabo dolores error assumenda magnam libero? Incidunt consequuntur facilis ab eligendi!
          </Typography>
          {/* Continuez avec le contenu de l'article */}
        </Grid>
        <Grid item xs={12} md={4} sx={{
          position: 'sticky',
          top: '10vh', 
          height: 'fit-content',
        }}>
          {/* Le formulaire */}
          <form onSubmit={handleSubmit} style={{ padding: '16px',  borderRadius: '8px' }}>
          <Typography variant="h3" gutterBottom sx={{ color:"white" }}>Let's stay in touch</Typography>
          <InputLabel id="subject-label" sx={{ color: "white" }}>Prénom</InputLabel>
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
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Nom</InputLabel>
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
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Email</InputLabel>
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
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Sujet</InputLabel>
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
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Titre</InputLabel>
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
                  <InputLabel id="subject-label" sx={{ color: "white" }}>Message</InputLabel>
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
                  <BootstrapButton type="submit">Envoyer</BootstrapButton>
          </form>
        </Grid>
      </Grid>
    </Container>
    </Container>
  )
}

export default SingleBlog