import express from "express";

import { postRouter } from "./post";
import { userRouter } from "./user";

const router = express.Router();

router.use(userRouter);
router.use("/post", postRouter);

export default router;
