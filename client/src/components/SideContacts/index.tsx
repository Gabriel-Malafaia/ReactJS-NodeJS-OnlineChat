import Contact from "../Contact";
import { Typography } from "@mui/material";
import { StyledContacts, StyledSideContacts } from "./style";

const SideContacts = () => {
  return (
    <StyledSideContacts>
      <header>
        <Typography component={"h2"} fontSize="1.5rem">
          Conversas
        </Typography>
        <input placeholder="Barra de pesquisa" type="search" name="" id="" />
      </header>
      <StyledContacts>
        <Contact name="Gabriel" />
        <Contact name="Felipe" />
        <Contact name="Henrique" />
        <Contact name="Bruno" />
      </StyledContacts>
    </StyledSideContacts>
  );
};

export default SideContacts;
