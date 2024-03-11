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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../../components/admin/Sidebar";
import ActionButtons from "../../components/admin/ActionsButtons";

function PostPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get("/posts");
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        toast.error("Erreur lors du chargement des articles");
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const userFriendlyHeaders = {
    title: "Titre",
    slug: "Slug",
    body: "Contenu",
    image: "Thumbnail",
    created_at: "Date de création",
    metaDescription: "Meta description",
    categories: "Catégories",
    actions: "Actions",
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/posts/${id}`);
      toast.success("Suppression réussie");
      setPosts((oldPosts) => oldPosts.filter((post) => post.id !== id));
    } catch (error) {
      toast.error("Erreur lors de la suppression");
      console.error("Erreur lors de la suppression:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "5rem" }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", color: "white", mb: 2 }}
        >
          Articles
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {Object.keys(userFriendlyHeaders).map((header, index) => (
                  <TableCell key={index}>
                    {userFriendlyHeaders[header]}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  {Object.keys(userFriendlyHeaders).map((header) => {
                    if (header === "image") {
                      const imageUrl = `/storage/images/${post[header]}`;
                      return (
<TableCell key={`${post.id}-image`}>
    {post.image_url && (
        <img
            src={post.image_url}
            alt={post.imageAlt || "Post image"}
            style={{ width: 100, height: "auto" }}
        />
    )}
</TableCell>
                      );
                    } else if (header === "categories") {
                      // Votre logique existante pour afficher les catégories
                      return (
                        <TableCell key={`${post.id}-${header}`}>
                          {post.categories.map((cat) => cat.name).join(", ")}
                        </TableCell>
                      );
                    } else if (header !== "actions") {
                      // Votre logique existante pour afficher d'autres champs
                      return (
                        <TableCell key={`${post.id}-${header}`}>
                          {post[header]}
                        </TableCell>
                      );
                    }
                    return null;
                  })}
<TableCell key={`${post.id}-media-image`}>
    {post.media_image_url && (
        <img
            src={post.media_image_url}
            alt={post.images[0].title || "Media image"}
            style={{ width: 100, height: "auto" }}
        />
    )}
</TableCell>




                  <TableCell>
                    <ActionButtons
                      row={post}
                      onEdit={() => navigate(`/admin/edit-post/${post.id}`)}
                      onDelete={() => handleDelete(post.id)}
                    />
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

export default PostPage;
