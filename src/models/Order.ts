import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  items: Array<{
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    customData: {
      text: string;
      font: string;
      color: string;
      image?: string;
    };
  }>;
  total: number;
  paymentStatus: "pending" | "paid" | "failed";
  deliveryStatus: "processing" | "shipped" | "delivered";
  customerInfo: {
    name: string;
    email: string;
    address: string;
  };
}

const OrderSchema: Schema = new Schema({
  items: [{
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    customData: {
      text: { type: String, required: true },
      font: { type: String, required: true },
      color: { type: String, required: true },
      image: { type: String },
    },
  }],
  total: { type: Number, required: true },
  paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
  deliveryStatus: { type: String, enum: ["processing", "shipped", "delivered"], default: "processing" },
  customerInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
  },
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
