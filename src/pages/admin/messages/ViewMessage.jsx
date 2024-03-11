import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../../http-common/axios-configuration";
import { toast } from "react-toastify";
import Sidebar from "../../components/admin/Sidebar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function ViewMessage() {
  const { id } = useParams();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axiosInstance.get(`/messages/${id}`);
        setMessage(response.data);
      } catch (error) {
        toast.error("Erreur lors du chargement du message");
        console.error("Error fetching message:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessage();
  }, [id]);

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
          </Paper>
           <Button
           startIcon={<ArrowBackIcon />}
           onClick={handleBack}
           sx={{
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
