import { styled } from "@mui/material";

const StyledSideBar = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  color: white;
  background-color: #222222;

  min-height: 100vh;
  max-width: 60px;
  width: 100%;
  padding: 1rem 0;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export { StyledSideBar };
