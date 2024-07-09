import express from "express";

import passport from "passport";

import { generateToken } from "@controllers/user";
import { isNotLoggedIn } from "@middlewares/user";

import { ReqDTO, ResDTO } from "./types";

export const loginRouter = express
  .Router()
  .post<object, ResDTO, ReqDTO>(
    "/login",
    isNotLoggedIn,
    async (req, res, next) => {
      passport.authenticate(
        "local",
        (error: string, user: Express.User, info: string) => {
          if (error || info) {
            return res.status(400).send({ nickname: "" });
          }

          const token = generateToken(user.id, user.nickname);

          return req.login(user, (loginError) => {
            if (loginError) {
              console.log(`[ERROR] login error received:`, loginError);
              return res.status(400).send(loginError);
            }

            return res.status(200).send({ nickname: user.nickname, token });
          });
        }
      )(req, res, next);
    }
  );
