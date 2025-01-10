import { check, param } from "express-validator";
import {
  taxationTypeEnum,
  companyTypeEnum,
} from "../../models/client.model.js";

export const validateClient = [
  check("name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Client name is required"),

  check("phone")
    .optional()
    .isString()
    .matches(/^\d{10}$/)
    .withMessage("Phone number must be exactly 10 digits"),

  check("email").optional().isEmail().withMessage("Invalid email format"),

  check("countryId").optional().isMongoId().withMessage("Invalid country ID"),
  check("stateId").optional().isMongoId().withMessage("Invalid state ID"),
  check("cityId").optional().isMongoId().withMessage("Invalid city ID"),

  check("address")
    .optional()
    .isString()
    .trim()
    .escape()
    .withMessage("Address must be a string"),

  check("pincode")
    .optional()
    .isNumeric()
    .withMessage("Pincode must be a number"),

  check("note").optional().isString().withMessage("Note must be a string"),

  check("website").optional().isURL().withMessage("Invalid website URL"),

  check("taxationType")
    .optional()
    .isIn(taxationTypeEnum)
    .withMessage(
      `Taxation type must be one of the following: ${taxationTypeEnum.join(", ")}`
    ),

  check("companyType")
    .optional()
    .isIn(companyTypeEnum)
    .withMessage(
      `Company type must be one of the following: ${companyTypeEnum.join(", ")}`
    ),

  check("gstNumber")
    .optional()
    .matches(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[1-9A-Z]{1}Z\d{1}$/)
    .withMessage("Invalid GST number format (15 characters, alphanumeric)"),

  check("panNumber")
    .optional()
    .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)
    .withMessage("Invalid PAN number format"),

  // check("contactPerson")
  //   .isArray({ min: 1 })
  //   .withMessage("Contact persons must be an array with at least one person"),

  check("contactPerson.*.name")
    .optional()
    .isString()
    .notEmpty()
    .withMessage("Contact person name must be a valid string"),

  check("contactPerson.*.email")
    .optional()
    .isEmail()
    .withMessage("Invalid contact person email format"),

  check("contactPerson.*.phone")
    .optional()
    .matches(/^\d{10}$/)
    .withMessage("Contact person phone must be exactly 10 digits"),
];

export const validateClientUpdate = [
  param("id").isMongoId().withMessage("Invalid client Id"),
  validateClient,
];
