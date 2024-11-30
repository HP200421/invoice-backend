import { check, param } from "express-validator";

export const validateInvoice = [
  check("client").isMongoId().withMessage("Invalid client ID"),

  check("status")
    .optional()
    .isIn(["Pending", "Paid", "Overdue"])
    .withMessage('Status must be one of "Pending", "Paid", or "Overdue"'),

  check("invoiceNumber")
    .optional()
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Invoice number cannot be empty"),

  check("issueDate")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("Invalid issue date"),

  check("dueDate")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("Invalid due date")
    .custom((value, { req }) => {
      if (
        req.body.issueDate &&
        new Date(value) < new Date(req.body.issueDate)
      ) {
        throw new Error("Due date must be after issue date");
      }
      return true;
    }),

  check("terms").optional().isString().trim().escape(),

  check("note").optional().isString().trim().escape(),

  check("totolAmount")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Total amount must be a positive number"),

  check("items")
    .optional()
    .isArray()
    .withMessage("Items must be an array")
    .custom((items) => {
      if (items.some((item) => typeof item !== "string")) {
        throw new Error("Each item must be a valid ObjectId");
      }
      return true;
    }),

  check("pdfUrl")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("Invalid PDF URL"),

  check("taxAmount")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Tax amount must be a positive number"),

  check("discountAmount")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Discount amount must be a positive number"),
];

export const validateInvoiceUpdate = [
  param("id").isMongoId().withMessage("Invalid invoice ID"),
  validateInvoice,
];
