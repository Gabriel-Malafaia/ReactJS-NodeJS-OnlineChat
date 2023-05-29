import SideBar from "./components/SideBar";
import SideContacts from "./components/SideContacts";
import Conversations from "./components/Conversations";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { StyledProfile } from "./style";
import { useProfileContext } from "../../contexts/ProfileContext";

const Profile = () => {
  const { setSocket } = useProfileContext();

  useEffect(() => {
    const socket = io("http://localhost:3001/");
    setSocket(socket);
  }, []);

  return (
    <StyledProfile>
      <SideBar />
      <SideContacts />
      <Conversations />
    </StyledProfile>
  );
};

export default Profile;
