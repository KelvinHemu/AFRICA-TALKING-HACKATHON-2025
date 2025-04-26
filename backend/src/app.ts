import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// TODO: Add your routes here
app.use("/api/auth", authRoutes);

export default app;
