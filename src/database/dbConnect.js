import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "todo" });
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.log("Database connection failed", error);
  }
}
