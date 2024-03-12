import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../http-common/axios-configuration";
import { toast } from "react-toastify";
import Sidebar from "../../components/admin/Sidebar";

function CreateImage() {
  const [imageData, setImageData] = useState({
    title: "",
    alt: "",
    path: null,
  });
  const [imagePreview, setImagePreview] = useState(null); // Pour stocker l'URL de l'aperçu
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setImageData({ ...imageData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageData({ ...imageData, path: file });
      // Créer et stocker l'URL de l'aperçu
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", imageData.title);
    formData.append("alt", imageData.alt);
    if (imageData.path) formData.append("path", imageData.path);

    try {
      await axiosInstance.post("/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Image créée avec succès");
      navigate("/admin/images");
    } catch (error) {
      // Vérification de la présence d'un message d'erreur dans la réponse du back-end
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
      console.error("Erreur de soumission:", error);
    } finally {
      URL.revokeObjectURL(imagePreview); // Nettoyer l'URL de l'aperçu
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginTop: "5rem",
        }}
      >
        Créer une Image
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "50%" }}
        encType="multipart/form-data"
      >
        <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
          Titre
        </Typography>
        <TextField
          label="Titre"
          name="title"
          value={imageData.title}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
          Alt de l'image
        </Typography>
        <TextField
          label="Description Alt"
          name="alt"
          value={imageData.alt}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          sx={{ backgroundColor: "white" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            component="label"
            sx={{
              marginTop: "1rem",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "black", color: "white" },
            }}
          >
            Charger l'image
            <input type="file" name="path" hidden onChange={handleFileChange} />
          </Button>
          {imagePreview && (
            <Box
              component="img"
              src={imagePreview}
              alt="Aperçu de l'image sélectionnée"
              sx={{ maxWidth: "30vh", height: "auto", marginTop: "1rem" }}
            />
          )}
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: "2rem",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "black", color: "white" },
            }}
          >
            Soumettre
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateImage;
