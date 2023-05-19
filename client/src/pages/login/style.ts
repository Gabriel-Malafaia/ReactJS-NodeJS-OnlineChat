import { styled } from "@mui/material";

const CenteredContainer = styled("section")`
  display: flex;
  justify-content: center;
  flex: 1;
  height: 100%;
  padding: 1rem;
  max-width: 1024px;

  animation: fadeIn;
  animation-duration: 1.5s;

  span {
    color: #1565c0 !important;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  img {
    max-width: 100%;
  }

  .Left-Container,
  .Right-Container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 500px;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    h1 {
      font-size: 1rem;
    }

    img {
      max-width: 50%;
    }
  }
`;

const LeftContainer = styled("section")`
  border-radius: 8px 0 0 8px;
  background-color: #1565c0;
  width: 100%;


  @media (max-width: 768px) {
    border: none;
    border-radius: 8px 8px 0 0;
  }
`;

const RightContainer = styled("section")`
  width: 100%;

  border-radius: 0 8px 8px 0;
  border-left: 1px solid grey;
  padding: 1rem;
  background-color: whitesmoke;

  @media (max-width: 768px) {
    border: none;
    border-radius: 0 0 8px 8px;
  }
`;

export { CenteredContainer, LeftContainer, RightContainer };
