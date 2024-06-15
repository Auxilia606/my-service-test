import express from "express";
import path from "path";

export const startServer = () => {
  const app = express();

  app.listen(4000, () => {
    console.log("start server");
  });

  // app.use('/api', api);

  app.use(express.static(path.join(__dirname, "../../../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../frontend/dist", "index.html"));
  });
};
