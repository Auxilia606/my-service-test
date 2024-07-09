import express from "express";

import { isNotLoggedIn } from "@middlewares/user";
import { User } from "@models/user";

import { ReqDTO, ResDTO } from "./types";

export const nicknameRouter = express
  .Router()
  .get<object, ResDTO, undefined, ReqDTO>(
    "/nickname",
    isNotLoggedIn,
    async (req, res) => {
      const { nickname } = req.query;

      try {
        const isExist = await User.findOne({
          nickname,
        });

        if (isExist) {
          return res.status(409).send({ exist: true });
        } else {
          return res.status(200).send({ exist: false });
        }
      } catch (error) {
        console.log(`[ERROR] check id fail: ${error}`);
        return res.status(400).send();
      }
    }
  );
