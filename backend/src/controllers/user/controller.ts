import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = async (password: string) => {
  const hash = await bcrypt.hash(password, 12);

  return hash;
};

export const checkPassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const generateToken = (id: string, nickname: string) => {
  const token = jwt.sign(
    {
      id,
      nickname,
    },
    process.env.COOKIE_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return token;
};
