import mongoose from "mongoose";
/**
 * Handles filtering, sorting, selecting fields, and populating references for any Mongoose model.
 *
 * @param {mongoose.Model} model - The Mongoose model to query.
 * @param {Object} queryParams - The query parameters from the client side.
 * @returns {Promise<Array>} - The result of the query.
 */
const queryDatabase = async (model, query, queryParams) => {
  const filter = queryParams.filter;

  if (queryParams.filter) {
    console.log(filter);
    query = query.where(filter);
  }

  if (queryParams.fields) {
    query = query.select(queryParams.fields.split(",").join(" "));
  }

  if (queryParams.populate) {
    if (queryParams.populate === "*") {
      // If populate is "*", populate all fields in the model
      const allFields = Object.keys(model.schema.paths); // Get all paths/fields in the model schema
      allFields.forEach((field) => {
        // Exclude internal fields like `__v`, `_id`, and any non-populatable fields
        if (
          field !== "__v" &&
          field !== "_id" &&
          model.schema.paths[field].instance === "ObjectId"
        ) {
          query = query.populate(field); // Populate the field
        }
      });
    } else {
      // Handle comma-separated populate fields
      const populateFields = queryParams.populate.split(",");
      populateFields.forEach((field) => {
        query = query.populate(field);
      });
    }
  }

  if (queryParams.sort) {
    query = query.sort(queryParams.sort);
  }

  // Pagination if we are testing this in postman use like this
  // pagintion: { page: 1, limit: 2 }
  const page = queryParams.pagination.page || 1;
  const limit = queryParams.pagination.limit || 10;
  const skip = (page - 1) * limit;

  query = query.skip(skip).limit(limit);

  const results = await query.exec();
  const total = await model.countDocuments(filter || {});

  return {
    pagination: {
      total,
      page,
      pageSize: limit,
      pages: Math.ceil(total / limit),
    },
    results,
  };
};

export default queryDatabase;
