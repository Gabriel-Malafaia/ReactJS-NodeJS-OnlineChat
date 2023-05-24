import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import { StyledSideBar } from "./style";
import { useProfileContext } from "../../../../contexts/ProfileContext";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { user } = useProfileContext();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }
  
  return (
    <StyledSideBar>
      <Avatar sx={{ width: "45px", height: "45px" }}>{user.name[0]}</Avatar>
      <div>
        <SettingsIcon />
        <ExitToAppIcon onClick={handleLogout} />
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
