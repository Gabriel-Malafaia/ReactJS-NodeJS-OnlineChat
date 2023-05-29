import { Api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { IChildrenNodeType } from "../interfaces/contexts/signIn";
import { createContext, useContext, useEffect, useState } from "react";
import {
  IChatResponse,
  IProfileContext,
  IUserResponse,
} from "../interfaces/contexts/profile";

const ProfileContext = createContext<IProfileContext>({} as IProfileContext);

export const ProfileContextProvider = ({ children }: IChildrenNodeType) => {
  const [isAuth, setIsAuth] = useState(false);
  const [socket, setSocket] = useState<any>();
  const [selectedChat, setSelectedChat] = useState<IChatResponse>();
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);
  const navigate = useNavigate();

  useEffect(() => {
    const userAuth = async () => {
      try {
        const token = localStorage.getItem("@chatApp:token");
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const user = await Api.get("/users");
        setIsAuth(true);
        setUser(user.data as IUserResponse);
      } catch {
        navigate("/");
      }
    };

    userAuth();
  }, []);

  return (
    <ProfileContext.Provider
      value={{ isAuth, user, selectedChat, setSelectedChat, socket, setSocket }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => useContext(ProfileContext);
