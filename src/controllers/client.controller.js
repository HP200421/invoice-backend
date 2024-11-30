import { Client } from "../models/client.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createClient = asyncHandler(async (req, res) => {
  req.body.user = req.user?._id;
  const client = await Client.create(req.body);

  if (!client) {
    throw new ApiError(500, "Something went wrong while creating new client");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, { client }, "Client created successfully"));
});

export const updateClient = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const client = await Client.findById(id);

  if (!client) {
    throw new ApiError(404, "Client not found");
  }

  const updatedClient = await Client.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, { updatedClient }, "Client updated successfully")
    );
});

export const getClients = asyncHandler(async (req, res) => {
  const client = await Client.find().sort("name");

  return res
    .status(200)
    .json(new ApiResponse(200, { client }, "Client data fetched successfully"));
});

export const deleteClient = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const client = await Client.findByIdAndDelete(id);

  if (!client) {
    throw new ApiError(404, "Client not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Client deleted successfully"));
});
