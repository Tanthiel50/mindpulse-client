import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../../http-common/axios-configuration";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../../components/admin/Sidebar";
import ActionButtons from "../../components/admin/ActionsButtons";
import { Box, Typography } from "@mui/material";

function EditPost() {
  const [post, setPost] = useState({});
  const [categories, setCategories] = useState([]);
  const [mediaImages, setMediaImages] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMediaImages, setSelectedMediaImages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postResponse, categoriesResponse, mediaImagesResponse] =
          await Promise.all([
            axiosInstance.get(`/posts/${id}`),
            axiosInstance.get("/categories"),
            axiosInstance.get("/images"),
          ]);

        setPost(postResponse.data);
        setCategories(categoriesResponse.data);
        setMediaImages(mediaImagesResponse.data);

        // set selected categories
        const selectedCatsIds = postResponse.data.categories.map(
          (cat) => cat.id
        );
        setSelectedCategories(selectedCatsIds);

        // set selected media images
        const selectedMediaIds = postResponse.data.images.map(
          (image) => image.media_id
        );
        setSelectedMediaImages(selectedMediaIds);
      } catch (error) {
        toast.error("Erreur lors du chargement des données");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleCategoryChange = (event) => {
    setSelectedCategories(
      event.target.value.map((id) => parseInt(id, 10))
    );
  };

  const handleMediaImageChange = (event) => {
    setSelectedMediaImages(
      event.target.value.map((id) => parseInt(id, 10))
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", post.title);
      formData.append("slug", post.slug);
      formData.append("body", post.body);

      if (post.image) {
        formData.append("image", post.image);
      }

      selectedCategories.forEach((id) => {
        formData.append("categories[]", id);
      });

      selectedMediaImages.forEach((id) => {
        formData.append("images[]", id);
      });

      await axiosInstance.put(`/posts/${id}`, formData);

      toast.success("Post mis à jour avec succès");
    } catch (error) {
      toast.error("Erreur lors de la mise à jour du post");
      console.error("Error updating post:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "5rem" }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", color: "white", mb: 2 }}>
          Éditer un post
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <label htmlFor="title" style={{ color: "white" }}>
              Titre
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={post.title || ""}
              onChange={handleInputChange}
              style={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <label htmlFor="slug" style={{ color: "white" }}>
              Slug
            </label>
            <input
              type="text"
              name="slug"
              id="slug"
              value={post.slug || ""}
              onChange={handleInputChange}
              style={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <label htmlFor="body" style={{ color: "white" }}>
              Contenu
            </label>
            <textarea
              name="body"
              id="body"
              value={post.body || ""}
              onChange={handleInputChange}
              style={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
          {post.image_url && (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
      Image Actuelle
    </Typography>
    <img src={post.image_url} alt="Image du post" style={{ maxWidth: "30%", height: "auto" }} />
  </Box>
)}
            <label htmlFor="image" style={{ color: "white" }}>
              Image
            </label>
            <input type="file" name="image" id="image" onChange={handleInputChange} />
          </Box>
          <Box sx={{ mb: 3 }}>
            <label htmlFor="categories" style={{ color: "white" }}>
              Catégories
            </label>
            <select
              name="categories"
              id="categories"
              multiple
              value={selectedCategories}
              onChange={handleCategoryChange}
              style={{ width: "100%" }}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </Box>
          <Box sx={{ mb: 3 }}>
          {post.images && post.images.length > 0 && (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
      Images Liées
    </Typography>
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {post.images.map((image) => (
        image.media.map((media) => (
          <Box key={media.id} sx={{ mb: 2 }}>
            <img src={media.original_url} alt={image.alt || "Image liée"} style={{ width: 100, height: "auto" }} />
          </Box>
        ))
      ))}
    </Box>
  </Box>
)}
            <label htmlFor="mediaImages" style={{ color: "white" }}>
              Images Média
            </label>
            <select
              name="mediaImages"
              id="mediaImages"
              multiple
              value={selectedMediaImages}
              onChange={handleMediaImageChange}
              style={{ width: "100%" }}
            >
              {mediaImages.map((image) => (
                <option key={image.id} value={image.id}>
                  {image.name}
                </option>
              ))}
            </select>
          </Box>
          <ActionButtons onSave={handleSubmit} onCancel={() => {}} />
        </form>
      </Box>
    </Box>
  );
}

export default EditPost;
