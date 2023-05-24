import Logo from "../../assets/chat-logo.png";

const LogoApp = ({ width }: { width?: string }) => {
  return <img width={width || ""} src={Logo} alt="chat logo" />;
};

export { LogoApp };
