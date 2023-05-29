import Contact from "../Contact";
import ChatMessage from "../ChatMessage";
import ConversationCard from "../ConversationCard";
import { useForm } from "react-hook-form";
import { getCurrentTime } from "../../../../services/utils";
import { useProfileContext } from "../../../../contexts/ProfileContext";
import { useEffect, useState } from "react";
import { StyledConversations, StyledConversationsChat } from "./style";
import {
  IContentMessage,
  IDataContent,
  IMessages,
} from "../../../../interfaces/pages/profile";

const Conversations = () => {
  const { selectedChat, user, socket } = useProfileContext();
  const { handleSubmit, register, reset } = useForm<IContentMessage>();
  const [messages, setMessages] = useState<IMessages[]>([]);

  function onSubmitForm(data: IContentMessage) {
    const { message } = data;

    const messageData = {
      sentById: user.id,
      recipientId: selectedChat?.userId,
      recipientSocketId: selectedChat?.socketId,
      content: message,
    };

    socket.emit("sendMessage", messageData);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        sendById: user.id,
        recipientId: selectedChat?.userId,
        isReceived: false,
        message,
        hour: getCurrentTime(),
      },
    ]);

    reset();
  }

  useEffect(() => {
    if (socket) {
      socket.on("conversationStarted", (data: IDataContent) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sendById: data.sentById,
            recipientId: data.recipientId,
            isReceived: true,
            message: data.content,
            hour: getCurrentTime(),
          },
        ]);
      });

      return () => {
        socket.disconnect();
      };
    }

    return;
  }, [socket]);

  return selectedChat?.userName ? (
    <StyledConversationsChat>
      <header>
        <Contact
          name={selectedChat?.userName}
          id={selectedChat?.userId}
          socketId={selectedChat?.socketId}
        />
      </header>

      <ul>
        {messages.map(
          (
            { message, isReceived, hour, sendById, recipientId },
            index: number
          ) => {
            if (
              sendById === selectedChat.userId ||
              (sendById === user.id && recipientId == selectedChat?.userId)
            ) {
              return (
                <ConversationCard
                  message={message}
                  isReceived={isReceived}
                  key={message + index}
                  hour={hour}
                />
              );
            }
          }
        )}
      </ul>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input {...register("message")} type="text" />
        <button type="submit">Enviar</button>
      </form>
    </StyledConversationsChat>
  ) : (
    <StyledConversations>
      <ChatMessage />
    </StyledConversations>
  );
};

export default Conversations;
