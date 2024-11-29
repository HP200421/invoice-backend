import { Router } from "express";
import {
  createCompany,
  getCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { handleValidationErrors } from "../utils/validators/handleValidation.js";
import {
  validateCompany,
  validateUpdateCompany,
} from "../utils/validators/company.js";

const router = Router();
router.use(verifyJwt);

router
  .route("/")
  .post(
    upload.fields([{ name: "logo", maxCount: 1 }]),
    validateCompany,
    handleValidationErrors,
    createCompany
  )
  .get(getCompany);

router
  .route("/:id")
  .put(
    upload.fields([{ name: "logo", maxCount: 1 }]),
    validateUpdateCompany,
    handleValidationErrors,
    updateCompany
  );
export default router;
