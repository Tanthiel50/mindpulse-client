import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../components/admin/Sidebar";
import TableView from "../../components/admin/TableView";
import ImageTableView from "../../components/admin/ImageTableView";

function ImagePage() {
  const userFriendlyHeaders = {
    title: "Titre",
    alt: "Alt",
    id: "Image",
    actions: "Actions",
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ImageTableView
          title="Images"
          createPath="/admin/create-image"
          tableHeaders={["id", "title", "alt", "actions"]}
          fetchUrl="/images"
          userFriendlyHeaders={userFriendlyHeaders}
          actionButtonConfig={{
            editPath: "/admin/edit-image/:id",
            deletePath: "/admin/images/delete/:id",
          }}
          imageColumn="media_id"
        />
      </Box>
    </Box>
  );
}

export default ImagePage