import AlertDialog from "../../../../components/AlertDialog";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { StyledSideBar } from "./style";
import { useProfileContext } from "../../../../contexts/ProfileContext";

const SideBar = () => {
  const { user } = useProfileContext();
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  return (
    <>
      <AlertDialog open={openModal} setOpen={setOpenModal} />
      <StyledSideBar>
        <Avatar
          sx={{
            width: "45px",
            height: "45px",
            background: "#12beb1",
            color: "white",
          }}
        >
          {user.name[0]}
        </Avatar>
        <div>
          <SettingsIcon />
          <ExitToAppIcon onClick={handleOpenModal} />
        </div>
      </StyledSideBar>
    </>
  );
};

export default SideBar;
