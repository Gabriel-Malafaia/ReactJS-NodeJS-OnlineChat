import LogoApp from "../../../../components/Logo";
import Copyright from "../../../../components/Copyright";
import { Typography } from "@mui/material";

const ChatMessage = () => {
  return (
    <div>
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
    </div>
  );
};

export default ChatMessage;
