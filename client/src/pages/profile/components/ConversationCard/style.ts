import { styled } from "@mui/material";

interface IStyledCardConversation {
  isReceived: boolean;
}

const StyledCardConversation = styled("li")`
  position: relative;
  list-style: none;
  word-wrap: break-word;
  align-self: ${(props: IStyledCardConversation) =>
    props.isReceived ? "flex-start" : "flex-end"};

  background-color: ${(props: IStyledCardConversation) =>
    props.isReceived ? "Gainsboro" : "DimGrey"};
  color: ${(props: IStyledCardConversation) =>
    props.isReceived ? "Black" : "White"};

  border-radius: 6px;
  padding: 1rem 1rem 1rem 1rem;
  width: 40%;

  span {
    position: absolute;
    font-size: 75%;
    bottom: 0.1rem;
    right: 0.5rem;
  }
`;

export { StyledCardConversation };
