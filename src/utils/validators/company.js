import { check, param } from "express-validator";
import { taxationTypeEnum } from "../../models/company.model.js";

export const validateCompany = [
  check("name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Company name is required"),

  check("email").optional().isEmail().withMessage("Invalid email format"),

  check("phone")
    .optional()
    .isString()
    .matches(/^\d{10}$/)
    .withMessage("Phone number must be exactly 10 digits"),

  check("gstNumber")
    .optional()
    .matches(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[1-9A-Z]{1}Z\d{1}$/)
    .withMessage("Invalid GST number format (15 characters, alphanumeric)"),

  check("logo").optional().isURL().withMessage("Logo must be a valid URL"),

  check("countryId").optional().isMongoId().withMessage("Invalid country ID"),
  check("stateId").optional().isMongoId().withMessage("Invalid state ID"),
  check("cityId").optional().isMongoId().withMessage("Invalid city ID"),

  check("address").optional().isString().trim().escape(),

  check("pincode")
    .optional()
    .isNumeric()
    .withMessage("Pincode must be a number"),

  check("website").optional().isURL().withMessage("Invalid website URL"),

  check("panNumber")
    .optional()
    .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)
    .withMessage("Invalid PAN number format"),

  check("cgst")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("CGST must be a positive number"),
  check("sgst")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("SGST must be a positive number"),
  check("igst")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("IGST must be a positive number"),

  check("taxationType")
    .optional()
    .isIn(taxationTypeEnum)
    .withMessage(
      `Taxation type must be one of the following: ${taxationTypeEnum.join(", ")}`
    ),

  check("bank.accountHolderName")
    .optional()
    .isString()
    .withMessage("Account holder name must be a string"),

  check("bank.accountNumber")
    .optional()
    .isNumeric()
    .withMessage("Account number must contain only numbers")
    .isLength({ min: 9, max: 18 })
    .withMessage("Account number must be between 9 and 18 digits"),

  check("bank.ifscCode")
    .optional()
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/)
    .withMessage("Invalid IFSC code format"),

  check("bank.bankName")
    .optional()
    .isString()
    .withMessage("Bank name must be a string"),

  check("bank.branch")
    .optional()
    .isString()
    .withMessage("Branch name must be a string"),

  check("bank.upiId").optional().isString().withMessage("Invalid UPI ID"),
];

export const validateUpdateCompany = [
  param("id").isMongoId().withMessage("Invalid company ID"),
  validateCompany,
];
