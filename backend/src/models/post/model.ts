import mongoose, { Schema } from "mongoose";

import { replySchema } from "@models/reply";

import { PostDTO } from "./types";

const postSchema = new Schema<PostDTO>({
  title: { type: String, required: true },
  content: String,
  creator: {
    _id: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  reply: [replySchema],
});

export const Post = mongoose.model("Post", postSchema);
