import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Paper, Button, Select, MenuItem } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../http-common/axios-configuration";
import { toast } from "react-toastify";
import Sidebar from "../../components/admin/Sidebar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FormControl } from "@mui/material";

function ViewMessage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState('nouveau'); 
  const [isLoading, setIsLoading] = useState(true);

  const statusColors = {
    nouveau: 'blue',
    lu: 'green',
    traité: 'orange',
    archivé: 'gray',
  };

  useEffect(() => {
    setIsLoading(true);
    axiosInstance.get(`/messages/${id}`)
      .then(response => {
        setMessage(response.data);
        setStatus(response.data.status || 'nouveau'); // Utiliser le statut du message ou 'nouveau' comme valeur par défaut
      })
      .catch(error => {
        toast.error("Erreur lors du chargement du message");
        console.error("Error fetching message:", error);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);

    axiosInstance.post(`/messages/edit/${id}`, { status: newStatus })
      .then(response => {
        toast.success("Statut mis à jour avec succès");
      })
      .catch(error => {
        toast.error("Erreur lors de la mise à jour du statut");
        console.error(error.response.data);;
      });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "5rem" }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Détails du Message
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Nom :</strong> {message?.senderFirstName} {message?.senderLastName}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Email :</strong> {message?.senderEmail}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Société :</strong> {message?.senderCompany}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Téléphone :</strong> {message?.senderPhone}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Sujet :</strong> {message?.subject}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Message :</strong> {message?.message}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Date d'envoi :</strong> {new Date(message?.created_at).toLocaleDateString()}
            </Typography>
            <Typography component="div" variant="body1" sx={{ mt: 2 }}>
              <strong>Statut :</strong>
              <FormControl fullWidth>
                <Select
                  value={status}
                  onChange={handleStatusChange}
                  displayEmpty
                  sx={{
                    backgroundColor: statusColors[status], // Couleur de fond basée sur le statut
                    color: 'white', // Couleur de texte
                    '& .MuiSvgIcon-root': { color: 'white' }, // Couleur de l'icône
                  }}
                >
                  {Object.entries(statusColors).map(([value, color]) => (
                    <MenuItem key={value} value={value} style={{ backgroundColor: color, color: 'white' }}>
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Typography>
          </Paper>
           <Button
           startIcon={<ArrowBackIcon />}
           onClick={handleBack}
           sx={{
            width: "30%",
            marginTop: "1rem",
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
         >
           Retour
         </Button>
         </>
        )}
      </Box>
    </Box>
  );
}

export default ViewMessage;
