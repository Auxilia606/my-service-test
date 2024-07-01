import mongoose from "mongoose";

import { ReplyDTO } from "@models/reply/types";

export type PostDTO = {
  createdAt: Date;
  updatedAt: Date;
  creator: {
    _id: mongoose.Types.ObjectId;
    nickname: string;
  };
  title: string;
  content: string;
  reply: ReplyDTO[];
};
