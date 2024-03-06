import React from "react";
import Box from "@mui/material/Box";
import TableView from "../../components/admin/TableView";
import Sidebar from "../../components/admin/Sidebar";

function CategoryPage() {
  const userFriendlyHeaders = {
    name: "Nom",
    slug: "Slug",
    description: "Description",
    actions: "Actions",
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TableView
          title="Categories"
          createPath="/admin/create-categorie"
          tableHeaders={[
            "name",
            "slug",
            "description",
            "actions",
          ]}
          fetchUrl="/categories"
          userFriendlyHeaders={userFriendlyHeaders}
          actionButtonConfig={{
            editPath: "/admin/edit-categorie/:id",
            deletePath: "/admin/categories/delete/:id",
          }}
        />
      </Box>
    </Box>
  )
}

export default CategoryPage