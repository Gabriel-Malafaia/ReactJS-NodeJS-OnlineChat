import { styled } from "@mui/material";

const StyledProfile = styled("main")`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export {StyledProfile}
