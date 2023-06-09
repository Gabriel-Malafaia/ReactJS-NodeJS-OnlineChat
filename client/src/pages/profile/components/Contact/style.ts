import theme from "../../../../styles/theme";
import { Badge, styled } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    cursor: "pointer",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const StyledContact = styled("li")`

  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  list-style: none;

  &:hover {
    background-color: ${theme.palette.grey[200]};
  }
`;

export { StyledContact, StyledBadge };
