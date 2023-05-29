export interface IContactProps {
  name: string;
  id: string;
  socketId: string;
}

export interface IOnlineUsers {
  userId: string;
  userName: string;
  socketId: string;
}

export interface IContentMessage {
  message: string;
}

export interface IMessages {
  sendById: string;
  recipientId?: string;
  isReceived: boolean;
  message: string;
  hour: string;
}

export interface IDataContent {
  recipientId: string;
  recipientSocketId: string;
  content: string;
  sentById: string;
}

export interface IConversationCard extends IContentMessage {
  isReceived?: boolean;
  hour: string;
}
