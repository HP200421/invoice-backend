import mongoose, { Schema } from "mongoose";

const unitSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Unit = mongoose.model("Unit", unitSchema);
