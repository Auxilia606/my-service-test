export type PostDTO = {
  createdAt: string;
  updatedAt: string;
  creator: {
    _id: string;
    nickname: string;
  };
  title: string;
  content: string;
};

export type UserDTO = {
  id: string;
  phone: string;
  nickname: string;
  password: string;
  post: PostDTO[];
  createdAt: Date;
  updatedAt: Date;
};
