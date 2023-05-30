import { styled } from "@mui/material";
import theme from "../../../../styles/theme";

const StyledSideBar = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  color: white;
  background-color: ${theme.palette.primary.main};

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

  @media (max-width: 700px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: unset;
    min-height: unset;
    padding: 1rem;


    div {
      display: flex;
      flex-direction: unset;
    }

  }
`;

export { StyledSideBar };
