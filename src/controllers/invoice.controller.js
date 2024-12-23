import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Invoice } from "../models/invoice.model.js";
import { Company } from "../models/company.model.js";

export const createInvoice = asyncHandler(async (req, res) => {
  req.body.user = req.user?._id;

  const company = await Company.findOne({ user: req.user?._id });

  if (!company) {
    throw new ApiError(404, "Company not found");
  }

  req.body.company = company?._id;
  const invoice = await Invoice.create(req.body);

  if (!invoice) {
    throw new ApiError(500, "Something went wrong while creating new invoice");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, { invoice }, "Invoice created successfully"));
});

export const getInvoice = asyncHandler(async (req, res) => {
  // So this is the way by which we can get the invoices and the client and the items
  const invoice = await Invoice.find()
    .populate("company")
    .populate("client", "name email phone")
    .populate("items", "description quantity price unit")
    .sort("date");

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { data: invoice },
        "Invoice data fetched successfully"
      )
    );
});

export const deleteInvoice = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const invoice = await Invoice.findByIdAndDelete(id);

  if (!invoice) {
    throw new ApiError(404, "Invoice not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Invoice deleted successfully"));
});

export const updateInvoice = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const invoice = await Invoice.findById(id);

  if (!invoice) {
    throw new ApiError(404, "Invoice not found");
  }

  const updatedInvoice = await Invoice.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, { updatedInvoice }, "Invoice updated successfully")
    );
});
