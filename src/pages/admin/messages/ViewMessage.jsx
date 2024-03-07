import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../components/admin/Sidebar";
import TableView from "../../components/admin/TableView";


function ViewMessage() {

    const userFriendlyHeaders = {
      senderFirstName: "Nom",
      senderLastName: "Prénom",
      senderEmail: "Email",
      senderCompany: "Soiété",
      senderPhone: "Téléphone",
      subject: "Sujet",
      title: "Title",
      message: "Message",
      created_at: "Date d'envoi",
      actions: "Actions"
    };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TableView
          title="Categories"
          createPath="/admin/create-categorie"
          tableHeaders={[
            "senderFirstName",
            "senderLastName",
            "senderEmail",
            "senderCompany",
            "senderPhone",
            "subject",
            "title",
            "message",
            "created_at",
            "actions",
          ]}
          fetchUrl="/messages"
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

export default ViewMessage