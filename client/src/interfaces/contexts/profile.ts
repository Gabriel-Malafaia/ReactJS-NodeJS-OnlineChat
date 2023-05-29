export interface IUserResponse {
  id: string;
  name: string;
  lastName: string;
  email: string;
  cpf: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IProfileContext {
  isAuth: boolean;
  user: IUserResponse;
  selectedChat?: IChatResponse | null;
  setSelectedChat: React.Dispatch<
    React.SetStateAction<IChatResponse | undefined>
  >;
  setSocket: React.Dispatch<any>;
  socket: any;
}

export interface IChatResponse {
  userId: string;
  userName: string;
  socketId: string;
}
