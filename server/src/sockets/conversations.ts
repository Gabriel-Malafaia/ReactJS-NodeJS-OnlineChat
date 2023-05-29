import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

function conversations(
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
  socket.on("sendMessage", (data) => {
    const { content, sentById, recipientId } = data;

    socket.broadcast
      .to(data.recipientSocketId)
      .emit("conversationStarted", { content, sentById, recipientId });
  });
}

export { conversations };
