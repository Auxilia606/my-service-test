import express from "express";

export const startServer = () => {
  const app = express();

  app.listen(4000, () => {
    console.log("start server");
  });

  app.get("/", (_, res) => {
    res.send("<h1>This is youngtaek's webserver!</h1>");
  });
};
