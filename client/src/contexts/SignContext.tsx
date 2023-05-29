import { Api } from "../services/api";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../styles/components/Toastify";
import { ILoginSchema, IRegisterSchema } from "../schemas/forms";
import { IChildrenNodeType, ISignContext } from "../interfaces/contexts/signIn";
import { createContext, useContext, useState } from "react";

const SignContext = createContext<ISignContext>({} as ISignContext);

export const SignContextProvider = ({ children }: IChildrenNodeType) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function createUserRequest(data: IRegisterSchema) {
    setLoading(true);

    try {
      await Api.post("/users", data);
      toastSuccess("Sucesso, agora faça o login!");
      navigate("/");
    } catch (err) {
      if (err instanceof AxiosError) {
        const error = err.response?.data;
        toastError(`Ocorreu um erro: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  }

  async function loginUserRequest(data: ILoginSchema) {
    setLoading(true);

    try {
      const response = await Api.post("/login", data);
      const { token } = response.data;
      localStorage.setItem("@chatApp:token", token);
      toastSuccess("Sucesso, Bem-vindo(a) ao ChatApp.");
      navigate("/profile");
    } catch (err) {
      if (err instanceof AxiosError) {
        const error = err.response?.data;
        toastError(`Ocorreu um erro: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <SignContext.Provider
      value={{
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
