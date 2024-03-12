import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button, TextField, Box } from '@mui/material';
import { axiosInstance } from '../../../http-common/axios-configuration';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    body: '',
    thumbnailAlt: '',
    metaDescription: '',
  });
  const [thumbnail, setThumbnail] = useState(null);
  const navigate = useNavigate();

  const handleEditorChange = (content) => {
    setFormData(prevState => ({ ...prevState, body: content }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, thumbnail);

    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });
    if (thumbnail) {
      submitData.append('thumbnail', thumbnail);
    }

    try {
      await axiosInstance.post('/posts', submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Post créé avec succès');
      navigate("/admin/posts");
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            if (typeof error.response.data.message === 'object') {
              const messages = Object.values(error.response.data.message).join('. ');
              toast.error(`Erreur : ${messages}`);
            } else {
              toast.error(`Erreur : ${error.response.data.message}`);
            }
          } else {
            toast.error('Une erreur est survenue lors de la création du mot.');
          }
          console.error('Erreur de soumission:', error);
        }
    };

  return (
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          <Editor
      apiKey='2qq1i55w5ls7inhry7iv14yjlpgenygiusraie5995o13uz0'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_author: 'Author name',
      }}
    onEditorChange={handleEditorChange}
    />
    <TextField
  type="file"
  onChange={handleThumbnailChange}
  variant="outlined"
  fullWidth
/>
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
          />
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
          />
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
          />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
          >
              Publier le Post
          </Button>
      </Box>
  );
};

export default CreatePost;