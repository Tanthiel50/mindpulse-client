import { CircularProgress, Box } from "@mui/material";

const LoadingIndicator = () => (
  <Box
    sx={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1301, // Assurez-vous qu'il est supérieur aux autres éléments de la page
    }}
  >
    <CircularProgress />
  </Box>
);

export default LoadingIndicator;