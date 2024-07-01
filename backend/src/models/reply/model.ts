import mongoose, { Schema } from "mongoose";

import { ReplyDTO } from "./types";

const subReplySchema = new Schema<ReplyDTO>({
  content: String,
  creator: {
    _id: mongoose.Types.ObjectId,
    nickname: String,
  },
  createdAt: String,
  updatedAt: String,
});

export const replySchema = new Schema<ReplyDTO>({
  content: String,
  creator: {
    _id: mongoose.Types.ObjectId,
    nickname: String,
  },
  createdAt: String,
  updatedAt: String,
  subReply: [subReplySchema],
});

export const Reply = mongoose.model("Reply", replySchema);
