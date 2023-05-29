import { styled } from "@mui/material";

const StyledSideContacts = styled("div")`
  display: flex;
  flex-direction: column;

  max-width: 320px;
  width: 100%;

  border-left: 1px solid #161616;
  border-right: 1px solid #161616;
  background-color: whitesmoke;

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1rem;
    gap: 1rem;

    input {
      border-radius: 6px;
      padding: 0.4rem;
    }
  }
`;

const StyledContacts = styled("ul")`
  display: flex;
  flex-direction: column;

  padding: 0;
`;

export { StyledSideContacts, StyledContacts };
