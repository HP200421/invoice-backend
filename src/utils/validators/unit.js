import { check, param } from "express-validator";
import sanitizeUsefulInput from "./sanitizeInput.js";
import { Unit } from "../../models/unit.model.js";

export const validateUnit = [
  check("name").trim().escape().notEmpty().withMessage("Unit name is required"),

  check("code").trim().escape().optional(),

  (req, res, next) => {
    sanitizeUsefulInput(req, [], Unit);
    next();
  },
];

export const updateUnitId = [
  param("id").isMongoId().withMessage("Invalid unit Id"),
  validateUnit,
];
