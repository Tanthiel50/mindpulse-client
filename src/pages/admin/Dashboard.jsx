import React from "react";
import Sidebar from "../components/admin/Sidebar";
import TableView from "../components/admin/TableView";
import Box from "@mui/material/Box";

const Dashboard = () => {
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
          createPath="/admin/users/create"
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
            editPath: "/admin/users/edit/:id",
            deletePath: "/admin/users/delete/:id",
          }}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
