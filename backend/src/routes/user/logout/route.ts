import express from "express";

import { isLoggedIn } from "@middlewares/user";

import { ReqDTO, ResDTO } from "./types";

export const logoutRouter = express
  .Router()
  .get<object, ResDTO, ReqDTO>("/logout", isLoggedIn, (req, res) => {
    req.logout(() => null);
    // req.session.destroy(() => null);
    res.status(200).send();
  });
