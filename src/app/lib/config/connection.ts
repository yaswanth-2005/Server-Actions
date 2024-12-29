import mongoose from "mongoose";

const DBConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI || " ");
    console.log("Database connected...");
  } catch (error) {
    console.error("Database Connection error: ", error);
  }
};

export default DBConnection;
