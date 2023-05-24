import { Avatar, Typography } from "@mui/material";
import { StyledBadge, StyledContact } from "./style";
import { IContactProps } from "../../interfaces";

const Contact = ({ name }: IContactProps) => {
  return (
    <StyledContact>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt={name[0]} src="." />
      </StyledBadge>
      <Typography>{name}</Typography>
    </StyledContact>
  );
};

export default Contact;
