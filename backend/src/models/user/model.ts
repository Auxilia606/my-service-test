import mongoose, { Schema } from "mongoose";

import { PostDTO, UserDTO } from "./types";

const postSchema = new Schema<PostDTO>({
  content: String,
  createdAt: String,
  creator: String,
  updatedAt: String,
});

const userSchema = new Schema<UserDTO>({
  id: { type: String, required: true, unique: true },
  nickname: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  post: [postSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

export const User = mongoose.model("User", userSchema);
