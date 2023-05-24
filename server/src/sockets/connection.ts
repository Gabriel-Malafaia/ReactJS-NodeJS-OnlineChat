import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { io } from "../server";
import { insertData, removeData } from "./utils";

const onlineUsers = new Set();

function connectionUser(
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
  socket.on("userOnlineInfo", (user) => {
    socket.emit("onlineUsersList", Array.from(onlineUsers));
    
    const { userName: name } = user;

    insertData(onlineUsers, name);
    io.emit("userOnline", name);

    socket.on("disconnect", () => {
      removeData(onlineUsers, name);
      io.emit("userOffline", name);
    });
  });
}

export { connectionUser };
