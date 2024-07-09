import express from "express";

import { postCreateRouter } from "./create";
import { postListRouter } from "./list";
import { postIdRouter } from "./route";
import { postUploadRouter } from "./upload";

export const postRouter = express
  .Router()
  .use(postCreateRouter)
  .use(postListRouter)
  .use(postIdRouter)
  .use(postUploadRouter);
