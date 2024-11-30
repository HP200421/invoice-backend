import mongoose, { Schema } from "mongoose";

const invoiceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Paid", "Overdue"],
      default: "Pending",
    },
    invoiceNumber: {
      type: String,
    },
    issueDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
    },
    terms: {
      type: String,
    },
    note: {
      type: String,
    },
    totolAmount: {
      type: Number,
      default: 0,
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
    pdfUrl: {
      type: String,
    },
    taxAmount: {
      type: Number,
      default: 0,
    },
    discountAmount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Invoice = mongoose.model("Invoice", invoiceSchema);
