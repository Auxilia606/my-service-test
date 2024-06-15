import { hashPassword } from "@controllers/user";
import { User } from "@models/user";

import { userRouter } from "..";

import { ReqDTO, ResDTO } from "./types";

userRouter.post<object, ResDTO, ReqDTO>("/sign-up", async (req, res) => {
  const { id, nickname, password } = req.body;

  try {
    const isExist = await User.findOne({
      id,
    });

    if (isExist) {
      return res.status(409).send();
    }

    const hashedPassword = await hashPassword(password);

    await User.create({
      id,
      nickname,
      password: hashedPassword,
    });

    return res.status(200).send();
  } catch (error) {
    console.log(`[ERROR] sign-up fail: ${error}`);
    return res.status(400).send();
  }
});
