import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import { StyledSideBar } from "./style";

const SideBar = () => {
  return (
    <StyledSideBar>
      <Avatar sx={{ width: "45px", height: "45px" }}>N</Avatar>
      <div>
        <SettingsIcon />
        <ExitToAppIcon />
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
