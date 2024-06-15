import express from "express";
import path from "path";

export const startServer = () => {
  const app = express();

  app.listen(4000, () => {
    console.log("start server");
  });

  // app.use('/api', api);

  app.get("*", (req, res) => {
    if (req.path === "/") {
      res.sendFile(
        path.join(__dirname, "../../../frontend/dist", "index.html")
      );
    } else {
      res.sendFile(path.join(__dirname, "../../../frontend/dist", req.path));
    }
  });
};
