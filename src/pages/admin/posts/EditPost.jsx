import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  Button,
  TextField,
  Box,
  Typography,
  CircularProgress,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { axiosInstance } from "../../../http-common/axios-configuration";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    body: "",
    thumbnailAlt: "",
    metaDescription: "",
  });
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [imageList, setImageList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesAndPostData = async () => {
      try {
        const imagesResponse = await axiosInstance.get("/images");
        const [postRes, categoriesRes] = await Promise.all([
          axiosInstance.get(`/posts/${id}`),
          axiosInstance.get("/categories"),
        ]);
        const postCategories = postRes.data.categories.map((cat) => cat.id); // Assurez-vous que cela correspond à votre structure de données
        setCategories(categoriesRes.data);
        setSelectedCategories(postCategories);

        setFormData({
          title: postRes.data.title,
          slug: postRes.data.slug,
          body: postRes.data.body,
          thumbnailAlt: postRes.data.thumbnailAlt,
          metaDescription: postRes.data.metaDescription,
          publishedAt: postRes.data.publishedAt
            ? new Date(postRes.data.publishedAt).toISOString().split("T")[0]
            : "",
        });
        setThumbnailUrl(postRes.data.thumbnail_url);

        const formattedImages = imagesResponse.data.map((image) => ({
          title: image.title,
          value: image.media_url,
        }));
        setImageList(formattedImages);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        toast.error("Erreur lors du chargement des données du post");
      }
    };

    fetchCategoriesAndPostData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleEditorChange = (content) => {
    setFormData((prevState) => ({ ...prevState, body: content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      await axiosInstance.post(`/posts/edit/${id}`, submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Post mis à jour avec succès.");
      navigate("/admin/posts");
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
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        minHeight: "100vh",
        marginBottom: "2rem"
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
        {" "}
        Éditer un article
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
            value={formData.body}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              image_list: imageList,
            }}
            onEditorChange={handleEditorChange}
          />
        )}
        <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
          Image de l'article
        </Typography>
        {thumbnailUrl && (
          <Box sx={{ my: 2 }}>
            <Typography>Thumbnail actuel:</Typography>
            <img
              src={thumbnailUrl}
              alt="Thumbnail actuel"
              style={{ width: 500, height: "auto" }}
            />
          </Box>
        )}
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
          sx={{ backgroundColor: "white" }}
          value={formData.slug}
          onChange={handleInputChange}
        />
        <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
          Catégories
        </Typography>
        <Select
        fullWidth
          multiple
          sx={{ backgroundColor: "white" }}
          value={selectedCategories}
          onChange={(event) => setSelectedCategories(event.target.value)}
          renderValue={(selected) =>
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
          Mettre à jour le Post
        </Button>
      </Box>
    </Box>
  );
};

export default EditPost;
