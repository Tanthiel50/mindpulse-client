import React, { useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../components/admin/Sidebar";
import TableView from "../../components/admin/TableView";
import ImageTableView from "../../components/admin/ImageTableView";
import { axiosInstance } from "../../../http-common/axios-configuration";
import { toast } from "react-toastify";

function ImagePage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const userFriendlyHeaders = {
    title: "Titre",
    alt: "Alt",
    id: "Image",
    actions: "Actions",
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/images/${id}`);
      toast.success('Suppression réussie');
      setRefreshKey(oldKey => oldKey + 1);
    } catch (error) {
      toast.error('Erreur lors de la suppression');
      console.error('Erreur lors de la suppression:', error);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ImageTableView
          key={refreshKey}
          title="Images"
          createPath="/admin/create-image"
          tableHeaders={["id", "title", "alt", "actions"]}
          fetchUrl="/images"
          userFriendlyHeaders={userFriendlyHeaders}
          imageColumn="media_id"
          actionButtonConfig={{
            editPath: "/admin/edit-image/:id",
          }}
          onDelete={handleDelete}
        />
      </Box>
    </Box>
  );
}

export default ImagePage