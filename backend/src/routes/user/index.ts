import express from "express";

import { checkRouter } from "./check";
import { loginRouter } from "./login";
import { logoutRouter } from "./logout";
import { signUpRouter } from "./sign-up";

export const userRouter = express
  .Router()
  .use("/user", checkRouter)
  .use("/user", loginRouter)
  .use("/user", logoutRouter)
  .use("/user", signUpRouter);
