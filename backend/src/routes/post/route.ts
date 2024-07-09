import express from "express";

import { isLoggedIn } from "@middlewares/user";
import { Post } from "@models/post";
import { User } from "@models/user";

import { ReqDTO, ResDTO } from "./types";

export const postIdRouter = express
  .Router()
  .get<ReqDTO, ResDTO>("/:id", isLoggedIn, async (req, res) => {
    const { id } = req.params;

    try {
      const isExist = await Post.findOne({
        _id: id,
      });

      if (!isExist) {
        return res.status(404).send({
          message: "해당 포스트가 존재하지 않습니다.",
        });
      }

      const creator = await User.findOne({ _id: isExist.creator._id });

      if (!creator) {
        return res.status(404).send({
          message: "글 작성자를 찾을 수 없습니다.",
        });
      }

      return res.status(200).send({
        title: isExist.title,
        content: isExist.content,
        createdAt: isExist.createdAt,
        updatedAt: isExist.updatedAt,
        creator: creator.nickname,
        isOwner: req.user?.id === creator.id,
        message: "success",
      });
    } catch (error) {
      return res.status(500).send({
        message: "서버 에러가 발생하였습니다.",
      });
    }
  });
