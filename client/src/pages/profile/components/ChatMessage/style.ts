import { styled } from "@mui/material";

const StyledChatMessage = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  padding: 1rem;
  max-width: 650px;
  width: 100%;

  word-break: break-all;
  
`;

export { StyledChatMessage };
