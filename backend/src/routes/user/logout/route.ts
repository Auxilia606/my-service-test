import { isLoggedIn } from "@middlewares/user";

import { userRouter } from "..";

import { ReqDTO, ResDTO } from "./types";

userRouter.get<object, ResDTO, ReqDTO>("/logout", isLoggedIn, (req, res) => {
  req.logout(() => null);
  // req.session.destroy(() => null);
  res.status(200).send();
});
