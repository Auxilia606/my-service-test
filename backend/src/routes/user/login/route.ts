import passport from "passport";

import { isNotLoggedIn } from "@middlewares/user";

import { userRouter } from "..";

import { ReqDTO, ResDTO } from "./types";

userRouter.post<object, ResDTO, ReqDTO>(
  "/login",
  isNotLoggedIn,
  async (req, res, next) => {
    passport.authenticate(
      "local",
      (error: string, user: Express.User, info: string) => {
        if (error || info) {
          return res.status(400).send({ nickname: "" });
        }

        return req.login(user, (loginError) => {
          if (loginError) {
            console.log(`[ERROR] login error received:`, loginError);
            return res.status(400).send(loginError);
          }

          return res.status(200).send({ nickname: user.nickname });
        });
      }
    )(req, res, next);
  }
);
