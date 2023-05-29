import Contact from "../Contact";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { toastError } from "../../../../styles/components/Toastify";
import { IOnlineUsers } from "../../../../interfaces/pages/profile";
import { useProfileContext } from "../../../../contexts/ProfileContext";
import { useEffect, useState } from "react";
import { OutlinedInput, Typography } from "@mui/material";
import { StyledContacts, StyledSideContacts } from "./style";

const SideContacts = () => {
  const { user, socket, setSelectedChat } = useProfileContext();
  const [onlineUsers, setOnlineUsers] = useState<IOnlineUsers[]>([]);
  const [searchValue, setSearchValue] = useState("");

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    if (socket) {
      socket.emit("firstConnection", {
        userId: user.id,
        userName: `${user.name} ${user.lastName}`,
      });

      socket.on("userOnline", (user: IOnlineUsers) => {
        setOnlineUsers((prevUsers) => [...prevUsers, user]);
      });

      socket.on("userOffline", (user: IOnlineUsers) => {
        setSelectedChat(undefined);
        toastError(`${user.userName} Desconectou!`);
        setOnlineUsers((prevUsers) =>
          prevUsers.filter((u) => u.userId !== user.userId)
        );
      });

      socket.on("onlineUsersList", (list: IOnlineUsers[]) => {
        setOnlineUsers(list);
      });

      return () => {
        socket.disconnect();
      };
    }

    return;
  }, [socket]);

  const filteredUsers = onlineUsers.filter((user) =>
    user.userName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <StyledSideContacts>
      <header>
        <Typography component={"h2"} fontSize="1.5rem">
          Conversas
        </Typography>
        <OutlinedInput
          onChange={handleChangeInput}
          endAdornment={<PersonSearchIcon />}
        />
      </header>
      <StyledContacts>
        {filteredUsers.map(({ userName: name, userId, socketId }, index) => {
          if (name && name !== `${user.name} ${user.lastName}`) {
            return (
              <Contact
                key={name + index}
                name={name}
                id={userId}
                socketId={socketId}
              />
            );
          }

          return null;
        })}
      </StyledContacts>
    </StyledSideContacts>
  );
};

export default SideContacts;
