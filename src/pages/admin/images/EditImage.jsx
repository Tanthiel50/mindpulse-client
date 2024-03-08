import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../../http-common/axios-configuration";
import { toast } from "react-toastify";
import { useLoading } from "../../../context/LoadingContext";
import Sidebar from "../../components/admin/Sidebar";

function EditImage() {
  const { id } = useParams(); // Obtenir l'ID de l'image à partir de l'URL
  const [imageData, setImageData] = useState({
    title: '',
    alt: '',
    media_url: '', 
  });
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    const fetchImageData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(`/images/${id}`);
        setImageData({
          ...response.data,
          media_url: response.data.media_url, 
        });
      } catch (error) {
        // Vérification de la présence d'un message d'erreur dans la réponse du back-end
        if (error.response && error.response.data && error.response.data.message) {
            // Si l'erreur contient une structure détaillée (par exemple, des champs spécifiques en erreur)
            if (typeof error.response.data.message === 'object') {
              const messages = Object.values(error.response.data.message).join('. ');
              toast.error(`Erreur : ${messages}`);
            } else {
              // Si l'erreur est une chaîne simple
              toast.error(`Erreur : ${error.response.data.message}`);
            }
          } else {
            // Message d'erreur générique si la réponse du back-end ne contient pas de détail
            toast.error('Une erreur est survenue lors de la création du mot.');
          }
          console.error('Erreur de soumission:', error);
        } finally {
        setIsLoading(false);
      }
    };

    fetchImageData();
  }, [id, setIsLoading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setImageData({ ...imageData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axiosInstance.post(`/images/edit/${id}`, {
        title: imageData.title,
        alt: imageData.alt,
      });
      toast.success("Image mise à jour avec succès");
      navigate("/admin/images");
    } catch (error) {
      toast.error("Erreur lors de la mise à jour de l'image");
      console.error("Erreur lors de la soumission :", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Sidebar />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography variant="h4" sx={{ marginBottom: "1rem", marginTop: "5rem" }}>
            Éditer l'Image
          </Typography>
          {imageData.media_url && (
            <Box
              component="img"
              src={imageData.media_url}
              alt="Aperçu de l'image"
              sx={{ maxWidth: "40%", height: "auto", marginBottom: "2rem" }}
            />
          )}
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "50%" }}>
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
            <TextField
              label="Description Alt"
              name="alt"
              value={imageData.alt}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              sx={{ backgroundColor: "white" }}
            />
            <Button type="submit" variant="contained" sx={{ marginTop: "2rem", backgroundColor: "white", color: "black", fontWeight: "bold", "&:hover": { backgroundColor: "black", color: "white" } }}>
              Soumettre
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default EditImage;
