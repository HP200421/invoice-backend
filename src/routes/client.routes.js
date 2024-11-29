import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { handleValidationErrors } from "../utils/validators/handleValidation.js";
import {
  validateClient,
  validateClientUpdate,
} from "../utils/validators/client.js";
import {
  createClient,
  getClients,
  deleteClient,
  updateClient,
} from "../controllers/client.controller.js";

const router = Router();
router.use(verifyJwt);

router
  .route("/")
  .post(validateClient, handleValidationErrors, createClient)
  .get(getClients);

router
  .route("/:id")
  .delete(deleteClient)
  .put(validateClientUpdate, handleValidationErrors, updateClient);

export default router;
