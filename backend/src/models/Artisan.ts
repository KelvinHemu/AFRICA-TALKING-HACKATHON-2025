import mongoose, { Schema, Document, Model } from "mongoose";

export interface IArtisan extends Document {
  id: string;
  name: string;
  phone: string;
  specialization?: string;
  availability?: boolean;
  rating?: number;
  joined_date?: Date;
}

const ArtisanSchema: Schema<IArtisan> = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  specialization: { type: String },
  availability: { type: Boolean, default: true },
  rating: { type: Number, min: 0, max: 5 },
  joined_date: { type: Date, default: Date.now },
});

const Artisan: Model<IArtisan> = mongoose.model<IArtisan>("Artisan", ArtisanSchema);
export default Artisan; 