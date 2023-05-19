import { Outlet } from "react-router-dom";
import { LogoApp } from "../../components/Logo";
import { GlobalContainer } from "../../styles/components/GlobalContainer";
import { CenteredContainer, LeftContainer, RightContainer } from "./style";

const LoginPage = () => {
  return (
    <GlobalContainer>
      <CenteredContainer>
        <LeftContainer className="Left-Container">
          <LogoApp />
        </LeftContainer>
        <RightContainer className="Right-Container">
          <Outlet />
        </RightContainer>
      </CenteredContainer>
    </GlobalContainer>
  );
};

export { LoginPage };
