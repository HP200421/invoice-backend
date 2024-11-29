import mongoose, { Schema } from "mongoose";

export const itemTypeEnum = ["Product", "Service"];

const itemSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
      enum: itemTypeEnum,
      default: "Service",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      default: 0,
    },
    hsn: {
      type: String,
    },
    sku: {
      type: String,
    },
    unit: {
      type: Schema.Types.ObjectId,
      ref: "Unit",
    },
  },
  { timestamps: true }
);

export const Item = mongoose.model("Item", itemSchema);
