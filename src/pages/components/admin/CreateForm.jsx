import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../http-common/axios-configuration";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";

const CreateForm = ({ formHeaders, createPath, submitUrl, title }) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axiosInstance.post(submitUrl, formData);
        toast.success(`${title} créé avec succès`);
        navigate(createPath);
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
      <Typography 
      variant="h4" 
      sx={{ 
        marginBottom: "1rem",
        marginTop: "5rem" 

        }}
        >
        Créer {title}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: "50%" }}>
        {formHeaders.map((header) => (
          <TextField
            key={header}
            label={header}
            name={header}
            variant="outlined"
            margin="normal"
            fullWidth
            required
            onChange={handleInputChange}
            sx={{
                backgroundColor: "white", 
            }}
          />
        ))}
        <Button type="submit" variant="contained" sx={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            "&:hover": {
                backgroundColor: "black",
                color: "white"
            }
        }}>
          Soumettre
        </Button>
      </Box>
    </Box>
  );
};

export default CreateForm;
