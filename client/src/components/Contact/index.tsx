import { Avatar, Typography } from "@mui/material";
import { StyledBadge, StyledContact } from "./style";

interface IContactProps {
  name: string;
}

const Contact = ({ name }: IContactProps) => {
  return (
    <StyledContact>
      {/* <Avatar sx={{ width: "35px", height: "35px", bgcolor: "deepskyblue" }}>
        {name[0]}
      </Avatar> */}
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt={name[0]} src="/static/images/avatar/1.jpg" />
      </StyledBadge>
      <Typography>{name}</Typography>
    </StyledContact>
  );
};

export default Contact;
