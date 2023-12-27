import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection Failed:", error.message);
    throw new Error("Connection Failed!"); // Corrected
  }
};

export default connection;
