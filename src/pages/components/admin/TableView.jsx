import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../http-common/axios-configuration";
import ActionButtons from "./ActionsButtons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TableView = ({
  title,
  createPath,
  tableHeaders,
  fetchUrl,
  userFriendlyHeaders,
  actionButtonConfig,
  onDelete,
  columns,
}) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(fetchUrl);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const handleCreateNew = () => {
    navigate(createPath);
  };

  const handleDelete = async (id) => {
    try {
      if (onDelete) {
        await onDelete(id);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  };

  return (
    <Box
      sx={{
        marginTop: "5rem",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          {title}
        </Typography>
        <Button
          variant="contained"
          onClick={handleCreateNew}
          sx={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          Créer nouveau
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeaders.map((header, index) => (
                <TableCell key={index}>{userFriendlyHeaders[header]}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {tableHeaders.map((header) => {
                  if (header === "actions") {
                    // Utiliser ici les props de configuration pour les boutons d'action
                    return (
                      <TableCell key={`${row.id}-actions`}>
                        <ActionButtons
                          row={row}
                          onEdit={() =>
                            navigate(
                              actionButtonConfig.editPath.replace(":id", row.id)
                            )
                          }
                          onDelete={handleDelete}
                        />
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={`${row.id}-${header}`}>
                      {row[header]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableView;
