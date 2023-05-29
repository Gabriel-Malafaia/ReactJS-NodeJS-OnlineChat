// import { stringAvatar } from "../../../../services/utils";
import { IContactProps } from "../../../../interfaces/pages/profile";
import { useProfileContext } from "../../../../contexts/ProfileContext";
import { Avatar, Typography } from "@mui/material";
import { StyledBadge, StyledContact } from "./style";

const Contact = ({ name, id, socketId }: IContactProps) => {
  const { setSelectedChat } = useProfileContext();

  function handleSelectedChat() {
    setSelectedChat({
      userName: name,
      userId: id,
      socketId,
    });
  }

  return (
    <StyledContact onClick={handleSelectedChat}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar children={`${name.split(" ")[0][0]}${name.split(" ")[1][0]}`} />
      </StyledBadge>
      <Typography>{name}</Typography>
    </StyledContact>
  );
};

export default Contact;
