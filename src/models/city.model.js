import mongoose, { Schema } from "mongoose";

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: Schema.Types.ObjectId,
    ref: "State",
  },
});

export const City = mongoose.model("City", citySchema);
