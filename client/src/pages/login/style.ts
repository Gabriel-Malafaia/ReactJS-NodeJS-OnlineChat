import { styled } from "@mui/material";

const CenteredContainer = styled("section")`
  display: flex;
  justify-content: center;
  flex: 1;
  max-height: 560px;
  height: 100%;
  padding: 1rem;

  img {
    max-width: 100%;
  }

  .Left-Container,
  .Right-Container {
    background-color: whitesmoke;
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
  border-radius: 6px 0 0 6px;

  @media (max-width: 768px) {
    border: none;
    border-radius: 6px 6px 0 0;
  }
`;

const RightContainer = styled("section")`
  border-radius: 0 6px 6px 0;
  border-left: 1px solid grey;
  padding: 1rem;

  @media (max-width: 768px) {
    border: none;
    border-radius: 0 0 6px 6px;
  }
`;

export { CenteredContainer, LeftContainer, RightContainer };