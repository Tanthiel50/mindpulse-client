import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../http-common/axios-configuration";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility"; // Importer l'icône d'oeil
import { toast } from "react-toastify";
import Sidebar from "../../components/admin/Sidebar";

function MessagePage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const statusColors = {
    nouveau: "blue",
    lu: "green",
    traité: "orange",
    archivé: "gray",
  };

  const userFriendlyHeaders = {
    senderFirstName: "Nom",
    senderLastName: "Prénom",
    senderEmail: "Email",
    senderCompany: "Société",
    senderPhone: "Téléphone",
    subject: "Sujet",
    title: "Title",
    message: "Message",
    created_at: "Date d'envoi",
    status: "Statut",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/messages");
        setData(response.data);
      } catch (error) {
        toast.error("Erreur lors du chargement des messages");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/messages/${id}`);
      toast.success("Message supprimé avec succès");
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      toast.error("Erreur lors de la suppression");
      console.error("Erreur lors de la suppression:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "5rem" }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", color: "white" }}>
          Messages
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {Object.values(userFriendlyHeaders).map((header, index) => (
                  <TableCell key={index}>{header}</TableCell>
                ))}
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  {Object.keys(userFriendlyHeaders).map((field) => (
                    <TableCell key={`${row.id}-${field}`}>
                      {field === "status" ? (
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: statusColors[row[field]],
                            color: "white",
                          }}
                        >
                          {row[field].charAt(0).toUpperCase() +
                            row[field].slice(1)}
                        </Button>
                      ) : (
                        row[field]
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button
                      onClick={() => navigate(`/admin/message/${row.id}`)}
                    >
                      <VisibilityIcon sx={{ color: "black" }} />
                    </Button>
                    <Button onClick={() => handleDelete(row.id)}>
                      <DeleteIcon sx={{ color: "red" }} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default MessagePage;
