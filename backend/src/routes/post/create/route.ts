import express from "express";

import { isLoggedIn } from "@middlewares/user";
import { Post } from "@models/post";

import { ReqDTO, ResDTO } from "./types";

export const postCreateRouter = express
  .Router()
  .post<Record<string, string>, ResDTO, ReqDTO>(
    "/create",
    isLoggedIn,
    async (req, res) => {
      const { content, title } = req.body;

      try {
        await Post.create({
          title,
          content,
          creator: req.user,
          reply: [],
        });

        res.status(200).send({
          message: "success",
        });
      } catch (error) {
        console.log(`[ERROR] create post failed: ${error}`);

        res.status(500).send({
          message: "success",
        });
      }
    }
  );
