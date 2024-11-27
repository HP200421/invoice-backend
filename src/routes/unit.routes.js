import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import {
  getUnits,
  createUnit,
  updateUnit,
  deleteUnit,
} from "../controllers/unit.controller.js";
import { validateUnit, updateUnitId } from "../utils/validators/unit.js";
import { handleValidationErrors } from "../utils/validators/handleValidation.js";

const router = Router();
router.use(verifyJwt);

router.route("/").post(validateUnit, handleValidationErrors, createUnit);
router.route("/getUnit").get(getUnits);
router
  .route("/:id")
  .put(updateUnitId, handleValidationErrors, updateUnit)
  .delete(deleteUnit);

export default router;
