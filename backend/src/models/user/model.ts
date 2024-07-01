import mongoose, { Schema } from "mongoose";

import { UserDTO } from "./types";

const userSchema = new Schema<UserDTO>({
  id: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  nickname: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

export const User = mongoose.model("User", userSchema);
