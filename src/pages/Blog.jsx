import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
  TextField,
  InputAdornment,
  Button,
  ButtonGroup,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { axiosInstance } from "../http-common/axios-configuration";
import { Link } from 'react-router-dom';

const Blog = () => {
  const [categories, setCategories] = useState(["All"]);
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const baseURL = "https://mindpulse.fr";

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) =>
        post.categories.some((category) => category.name === activeCategory)
      );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories");
        const categoriesFromApi = response.data.map(
          (category) => category.name
        );
        setCategories(["All", ...categoriesFromApi]); // Ajouter 'All' aux catégories chargées
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories:", error);
      }
    };
    const fetchPosts = async () => {
      try {
        const { data } = await axiosInstance.get("/posts");
        setPosts(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des posts:", error);
      }
    };

    fetchPosts();
    fetchCategories();
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        color: "white",
        p: 3,
        minHeight: "100vh",
        paddingTop: "10rem",
      }}
    >
      <Container>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{ mb: 4 }}
        >
          Mind Pulse: The Tech Heartbeat
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <TextField
            placeholder="Search Article..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "white" }} />
                </InputAdornment>
              ),
              style: { color: "white" },
            }}
            variant="outlined"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 1,
              input: { color: "white" },
              width: "50%",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <ButtonGroup
            variant="contained"
            orientation={isMobile ? "vertical" : "horizontal"}
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                onClick={() => handleCategoryClick(category)}
                sx={{
                  backgroundColor:
                    activeCategory === category ? "#AE8ABE" : "transparent",
                  "&:hover": {
                    backgroundColor: "#AE8ABE",
                  },
                  mb: isMobile ? 1 : 0,
                }}
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        <Grid container spacing={4}>
          {filteredPosts.map((post, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card
                sx={{
                  backgroundColor: "#1e1e1e",
                  color: "white",
                  borderRadius: "0",
                  minHeight: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={`${baseURL}/storage/thumbnail/${post.thumbnail}`}
                  alt={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  {/* {post.categories.map((category, catIndex) => (
                    <React.Fragment key={catIndex}>
                      {catIndex > 0 && ", "}
                      {category.name}
                    </React.Fragment>
                  ))} */}
                  <Typography variant="body2" color="gray">
                    Publié le {post.publishedAt.split("T")[0]}
                  </Typography>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
