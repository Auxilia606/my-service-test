import express from "express";

export const userRouter = express.Router();

import "./login";
import "./logout";
import "./sign-up";

import { checkRouter } from "./check";

userRouter.use("/check", checkRouter);
