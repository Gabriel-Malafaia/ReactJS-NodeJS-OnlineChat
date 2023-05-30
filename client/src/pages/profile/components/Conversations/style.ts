import { styled } from "@mui/material";

const StyledConversations = styled("section")`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  background-color: #1565c0;
`;

const StyledConversationsChat = styled("section")`
  display: flex;
  flex-direction: column;

  width: 100%;

  color: white;
  background: rgb(21, 101, 192);
  background: linear-gradient(
    90deg,
    rgba(21, 101, 192, 1) 31%,
    rgba(0, 146, 255, 1) 65%,
    rgba(0, 134, 255, 1) 94%,
    rgba(0, 129, 255, 1) 100%
  );

  header {
    li:hover {
      background-color: inherit;
    }
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 1rem;
  }

  form {
    display: flex;
    box-shadow: 15px 5px 5px 5px rgba(0, 0, 0, 0.6);
    height: 100%;
    max-height: 2rem;

    input {
      font-size: medium;
      height: 100%;
      width: 100%;
      justify-self: flex-end;
      background-color: lightgray;
    }

    input,
    button {
      outline: 0;
      border: 0;
      padding: 0 1rem;
    }

    button {
      cursor: pointer;
    }
  }

  @media (max-width: 700px) {
    min-height: calc(100vh);
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* height: 100%; */
    form {
      height: 4rem;
    }
  }
`;

export { StyledConversations, StyledConversationsChat };
