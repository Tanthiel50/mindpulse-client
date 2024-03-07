import React, { useState } from "react";
import Box from "@mui/material/Box";
import TableView from "../../components/admin/TableView";
import Sidebar from "../../components/admin/Sidebar";
import { axiosInstance } from "../../../http-common/axios-configuration";
import { toast } from "react-toastify";

function CategoryPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const userFriendlyHeaders = {
    name: "Nom",
    slug: "Slug",
    description: "Description",
    actions: "Actions",
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/categories/${id}`);
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
        <TableView
          key={refreshKey}
          title="Categories"
          createPath="/admin/create-categorie"
          tableHeaders={["name", "slug", "description", "actions"]}
          fetchUrl="/categories"
          userFriendlyHeaders={userFriendlyHeaders}
          actionButtonConfig={{
            editPath: "/admin/edit-categorie/:id",
          }}
          onDelete={handleDelete}
        />
      </Box>
    </Box>
  );
}

export default CategoryPage;