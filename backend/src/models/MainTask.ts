import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IMainTask extends Document {
  title: string;
  description: string;
  assigned_to?: Types.ObjectId;
  status?: "pending" | "in-progress" | "completed" | "cancelled";
  priority?: "low" | "medium" | "high";
  created_by?: Types.ObjectId;
  created_at?: Date;
  updated_at?: Date;
}

const MainTaskSchema: Schema<IMainTask> = new Schema({
  title: { type: String, required: true, minlength: 5 },
  description: { type: String, required: true, minlength: 10 },
  assigned_to: { type: Schema.Types.ObjectId, ref: "Artisan" },
  status: { type: String, enum: ["pending", "in-progress", "completed", "cancelled"], default: "pending" },
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
  created_by: { type: Schema.Types.ObjectId, ref: "User" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

// Middleware to update updated_at
MainTaskSchema.pre("save", function (next) {
  this.updated_at = new Date();
  next();
});

const MainTask: Model<IMainTask> = mongoose.model<IMainTask>("MainTask", MainTaskSchema);
export default MainTask; 