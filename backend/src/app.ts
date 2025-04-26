import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import authRoutes from "./routes/auth";
import artisanRoutes from "./routes/artisan";
import mainTaskRoutes from "./routes/maintask";
import subTaskRoutes from "./routes/subtask";
import smsRoutes from "./routes/sms";
import ussdRoutes from "./routes/ussd";

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// TODO: Add your routes here
app.use("/api/auth", authRoutes);
app.use("/api/artisans", artisanRoutes);
app.use("/api/tasks", mainTaskRoutes);
app.use("/api/subtasks", subTaskRoutes);
app.use("/api/sms", smsRoutes);
app.use("/api/ussd", ussdRoutes);

export default app;
