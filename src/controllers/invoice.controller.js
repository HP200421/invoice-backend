import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Invoice } from "../models/invoice.model.js";
import { Company } from "../models/company.model.js";
import { Client } from "../models/client.model.js";
import { Item } from "../models/item.model.js";
import queryDatabase from "../utils/fetchData.js";
import fs from "fs/promises";
import path from "path";
import { generateInvoicePDF } from "../generateInvoice.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// export const createInvoice = asyncHandler(async (req, res) => {
//   req.body.user = req.user?._id;

//   const company = await Company.findOne({ user: req.user?._id });

//   if (!company) {
//     throw new ApiError(404, "Company not found");
//   }

//   req.body.company = company?._id;
//   const invoice = await Invoice.create(req.body);

//   if (!invoice) {
//     throw new ApiError(500, "Something went wrong while creating new invoice");
//   }

//   return res
//     .status(201)
//     .json(new ApiResponse(201, { invoice }, "Invoice created successfully"));
// });

function numberToWords(num) {
  const single = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const double = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const formatTenth = (digit, prev) => {
    return 0 == digit ? "" : " " + (1 == digit ? double[prev] : tens[digit]);
  };
  const formatOther = (digit, next, denom) => {
    return (
      (0 != digit && 1 != next ? " " + single[digit] : "") +
      (0 != next || digit > 0 ? " " + denom : "")
    );
  };
  let res = "";
  let index = 0;
  let digit = 0;
  let next = 0;
  let words = [];

  if (((num += ""), isNaN(parseInt(num)))) {
    res = "";
  } else if (parseInt(num) > 0 && num.length <= 10) {
    for (index = num.length - 1; index >= 0; index--) {
      digit = num[index] - 0;
      next = index > 0 ? num[index - 1] - 0 : 0;
      switch (num.length - index - 1) {
        case 0:
          words.push(formatOther(digit, next, ""));
          break;
        case 1:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 2:
          words.push(
            0 != digit
              ? " " +
                  single[digit] +
                  " Hundred" +
                  (0 != num[index + 1] && 0 != num[index + 2] ? " and" : "")
              : ""
          );
          break;
        case 3:
          words.push(formatOther(digit, next, "Thousand"));
          break;
        case 4:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 5:
          words.push(formatOther(digit, next, "Lakh"));
          break;
        case 6:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 7:
          words.push(formatOther(digit, next, "Crore"));
          break;
        case 8:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 9:
          words.push(
            0 != digit
              ? " " +
                  single[digit] +
                  " Hundred" +
                  (0 != num[index + 1] || 0 != num[index + 2]
                    ? " and"
                    : " Crore")
              : ""
          );
      }
    }
    res = words.reverse().join("");
  } else res = "";

  return res.trim();
}

export const createInvoice = asyncHandler(async (req, res) => {
  const { user, body } = req;

  // Fetch company and client data
  const company = await Company.findOne({ user: req.user?._id });
  const client = await Client.findById(body.client).populate("contactPerson"); // Assuming `client` ID is in body

  if (!company) {
    throw new ApiError(404, "Company not found");
  }

  if (!client) {
    throw new ApiError(404, "Client not found");
  }

  // Fetch items and populate unit field
  const items = await Item.find({ _id: { $in: body.items } }).populate(
    "unit",
    "name"
  );

  // Prepare invoice data (including req.body)
  const invoiceData = {
    ...body, // Include all fields from the body (invoice details)
    company: company, // Add company details
    client: client, // Add client details
    items: items.map((item) => ({
      ...item.toObject(), // Convert Mongoose document to plain object
      unit: item.unit.name, // Ensure unit data is accessible as a string
    })),
  };

  // console.log("Invoice data:", invoiceData);

  // Generate PDF
  const pdfBuffer = await generateInvoicePDF(invoiceData);

  // Ensure the 'output' directory exists
  const outputDir = path.join(__dirname, "..", "..", "public", "temp");
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    console.error("Error creating directory:", error);
    throw new ApiError(500, "Error creating directory for PDF");
  }

  // Set the file path and write the PDF
  const filePath = path.join(outputDir, `invoice-${Date.now()}.pdf`);
  try {
    await fs.writeFile(filePath, pdfBuffer);
    console.log("Invoice created successfully");
  } catch (error) {
    console.error("Error saving PDF:", error);
    throw new ApiError(500, "Error saving invoice PDF");
  }

  res
    .status(201)
    .json(new ApiResponse(201, { filePath }, "Invoice created successfully"));
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
