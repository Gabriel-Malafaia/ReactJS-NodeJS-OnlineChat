import { Box, styled } from "@mui/material";

const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  animation: fadeIn;
  animation-duration: 1.5s;

  @media (max-width: 768px) {
    padding: none;
  }
`;

export { BoxContainer };
