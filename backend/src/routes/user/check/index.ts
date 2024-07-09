import express from "express";

import { idRouter } from "./id";
import { nicknameRouter } from "./nickname";
import { phoneRouter } from "./phone";

export const checkRouter = express
  .Router()
  .use("/check", idRouter)
  .use("/nickname", nicknameRouter)
  .use("/phone", phoneRouter);
