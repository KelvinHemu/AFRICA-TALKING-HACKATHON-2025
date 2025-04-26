import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface ISubTask extends Document {
  title: string;
  description?: string;
  main_task: Types.ObjectId;
  assigned_to?: Types.ObjectId;
  due_date?: Date;
  status?: "pending" | "in-progress" | "completed";
  created_at?: Date;
  updated_at?: Date;
  completion_date?: Date;
}

const SubTaskSchema: Schema<ISubTask> = new Schema({
  title: { type: String, required: true, minlength: 3 },
  description: { type: String },
  main_task: { type: Schema.Types.ObjectId, ref: "MainTask", required: true },
  assigned_to: { type: Schema.Types.ObjectId, ref: "Artisan" },
  due_date: { type: Date },
  status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  completion_date: { type: Date },
});

// Middleware to update updated_at
SubTaskSchema.pre("save", function (next) {
  this.updated_at = new Date();
  next();
});

const SubTask: Model<ISubTask> = mongoose.model<ISubTask>("SubTask", SubTaskSchema);
export default SubTask;