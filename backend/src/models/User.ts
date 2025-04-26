import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  username: string;
  password: string;
  role: "project_manager" | "engineer";
  email?: string;
  created_at?: Date;
  last_login?: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true, unique: true, minlength: 3 },
  password: { type: String, required: true, minlength: 8 },
  role: { type: String, enum: ["project_manager", "engineer"], required: true },
  email: { type: String, unique: true, sparse: true },
  created_at: { type: Date, default: Date.now },
  last_login: { type: Date },
});

UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = function (candidate: string) {
  return bcrypt.compare(candidate, this.password);
};

// TODO: Add password hashing middleware here

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
export default User;