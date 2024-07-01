import { isLoggedIn } from "@middlewares/user";
import { Post } from "@models/post";

import { ReqDTO, ResDTO } from "./types";
import { postRouter } from ".";

postRouter.get<{ id: string }, ResDTO, ReqDTO>(
  "/:id",
  isLoggedIn,
  async (req, res) => {
    const { id } = req.params;

    try {
      const isExist = await Post.findOne({
        _id: id,
      });

      if (isExist) {
        return res.status(200).send({
          title: isExist.title,
          content: isExist.content,
          message: "success",
        });
      } else {
        return res.status(404).send({
          title: "",
          content: "",
          message: "해당 포스트가 존재하지 않습니다.",
        });
      }
    } catch (error) {
      return res.status(500).send({
        title: "",
        content: "",
        message: "서버 에러가 발생하였습니다.",
      });
    }
  }
);
