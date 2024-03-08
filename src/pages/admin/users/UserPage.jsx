import React, { useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../components/admin/Sidebar";
import TableView from "../../components/admin/TableView";
import { axiosInstance } from "../../../http-common/axios-configuration";
import { toast } from "react-toastify";

function UserPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const userFriendlyHeaders = {
    id: "ID",
    name: "Nom",
    email: "Adresse e-mail",
    role: "Rôle",
    created_at: "Date de création",
    actions: "Actions",
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/users/${id}`);
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
          title="Utilisateurs"
          createPath="/admin/create-user"
          tableHeaders={[
            "id",
            "name",
            "email",
            "role",
            "created_at",
            "actions",
          ]}
          fetchUrl="/users"
          userFriendlyHeaders={userFriendlyHeaders}
          actionButtonConfig={{
            editPath: "/admin/edit-user/:id",
          }}
          onDelete={handleDelete}
        />
      </Box>
    </Box>
  );
};

export default UserPage