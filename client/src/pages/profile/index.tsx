import SideBar from "../../components/SideBar";
import SideContacts from "../../components/SideContacts";
import { StyledProfile } from "./style";

const Profile = () => {
  return (
    <StyledProfile>
      <SideBar />
      <SideContacts />
    </StyledProfile>
  );
};

export default Profile;
