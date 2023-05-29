import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { ICopyrightProps } from "../../interfaces/components";

const Copyright = ({ name, color, linkColor, marginTop }: ICopyrightProps) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: marginTop || 5, color: color || "" }}
    >
      {"Made By © "}
      <Link
        style={{ textDecoration: "none", color: linkColor || "" }}
        color="inherit"
        to="https://www.linkedin.com/in/gabrielmalafaia/"
      >
        <span>{name}</span>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
