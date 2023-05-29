import { IConversationCard } from "../../../../interfaces/pages/profile";
import { StyledCardConversation } from "./style";

const ConversationCard = ({ message, isReceived, hour }: IConversationCard) => {
  return (
    <StyledCardConversation isReceived={isReceived || false}>
      {message}
      <span>{hour}</span>
    </StyledCardConversation>
  );
};

export default ConversationCard;
