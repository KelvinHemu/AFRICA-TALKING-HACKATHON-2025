import mongoose, { Schema, Document, Model } from "mongoose";

export interface IArtisan extends Document {
  name: string;
  skill: string;
  phone: string;
  location?: string;
  created_at?: Date;
}

const ArtisanSchema: Schema<IArtisan> = new Schema({
  name: { type: String, required: true },
  skill: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  location: { type: String },
  created_at: { type: Date, default: Date.now },
});

const Artisan: Model<IArtisan> = mongoose.model<IArtisan>("Artisan", ArtisanSchema);
export default Artisan;