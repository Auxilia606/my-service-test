import express from "express";
import session from "express-session";

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

  app.use(
    express.json({
      limit: "5mb",
    })
  );
  app.use(express.urlencoded({ extended: false, limit: "5mb" }));
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
    })
  );
  app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:5173", "http://localhost:4000"],
    })
  );
  // app.use(cors());
  // app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api", api);

  passportConfig();

  app.use(express.static(path.join(__dirname, "../../../frontend/dist")));
  app.use("/files", express.static(path.join(__dirname, "../../files")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../frontend/dist", "index.html"));
  });
};
