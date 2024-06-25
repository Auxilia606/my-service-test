import multer from "multer";

const upload = multer({
  dest: "files/",
});

export const uploadMiddleware = upload.single("image");
