import express from "express";

import multer from "multer";

import { isLoggedIn } from "@middlewares/user";

import { ReqDTO, ResDTO } from "./types";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files/");
  },
  filename: function (req, file, cb) {
    const extArr = file.mimetype.split("/");
    const ext = extArr[extArr.length - 1];
    cb(null, `${Date.now()}.${ext}`); //Appending .jpg
  },
});

const upload = multer({ storage: storage });

export const postUploadRouter = express
  .Router()
  .post<Record<string, string>, ResDTO, ReqDTO>(
    "/upload",
    isLoggedIn,
    upload.single("files[0]"),
    async (req, res) => {
      res.status(200).send({
        data: {
          messages: ["OK"],
          baseurl: `${req.file?.destination}${req.file?.filename}`,
        },
        success: true,
      });
    }
  );
