import { isLoggedIn } from "@middlewares/user";
import { Post } from "@models/post";

import { postRouter } from "..";

import { ReqDTO, ResDTO } from "./types";

postRouter.get<Record<string, string>, ResDTO, ReqDTO, ReqDTO>(
  "/list",
  isLoggedIn,
  async (req, res) => {
    const { page = "1", pageSize = "10" } = req.query;

    try {
      const limit = Number(pageSize);
      const skip = (Number(page) - 1) * limit;
      const data = await Post.find();
      const sortedData = await Post.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      const formattedData: ResDTO["data"] = sortedData.map((value) => {
        return {
          id: value._id.toString(),
          title: value.title,
          content: value.content,
          createdAt: value.createdAt,
          updatedAt: value.updatedAt,
          creator: value.creator.nickname,
        };
      });

      return res
        .status(200)
        .send({ data: formattedData, total: data.length, message: "success" });
    } catch (error) {
      res.status(500).send({
        data: [],
        total: 0,
        message: "서버 에러가 발생하였습니다.",
      });
    }
  }
);
