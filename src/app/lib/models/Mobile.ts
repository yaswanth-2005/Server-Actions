import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMobile extends Document {
  title: string;
  model: string;
  price: string;
}

const MobileSchema: Schema<IMobile> = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    model: { type: String, required: true, unique: true },
    price: { type: String, required: true },
  },
  { timestamps: true }
);

const MobileModel: Model<IMobile> =
  mongoose.models.Mobile || mongoose.model("Mobile", MobileSchema);

export default MobileModel;
