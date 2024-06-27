import { isLoggedIn } from "@middlewares/user";

import { postRouter } from "..";

import { ReqDTO, ResDTO } from "./types";

postRouter.post<Record<string, string>, ResDTO, ReqDTO>(
  "/create",
  isLoggedIn,
  async (req, res) => {
    const { content, title } = req.body;
    console.log(req.user, content, title);

    res.status(200).send({
      message: "success",
    });
  }
);
