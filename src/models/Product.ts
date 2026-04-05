import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  basePrice: number;
  category: string;
  description: string;
  image: string;
  color: string;
  materials: string[];
  customizableOptions: {
    hasText: boolean;
    hasFontPicker: boolean;
    hasColorPicker: boolean;
    hasImageUpload: boolean;
  };
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  basePrice: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  color: { type: String, required: true },
  materials: [{ type: String }],
  customizableOptions: {
    hasText: { type: Boolean, default: true },
    hasFontPicker: { type: Boolean, default: true },
    hasColorPicker: { type: Boolean, default: true },
    hasImageUpload: { type: Boolean, default: false },
  },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
