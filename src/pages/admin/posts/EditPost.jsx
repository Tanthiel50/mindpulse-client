import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, TextField, Box, Typography, CircularProgress } from "@mui/material";
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
    isActive: true,
  });
  const [thumbnail, setThumbnail] = useState(null); 
  const [thumbnailUrl, setThumbnailUrl] = useState(""); 
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axiosInstance.get(`/posts/${id}`);
        const imagesResponse = await axiosInstance.get("/images");
        console.log(postResponse.data);

        
        setFormData({
          title: postResponse.data.title,
          slug: postResponse.data.slug,
          body: postResponse.data.body,
          thumbnailAlt: postResponse.data.thumbnailAlt,
          metaDescription: postResponse.data.metaDescription,
          isActive: postResponse.data.isActive,
        });
        setThumbnailUrl(postResponse.data.thumbnail_url);

        const formattedImages = imagesResponse.data.map(image => ({
          title: image.title,
          value: image.media_url,
        }));
        setImageList(formattedImages);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        toast.error("Erreur lors du chargement des données du post");
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleEditorChange = (content) => {
    setFormData(prevState => ({ ...prevState, body: content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });
    if (thumbnail) {
      submitData.append('thumbnail', thumbnail);
    }

    try {
      await axiosInstance.post(`/posts/edit/${id}`, submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Post mis à jour avec succès.');
      navigate('/admin/posts');
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
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Sidebar />
      <Typography variant="h4" sx={{ marginBottom: "1rem", marginTop: "5rem" }}>Éditer un article</Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate  sx={{
          mt: 1,
        }}>
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
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="slug"
          label="Slug du Post"
          name="slug"
          value={formData.slug}
          onChange={handleInputChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="thumbnailAlt"
          label="Description Alt de l'image"
          name="thumbnailAlt"
          value={formData.thumbnailAlt}
          onChange={handleInputChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="metaDescription"
          label="Meta Description"
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleInputChange}
        />
        {thumbnailUrl && (
          <Box sx={{ my: 2 }}>
            <Typography>Thumbnail actuel:</Typography>
            <img src={thumbnailUrl} alt="Thumbnail actuel" style={{ maxWidth: 200, maxHeight: 200 }} />
          </Box>
        )}
        <TextField
          type="file"
          onChange={handleThumbnailChange}
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
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
              toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              image_list: imageList,
            }}
            onEditorChange={handleEditorChange}
          />
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Mettre à jour le Post
        </Button>
      </Box>
    </Box>
  );
};

export default EditPost;
