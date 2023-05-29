import { io } from "../server";
import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

const onlineUsers = new Set();

function connectionUser(
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
  socket.on("firstConnection", (user) => {
    const newUser = { ...user, socketId: socket.id };
    onlineUsers.add(newUser);

    io.emit("userOnline", newUser);
    io.emit("onlineUsersList", Array.from(onlineUsers));

    socket.on("disconnect", () => {
      onlineUsers.delete(newUser);
      io.emit("userOffline", newUser);
    });
  });
}

export { connectionUser };
