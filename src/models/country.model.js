import mongoose, { Schema } from "mongoose";

const countrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
});

export const Country = mongoose.model("Country", countrySchema);
