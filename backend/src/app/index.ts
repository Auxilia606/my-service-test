import express from "express";
import session from "express-session";

import cookieParser from "cookie-parser";
import cors from "cors";
import passport from "passport";
import path from "path";

import api from "@routes";

import { connectDB } from "./database";
import { passportConfig } from "./passport";

const app = express();

export const startServer = async () => {
  await connectDB();

  app.listen(process.env.PORT, () => {
    console.log("start server");
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
        secure: false,
      },
    })
  );
  app.use(cors());
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api", api);

  passportConfig();

  app.use(express.static(path.join(__dirname, "../../../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../frontend/dist", "index.html"));
  });
};
