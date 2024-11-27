import { asyncHandler } from "../utils/asyncHandler.js";
import { Country } from "../models/country.model.js";
import { City } from "../models/city.model.js";
import { State } from "../models/state.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getCountry = asyncHandler(async (req, res) => {
  const country = await Country.find().sort("name");
  return res
    .status(200)
    .json(
      new ApiResponse(200, { country }, "Country data fetched sucessfully")
    );
});

export const getState = asyncHandler(async (req, res) => {
  const { countryId } = req.params;

  const state = await State.find({
    country: countryId,
  }).sort("name");

  return res
    .status(200)
    .json(new ApiResponse(200, { state }, "State data fetched successfully"));
});

export const getCity = asyncHandler(async (req, res) => {
  const { stateId } = req.params;

  const city = await City.find({
    state: stateId,
  }).sort("name");

  return res
    .status(200)
    .json(new ApiResponse(200, { city }, "City data fetched sucessfully"));
});
