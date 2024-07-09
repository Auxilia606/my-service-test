import { ReplyDTO } from "@models/reply/types";

export type PostDTO = {
  createdAt: Date;
  updatedAt: Date;
  creator: {
    _id: string;
    nickname: string;
  };
  title: string;
  content: string;
  reply: ReplyDTO[];
};
