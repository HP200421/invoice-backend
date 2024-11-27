import { Unit } from "../models/unit.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

export const createUnit = asyncHandler(async (req, res) => {
  const { name, code } = req.body;

  const unitExists = await Unit.findOne({ name });

  if (unitExists) {
    throw new ApiError(409, "Unit with same name already exists");
  }

  const unit = await Unit.create({
    name,
    code,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, { unit }, "Unit created successfully"));
});

export const getUnits = asyncHandler(async (req, res) => {
  const unit = await Unit.find().sort("name");

  return res
    .status(200)
    .json(new ApiResponse(200, { unit }, "Unit data fetched successfully"));
});

export const updateUnit = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const unit = await Unit.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!unit) {
    throw new ApiError(404, "Unit not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { unit }, "Unit updated successfully"));
});

export const deleteUnit = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const unit = await Unit.findByIdAndDelete(id);

  if (!unit) {
    throw new ApiError(404, "Unit not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(204, {}, "Unit deleted successfully"));
});
