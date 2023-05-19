import { Box, styled } from "@mui/material";

const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  span {
    color: #1565c0 !important;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  @media (max-width: 768px) {
    padding: none;
  }
`;

export { BoxContainer };
