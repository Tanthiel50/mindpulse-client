import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { theme } from "../../styles/theme";

export const BootstrapButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  lineHeight: 1.5,
  "&:hover": {
    backgroundColor: "white",
    color: "#AE8ABE",
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
}));