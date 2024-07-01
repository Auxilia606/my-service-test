import mongoose from "mongoose";

export type ReplyDTO = {
  createdAt: string;
  updatedAt: string;
  creator: {
    _id: mongoose.Types.ObjectId;
    nickname: string;
  };
  content: string;
  subReply: SubReplyDTO[];
};

export type SubReplyDTO = {
  createdAt: string;
  updatedAt: string;
  creator: {
    _id: mongoose.Types.ObjectId;
    nickname: string;
  };
  content: string;
};
