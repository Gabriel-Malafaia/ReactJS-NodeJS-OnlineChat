import LogoApp from "../../../../components/Logo";
import Copyright from "../../../../components/Copyright";
import { Typography } from "@mui/material";
import { StyledChatMessage } from "./style";

const ChatMessage = () => {
  return (
    <StyledChatMessage>
      <LogoApp width="120px" />
      <Typography color="white">ChatApp</Typography>
      <Typography color="white">
        Bem-vindo à nossa plataforma de chat em tempo real!
      </Typography>
      <Typography color="white">
        Aqui, você poderá desfrutar de conversas dinâmicas e interativas.
      </Typography>
      <Typography color="white">
        Temos como objetivo oferecer uma experiência de comunicação simples e
        eficiente.
      </Typography>
      <Copyright
        name="Gabriel Malafaia"
        color="white"
        linkColor="#12beb1"
        marginTop={2}
      />
    </StyledChatMessage>
  );
};

export default ChatMessage;
