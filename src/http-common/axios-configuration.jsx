// axios-configuration.js
import axios from "axios";

// Configuration de l'URL de base et d'autres paramètres par défaut
axios.defaults.baseURL = `https://mindpulse.fr/api`;
axios.defaults.withCredentials = false;

// Ajout du token d'authentification aux headers par défaut s'il existe
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Exportation de l'instance axios configurée
export const axiosInstance = axios;

export const getImageUrl = async (imageId) => {
  try {
    const response = await axiosInstance.get(`/media/${imageId}`);
    return response.data.file_name;
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return null;
  }
};