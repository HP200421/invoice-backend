import mongoose, { Schema } from "mongoose";

const stateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: "Country",
    requied: true,
  },
});

export const State = mongoose.model("State", stateSchema);
