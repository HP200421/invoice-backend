import { param } from "express-validator";

export const countryIdValidation = [
  param("countryId").isMongoId().withMessage("Invalid country Id"),
];

export const stateIdValidation = [
  param("stateId").isMongoId().withMessage("Invalid state Id"),
];
