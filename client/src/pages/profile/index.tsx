import { Conversations } from "./components/Conversations";
import SideBar from "./components/SideBar";
import SideContacts from "./components/SideContacts";
import { StyledProfile } from "./style";

const Profile = () => {
  return (
    <StyledProfile>
      <SideBar />
      <SideContacts />
      <Conversations />
    </StyledProfile>
  );
};

export default Profile;
