import mongoose, { Schema } from "mongoose";

export const taxationTypeEnum = ["GST", "Non-GST", "Composition Scheme"];
export const companyTypeEnum = [
  "Public",
  "Private",
  "Government",
  "Non-Profit",
  "Other",
];

export const contactPersonSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const clientSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    countryId: {
      type: Schema.Types.ObjectId,
      ref: "Country",
    },
    stateId: {
      type: Schema.Types.ObjectId,
      ref: "State",
    },
    cityId: {
      type: Schema.Types.ObjectId,
      ref: "City",
    },
    address: {
      type: String,
    },
    pincode: {
      type: String,
    },
    openingBalance: {
      type: Number,
      default: 0,
    },
    note: {
      type: String,
    },
    website: {
      type: String,
    },
    taxationType: {
      type: String,
      enum: taxationTypeEnum,
    },
    companyType: {
      type: String,
      enum: companyTypeEnum,
    },
    gstNumber: {
      type: String,
    },
    panNumber: {
      type: String,
    },
    contactPerson: {
      type: [contactPersonSchema],
    },
  },
  { timestamps: true }
);

export const Client = mongoose.model("Client", clientSchema);
