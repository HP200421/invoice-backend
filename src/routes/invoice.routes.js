import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { handleValidationErrors } from "../utils/validators/handleValidation.js";
import {
  validateInvoice,
  validateInvoiceUpdate,
} from "../utils/validators/invoice.js";
import {
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} from "../controllers/invoice.controller.js";

const router = Router();
router.use(verifyJwt);

router
  .route("/")
  .post(validateInvoice, handleValidationErrors, createInvoice)
  .get(getInvoice);

router
  .route("/:id")
  .put(validateInvoiceUpdate, handleValidationErrors, updateInvoice)
  .delete(deleteInvoice);

export default router;
