export interface IChat {
  id: string;
  user: {
    id: string;
    image: string;
    name: string;
  };
  lastMessage: {
    id: string;
    text: string;
    createdAt: string;
  };
}

export interface IMessage {
  id: string;
  text: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
  };
}
