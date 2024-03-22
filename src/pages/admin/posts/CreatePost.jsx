import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  Button,
  TextField,
  Box,
  Typography,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { axiosInstance } from "../../../http-common/axios-configuration";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../../components/admin/Sidebar";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    body: "",
    thumbnailAlt: "",
    metaDescription: "",
    publishedAt: "",
  });
  const [thumbnail, setThumbnail] = useState(null);
  const [editorConfig, setEditorConfig] = useState({});
  const navigate = useNavigate();
  const [imageList, setImageList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleEditorChange = (content) => {
    setFormData((prevState) => ({ ...prevState, body: content }));
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axiosInstance.get("/images");
        const formattedImages = data.map((image) => ({
          title: image.title,
          value: image.media_url, // Assurez-vous que c'est la bonne propriété
        }));
        setImageList(formattedImages);
      } catch (error) {
        console.error("Erreur lors de la récupération des images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosInstance.get("/categories");
        setCategories(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, thumbnail);

    const submitData = new FormData();
    Object.keys(formData).forEach((key) => {
      submitData.append(key, formData[key]);
    });
    if (thumbnail) {
      submitData.append("thumbnail", thumbnail);
    }
    selectedCategories.forEach((catId) => {
      submitData.append("category_id[]", catId);
    });

    try {
      await axiosInstance.post("/posts", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Post créé avec succès");
      navigate("/admin/posts");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        if (typeof error.response.data.message === "object") {
          const messages = Object.values(error.response.data.message).join(
            ". "
          );
          toast.error(`Erreur : ${messages}`);
        } else {
          toast.error(`Erreur : ${error.response.data.message}`);
        }
      } else {
        toast.error("Une erreur est survenue lors de la création du mot.");
      }
      console.error("Erreur de soumission:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        marginBottom: "2rem",
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
        Créer un article
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          mt: 1,
          width: "50%",
        }}
      >
        <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
          Titre de l'article
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Titre du Post"
          name="title"
          autoFocus
          value={formData.title}
          onChange={handleInputChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
          Contenu de l'article
        </Typography>
        {imageList.length > 0 && (
          <Editor
            apiKey="2qq1i55w5ls7inhry7iv14yjlpgenygiusraie5995o13uz0"
            init={{
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
              toolbar:
                "undo redo | blocks fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
              image_list: imageList,
            }}
            onEditorChange={handleEditorChange}
          />
        )}
        <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
          Image de l'article
        </Typography>
        <TextField
          type="file"
          onChange={handleThumbnailChange}
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
          Nom de l'image
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="thumbnailAlt"
          label="Description Alt de l'image"
          name="thumbnailAlt"
          autoFocus
          value={formData.thumbnailAlt}
          onChange={handleInputChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
          Date de publication
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="publishedAt"
          label="Date de publication"
          type="date"
          name="publishedAt"
          value={formData.publishedAt}
          onChange={handleInputChange}
          sx={{ backgroundColor: "white" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
          Slug de l'article
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="slug"
          label="Slug du Post"
          name="slug"
          autoFocus
          value={formData.slug}
          onChange={handleInputChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
          Catégories
        </Typography>
        <Select
          multiple
          fullWidth
          sx={{ backgroundColor: "white" }}
          value={selectedCategories}
          onChange={(event) => setSelectedCategories(event.target.value)}
          renderValue={(selected) =>
            // Mappez les identifiants sélectionnés aux noms des catégories pour les afficher
            selected
              .map((id) => categories.find((cat) => cat.id === id).name)
              .join(", ")
          }
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>

        <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
          Meta description
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="metaDescription"
          label="Meta Description"
          name="metaDescription"
          autoFocus
          value={formData.metaDescription}
          onChange={handleInputChange}
          sx={{ backgroundColor: "white" }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            marginTop: "2rem",
            "&:hover": { backgroundColor: "black", color: "white" },
          }}
        >
          Publier le Post
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePost;
