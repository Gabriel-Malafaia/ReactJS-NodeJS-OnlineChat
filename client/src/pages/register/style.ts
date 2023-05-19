import { styled } from "@mui/material";

const RegisterForm = styled("section")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn;
  animation-duration: 1.5s;

  .link-login {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

const RegisterDualInput = styled("div")`
  display: flex;
  gap: 1rem;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: unset;
  }
`;

export { RegisterForm, RegisterDualInput };
