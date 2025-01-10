import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Invoice } from "../models/invoice.model.js";
import { Company } from "../models/company.model.js";
import { Client } from "../models/client.model.js";
import { Item } from "../models/item.model.js";
import queryDatabase from "../utils/fetchData.js";
import { generateInvoicePDF, calculateInvoice } from "../generateInvoice.js";
import { uploadCloudinary, deleteCloudinaryFile } from "../utils/cloudinary.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createInvoice = asyncHandler(async (req, res) => {
  const { body } = req;
  req.body.user = req.user?._id;

  const company = await Company.findOne({ user: req.user?._id });
  const client = await Client.findById(body.client).populate("contactPerson");

  if (!company) {
    throw new ApiError(404, "Company not found");
  }

  req.body.company = company?._id;

  if (!client) {
    throw new ApiError(404, "Client not found");
  }

  const items = await Item.find({
    _id: { $in: body.items },
  }).populate("unit", "name");

  const invoiceData = {
    ...body,
    company: company,
    client: client,
    items: items.map((item) => ({
      ...item.toObject(),
      unit: item?.unit?.name || "",
    })),
  };

  let result;
  try {
    result = calculateInvoice(invoiceData);
  } catch (error) {
    throw new ApiError(500, error.message);
  }

  const invoiceDataFinal = {
    ...invoiceData,
    ...result,
  };

  const pdfBuffer = await generateInvoicePDF(invoiceDataFinal);

  const outputDir = path.join(__dirname, "..", "..", "public", "temp");
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    console.error("Error creating directory:", error);
    throw new ApiError(500, "Error creating directory for PDF");
  }

  const filePath = path.join(outputDir, `invoice-${Date.now()}.pdf`);
  try {
    await fs.writeFile(filePath, pdfBuffer);
    console.log("Invoice created successfully");
  } catch (error) {
    console.error("Error saving PDF:", error);
    throw new ApiError(500, "Error saving invoice PDF");
  }

  const uploadResponse = await uploadCloudinary(filePath);

  if (!uploadResponse) {
    throw new ApiError(500, "Error uploading invoice PDF");
  } else {
    req.body.pdfUrl = uploadResponse?.url;
    req.body.pdfPublicId = uploadResponse?.public_id;
  }

  const invoice = await Invoice.create(req.body);

  if (!invoice) {
    throw new ApiError(500, "Something went wrong while creating new invoice");
  }

  res
    .status(201)
    .json(
      new ApiResponse(201, { data: invoice }, "Invoice created successfully")
    );
});

export const getInvoice = asyncHandler(async (req, res) => {
  const queryParams = req.query;
  const { pagination, results } = await queryDatabase(
    Invoice,
    Invoice.find({ user: req.user?._id }),
    queryParams
  );

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { data: results, pagination },
        "Invoice data fetched successfully"
      )
    );
});

export const deleteInvoice = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const invoice = await Invoice.findById(id);

  if (!invoice) {
    throw new ApiError(404, "Invoice not found");
  }

  const pdfPublicId = invoice?.pdfPublicId;

  const result = await deleteCloudinaryFile(pdfPublicId);

  if (!invoice) {
    throw new ApiError(404, "Invoice not found");
  }

  const deletedInvoice = await Invoice.findByIdAndDelete(id);

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

  if (invoice?.pdfPublicId) {
    const deleteResponse = await deleteCloudinaryFile(invoice.pdfPublicId);

    if (!deleteResponse || deleteResponse.result !== "ok") {
      throw new ApiError(500, "Error deleting old invoice PDF from Cloudinary");
    }
  }

  const { body } = req;

  const company = await Company.findOne({ user: req.user?._id });
  const client = await Client.findById(body.client).populate("contactPerson");

  if (!company) {
    throw new ApiError(404, "Company not found");
  }

  if (!client) {
    throw new ApiError(404, "Client not found");
  }

  const items = await Item.find({
    _id: { $in: body.items },
  }).populate("unit", "name");

  const invoiceData = {
    ...body,
    company: company,
    client: client,
    items: items.map((item) => ({
      ...item.toObject(),
      unit: item?.unit?.name || "",
    })),
  };

  let result;
  try {
    result = calculateInvoice(invoiceData);
  } catch (error) {
    throw new ApiError(500, error.message);
  }

  const invoiceDataFinal = {
    ...invoiceData,
    ...result,
  };

  const pdfBuffer = await generateInvoicePDF(invoiceDataFinal);

  const outputDir = path.join(__dirname, "..", "..", "public", "temp");
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    console.error("Error creating directory:", error);
    throw new ApiError(500, "Error creating directory for PDF");
  }

  const filePath = path.join(outputDir, `invoice-${Date.now()}.pdf`);
  try {
    await fs.writeFile(filePath, pdfBuffer);
    console.log("Invoice created successfully");
  } catch (error) {
    console.error("Error saving PDF:", error);
    throw new ApiError(500, "Error saving invoice PDF");
  }

  const uploadResponse = await uploadCloudinary(filePath);

  if (!uploadResponse) {
    throw new ApiError(500, "Error uploading invoice PDF");
  } else {
    req.body.pdfUrl = uploadResponse?.url;
    req.body.pdfPublicId = uploadResponse?.public_id;
  }

  const updatedInvoice = await Invoice.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedInvoice) {
    throw new ApiError(500, "Something went wrong while updating invoice");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, { updatedInvoice }, "Invoice updated successfully")
    );
});
