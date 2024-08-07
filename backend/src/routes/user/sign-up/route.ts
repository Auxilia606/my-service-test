import express from "express";

import { hashPassword } from "@controllers/user";
import { isNotLoggedIn } from "@middlewares/user";
import { User } from "@models/user";

import { ReqDTO, ResDTO } from "./types";

export const signUpRouter = express
  .Router()
  .post<object, ResDTO, ReqDTO>("/sign-up", isNotLoggedIn, async (req, res) => {
    const { id, nickname, password, phone } = req.body;

    try {
      const isExist = await User.findOne({
        id,
      });

      if (isExist) {
        return res.status(409).send();
      }

      const hashedPassword = await hashPassword(password);

      await User.create({
        id,
        phone,
        nickname,
        password: hashedPassword,
      });

      return res.status(200).send();
    } catch (error) {
      console.log(`[ERROR] sign-up fail: ${error}`);
      return res.status(400).send();
    }
  });
