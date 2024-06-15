import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect DB Success");
  } catch (error) {
    console.error(error);
  }
};
