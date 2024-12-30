import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { handleValidationErrors } from "../utils/validators/handleValidation.js";
import { validateItem, validateItemUpdate } from "../utils/validators/item.js";
import {
  createItem,
  getItems,
  getItemsById,
  updateItem,
  deleteItem,
} from "../controllers/item.controller.js";

const router = Router();
router.use(verifyJwt);

router
  .route("/")
  .post(validateItem, handleValidationErrors, createItem)
  .get(getItems);

router
  .route("/:id")
  .get(getItemsById)
  .put(validateItemUpdate, handleValidationErrors, updateItem)
  .delete(deleteItem);

export default router;
