import Contact from "../Contact";
import { Typography } from "@mui/material";
import { StyledContacts, StyledSideContacts } from "./style";
import { useProfileContext } from "../../../../contexts/ProfileContext";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const SideContacts = () => {
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { user } = useProfileContext();

  useEffect(() => {
    const socket = io("http://localhost:3001", {
      query: { userId: user.id },
    });

    socket.emit("userOnlineInfo", {
      userId: user.id,
      userName: user.name,
    });

    socket.on("userOnline", (username) => {
      setOnlineUsers((prevUsers) => [...prevUsers, username]);
    });

    socket.on("userOffline", (username) => {
      setOnlineUsers((prevUsers) =>
        prevUsers.filter((user) => user !== username)
      );
    });

    socket.on("onlineUsersList", (users) => {
      console.log('executou')
      setOnlineUsers(users);
    });

    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <StyledSideContacts>
      <header>
        <Typography component={"h2"} fontSize="1.5rem">
          Conversas
        </Typography>
        <input placeholder="Barra de pesquisa" type="search" name="" id="" />
      </header>
      <StyledContacts>
        {onlineUsers.map((name, index) => { 
          if (name && name !== user.name) {
            return <Contact key={name + index} name={name} />;
          }

          return null;
        })}
      </StyledContacts>
    </StyledSideContacts>
  );
};

export default SideContacts;
