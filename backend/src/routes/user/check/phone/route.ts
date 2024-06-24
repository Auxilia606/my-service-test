import { isNotLoggedIn } from "@middlewares/user";
import { User } from "@models/user";

import { checkRouter } from "..";

import { ReqDTO, ResDTO } from "./types";

checkRouter.get<object, ResDTO, undefined, ReqDTO>(
  "/phone",
  isNotLoggedIn,
  async (req, res) => {
    const { phone } = req.query;

    try {
      const isExist = await User.findOne({
        phone,
      });

      if (isExist) {
        return res.status(409).send({ exist: true });
      } else {
        return res.status(200).send({ exist: false });
      }
    } catch (error) {
      console.log(`[ERROR] check id fail: ${error}`);
      return res.status(400).send();
    }
  }
);
