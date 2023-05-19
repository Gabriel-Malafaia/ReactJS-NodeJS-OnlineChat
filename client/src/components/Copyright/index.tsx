import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ICopyrightProps } from "../../interfaces/components";

const Copyright = ({ name }: ICopyrightProps) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 5 }}
    >
      {"Made By © "}
      <Link color="inherit" to="https://www.linkedin.com/in/gabrielmalafaia/">
        <span>{name}</span>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export { Copyright };
