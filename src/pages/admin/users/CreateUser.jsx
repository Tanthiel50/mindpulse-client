import React, { useState } from "react";
import { Box, Button, TextField, MenuItem, Typography, IconButton, InputAdornment, CircularProgress } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../http-common/axios-configuration";
import Sidebar from "../../components/admin/Sidebar";
import { toast } from "react-toastify";

function CreateUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '', // Initialisez sans valeur par défaut pour permettre à l'utilisateur de choisir
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword => !showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axiosInstance.post("/users", formData);
      toast.success("Utilisateur créé avec succès");
      navigate("/admin/users");
    } catch (error) {
      toast.error("Erreur lors de la création de l'utilisateur");
      console.error("Erreur lors de la création :", error);
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
        minHeight: "100vh"
      }}
    >
      <Sidebar />
      <Typography variant="h4" sx={{ 
        marginBottom: "1rem",
        marginTop: "5rem" 

        }}>
        Créer un Utilisateur
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: "50%", '& .MuiTextField-root': { mb: 2 } }}>
        <TextField
          label="Nom"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ backgroundColor: "white" }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ backgroundColor: "white" }}
        />
        <TextField
          label="Mot de Passe"
          sx={{ backgroundColor: "white" }}
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleInputChange}
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          select
          label="Rôle"
          name="role"
          sx={{ backgroundColor: "white" }}
          value={formData.role}
          onChange={handleInputChange}
          fullWidth
          required
        >
          {["admin", "user"].map(role => (
            <MenuItem key={role} value={role}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          sx={{ backgroundColor: "white", color: "black", fontWeight: "bold", "&:hover": { backgroundColor: "black", color: "white" } }}
        >
          {isLoading ? <CircularProgress size={24} /> : "Créer"}
        </Button>
      </Box>
    </Box>
  );
}

export default CreateUser;
