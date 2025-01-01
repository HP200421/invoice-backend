import { asyncHandler } from "../utils/asyncHandler.js";
import { Company } from "../models/company.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadCloudinary } from "../utils/cloudinary.js";

export const createCompany = asyncHandler(async (req, res) => {
  req.body.user = req.user?._id;

  let logoLocalPath;

  if (req.files && Array.isArray(req.files.logo) && req.files.logo.length > 0) {
    logoLocalPath = req.files.logo[0].path;
  }

  const logo = await uploadCloudinary(logoLocalPath);

  if (logo) {
    req.body.logo = logo?.url || "";
  }

  const company = await Company.create(req.body);

  if (!company) {
    throw new ApiError(500, "Something went wrong while creating new company");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, { company }, "Company created successfully"));
});

export const updateCompany = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const company = await Company.findById(id);

  if (!company) {
    throw new ApiError(404, "Company not found");
  }

  let logoLocalPath;

  if (req.files && Array.isArray(req.files.logo) && req.files.logo.length > 0) {
    logoLocalPath = req.files.logo[0].path;
  }

  const logo = await uploadCloudinary(logoLocalPath);

  const updatedData = {
    ...req.body,
    logo: logo?.url || company?.logo,
  };

  const data = await Company.findByIdAndUpdate(id, updatedData, {
    new: true,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, { data }, "Company updated successfully"));
});

export const getCompany = asyncHandler(async (req, res) => {
  const company = await Company.find({ user: req.user._id });

  if (!company) {
    throw new ApiError(404, "Company not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { data: company },
        "Company data fetched successfully"
      )
    );
});
