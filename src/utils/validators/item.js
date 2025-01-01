import { check, param } from "express-validator";
import { itemTypeEnum } from "../../models/item.model.js";

export const validateItem = [
  check("name").trim().escape().notEmpty().withMessage("Item name is required"),

  check("description").optional().isString().withMessage("Invalid description"),

  check("type")
    .optional()
    .isIn(itemTypeEnum)
    .withMessage(
      `Type must be one of the following: ${itemTypeEnum.join(", ")}`
    ),

  check("quantity")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Quantity must be a positive integer"),

  check("price")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number or zero"),

  check("hsn")
    .optional()
    .isString()
    .matches(/^[a-zA-Z0-9]*$/)
    .withMessage("HSN must be alphanumeric"),

  check("sku")
    .optional()
    .isString()
    .matches(/^[a-zA-Z0-9]*$/)
    .withMessage("SKU must be alphanumeric"),

  check("sku")
    .optional()
    .isString()
    .matches(/^[a-zA-Z0-9]*$/)
    .withMessage("SKU must be alphanumeric"),

  check("unit").optional().isMongoId().withMessage("Invalid unit ID"),
];

export const validateItemUpdate = [
  param("id").isMongoId().withMessage("Invalid item Id"),
  validateItem,
];
