import mongoose from "mongoose";

import { ReplyDTO } from "@models/reply/types";

export type PostDTO = {
  createdAt: string;
  updatedAt: string;
  creator: {
    _id: mongoose.Types.ObjectId;
    nickname: string;
  };
  title: string;
  content: string;
  reply: ReplyDTO[];
};
