import mongoose, { Schema } from "mongoose";

import { replySchema } from "@models/reply";

import { PostDTO } from "./types";

const postSchema = new Schema<PostDTO>({
  title: { type: String, required: true },
  content: String,
  creator: {
    _id: mongoose.Types.ObjectId,
    nickname: String,
  },
  createdAt: String,
  updatedAt: String,
  reply: [replySchema],
});

export const Post = mongoose.model("Post", postSchema);
