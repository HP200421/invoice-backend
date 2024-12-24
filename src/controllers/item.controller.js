import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Item } from "../models/item.model.js";
import queryDatabase from "../utils/fetchData.js";

export const createItem = asyncHandler(async (req, res) => {
  req.body.user = req.user?._id;

  const item = await Item.create(req.body);

  if (!item) {
    throw new ApiError(500, "Something went wrong while creating new item");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, { item }, "Item created successfully"));
});

export const getItems = asyncHandler(async (req, res) => {
  const queryParams = req.query;

  const { pagination, results } = await queryDatabase(
    Item,
    Item.find({ user: req.user?._id }),
    queryParams
  );

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { data: results, pagination },
        "Item data fetched successfully"
      )
    );
});

export const deleteItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const item = await Item.findByIdAndDelete(id);

  if (!item) {
    throw new ApiError(404, "Item not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Item deleted successfully"));
});

export const updateItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const item = await Item.findById(id);

  if (!item) {
    throw new ApiError(404, "Item not found");
  }

  const updatedItem = await Item.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, { updatedItem }, "Item updated successfully"));
});
