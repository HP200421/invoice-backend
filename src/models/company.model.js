import mongoose, { Schema } from "mongoose";

export const taxationTypeEnum = ["GST", "Non-GST", "Composition Scheme"];

export const bankSchema = new Schema({
  accountHolderName: {
    type: String,
  },
  accountNumber: {
    type: String,
  },
  ifscCode: {
    type: String,
  },
  bankName: {
    type: String,
  },
  branch: {
    type: String,
  },
  upiId: {
    type: String,
  },
});

const companySchema = new Schema(
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
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    gstNumber: {
      type: String,
    },
    logo: {
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
    website: {
      type: String,
    },
    panNumber: {
      type: String,
    },
    cgst: {
      type: Number,
    },
    sgst: {
      type: Number,
    },
    igst: {
      type: Number,
    },
    taxationType: {
      type: String,
      enum: taxationTypeEnum,
    },
    bank: {
      type: bankSchema,
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
