import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../components/admin/Sidebar";
import TableView from "../../components/admin/TableView";


function PostPage() {
  const userFriendlyHeaders = {
    title: "Titre",
    slug: "Slug",
    body: "Contenu",
    image: "Thumbnail",
    imageAlt: "Nom image",
    created_at: "Date de création",
    metaDescription: "Meta description",
    categories: "Catégories",
    actions: "Actions",
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TableView
          title="Articles"
          createPath="/admin/create-post"
          tableHeaders={[
            "title",
            "slug",
            "body",
            "image",
            "imageAlt",
            "created_at",
            "metaDescription",
            "actions",
          ]}
          fetchUrl="/posts"
          userFriendlyHeaders={userFriendlyHeaders}
          actionButtonConfig={{
            editPath: "/admin/edit-post/:id",
            deletePath: "/admin/posts/delete/:id",
          }}
        />
      </Box>
    </Box>
  )
}

export default PostPage