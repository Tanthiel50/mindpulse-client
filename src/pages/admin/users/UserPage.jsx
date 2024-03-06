import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../components/admin/Sidebar";
import TableView from "../../components/admin/TableView";

function UserPage() {
  const userFriendlyHeaders = {
    id: "ID",
    name: "Nom",
    email: "Adresse e-mail",
    role: "Rôle",
    created_at: "Date de création",
    actions: "Actions",
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TableView
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
            deletePath: "/admin/users/delete/:id",
          }}
        />
      </Box>
    </Box>
  );
};

export default UserPage