import { createContext, useContext, useEffect, useState } from "react";
import { IChildrenNodeType } from "./SignContext";
import { Api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { IUserResponse } from "../interfaces/contexts/profile";

export interface IProfileContext {
  isAuth: boolean;
  user: IUserResponse;
}

const ProfileContext = createContext<IProfileContext>({} as IProfileContext);

export const ProfileContextProvider = ({ children }: IChildrenNodeType) => {
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);
  const [isAuth, setIsAuth] = useState(false);
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
    <ProfileContext.Provider value={{ isAuth, user }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => useContext(ProfileContext);
