import mongoose from "mongoose";

export type PostDTO = {
  createdAt: string;
  updatedAt: string;
  creator: {
    _id: mongoose.Types.ObjectId;
    nickname: string;
  };
  title: string;
  content: string;
};

export type UserDTO = {
  id: string;
  nickname: string;
  password: string;
  post: PostDTO[];
  createdAt: Date;
  updatedAt: Date;
};
