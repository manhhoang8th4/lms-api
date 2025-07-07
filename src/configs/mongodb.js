import mongoose from "mongoose";

// connect to MongoDB
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}`);
};
export default connectDB;
