import { styled } from "@mui/material";

const StyledSideContacts = styled("div")`
  display: flex;
  flex-direction: column;
  color: white;
  max-width: 320px;
  width: 100%;

  border-left: 1px solid #161616;
  background-color: #282828;

  header {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    input {
      border-radius: 6px;
      padding: 0.4rem;
    }
  }
`;

const StyledContacts = styled("ul")`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export { StyledSideContacts, StyledContacts };
