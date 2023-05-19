import { createContext, useContext, useState } from "react";
import { ILoginSchema, IRegisterSchema } from "../schemas/forms";
import { AxiosError } from "axios";
import { Api } from "../services/api";
import { ITypeToast } from "../components/Toast/Success";
import { useNavigate } from "react-router-dom";

export interface IChildrenNodeType {
  children: React.ReactNode;
}

export interface ISignContext {
  openToast: boolean;
  setOpenToast: React.Dispatch<React.SetStateAction<boolean>>;
  messageToast: string;
  typeToast: ITypeToast;
  loading: boolean;
  createUserRequest(data: IRegisterSchema): Promise<void>;
  loginUserRequest(data: ILoginSchema): Promise<void>;
}

const SignContext = createContext<ISignContext>({} as ISignContext);

export const SignContextProvider = ({ children }: IChildrenNodeType) => {
  const [openToast, setOpenToast] = useState(false);
  const [messageToast, setMessageToast] = useState("");
  const [typeToast, setTypeToast] = useState<ITypeToast>("success");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function setModalConfig(type: ITypeToast, message: string) {
    setTypeToast(type);
    setMessageToast(message);
  }

  async function createUserRequest(data: IRegisterSchema) {
    setLoading(true);

    try {
      await Api.post("/users", data);
      setModalConfig("success", "Usuário cadastrado, faça o login!");
      navigate("/");
    } catch (err) {
      if (err instanceof AxiosError) {
        const error = err.response?.data;
        setModalConfig("error", `Ocorreu um erro: ${error.message}`);
      }
    } finally {
      setLoading(false);
      setOpenToast(true);
    }
  }

  async function loginUserRequest(data: ILoginSchema) {
    setLoading(true);

    try {
      const response = await Api.post("/login", data);
      console.log(response);
      
      // const { token } = response.data;
      setModalConfig("success", "Bem-vindo(a) ao ChatApp.");
      // localStorage.setItem("@chatApp:token", token);
      navigate("/dashboard");
    } catch (err) {
      if (err instanceof AxiosError) {
        const error = err.response?.data;
        setModalConfig("error", `Ocorreu um erro: ${error.message}`);
      }
    } finally {
      setLoading(false);
      setOpenToast(true);
    }
  }

  return (
    <SignContext.Provider
      value={{
        openToast,
        setOpenToast,
        messageToast,
        typeToast,
        loading,
        createUserRequest,
        loginUserRequest,
      }}
    >
      {children}
    </SignContext.Provider>
  );
};

export const useSignContext = () => useContext(SignContext);
