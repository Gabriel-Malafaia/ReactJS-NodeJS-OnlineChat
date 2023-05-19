import { Outlet } from "react-router-dom";
import { LogoApp } from "../../components/Logo";
import { GlobalContainer } from "../../styles/components/GlobalContainer";
import { CenteredContainer, LeftContainer, RightContainer } from "./style";
import { useSignContext } from "../../contexts/SignContext";
import ToastSuccess from "../../components/Toast/Success";

const LoginPage = () => {
  const { openToast, setOpenToast, messageToast, typeToast } = useSignContext();

  return (
    <GlobalContainer>
      <ToastSuccess
        message={messageToast}
        open={openToast}
        setOpen={setOpenToast}
        time={2300}
        type={typeToast}
      />
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
