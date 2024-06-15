import { isLoggedIn } from "../login";
import { userRouter } from "..";

import { ReqDTO, ResDTO } from "./types";

userRouter.get<object, ResDTO, ReqDTO>(
  "/logout",
  isLoggedIn,
  async (req, res) => {
    req.logout(() => null);
    req.session.destroy(() => null);
    res.redirect("/");
  }
);
