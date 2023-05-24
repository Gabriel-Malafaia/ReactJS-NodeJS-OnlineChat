import { styled } from "@mui/material";

const StyledConversations = styled("section")`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  background-color: #323232;
  border-left: 1px solid #161616;

  div {
    max-width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
  }
`;

export { StyledConversations };
