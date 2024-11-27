import { Router } from "express";
import {
  getCountry,
  getState,
  getCity,
} from "../controllers/place.controller.js";
import { handleValidationErrors } from "../utils/validators/handleValidation.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import {
  countryIdValidation,
  stateIdValidation,
} from "../utils/validators/countryStateValidate.js";

const router = Router();

router.route("/country").get(verifyJwt, getCountry);

router
  .route("/state/:countryId")
  .get(verifyJwt, countryIdValidation, handleValidationErrors, getState);

router
  .route("/city/:stateId")
  .get(verifyJwt, stateIdValidation, handleValidationErrors, getCity);

// router.route("/setData").post(setData);
export default router;
