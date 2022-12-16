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
